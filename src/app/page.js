'use client'
import PricingPage from "@/Components/Pricing Page/PricingPage"
import SmoothScroll from "./SmoothScroll"
import TestimonialsPage from './../Components/Testimonials/TestimonialsPage';
import WhyChoosePage from './../Components/WhyChoose/WhyChoosePage';
import MaskedPage from "@/Components/Home/PortalReveal"
import LastPortal from './../Components/End/LastPortal';
import FinalPage from "@/Components/End/FinalPage";
import NavBarAll from './../Components/NavBar/NavBarAll';
import BentoGridDemo from './../Components/Bounties/BountiesSection';
import Footer from './../Components/Footer/Footer';
import { ThemeProvider } from "@/Components/End/ThemeChangeContext";
import NavBar3 from './../Components/NavBar/NavBar3';

export default function Home() {
  return (
    <SmoothScroll>
      <ThemeProvider>
        <div id="CompleteHomePage" className="bg-[#09090b] w-full min-h-screen overflow-hidden relative">
          {/* <NavBarAll /> */}
          <NavBar3 />
          <MaskedPage />
          <BentoGridDemo />
          <WhyChoosePage />
          <PricingPage />
          <TestimonialsPage />
          <LastPortal />
          <FinalPage />
          <Footer />
        </div>
      </ThemeProvider>
    </SmoothScroll>
  )
}
