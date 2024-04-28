"use client";

import React from "react";

/*
    ? Components
*/
import CalculatorRow from "./CalculatorRow";

/*
  ? UI
*/



/*
  ? Types
*/
import { RowCalculator } from "../types/CalculatorTypes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

type CalculatorProps = {
  title: string;
  description?: string;
  values: Record<string, number>;
  handleValueChange: (id: string, value: number) => void
  rows: RowCalculator[];
};

export default function Calculator({ rows, values, handleValueChange, title, description }: CalculatorProps) {


  return (
    <Card className="border-[1px] border-foreground p-6 flex flex-col w-full lg:w-6/12">
      <CardHeader className="p-4 max-2xl:p-0">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        {description && (
          <CardDescription className="text-base">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-8 max-[400px]:p-2 max-2xl:py-2 max-2xl:gap-6">
        {rows.map((row, i) => (
          <CalculatorRow
            key={i}
            value={values[row.id]}
            onChange={(value: number) => {
              if (row.onChange) {
                row.onChange(value);
              } else {
                handleValueChange(row.id, value);
              }
            }}
            row={row}
          />
        ))}
      </CardContent>
    </Card>
  );
}