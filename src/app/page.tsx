import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Tiers } from "@/components/Tiers";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { FAQ } from "@/components/FAQ";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rule" />
      </div>
      <HowItWorks />
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rule" />
      </div>
      <Tiers />
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rule" />
      </div>
      <Features />
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rule" />
      </div>
      <Screenshots />
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rule" />
      </div>
      <FAQ />
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="rule" />
      </div>
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
