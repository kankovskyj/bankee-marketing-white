import React from "react";

/*
    ? Components
*/
import StepCard from "./components/StepCard";

/*
  ? UI
*/
import { UnderlineText } from "@/components/ui/Underline";

type StepCardProps = {
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  title?: string;
  underlinedTitle?: string;
  description: string;
  stepNo?: number;
  hasArrow?: boolean;
};

type StepperProps = {
  id: string;
  heading: string;
  subHeading?: string;
  stepCards: StepCardProps[];
}

export default function Stepper({ id, heading, subHeading, stepCards }: StepperProps) {
  return (
    <section
      className="pt-10 lg:pt-4 bg-[#F3F4F5] px-4 py-12 lg:px-28 lg:py-20"
      id={id}
    >
      <h2 className="lg:pt-12 mb-12 text-3xl lg:text-4xl font-bold lg:text-[36px] mx-auto pt-4 text-center">
        {heading}
      </h2>

      {subHeading !== undefined &&
        <button className="mb-6 !text-[1.75rem]">
          <UnderlineText className="font-bold">{subHeading}</UnderlineText>
        </button>
      }

      <div className="-mx-4 flex flex-col items-center justify-between gap-8 px-4 lg:-mx-28 lg:flex-row lg:gap-24 lg:px-28">
        {stepCards?.map((card, index) => (
          <StepCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
