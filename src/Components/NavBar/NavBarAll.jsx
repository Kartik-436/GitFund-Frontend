/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

const NavBarAll = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const NavBarC = useRef(null);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                </div>

                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className="relative min-w-[30vw] px-10 scale-0 lg:scale-100 h-[9vh] flex items-center justify-center text-white rounded-full border-[1.2px] border-[#ffffff88] gap-10 cursor-pointer z-[1] bg-[#09090b50] overflow-hidden" id="NavBar">

                        {/* Elliptical Hover BG */}
                        <div id="hover-ellipse" className="absolute top-0 left-0 h-full w-[8rem] bg-[#18181b] rounded-full transition-all duration-300 -z-10 opacity-0"></div>

                        <span className="NavBarElem relative z-10" onMouseEnter={(e) => handleHover(e)} onClick={() => handleNavigation('')}>
                            Bounties
                        </span>

                        <span className="NavBarElem relative z-10" onMouseEnter={(e) => handleHover(e)} onClick={() => handleNavigation('')}>
                            How it Works
                        </span>

                        <span className="NavBarElem relative z-10" onMouseEnter={(e) => handleHover(e)} onClick={() => handleNavigation('')}>
                            Customers
                        </span>

                        <span className="NavBarElem relative z-10" onMouseEnter={(e) => handleHover(e)} onClick={() => handleNavigation('')}>
                            Dashboard
                        </span>
                    </div>

                </div>

                <div className='flex items-center justify-center gap-3 cursor-pointer'>
                    <div className='text-xl text-white font-semibold' onClick={() => handleNavigation('')}>
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
