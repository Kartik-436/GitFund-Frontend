'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { motion, anticipate } from 'framer-motion';
import DotGrid from '../WhyChoose/DotGridBackground';
import Bg from '../Pricing Page/BgPricing';

const data = {
    Link1: "",
    Link2: "",
    Link3: "",
    Link4: "",
    Link5: "",
};

export default function Page2() {
    const [active, setActive] = useState('Link1');

    return (
        <div className="min-h-screen bg-[#09090b] text-white relative p-10 m-0 flex flex-col items-center">

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

            {/* <div className='absolute top-0 inset-0 left-0 h-full'>
                <Bg />
            </div> */}

            <div className='min-h-[35vh] z-20'>
                <h1 className='text-[6vw] capitalize text-center font-semibold'>Introducing GitFund</h1>
                <p className='font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi.</p>
            </div>
            <div className='rounded-xl min-h-screen w-full flex flex-col items-center p-10 z-20'>
                <div className="flex gap-6 bg-[#2b2b2b] rounded-full border-0 p-[2.6px] mb-10 z-20">
                    {['Link1', 'Link2', 'Link3', 'Link4', 'Link5'].map((role) => (
                        <button
                            key={role}
                            style={{ transformStyle: "preserve-3d" }}
                            onClick={() => setActive(role)}
                            className='p-1'
                        >
                            {active === role && (
                                <motion.div
                                    layoutId="clickedbutton"
                                    transition={{ type: "spring", bounce: 0.3, anticipate, duration: 0.6 }}
                                    className="absolute inset-0 z-0 bg-black rounded-full "
                                />
                            )}
                            <span className={clsx(
                                'px-6 py-2 rounded-full text-md font-normal capitalize transition-all relative cursor-pointer',
                                active === role ? 'bg-transparent' : 'text-gray-400 hover:text-white'
                            )}>
                                {role}
                            </span>
                        </button>
                    ))}
                </div>

                <div className='bg-[#09090b]'>
                    <div className="bg-white/8 h-[95vh] w-[80vw] rounded-xl flex items-center justify-center z-20">
                        <div className='bg-black h-[92vh] w-[78.5vw] rounded-lg'>
                            <video src="#"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
