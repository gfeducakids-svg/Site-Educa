import { AvailabilityBar } from "@/components/landing/availability-bar";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Benefits } from "@/components/landing/benefits";
import { Comparison } from "@/components/landing/comparison";
import { ProductModules } from "@/components/landing/product-modules";
import { Offer } from "@/components/landing/offer";
import { Urgency } from "@/components/landing/urgency";
import { GuaranteeAndFaq } from "@/components/landing/guarantee-and-faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { SocialProofPopup } from "@/components/landing/social-proof-popup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <AvailabilityBar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Testimonials />
        <Problem />
        <Solution />
        <Benefits />
        <Comparison />
        <ProductModules />
        <Offer />
        <Urgency />
        <GuaranteeAndFaq />
        <FinalCta />
      </main>
      <Footer />
      <SocialProofPopup />
    </div>
  );
}
