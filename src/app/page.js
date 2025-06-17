'use client'
import Page1 from "@/Components/Home/GradientSemiCircle"
import { NavbarDemo } from "@/Components/NavBar/finalNav"
import PricingPage from "@/Components/Pricing Page/PricingPage"
import SmoothScroll from "./SmoothScroll"
import TestimonialsPage from './../Components/Testimonials/TestimonialsPage';
import WhyChoosePage from './../Components/WhyChoose/WhyChoosePage';
import Page2 from "@/Components/Home/Page2"
import MaskedPage from "@/Components/Home/PortalReveal"
import EndPage from './../Components/End/EndPage';
import ThemeChange from "@/Components/End/ThemeChange"
import LastPortal from './../Components/End/LastPortal';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-[#09090b] w-full min-h-screen overflow-hidden relative">
        {/* <NavbarDemo /> */}
        <MaskedPage />
        <WhyChoosePage />
        <PricingPage />
        <TestimonialsPage />
        <LastPortal />
      </div>
    </SmoothScroll>
  )
}
