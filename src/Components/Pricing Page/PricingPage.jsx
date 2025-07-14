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

                <div className='w-full h-full inset-0 absolute z-0'>
                                                                
                                                                      <FlickeringGrid
                                                                        className="z-0 absolute inset-0 size-full"
                                                                        squareSize={6}
                                                                        gridGap={6}
                                                                        color="#5c595e11"
                                                                        maxOpacity={0.5}
                                                                        flickerChance={0.1}
                                                                        height={4000}
                                                                        width={2000}
                                                                      />
                                                                    
                                                            </div>
            </div>
        </div>
    )
}

export default PricingPage
