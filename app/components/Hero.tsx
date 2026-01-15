'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const blobRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial pop-up animation for blob (bounces in)
        if (blobRef.current) {
            gsap.fromTo(
                blobRef.current,
                { scale: 0, opacity: 0, rotation: -20 },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.2,
                    ease: 'back.out(1.7)',
                    delay: 0.2,
                }
            );

            // Then start the continuous lava lamp floating animation
            gsap.to(blobRef.current, {
                y: 30,
                x: 20,
                rotation: 5,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 1.4,
            });
        }

        // Parallax effect on scroll for blob
        if (heroRef.current && blobRef.current) {
            gsap.to(blobRef.current, {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                y: -150,
            });
        }

        // Pop-up + stagger reveal for text (bounces in)
        gsap.fromTo(
            '.hero-text > *',
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.4)',
                delay: 0.6,
            }
        );
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-end overflow-hidden bg-white pt-20 px-6 md:pr-12 md:px-0"
        >
            {/* 3D Background - Blob (LEFT SIDE, NO TRANSPARENCY) */}
            <div
                ref={blobRef}
                className="absolute -left-20 md:left-24 top-[40%] md:top-[55%] -translate-y-1/2 w-[150px] h-[150px] md:w-[550px] md:h-[550px] pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <Image
                    src="/blob.png"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Hero Content (RIGHT-ALIGNED) */}
            <div className="relative z-10 max-w-5xl text-center md:text-right hero-text">
                <h1 className="text-5xl md:text-7xl font-black text-[#0a050a] mb-6 leading-none">
                    WE SHAPE<br />
                    <span className="text-[#42224A]">DIGITAL<br />IDENTITIES</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 mx-auto md:ml-auto md:mr-0 max-w-xl">
                    Transforming brands into unforgettable digital experiences through innovation and creativity.
                </p>
                <div className="flex justify-center md:justify-end">
                    <button className="bg-[#42224A] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#5a2f62] transition-all hover:shadow-2xl hover:scale-105">
                        Explore Our Work
                    </button>
                </div>
            </div>
        </section>
    );
}
