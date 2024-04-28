import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className="bg-[#10172A] text-white py-16">
      <div className="mx-4 lg:mx-16">
        <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:gap-0">
          <div className="flex flex-col gap-4 text-white md:w-72">
            <Image src="/bankee-w.svg" width={150} height={150} alt="Logo" />
            <p
              className={`mt-1 font-medium text-muted/70 font-como text-[1.0625rem] lg:text-base`}
            >
              My jsme BANKEE, my rozumíme lidem. Propojujeme žadatele o podnikatelský nebankovní úvěr s ověřenými investory.
            </p>
          </div>
          <div className="flex">
            <nav className="flex flex-col gap-4 text-left text-[1.0625rem] font-como font-bold text-muted/60">
              
            </nav>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-2 py-1.5">
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
          <div className="div flex flex-col gap-4 font-medium lg:flex-row">
            <a
              href="/ustava.pdf"
              target="_blank"
              className="text-muted/60 transition hover:text-muted text-[1.0625rem] font-como lg:text-base"
            >
              Ochrana osobních údajů
            </a>
            <a
              href="/ustava.pdf"
              target="_blank"
              className="text-muted/60 transition hover:text-muted text-[1.0625rem] font-como lg:text-base"
            >
              Obchodní podmínky
            </a>
            <a
              href="/ustava.pdf"
              target="_blank"
              className="text-muted/60 transition hover:text-muted text-[1.0625rem] font-como lg:text-base"
            >
              Smlouvy
            </a>
          
          </div>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
        </div>
        <div className="flex flex-col gap-4 text-muted/80 font-como md:flex-row">
          <span>Bankee Credit Management s.r.o.</span>
          <span>IČ: 179 96 201</span>
          <span>Adresa: Na okraji 381/41, Praha 6</span>
        </div>
      </div>
    </footer>
  )
}
