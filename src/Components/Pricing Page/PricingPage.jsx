import React from 'react'
import { PricingTabs } from './PricingTabs'
import Bg from './BgPricing';
import DotGrid from '../WhyChoose/DotGridBackground';
import { FlickeringGrid } from '../ui/flickering-grid';
const PricingPage = () => {
    return (
        <div className="bg-[#09090b] w-full min-h-[130vh] md:min-h-screen py-[5vh] md:py-[20vh] relative no-visible-scrollbar">
            <div>
                <PricingTabs />
                {/* <div className='absolute top-0 left-0 h-full'>
                    <Bg />
                </div> */}
            </div>
        </div>
    )
}

export default PricingPage
