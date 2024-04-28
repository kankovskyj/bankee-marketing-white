"use client"

/*
    ? Map
*/
import { interestRateBuckets } from "../data/CalculatorData";

/*
    ? Hooks
*/
import { useMemo, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";



const useCalculate = (options?: { localStorage?: boolean }) => {
  const [interestBehavior, setInterestBehavior] = useState<0 | 1 | 2>(0);

  // Conditionally choose the hook based on the options
  const storageHook = options?.localStorage ? useLocalStorage : useState;

  const [values, setValues] = storageHook<Record<string, number>>(
    "calculatorApplicant",
    {
      loanAmount: 2_500_000,
      repaymentDuration: 6,
      colleteralPropertyValue: 4,
      ltv: 70
    }
  );

  const [calculatorApplicantInteracted, setCalculatorApplicantInteracted] = storageHook<boolean>("calculatorApplicantInteracted", false);

  const handleValueChange = (id: string, value: number) => {
    if (!calculatorApplicantInteracted) {
      setCalculatorApplicantInteracted(true);
    }

    setValues((prev) => {
      const updatedValues = { ...prev, [id]: value };
      return updatedValues;
    });
  };

  const ltv = useMemo(() => {
    const calculatedLTV = (values.loanAmount / (values.colleteralPropertyValue * 1_000_000)) * 100;
    return Math.min(calculatedLTV, 70).toFixed(2);
  }, [values.loanAmount, values.colleteralPropertyValue]);

  const ltvPeriod = useMemo(() => {
    const calculatedLTV = (values.loanAmount / (values.colleteralPropertyValue * 1_000_000)) * 100;
    return calculatedLTV
  }, [values.loanAmount, values.colleteralPropertyValue]);

  const period = useMemo(() => {
    if (values.repaymentDuration < 18) return 1;
    return 2;
  }, [values.repaymentDuration]);

  const interestRate = useMemo(() => {
    let ratesForAmount: Map<number, { "1": number; "2": number }> | undefined;

    // Use forEach method to find the correct bucket based on the loan amount
    interestRateBuckets.forEach((rates, range) => {
      if (values.loanAmount >= range[0] && values.loanAmount <= range[1]) {
        ratesForAmount = rates;
      }
    });

    // If we found the correct bucket, dynamically get the rate based on the closest LTV and period
    if (ratesForAmount) {
      // Dynamically determine the appropriate LTV key
      const availableLTVs: number[] = Array.from(ratesForAmount.keys()).sort(
        (a, b) => a - b
      );
      let ltvKey = availableLTVs[0]; // Default to the smallest LTV

      for (let i = 0; i < availableLTVs.length; i++) {
        if (
          ltvPeriod >= availableLTVs[i] &&
          (i === availableLTVs.length - 1 || ltvPeriod < availableLTVs[i + 1])
        ) {
          ltvKey = availableLTVs[i];
          break;
        }
      }

      const rateForLTV = ratesForAmount.get(ltvKey);

      if (rateForLTV) {
        if (!interestBehavior) {
          return rateForLTV[period];
        }

        return rateForLTV[interestBehavior];
      }
    }
    return null; // Return null if no rate is found
  }, [values.loanAmount, ltvPeriod, period, interestBehavior]);

  const monthlyPayment = useMemo(() => {
    if (!interestRate || !values.repaymentDuration) return 0;

    const interestPayment = (values.loanAmount * (interestRate / 100)) / 12;
    return interestPayment;
  }, [values.repaymentDuration, interestRate, values.loanAmount]);

  return {
    values,
    setValues,
    interestRate,
    monthlyPayment,
    ltv,
    handleValueChange
  }
}


export default useCalculate;