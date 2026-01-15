'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logo.png"
                        alt="MyCalla Studio"
                        width={300}
                        height={100}
                        className="h-24 w-auto"
                        priority
                    />
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#work" className="text-[#0a050a] hover:text-[#42224A] transition-colors font-medium">
                        Work
                    </Link>
                    <Link href="#about" className="text-[#0a050a] hover:text-[#42224A] transition-colors font-medium">
                        About
                    </Link>
                    <Link href="#services" className="text-[#0a050a] hover:text-[#42224A] transition-colors font-medium">
                        Services
                    </Link>
                    <Link href="#contact" className="text-[#0a050a] hover:text-[#42224A] transition-colors font-medium">
                        Contact
                    </Link>

                    {/* CTA Button */}
                    <Link
                        href="https://wa.me/6285811520570"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#42224A] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#5a2f62] transition-all hover:shadow-lg"
                    >
                        Start a Project
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#0a050a] transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-[#0a050a] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block w-6 h-0.5 bg-[#0a050a] transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8 h-screen w-screen top-0 left-0 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
                    <Link href="#work" onClick={() => setIsOpen(false)} className="text-2xl text-[#0a050a] font-medium hover:text-[#42224A]">Work</Link>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl text-[#0a050a] font-medium hover:text-[#42224A]">About</Link>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="text-2xl text-[#0a050a] font-medium hover:text-[#42224A]">Services</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="text-2xl text-[#0a050a] font-medium hover:text-[#42224A]">Contact</Link>
                    <Link
                        href="https://wa.me/6285811520570"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#42224A] text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-[#5a2f62] transition-all hover:shadow-lg"
                    >
                        Start a Project
                    </Link>
                </div>
            </div>
        </nav>
    );
}
