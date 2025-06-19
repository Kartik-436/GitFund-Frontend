'use client';
import React, { useEffect, useRef } from 'react';
import DotGrid from '../WhyChoose/DotGridBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const FinalPage = () => {
    const ballRefs = useRef([]);
    const textRef = useRef(null);

    const Notiref1 = useRef(null)
    const Notiref2 = useRef(null)

    useEffect(() => {
        // Floating balls animation
        ballRefs.current.forEach((ball) => {
            floatBall(ball);
        });

        // Word-by-word color scroll animation
        const words = gsap.utils.toArray('.scroll-word');
        gsap.set(words, { color: '#dbcaab' });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top top',
                end: `bottom 30%`, // Enough space for word-by-word
                scrub: 1,
                pin: true,
            },
        });

        words.forEach((word, i) => {
            tl.to(word, {
                color: '#09090b',
                duration: 0.3,
                ease: 'power1.in',
            }, i * 0.15);
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    useEffect(() => {
        gsap.to(Notiref2.current, {
            y: 40,
            scrollTrigger: {
                trigger: Notiref1.current,
                start: "start 60%",
                end: "50% 65%",
                scrub: 1,
            }
        })
    }, [])


    const floatBall = (ball) => {
        const duration = gsap.utils.random(1, 3, 0.1);
        const deltaX = gsap.utils.random(-40, 40);
        const deltaY = gsap.utils.random(-40, 40);
        gsap.to(ball, {
            x: deltaX,
            y: deltaY,
            duration,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
        });
    };

    const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus maiores praesentium ad!";

    return (
        <div className='min-h-[300vh] w-full bg-[#F0EBE3] z-10 overflow-hidden relative'>
            {/** Floating Balls */}
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

            {/** Animated Gradient Text */}
            <div
                ref={textRef}
                className='text-[5.6vw] max-w-[60vw] mt-[40vh] leading-[1.2] text-center font-bold mx-auto py-[10vh]'
            >
                {paragraph.split(' ').map((word, i) => (
                    <motion.span
                        key={i}
                        className="scroll-word inline-block mr-[0.5vw]"
                        initial={{ color: '#dbcaab' }}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>

            <div className='w-full flex items-center justify-center mt-[20vh] z-50'>
                <div ref={Notiref1} className='bg-[#F0EBE3] h-[60vh] w-[80vw] flex items-start justify-center rounded-full border-2 border-[#dbcaab]'>
                    <div ref={Notiref2} className='bg-[#09090b] h-[54vh] w-[80vw] rounded-full z-50'>
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
            </div>

            {/** Background DotGrid */}
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
    );
};

export default FinalPage;
