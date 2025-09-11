
"use client";

import { useState } from "react";
import { AvailabilityBar } from "@/components/landing/availability-bar";
import { Hero } from "@/components/landing/hero";
import { Testimonials } from "@/components/landing/testimonials";
import { Problem } from "@/components/landing/problem";
import { Benefits } from "@/components/landing/benefits";
import { Urgency } from "@/components/landing/urgency";
import { GuaranteeAndFaq } from "@/components/landing/guarantee-and-faq";
import { SocialProofPopup } from "@/components/landing/social-proof-popup";
import { VslPlayer } from "@/components/vsl-player";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Pricing } from "@/components/landing/pricing";
import { WhyPrice } from "@/components/landing/why-price";

export default function Home() {
  const [vacancies, setVacancies] = useState(25);

  const decreaseVacancy = () => {
    setVacancies((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex flex-col min-h-dvh w-full overflow-x-hidden bg-aderecos">
      <div className="star-1"></div>
      <div className="star-2"></div>
      <div className="star-3"></div>
      <div className="star-4"></div>
      <div className="star-5"></div>
      <div className="bg-aderecos::before"></div>
      <div className="bg-aderecos::after"></div>
      <AvailabilityBar vacancies={vacancies} />
      <main className="flex-1 relative z-10">
        <Hero />

        <section id="vsl-section-2" className="pb-8 pt-0 bg-background">
            <div className="container mx-auto px-4">
                <VslPlayer />
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
                  <Button asChild size="lg" className="h-auto py-3 px-4 text-[10px] min-[370px]:text-xs sm:text-base font-headline bg-green-500 hover:bg-green-600 text-primary-foreground shadow-lg text-center">
                    <Link href="https://pay.kiwify.com.br/S7SLFJY">
                      <Rocket className="mr-2 h-5 w-5" />
                      SIM QUERO O MÉTODO
                    </Link>
                  </Button>
                </div>
            </div>
        </section>

        <Problem />
        <Benefits />
        <WhyPrice />
        <Pricing />
        <Urgency />
        <Testimonials />
        <GuaranteeAndFaq />
      </main>
      <Footer />
      <SocialProofPopup onNewPurchase={decreaseVacancy} />
    </div>
  );
}
