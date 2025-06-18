import React, { useEffect, useRef } from 'react'
import DotGrid from '../WhyChoose/DotGridBackground'
import gsap from 'gsap';

const FinalPage = () => {
    const ballRefs = useRef([]);

    useEffect(() => {
        ballRefs.current.forEach((ball) => {
            floatBall(ball);
        });
    }, []);

    const floatBall = (ball) => {
        const duration = gsap.utils.random(1, 3, 0.1);
        const deltaX = gsap.utils.random(-40, 40);
        const deltaY = gsap.utils.random(-40, 40);

        gsap.to(ball, {
            x: deltaX,
            y: deltaY,
            duration: duration,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
        });
    };

    return (
        <div className='min-h-[200vh] w-full bg-[#F0EBE3] z-10 overflow-hidden relative'>
            <div ref={(el) => (ballRefs.current[0] = el)}
                className={'h-35 w-35 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[130vh] left-[80%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

            <div ref={(el) => (ballRefs.current[1] = el)}
                className={'h-40 w-40 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[83vh] left-[80%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

            <div ref={(el) => (ballRefs.current[2] = el)}
                className={'h-40 w-40 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[132vh] left-[11%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

            <div ref={(el) => (ballRefs.current[3] = el)}
                className={'h-46 w-46 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[65vh] left-[20%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

            <h1 className='text-[5.6vw] max-w-[60vw] mt-[70vh] leading-20 z-50 text-[#dbcaab] text-center font-bold mx-auto py-35'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus maiores praesentium ad!
            </h1>

            <div className='w-full h-full inset-0 absolute z-0'>
                <DotGrid
                    dotSize={2.5}
                    gap={26}
                    baseColor="#eea21580"
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
