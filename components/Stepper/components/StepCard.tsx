import React from "react";
import Image from "next/image";

/*
  ? Components
*/
import { UnderlineText } from "@/components/ui/Underline";

export type Props = {
  title?: React.ReactNode; // Changed from string to React.ReactNode
  description: React.ReactNode; // Ensure this is already React.ReactNode
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stepNo?: number;
  hasArrow?: boolean;
  underlinedTitle?: string;
};

export default function StepCard({ title, description, image, stepNo, hasArrow, underlinedTitle }: Props) {
  return (
    <div className="flex w-full flex-col items-start">
      {image && (
        <div className="z-10 ml-6 flex h-[3.75rem] w-[3.75rem] rounded-[12px] border-[1.5px] border-[#aaaaaa] bg-[#ffffff]">
          <Image
            className="m-auto"
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </div>
      )}
      {typeof stepNo === "number" && (
        <div className="z-10 ml-6 flex h-14 w-14 rounded-[12px] border-[1.5px] border-[#aaaaaa] bg-[#ffffff]">
          <span className="m-auto flex text-[1.75rem] font-semibold text-[#545454]">
            {stepNo}
          </span>
        </div>
      )}
      <div className="relative -mt-7 h-full rounded-[28px] border-[1.5px] bg-[#FFFDD6] px-6 pb-6 pt-12 border-[#0000001a]">
        <span className="text-[24px] font-bold leading-tight font-como">
          {title}
          {underlinedTitle && (
            <>
              {title && <br />}
              <UnderlineText className="font-bold">{underlinedTitle}</UnderlineText>
            </>
          )}
        </span>
        {description}
        {hasArrow && (
          <Image
            src="/arrow-jump.svg"
            alt="arrow right"
            width={120}
            height={65}
            className="absolute right-[-18px] -bottom-[48px] z-10 h-10 w-[7rem] rotate-90 lg:right-[-90px] lg:top-1/3 lg:rotate-0"
          />
        )}
      </div>
    </div>
  );
}
