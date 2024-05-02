"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/*
  ? Hooks
*/
import useCalculate from "./hooks/useCalculate";
import { useIsClient } from "@uidotdev/usehooks";

/*
  ? Components
*/
import Calculator from "./components/Calculator";

/*
  ? UI
*/
import { Button } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { UnderlineText } from "@/components/ui/Underline";

/*
  ? Icons
*/
import { Icons } from "@/icons/Icons";

export default function CalculateLoan() {
  /*
    ? Calculate function
  */
  const {
    values,
    setValues,
    interestRate,
    monthlyPayment,
    ltv,
    handleValueChange,
  } = useCalculate({ localStorage: true });

  return (
    <section className="mt-12 lg:pt-16 pb-0 lg:pb-8" id="kalkulacka">
      <h2 className="mb-4 lg:mb-16 text-3xl lg:text-4xl font-bold lg:text-[46px] text-center mx-auto">
        Spočítejte to s námi!
      </h2>

      <div className="flex flex-col gap-2 lg:flex-row lg:gap-12 w-full lg:pl-40 mb-24">
        <Calculator
          title=""
          description=""
          values={values}
          handleValueChange={handleValueChange}
          rows={[
            {
              id: "loanAmount",
              defaultValue: values.colleteralPropertyValue * 1_000_000 * 0.7,
              step: 100000,
              min: 1_000_000,
              max: 20_000_000,
              labels: {
                min: "1 000 000 Kč",
                max: (20_000_000).toLocaleString("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }),
              },
              title: "Kolik si chci půjčit",
              valueFormatter: (value: number) =>
                value?.toLocaleString("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                  maximumFractionDigits: 0,
                }),
              onChange: (value: number) => {
                if (value > values.colleteralPropertyValue * 1_000_000 * 0.7) {
                  setValues((prev) => ({
                    ...prev,
                    loanAmount: value,
                    colleteralPropertyValue:
                      Math.round(value / 0.7 / 100000) * 0.1,
                  }));
                } else {
                  setValues((prev) => ({
                    ...prev,
                    loanAmount: value,
                  }));
                }
              },
            },
            {
              id: "repaymentDuration",
              defaultValue: 6,
              step: 6,
              min: 6,
              max: 24,
              labels: {
                min: `6 měsíců`,
                max: `24 měsíců`,
              },
              title: "Na jak dlouho",
              valueFormatter: (value: number) =>
                (value && `${value} měsíců`) || undefined,
            },
            {
              id: "colleteralPropertyValue",
              defaultValue: 2,
              step: 0.1,
              min: 2,
              max: 50,
              labels: {
                min: "2 000 000 Kč",
                max: "50 000 000 Kč",
              },
              title: "Hodnota nemovitosti",
              valueFormatter: (value: number) =>
                (value &&
                  `${(value * 1_000_000).toLocaleString("cs-CZ", {
                    style: "currency",
                    currency: "CZK",
                    maximumFractionDigits: 0,
                  })}`) ||
                undefined,
              onChange: (value: number) => {
                setValues((prev) => {
                  let newLoanAmount = prev.loanAmount;
                  if (value < prev.colleteralPropertyValue) {
                    let newLTV = (prev.loanAmount / (value * 1_000_000)) * 100;
                    if (newLTV > 70) {
                      while (newLTV > 70 && newLoanAmount > 0) {
                        newLoanAmount -= 100_000;
                        newLTV = (newLoanAmount / (value * 1_000_000)) * 100;
                      }
                      newLoanAmount = Math.max(newLoanAmount, 0);
                    }
                  }
                  return {
                    ...prev,
                    colleteralPropertyValue: value,
                    loanAmount: newLoanAmount,
                  };
                });
              },
            },
            {
              id: "ltv",
              defaultValue: values.ltv,
              step: 1,
              min: 0,
              max: 70,
              labels: {
                min: "0%",
                max: "70%",
              },
              title: "propertyLTV",
              description: "LTV",
              valueFormatter: (value: number) =>
                (value && `${ltv} %`) || undefined,
              onChange: (value: number) => {},
              hideSlider: true,
            },
          ]}
        />
        <div className="relative flex flex-col items-start">
          <div className="mt-8 flex flex-col items-start gap-2">
            <span className="block font-semibold">
              Jednorázový poplatek
              <div className="group relative inline-block transition-all ">
                <Popover>
                  <PopoverTrigger>
                    <Icons.info
                      width={18}
                      height={18}
                      className="inline-block"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="relative flex flex-col shadow-none border-0">
                    <span className="flex text-[15.7px] z-20">
                      Jednorázový poplatek za poskytnutí úvěru ve výši 3% z
                      celkové výše půjčených peněz bude stržen před zasláním
                      prostředků na váš firmení účet.
                    </span>

                    <Image
                      alt="chat"
                      src="/chatokno.png"
                      width={400}
                      height={300}
                      className="flex absolute bottom-[-48px] left-[-10px] z-10 object-contain"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </span>
            <div className="rounded-[14px] bg-[#F3F4F5] px-2 py-1 text-2xl font-extrabold max-2xl:text-xl">
              3%
            </div>
          </div>
          <div className="mt-4 flex flex-col items-start gap-2">
            <span className="block font-semibold">Úroková sazba </span>
            <div className="rounded-[14px] bg-[#F3F4F5] px-2 py-1 text-2xl font-extrabold max-2xl:text-xl">
              {`${interestRate} % p.a.`}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="mt-4 block font-semibold">
              Vaše měsíční splátka
            </span>
            <Popover>
              <PopoverTrigger>
                <Icons.info width={18} height={18} className="inline-block" />
              </PopoverTrigger>
              <PopoverContent className="relative flex flex-col shadow-none border-0">
                <span className="flex text-[15.7px] z-40">
                  Výše měsíční úrokové splátky je možné po žádosti částečně odložit ke splatnosti jistiny.
                </span>
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-2 rounded-[14px] bg-[#F3F4F5] px-2 py-1 text-3xl font-extrabold max-2xl:text-2xl">
            {monthlyPayment.toLocaleString("cs-CZ", {
              style: "currency",
              currency: "CZK",
              maximumFractionDigits: 0,
            })}
          </div>
          <div className="mb-12 mt-10 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                className="h-8 w-8 rounded-[4px] bg-[#F3F4F5] p-1 text-foreground"
                src="/c.svg"
                width={25}
                height={25}
                alt="check"
              />{" "}
              <span className="text-[0.94rem] font-semibold max-xl:text-sm">
                Proces žádosti
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="h-8 w-8 rounded-[4px] bg-[#F3F4F5] p-1 text-foreground"
                src="/2w.svg"
                width={25}
                height={25}
                alt="lupa"
              />{" "}
              <span className="text-[0.94rem] font-semibold max-xl:text-sm">
                Ihned schváleno
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Image
                className="h-8 w-8 rounded-[4px] bg-[#F3F4F5] p-1 text-foreground"
                src="/1l.svg"
                width={25}
                height={25}
                alt="lupa"
              />
              <span className="text-[0.94rem] font-semibold max-xl:text-sm">
                Transparentní cena
              </span>
            </div>
          </div>
          <div className="link-button relative">
            <Button
              variant="default"
              className="items-start rounded-full px-8 py-3 text-[19px]"
            >
              <Link href="/cs/sjednat-pujcku">Půjčit si nyní</Link>
            </Button>
          </div>
          <Image
            src="/arrow-calc.svg"
            alt="arrow right"
            width={220}
            height={125}
            className="absolute left-[9rem] bottom-[9rem]  z-10 h-40 w-[11rem] rotate-90 scale-125"
          />
        </div>
      </div>
    </section>
  );
}

/*
  ? useLocalStorage in CalculateLoan requires client-only hook
*/

const CalculateLoanWrapper = () => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <div className="mx-4 mt-8 lg:mx-28 lg:mt-16">
      <CalculateLoan />
    </div>
  );
};

export { CalculateLoanWrapper };
