"use Client";
import React from 'react'
import DotGrid from '../WhyChoose/DotGridBackground';
import {FlickeringGrid} from '../ui/flickering-grid'
const EndPage = () => {
    return (
        <div className='bg-[#09090b] w-full min-h-[120vh] overflow-hidden relative flex items-end justify-center'>
            <div className='max-w-[30vw] z-20 text-white text-6xl py-20'>
                Built Different
            </div>

            <div className='w-full h-full inset-0 absolute z-0'>
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

export default EndPage
