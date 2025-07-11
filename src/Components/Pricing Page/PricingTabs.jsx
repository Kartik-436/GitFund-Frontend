"use client";

import { Tabs } from "./tabs";

const plans = [
    {
        title: 'Free',
        description: 'For everyone starting out',
        price: '$0',
        subtext: 'free for everyone',
        buttonText: 'Get started for free',
        features: ['Free and open-source forever', '', '', '', '', ''],
        gradient: 'bg-gradient-to-b from-[#0f0f0f] to-black',
    },
    {
        title: 'Pro',
        description: 'For early-stage founders,\nsolopreneurs and indie devs',
        price: '$0',
        subtext: 'one-time payment\nplus local taxes',
        buttonText: 'Get all-access',
        features: ['Free and open-source forever', '', '', '', '', '', ''],
        gradient: 'bg-gradient-to-b from-purple-900 to-black',
    },
    {
        title: 'Ultra',
        description: 'For teams and agencies working\non cool products together',
        price: '$0',
        subtext: 'one-time payment\nplus local taxes',
        buttonText: 'Get all-access for your team',
        features: ['Everything', '', '', '', '', '', ''],
        gradient: 'bg-gradient-to-b from-[#0f0f0f] to-black',
    },
];

export default function PricingPlans() {
    return (
        <section className="w-full text-white flex items-center justify-center py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-xl p-6 ${plan.gradient} border border-neutral-800 shadow-black shadow-lg flex flex-col justify-between transition-transform hover:scale-105`}
                    >
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">{plan.title}</h2>
                            <p className="text-sm whitespace-pre-line font-medium text-gray-400">{plan.description}</p>
                            <div className="text-4xl font-bold">{plan.price}</div>
                            <p className="text-sm whitespace-pre-line font-medium text-gray-400">{plan.subtext}</p>
                            <button className="mt-4 w-full py-2 px-4 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-md font-medium text-xl">
                                {plan.buttonText}
                            </button>
                            <p className="text-sm text-gray-400 mt-4">Free and open-source forever</p>
                            <div className="mt-4 space-y-2 text-sm text-gray-300">
                                {plan.features.map((feature, i) => (
                                    feature && (
                                        <div key={i} className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
                                            <span>{feature}</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function PricingTabs() {
    const tabs = [
        {
            title: "Contributer",
            value: "Contributer",
            content: (
                <div
                    className="w-full overflow-hidden relative min-h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#9D00FF] flex flex-col items-center gap-3">
                    <h1 className="text-[3.3vw] font-bold text-center">Ready to Turn Code into Money?</h1>
                    <p className="md:text-[1vw] text-[1.5vw] font-semibold text-center">Join a growing community of developers monetizing their open-source passion.</p>

                    <div className="h-full w-full">
                        <PricingPlans />
                    </div>
                </div>
            ),
        },
        {
            title: "Maintainer",
            value: "Maintainer",
            content: (
                <div
                    className="w-full overflow-hidden relative min-h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#9D00FF] flex flex-col items-center gap-3">
                    <h1 className="text-[3.3vw] font-bold text-center">Boost Your Project, Attract Top Talent</h1>
                    <p className="md:text-[1vw] text-[2vw] font-semibold text-center">Create Bounties & Grow Your Community.</p>

                    <div className="h-full w-full">
                        <PricingPlans />
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div
            className="min-h-[22rem] md:min-h-[42rem] [perspective:1000px] relative b flex flex-col max-w-[80vw] mx-auto w-full  items-start justify-start my-[30vh] z-20">
            <Tabs tabs={tabs} />
        </div>
    );
}
