'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { title: 'LumeMind', desc: 'Mental Health Tracker', size: 'large', image: '/portfolio-lumemind.png' },
    { title: 'JajananKita', desc: 'Web E-Commerce', size: 'small', image: '/portfolio-jajanan.png' },
    { title: 'Digital Date Management', desc: 'System Design', size: 'small', image: '/portfolio-digital-data.png' },
    { title: 'Foodian', desc: 'Food Ordering App', size: 'large', image: '/portfolio-foodian.png' },
    { title: 'Matahari App', desc: 'Retail App Redesign', size: 'small', image: '/portfolio-matahari.png' },
    { title: 'Sheject Indonesia', desc: 'Women-focused Ride App', size: 'small', image: '/portfolio-sheject.png' },
    { title: '3D Wedding Invitation', desc: 'Immersive Experience', size: 'small', image: '/portfolio-wedding.png' },
    { title: 'Peta Rasa', desc: 'Food Ordering Website', size: 'large', image: '/portfolio-petarasa.png' },
];

export default function Portfolio() {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.portfolio-card');

            gsap.fromTo(
                cards,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    }, []);

    return (
        <section id="work" className="relative py-24 px-6 bg-gray-50 overflow-hidden">


            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-[#0a050a] mb-4">
                        Selected <span className="text-[#42224A]">Work</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Crafting digital experiences that resonate and inspire action.
                    </p>
                </div>

                {/* Bento Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer ${project.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[240px] md:h-[500px]' : 'h-[240px]'
                                } bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-2xl transition-all duration-500`}
                        >
                            {/* Portfolio Image */}
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            )}

                            {/* Placeholder bg pattern for cards without images */}
                            {!project.image && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#42224A]/10 to-transparent" />
                            )}

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[#42224A]/0 group-hover:bg-[#42224A]/90 transition-all duration-500" />

                                {/* Text */}
                                <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/90 transition-colors duration-500 opacity-0 group-hover:opacity-100">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
