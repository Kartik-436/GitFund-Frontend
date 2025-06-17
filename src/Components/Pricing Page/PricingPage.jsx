import React from 'react'
import { PricingTabs } from './PricingTabs'
import Bg from './BgPricing';
import DotGrid from '../WhyChoose/DotGridBackground';

const PricingPage = () => {
    return (
        <div>
            <div className="bg-[#09090b] w-full h-full overflow-x-hidden relative">
                <PricingTabs />
                {/* <div className='absolute top-0 left-0 h-full'>
                    <Bg />
                </div> */}

                <div className='w-full h-full inset-0 absolute z-0'>
                    <DotGrid
                        dotSize={2.5}
                        gap={26}
                        baseColor="#ffffff50"
                        activeColor="#9D00FF"
                        proximity={150}
                        shockRadius={300}
                        shockStrength={7}
                        resistance={800}
                        returnDuration={1.5}
                    />
                </div>
            </div>
        </div>
    )
}

export default PricingPage
