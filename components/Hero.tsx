import React from 'react'
import { UnderlineText } from './ui/Underline'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='lg:py-20 pt-20 bg-[#A2EB99]'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center tracking-tight text-[#303030]'>Potřebujete půjčku, ale v bance vám ji nedají?</h1>
        <p className='text-xl text-center lg:w-2/3 mx-auto my-6'>My vám půjčku schválíme do <UnderlineText strokeColor='#fc9f64' className='font-bold text-2xl pb-1'>72 hodin</UnderlineText>. Stačí vyplnit krátký dotazník a my se s vámi spojíme.</p>

    </div>
  )
}

export default Hero