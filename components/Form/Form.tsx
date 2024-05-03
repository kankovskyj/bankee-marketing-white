"use client";

import { PartyPopper, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import { UnderlineText } from '@/components/ui/Underline';

export const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;

    const name = target.elements.namedItem("name") as HTMLInputElement;
    const company = target.elements.namedItem("company") as HTMLInputElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const phone = target.elements.namedItem("phone") as HTMLInputElement;

    const formData = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      company: company.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      setMessageSent(true);
      target.reset();
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMessageSent) {
      timer = setTimeout(() => {
        setMessageSent(false);
      }, 400000);
    }
    return () => clearTimeout(timer);
  }, [isMessageSent]);

  const handleCloseClick = () => {
    setMessageSent(false);
  };

  return (
    <div className="px-4 mx-0 py-4 lg:px-28 bg-[#E3EAFF]">
      <div
        className="flex w-full flex-col items-center justify-between gap-8 rounded-[30px]  px-0 pt-2 pb-2 lg:flex-row lg:gap-20 lg:rounded-[60px] lg:px-24 lg:py-16"
        id="kontakt"
      >
        <form onSubmit={handleSubmit} className="w-full order-1">
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex flex-col gap-[16px] lg:gap-[16px] lg:justify-between">
              <p className="lg:mb-12 text-3xl lg:text-4xl font-bold font-como">
                <UnderlineText className="font-bold pb-[6px]">Kontaktujte mě</UnderlineText>
              </p>
              <p className="opacity-80">
                Zadejte IČO a zanechte nám kontakt. Náš tým se vám co nejdříve
                ozve zpět.
              </p>
              <label>
                <div className="nadpis-input pl-1">Jméno</div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  minLength={3}
                  maxLength={200}
                  className="main-input bg-white border rounded-[4px] mt-1 py-2 w-full px-2 border-primary/50 active:border-primary bg-transparent "
                />
              </label>
              <label>
                <div className="nadpis-input pl-1">IČO</div>
                <input
                  id="company"
                  type="text"
                  name="company"
                  minLength={2}
                  maxLength={200}
                  className="main-input bg-white border rounded-[4px] mt-1 py-2 w-full px-2 border-primary/50 active:border-primary bg-transparent "
                />
              </label>
              <label>
                <div className="nadpis-input pl-1">Název společnosti</div>
                <input
                  id="company"
                  type="text"
                  name="company"
                  minLength={2}
                  maxLength={200}
                  className="main-input bg-white border rounded-[4px] mt-1 py-2 w-full px-2 border-primary/50 active:border-primary bg-transparent "
                />
              </label>
              <label>
                <div className="nadpis-input pl-1">E-mail</div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  minLength={2}
                  maxLength={200}
                  className="main-input bg-white border rounded-[4px] mt-1 py-2 w-full px-2 border-primary/50 active:border-primary bg-transparent "
                />
              </label>
              <label>
                <div className="nadpis-input pl-1">Telefon</div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="main-input bg-white border rounded-[4px] mt-1 py-2 w-full px-2 border-primary/50 active:border-primary bg-transparent "
                />
              </label>
            </div>
          </div>
          <label
            htmlFor="checkbox"
            className="mt-[20px] flex items-center gap-4 mb-8 text-sm"
          >
            <input type="checkbox" id="checkbox" required />
            Souhlasím se zpracováním osobních údajů za účelem zpracování mého
            dotazu.
          </label>
          <Button variant="dark" size="lg" rounded="full" type="submit">
            Odeslat
          </Button>
          {isMessageSent && (
            <div className="absolute top-[12rem] lg:top-[14rem] w-[96%] lg:m-0 lg:w-1/4 h-[26rem] lg:h-[26rem] center shadow-lg flex flex-col bg-[#e7fde4] rounded-xl p-10">
              <PartyPopper className="w-9 text-[#4a4a4a] h-9 mx-auto flex-shrink-0" />
              <p className="text-xl font-bold mx-auto mt-6 opacity-45 mb-2">
                Děkujeme za vyplnění!
              </p>
              <p className="text-lg mb-8 text-center">
                Náš tým se vám během pár hodin ozve s nabídkou a dalšími kroky
                při žádosti o úvěr.
              </p>
              <div className="flex gap-3 flex-col">
                <button
                  onClick={handleCloseClick}
                  className="inline-flex items-center justify-center font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#202636] hover:bg-[#202636]/90 border-[#202636] border-[1.5px] text-white rounded-full px-8 py-3 text-[19px]"
                >
                  Zavřít
                </button>
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "items-start rounded-full border-foreground px-4 py-3 text-[19px]"
                  )}
                  href="/"
                >
                  Zpět na hlavní stránku
                </Link>
              </div>

              <X
                onClick={handleCloseClick}
                className="absolute top-4 w-4 h-4 opacity-50 right-4 cursor-pointer"
              />
            </div>
          )}
        </form>
        <div className="relative order-2 w-full h-[13rem] mt-3 lg:mt-0 lg:h-[24rem] overflow-hidden rounded-[30px] lg:aspect-auto lg:rounded-[60px]">
          <Image
            src="/woman.webp"
            alt="woman"
            fill
            className="absolute bottom-0 z-10 w-5 object-contain"
          />
          <div className="absolute bottom-0 mt-auto h-[70%] w-full rounded-[30px] bg-[#c9d5fb] lg:rounded-[60px]"></div>
        </div>
      </div>
    </div>
  );
};
