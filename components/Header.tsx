import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


/*
  ? I18N
*/

/*
  ? UI
*/
import { Button } from './ui/Button'

export default function Header() {

  return (
    <>
      <header className="sticky bg-white top-0 z-[999] flex h-24 py-4 lg:py-10 w-full flex-col justify-center border-b border-foreground bg-background lg:h-[5.8rem]">
        <div className="mx-4 flex h-10 items-center justify-between lg:mx-16 lg:h-16 bg-white">
          <Link href="/">

            <Image
              src="/bankeelogo.svg"
              width={100}
              height={100}
              alt="Logo"
              className="h-full w-32 py-2 lg:py-4"
            />
          </Link>
          <div className="flex flex-row gap-8 items-center">
            
            <Button variant="dark" className="rounded-full" >
              Chci půjčku
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
