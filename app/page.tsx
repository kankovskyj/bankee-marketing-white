import { CalculateLoanWrapper } from "@/components/CalculateLoan/CalculateLoan";
import Footer from "@/components/Footer";
import { Form } from "@/components/Form/Form";
import Hero from "@/components/Hero";
import Stepper from "@/components/Stepper/Stepper";
import HowItWorks from "@/components/Stepper/data/HowItWorks";
import Image from "next/image";

export default function Home() {

  const { HowItWorksMap } = HowItWorks();

  return (
    <main>
      <Hero />
      <Stepper
        id="how-it-works-stepper"
        heading="Proč si bankee chválí uživatelé"
        stepCards={HowItWorksMap}
      />      <Form />
      <CalculateLoanWrapper />
      <Footer />
    </main>
  );
}
