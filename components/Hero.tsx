import React from 'react'
import { UnderlineText } from './ui/Underline'
import { Button } from './ui/Button'
import Image from 'next/image'
type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="pb-12 lg:pb-6 flex flex-col">
        <h1 className="text-3xl pt-10 lg:pt-24 pb-4 leading-snug lg:pb-8 lg:text-5xl font-bold text-center tracking-tight text-[#26274b] relative">
          Potřebujete půjčku, ale v bance vám jí nedají? <div className="cross-img-marketing"></div>
        </h1>
        <p className="text-xl lg:text-[26px] text-center lg:w-2/3 mx-auto pt-3 lg:pt-6 pb-6 text-[#26274b] leading-normal">
        My vám půjčku schválíme  <br className=" min-[450px]:hidden" />
          <UnderlineText className="font-bold text-2xl pb-0.5 lg:pb-1">
            do 72 hodin.
          </UnderlineText>
        </p>
        <Button className="rounded-full text-[17px] font-bold w-fit mx-auto mb-6 mt-3 lg:mt-6 px-2.5 py-1.5 text bg-[#A2EB99]">
          <a href="#kalkulacka">Chci si půjčit</a>
        </Button>
        <span className="text-xs opacity-60 text-center">
          Stačí vyplnit krátký dotazník a my se s vámi spojíme.
        </span>
      </section>
  )
}

export default Hero