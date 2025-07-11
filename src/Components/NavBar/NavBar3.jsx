/* eslint-disable no-unused-vars */
'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useThemeChange } from '../End/ThemeChangeContext';
import NeowareLogo from './RotatingLogo';
import gsap from 'gsap';
import FlipLink from './FlipLinks';

const NavBar3 = () => {
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

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const { isThemeDark, setIsThemeDark } = useThemeChange();

    const AnimatedLogoText = () => {
        const textRef = useRef();
        const [spinDirection, setSpinDirection] = useState('clockwise');

        useLayoutEffect(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });

            tl.to(textRef.current, {
                xPercent: -130,
                duration: 1.6,
                ease: 'power2.inOut',
                onStart: () => setSpinDirection('anticlockwise'),
            })
                .to(textRef.current, {
                    xPercent: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                })
                .to(textRef.current, {
                    xPercent: 130,
                    duration: 1.6,
                    ease: 'power2.inOut',
                    onStart: () => setSpinDirection('clockwise'),
                    delay: 4,
                })
                .to(textRef.current, {
                    xPercent: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                });

            return () => tl.kill();
        }, []);

        return (
            <div className='w-full h-full flex items-center justify-start'>
                <div>
                    <NeowareLogo
                        width={60}
                        height={60}
                        size={2.2}
                        speed={0.08}
                        direction={spinDirection}
                    />
                </div>
                <div className='overflow-hidden'>
                    <h1
                        ref={textRef}
                        className='text-white text-2xl text-center font-semibold scale-y-120 font-[Poppins]'
                    >
                        neoware
                    </h1>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div
                ref={NavBarC}
                className={`h-[12vh] z-[9999] w-screen fixed top-[10px] md:top-4 left-0 pl-8 md:px-16 flex items-center justify-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'
                    }`}
            >
                {/* Mobile Nav - Burger Menu */}
                <div className="md:hidden fixed top-6 right-5 z-[100]">
                    <motion.div
                        className="w-10 h-10 flex flex-col justify-center items-center gap-1 cursor-pointer"
                        onClick={toggleMenu}
                        initial={false}
                        animate={menuOpen ? "open" : "closed"}
                    >
                        <motion.span
                            className="w-8 h-[2px] bg-white rounded"
                            variants={{
                                open: { rotate: 45, y: 6 },
                                closed: { rotate: 0, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-8 h-[2px] bg-white rounded"
                            variants={{
                                open: { opacity: 0 },
                                closed: { opacity: 1 },
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="w-8 h-[2px] bg-white rounded"
                            variants={{
                                open: { rotate: -45, y: -6 },
                                closed: { rotate: 0, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>

                {/* Mobile Menu Drawer */}
                <motion.div
                    className="md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-lg bg-[#09090b99] z-[90] px-6 py-10 flex flex-col gap-6"
                    initial={{ x: '100%' }}
                    animate={{ x: menuOpen ? '0%' : '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <div className="flex flex-col gap-6 mt-20 text-white font-[kanit] text-xl">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.id}
                                onClick={() => {
                                    handleNavigation(item.id);
                                    setMenuOpen(false);
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="border-b border-white/20 pb-2"
                            >
                                {item.text}
                            </motion.div>
                        ))}
                        <div className="mt-6 flex flex-col gap-4">
                            <motion.div
                                className="py-3 text-center rounded-lg font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-lg"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    handleNavigation('');
                                    setMenuOpen(false);
                                }}
                            >
                                Register
                            </motion.div>
                            <motion.div
                                className="py-3 text-center rounded-lg font-semibold bg-[#a200ff] text-white backdrop-blur-lg"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    handleNavigation('');
                                    setMenuOpen(false);
                                }}
                            >
                                Sign In
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className='md:hidden flex w-full items-center justify-start'>
                    <AnimatedLogoText />
                </div>

                <div className='min-w-[65%] min-h-[9vh] bg-[#09090b81] px-5 py-2 rounded-full border-[#ffffff88] border-[1.2px] md:flex hidden items-center justify-between gap-10'>
                    <AnimatedLogoText />

                    <div className='w-full h-full flex items-center gap-10 text-center'>
                        <FlipLink children={"How it Works"} size={"text-md"} color={"text-white"} />
                        <FlipLink children={"Bounties"} size={"text-md"} color={"text-white"} />
                        <FlipLink children={"Customers"} size={"text-md"} color={"text-white"} />
                        <FlipLink children={"Dashboard"} size={"text-md"} color={"text-white"} />
                    </div>

                    <div className='w-full h-full flex items-center justify-end gap-3'>
                        <div className='px-5 py-2 rounded-full font-semibold text-nowrap text-black bg-[#fff] shadow-[0_0_15px_5px] shadow-[#fff] cursor-pointer' onClick={() => handleNavigation('')}>
                            Log In
                        </div>

                        <div className='px-5 py-2 rounded-full font-semibold text-nowrap text-white bg-[#a200ff] shadow-[0_0_15px_5px] shadow-[#a200ff] cursor-pointer' onClick={() => handleNavigation('')}>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar3;
