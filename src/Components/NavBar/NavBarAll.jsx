/* eslint-disable no-unused-vars */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';

const NavBarAll = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const NavBarC = useRef(null);
    const hoverBgRef = useRef(null);
    const navItemsRef = useRef([]);

    const leftMotion = useMotionValue(0);
    const widthMotion = useMotionValue(0);
    const [showBg, setShowBg] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY.current);
        lastScrollY.current = currentScrollY;
    };

    const handleClick = () => {
        window.location.reload();
    };

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHover = (e) => {
        const target = e.currentTarget;
        const navbar = target.closest('#NavBar');
        const hoverBg = hoverBgRef.current;

        if (!hoverBg || !navbar) return;

        const navbarRect = navbar.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const leftOffset = targetRect.left - navbarRect.left;
        const width = targetRect.width;

        animate(leftMotion, leftOffset, { duration: 0.3, ease: [0.4, 0, 0.2, 1] });
        animate(widthMotion, width, { duration: 0.3, ease: [0.4, 0, 0.2, 1] });

        setShowBg(true);
    };

    const handleMouseLeave = () => {
        // Just fade out visually, but keep it alive
        setShowBg(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { text: 'How it Works', id: 'how-it-works' },
        { text: 'Bounties', id: 'bounties' },
        { text: 'Customers', id: 'customers' },
        { text: 'Dashboard', id: 'dashboard' },
    ];

    return (
        <div>
            <div
                ref={NavBarC}
                className={`h-[12vh] z-50 w-screen fixed top-[10px] md:top-4 left-0 pl-9 md:px-16 flex items-center justify-between transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'
                    }`}
            >
                <div
                    onClick={handleClick}
                    className="rounded-full flex items-center justify-center gap-1 cursor-pointer hover:scale-110 transition-[all_1s_ease-in-out] active:scale-95"
                >
                    <span className="text-white font-semibold font-[kanit] md:text-[2.2rem] text-[1rem]">
                        Git
                    </span>
                    <span className="text-[#a200ff] font-bold font-[kanit] md:text-[2.2rem] text-[1rem]">
                        Fund
                    </span>

                    {/* <Image alt="Font Image" src="/FONT-1.png" width={200} height={200} /> */}
                </div>

                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div
                        className="relative min-w-[30vw] px-2 scale-0 lg:scale-100 h-[9vh] flex items-center justify-center text-white rounded-full border-[1.2px] border-[#ffffff88] gap-10 cursor-pointer z-[1] bg-[#09090b50] overflow-hidden"
                        id="NavBar"
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Framer Motion Animated Hover Background */}
                        <motion.div
                            ref={hoverBgRef}
                            className="absolute top-1/2 -translate-y-1/2 h-[80%] bg-[#fff] rounded-full -z-10 pointer-events-none"
                            style={{
                                left: leftMotion,
                                width: widthMotion,
                                opacity: showBg ? 1 : 0,
                                transition: 'opacity 0.3s ease'
                            }}
                        />

                        {navItems.map((item, index) => (
                            <span
                                key={item.id}
                                ref={el => navItemsRef.current[index] = el}
                                className="NavBarElem relative z-40 px-4 py-2 font-semibold transition-all duration-200 text-white whitespace-nowrap hover:text-[#a200ff] hover:scale-105"
                                onMouseEnter={handleHover}
                                onClick={() => handleNavigation(item.id)}
                            >
                                {item.text}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='flex items-center justify-center gap-4 cursor-pointer'>
                    <div className='text-lg text-white font-semibold' onClick={() => handleNavigation('')}>
                        Register
                    </div>
                    <div className='text-md py-2 px-6 bg-[#a200ff] text-[#f3f3f3] font-semibold rounded-lg' onClick={() => handleNavigation('')}>
                        Sign In
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBarAll;
