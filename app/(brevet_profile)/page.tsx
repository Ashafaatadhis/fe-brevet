import React from "react";
import Navbar from "./_components/Navbar";
import { Separator } from "@/components/ui/separator";
import Hero from "./_components/Hero";
import Partner from "./_components/Partner";
import Benefit from "./_components/Benefit";
import Testimony from "./_components/Testimony";
import Statistics from "./_components/Statistics";
import CTA from "./_components/CTA";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Separator />
      <Hero />
      <Partner />
      <Benefit />
      <Testimony />
      <Statistics />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
