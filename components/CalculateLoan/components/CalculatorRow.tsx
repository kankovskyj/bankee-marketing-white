import React from 'react'

/*
    ? Icons
*/
import { Icons } from '@/icons/Icons';

/*
    ? UI
*/
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { SliderCalculator } from '@/components/ui/Slider';

/*
    ? Types
*/
import { RowCalculator } from '../types/CalculatorTypes';

/*
    ? Utils
*/
import { cn } from '@/lib/utils';

type CalculatorRowProps = {
    row: RowCalculator;
    value: number;
    onChange: (value: number) => void;
}

export default function CalculatorRow({ row, value, onChange }: CalculatorRowProps) {

    const { valueFormatter = (value: number) => value.toString() } = row;

    const handleStepButton = (direction: 1 | -1) => {
      const newValue = value + direction * row.step;
      if (newValue >= row.min && newValue <= row.max) {
        onChange(newValue);
      }
    };

    return (
        <div className="flex flex-col gap-3">
          <div className={`flex items-start justify-between ${row.hideSlider ? "flex-row relative" : "flex-col gap-4"}`}>
            <span className={`text-left text-xl font-semibold ${row.hideSlider && "absolute top-1.5"} max-2xl:text-base`}>
              {row.title}{" "}
              <Popover>
                <PopoverTrigger>
                  <Icons.info width={18} height={18} className="inline-block" />
                </PopoverTrigger>
                <PopoverContent className="bg-white z-50">
                  {row.description}
                </PopoverContent >
              </Popover>
            </span>
            <div className={`flex w-full ${row.hideSlider ? "justify-center" : "justify-between"}`}>
              <button
                className={`mr-4 flex h-10 w-10 shrink-0 rounded-full bg-[#e4ffe0] max-2xl:w-8 max-2xl:h-8 ${row.hideSlider ? "hidden" : ""}`}
                onClick={() => handleStepButton(-1)}
              >
                <p className="m-auto text-2xl">-</p>
              </button>
              <div className="styl px-4 border-b-[1.5px] border-[#202637] bg-[#f3f4f5] rounded-t-[0.75rem] py-2 flex w-1/2 text-center text-xl font-bold ">
                <span className="mx-auto flex text-base max-2xl:text-sm whitespace-nowrap">
                  {valueFormatter(value)}
                </span>
              </div>
              <button
                className={`ml-4 flex h-10 w-10 shrink-0 rounded-full bg-[#e4ffe0] max-2xl:w-8 max-2xl:h-8 ${row.hideSlider ? "hidden" : ""}`}
                onClick={() => handleStepButton(1)}
              >
                <p className="m-auto text-2xl">+</p>
              </button>
            </div>
          </div>
          <div className={`mt-2 flex flex-col gap-6 ${row.hideSlider ? "hidden" : ""}`}>
            <SliderCalculator
              value={[value]}
              onValueChange={([value]) => onChange(value)}
              min={row.min}
              max={row.max}
              step={row.step}
              className={cn("w-full")}
            />
            <div className="flex justify-between">
              <span className="text-xs font-medium">{row.labels.min}</span>
              <span className="text-xs font-medium">{row.labels.max}</span>
            </div>
          </div>
    
        </div>
      );
}
