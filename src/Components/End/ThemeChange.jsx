"use Client";
import React from 'react'
import DotGrid from '../WhyChoose/DotGridBackground';
import clsx from 'clsx';

const WhiteCircle = ({ x, y }) => {
    return (
        <div
            className={clsx(
                'h-30 w-30 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center',
                `top-[${y}]`,
                `left-[${x}]`
            )}
        >
            <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
            <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
        </div>
    );
};

const ThemeChange = () => {
    return (
        <div className='bg-[#F0EBE3] w-full min-h-[150vh] overflow-hidden relative'>

            <div
                className={'h-30 w-30 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[47%] left-[80%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

            <div
                className={'h-30 w-30 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[33%] left-[43%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

            <div
                className={'h-30 w-30 bg-white shadow-xl absolute z-50 rounded-full flex items-center justify-center top-[55%] left-[11%]'}
            >
                <div className="bg-[#33333346] h-[128px] w-[128px] rounded-full blur-lg"></div>
                <div className="bg-[#ffffffc5] h-10 w-10 rounded-full blur-md absolute"></div>
            </div>

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

export default ThemeChange
