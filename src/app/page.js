'use client'
import { NavbarDemo } from "@/Components/NavBar/finalNav"
import PricingPage from "@/Components/Pricing Page/PricingPage"
import SmoothScroll from "./SmoothScroll"
import TestimonialsPage from './../Components/Testimonials/TestimonialsPage';
import WhyChoosePage from './../Components/WhyChoose/WhyChoosePage';
import MaskedPage from "@/Components/Home/PortalReveal"
import LastPortal from './../Components/End/LastPortal';
import FinalPage from "@/Components/End/FinalPage";
import NavBarAll from './../Components/NavBar/NavBarAll';
import BountiesSection from './../Components/Bounties/BountiesSection';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-[#09090b] w-full min-h-screen overflow-hidden relative">
        {/* <NavbarDemo /> */}
        <NavBarAll />
        <MaskedPage />
        <BountiesSection />
        <WhyChoosePage />
        <PricingPage />
        <TestimonialsPage />
        <LastPortal />
        <FinalPage />
      </div>
    </SmoothScroll>
  )
}
