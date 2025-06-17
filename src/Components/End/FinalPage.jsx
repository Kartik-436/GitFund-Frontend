import React from 'react'
import DotGrid from '../WhyChoose/DotGridBackground'

const FinalPage = () => {
    return (
        <div className='min-h-[200vh] w-full bg-[#F0EBE3] overflow-hidden relative'>
            <h1 className='text-[5.6vw] max-w-[60vw] mt-[50vh] text-center mx-auto py-10'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus maiores praesentium ad!
            </h1>

            <div className='w-full h-full inset-0 absolute z-0'>
                <DotGrid
                    dotSize={2.5}
                    gap={26}
                    baseColor="#00000050"
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

export default FinalPage
