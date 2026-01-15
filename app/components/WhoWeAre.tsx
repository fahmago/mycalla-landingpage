'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function WhoWeAre() {
    const spheresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Floating animation for spheres
        if (spheresRef.current) {
            gsap.to(spheresRef.current, {
                y: 40,
                x: -20,
                rotation: 10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }
    }, []);

    return (
        <section className="relative py-24 px-16 bg-white overflow-hidden">
            {/* Animated Glass Spheres - Right Side */}
            <div
                ref={spheresRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-50"
            >
                <Image
                    src="/spheres.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl">
                    {/* Section Label */}
                    <p className="text-[#42224A] font-bold text-xl uppercase tracking-wide mb-4">
                        WHO WE ARE
                    </p>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a050a] mb-6 leading-tight">
                        Real people delivering <span className="text-[#42224A]">real results</span>.
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        We are a digital creative agency that transforms ambitious brands through innovative
                        design and strategic digital experiences. At MyCalla Studio, we don't just create
                        visuals — we craft identities that resonate. From brand identity to digital products,
                        we elevate your presence with creativity and precision.
                    </p>

                    {/* Feature Cards */}
                    <div className="space-y-6">
                        {/* Marketing Agency */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#42224A]/10 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#42224A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#0a050a] mb-2">Digital Creative Agency</h3>
                                <p className="text-gray-600">
                                    As a digital creative agency, we design brand experiences, interfaces, and digital products that
                                    captivate your audience — not just aesthetically, but emotionally. We merge artistry with
                                    technology to ensure every project delivers memorable impact.
                                </p>
                            </div>
                        </div>

                        {/* Digital Boosting */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#42224A]/10 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#42224A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#0a050a] mb-2">Creative Excellence</h3>
                                <p className="text-gray-600">
                                    Creative excellence means pushing boundaries in design, interaction, and storytelling.
                                    We craft pixel-perfect interfaces, immersive experiences, and brand narratives that stand out.
                                    Every detail is intentional, every interaction is delightful — designed to leave a lasting impression.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
