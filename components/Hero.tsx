import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='mx-4 mt-8 lg:mx-28 lg:mt-20'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center'>Potřebujete půjčku, ale v bance vám ji nedají?</h1>
        <p className='text-xl text-center lg:w-2/3 mx-auto my-6'>My vám půjčku schválíme do 72 hod. Stačí vyplnit krátký dotazník a my se s Vámi spojíme.</p>

    </div>
  )
}

export default Hero