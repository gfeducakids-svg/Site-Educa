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
    <div className="flex flex-col min-h-dvh w-full overflow-x-hidden bg-aderecos">
      <div className="star-1"></div>
      <div className="star-2"></div>
      <div className="star-3"></div>
      <div className="star-4"></div>
      <div className="star-5"></div>
      <div className="bg-aderecos::before"></div>
      <div className="bg-aderecos::after"></div>
      <AvailabilityBar />
      <main className="flex-1 relative z-10">
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
