'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Page2 from './Page2';
import Page1 from './GradientSemiCircle';

gsap.registerPlugin(ScrollTrigger);

const MaskedPage = () => {
    const MaskRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=1000', // adjust based on how much scroll you want
                scrub: true,
                pin: true,
            },
        });

        tl.to(MaskRef.current, {
            maskSize: "200px",
            ease: "power3.inOut"
        });

        tl.to(MaskRef.current, {
            maskSize: "1800px",
            ease: "power3.inOut"
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <main ref={containerRef} className='main relative min-h-screen h-full w-full'>
                <motion.div ref={MaskRef}
                    className='mask z-20'
                >
                    <Page2 />
                </motion.div>

                <div className='body absolute top-0 -z-10'>
                    <Page1 />
                </div>

            </main>
        </>
    );
};

export default MaskedPage;
