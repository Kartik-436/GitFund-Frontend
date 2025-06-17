"use Client";
import React from 'react'
import DotGrid from '../WhyChoose/DotGridBackground';

const EndPage = () => {
    return (
        <div className='bg-[#09090b] w-full min-h-[120vh] overflow-hidden relative flex items-end justify-center'>
            <div className='max-w-[30vw] text-white text-6xl py-20'>
                Built Different
            </div>

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
    )
}

export default EndPage
