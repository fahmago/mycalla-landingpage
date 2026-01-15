'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
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
                <button className="md:hidden text-[#0a050a]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
