'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Page2 from './Page2';
import Page1 from './GradientSemiCircle';
import Particles from './particle';

gsap.registerPlugin(ScrollTrigger);

const MaskedPage = () => {
    const MaskRef = useRef(null);
    const containerRef = useRef(null);
    const containerRef2 = useRef(null);
    const Sphere = useRef(null);
    const contentRef = useRef(null);
    const particlesRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=500', // adjust based on how much scroll you want
                scrub: 1,
                pin: true,
            },
        });

        // tl.to(Sphere.current, {
        //     y: -20,
        //     scaleY: 1.2,
        //     scale: 0.9,
        //     z: 100,
        //     zIndex: 55,
        //     duration: 0.2,
        // }, "l")

        tl.to(MaskRef.current, {
            maskSize: "1px",
            ease: "power1.inOut",
        }, "l")

        tl.to(Sphere.current, {
            scale: 2.3,
            ease: "power1.inOut",
            opacity: 0
        }, "l2")

        tl.to(containerRef2.current, {
            opacity: 0,
            scale: 1.4,
            ease: "power1.inOut",
        }, "l2")

        tl.to(MaskRef.current, {
            maskSize: "2000px",
            duration: 1,
            ease: "power1.inOut",
        }, "l2")

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <main ref={containerRef} className='main relative min-h-screen h-full w-full'>
                <motion.div ref={MaskRef}
                    className='mask z-10'
                >
                    <Page2 />
                </motion.div>

                <div className='body fixed top-0 -z-10'>
                    <div style={{ perspective: "2000px" }} ref={containerRef2} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                        <div ref={Sphere} id='SPHERE' className='relative w-full z-50 h-screen flex items-end justify-center pointer-events-none'>
                            <div className="absolute top-[57%] w-[1034px] h-[1000px] rounded-full bg-[#4F46E5] border-2 border-[#4F46E5] z-10 blur-2xl " />
                            <div className="absolute top-[48%] w-[1000px] h-[1000px] rounded-full bg-[#A78BFA] border-2 border-[#A78BFA] z-[5] blur-2xl" />
                            <div className="absolute top-[65%] w-[1050px] h-[1000px] rounded-full bg-[#09090b] z-30 blur-[60px]" />
                            <div className="absolute top-[48%] w-[1020px] h-[1020px] rounded-full bg-[#A78BFA]" />
                            <div className="absolute top-[48%] w-[1010px] h-[1000px] rounded-full z-50 bg-transparent border-8 border-[#A78BFA]/50 blur-[1px]" />
                            <div className='absolute top-[84%] w-[1300px] h-[800px] rounded-full bg-black z-20 blur-[100px]'></div>
                            <div className='absolute bg-[#4f46e5]/60 h-20 w-80 z-50 bottom-33 blur-[80px]'></div>
                            <div className='h-[25vh] rounded-full w-[66vw] bottom-60 absolute bg-[#4f46e5]/40 blur-[110px] pointer-events-none'></div>
                            <div className='h-[30vh] rounded-full w-[50vw] bottom-30 left-50 absolute bg-[#4f46e5]/40 blur-[110px] pointer-events-none'></div>
                        </div>

                        <div className='bg-gradient-to-b from-0% via-black/50 to-black/100 h-[40vh] w-full absolute bottom-0 z-50 pointer-events-none'></div>
                        <div className='bg-black blur-[35px] absolute bottom-80 w-56 h-8 z-50 pointer-events-none'></div>

                        <div className='bg-[#C776F6] h-[15vh] w-[57vw] absolute -top-27 left-57 rotate-[11.06deg] blur-[120px] pointer-events-none'></div>

                        <div ref={particlesRef} className='z-5 absolute inset-0 left-10 w-screen h-screen'>
                            <Particles
                                particleColors={['#ffffff', '#ffffff']}
                                particleCount={700}
                                particleSpread={16}
                                speed={0.07}
                                particleBaseSize={100}
                                moveParticlesOnHover={true}
                                particleHoverFactor={0.4}
                                alphaParticles={false}
                                disableRotation={false}
                            />
                        </div>

                        <div ref={contentRef} className="flex flex-col gap-5 text-white absolute top-54 md:top-35 z-50 items-center justify-center pointer-events-none">
                            <div className="md:text-[96px] text-[50px] max-w-[70vw] text-center leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#C1C1DF] from-55% to-[#333352] to-95% font-[inter] font-semibold">
                                Earn Crypto by Solving Open Source
                            </div>
                            <p className="max-w-[70vw] text-center leading-none text-[#e5e5ee] font-[inter]">
                                Transform your open-source impact into real earnings with fast and secure Payouts.
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default MaskedPage;
