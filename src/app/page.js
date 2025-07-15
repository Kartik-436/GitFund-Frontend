'use client'
import PricingPage from "../components/Pricing Page/PricingPage"
import SmoothScroll from "./SmoothScroll"
<<<<<<< HEAD
import TestimonialsPage from '../components/Testimonials/TestimonialsPage';
import WhyChoosePage from '../components/WhyChoose/WhyChoosePage';
import LastPortal from '../components/End/LastPortal';
import FinalPage from '../components/End/FinalPage';
import NavBarAll from '../components/NavBar/NavBarAll';
import BentoGridDemo from '../components/Bounties/BountiesSection';
import Footer from '../components/Footer/page';
import { ThemeProvider } from '../components/End/ThemeChangeContext';
import NavBar3 from '../components/NavBar/NavBar3';
import { LayoutWithPreloader } from "../components/LayoutWithPreloader";
import MaskedPage from "@/Components/Home/PortalReveal";
=======
import TestimonialsPage from './../Components/Testimonials/TestimonialsPage';
import WhyChoosePage from './../Components/WhyChoose/WhyChoosePage';
import MaskedPage from "./../Components/Home/PortalReveal"
import LastPortal from './../Components/End/LastPortal';
import FinalPage from './../Components/End/FinalPage';
import NavBarAll from './../Components/NavBar/NavBarAll';
import BentoGridDemo from './../Components/Bounties/BountiesSection';
import Footer from './../Components/Footer/Footer';
import { ThemeProvider } from './../Components/End/ThemeChangeContext';
import NavBar3 from './../Components/NavBar/NavBar3';
>>>>>>> parent of 562c24b (Add animated preloader with particle text effect)

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
