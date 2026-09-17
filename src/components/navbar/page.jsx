"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    Menu, MapPin, BookOpen, Search, 
    X, Grid2X2, ArrowRight 
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200 text-neutral-900 font-sans shadow-sm flex flex-col relative">
            
            {/* Main Grid Navbar - Full width, strict 20 units height */}
            <div className="w-full flex h-20">
                
                {/* Left Section - Flex 1 to push center logo to exact middle */}
                <div className="flex-1 flex h-full border-r border-neutral-200">
                    <button 
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            setIsSearchOpen(false);
                        }}
                        className="h-full px-6 lg:px-8 flex items-center justify-center border-r border-neutral-200 hover:bg-neutral-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                    
                    <Link href="/store-locator" className="h-full px-6 hidden lg:flex items-center gap-3 border-r border-neutral-200 hover:bg-neutral-50 transition-colors text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-black">
                        <MapPin size={16} strokeWidth={1.5} />
                        <span>Store Locator</span>
                    </Link>
                    
                    <Link href="/catalogue" className="h-full px-6 hidden lg:flex items-center gap-3 hover:bg-neutral-50 transition-colors text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-black">
                        <BookOpen size={16} strokeWidth={1.5} />
                        <span>Catalogue</span>
                    </Link>
                </div>

                {/* Middle Section - Logo locked in its own bordered cell */}
                <div className="flex h-full items-center justify-center px-6 lg:px-12 border-r border-neutral-200">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="text-black group-hover:rotate-90 transition-transform duration-700 ease-in-out">
                            <Grid2X2 size={32} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center border-l border-neutral-300 pl-3">
                            <span className="text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase leading-none text-black">
                                Vibe Code
                            </span>
                            <span className="text-[10px] lg:text-xs tracking-[0.4em] uppercase text-neutral-500 mt-1">
                                Ceramics
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex h-full justify-end">
                    
                    {/* Upgraded Room Visualizer Badge */}
                    <Link href="/room-visualizer" className="h-full px-6 hidden xl:flex flex-col items-center justify-center border-l border-neutral-200 hover:bg-neutral-50 transition-colors group/vis">
                        <span className="font-semibold uppercase tracking-[0.15em] text-[11px] text-neutral-600 group-hover/vis:text-black transition-colors">Room Visualizer</span>
                        
                        <div className="mt-1.5 flex items-center gap-2 bg-gradient-to-r from-green-600 to-violet-500 px-3 py-1 rounded-full shadow-sm group-hover/vis:shadow-md group-hover/vis:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="relative flex items-center justify-center h-1.5 w-1.5 ml-0.5">
                                {/* High-frequency 0.6s radar ping */}
                                <span className="absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75 animate-[ping_0.6s_ease-out_infinite]"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"></span>
                            </div>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white font-black drop-shadow-sm pr-0.5">Live 3D</span>
                        </div>
                    </Link>

                    <Link href="/login" className="h-full px-6 hidden sm:flex items-center justify-center border-l border-neutral-200 hover:bg-neutral-50 transition-colors text-xs uppercase font-semibold tracking-[0.15em] text-neutral-600 hover:text-black">
                        Login
                    </Link>

                    <button 
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen);
                            setIsMenuOpen(false);
                        }}
                        className="h-full px-6 lg:px-8 flex items-center justify-center border-l border-neutral-200 hover:bg-neutral-100 transition-colors"
                    >
                        <Search size={24} strokeWidth={1.5} />
                    </button>

                    {/* Solid black block on the far right to anchor the design */}
                    <Link href="/signup" className="h-full px-6 lg:px-10 hidden sm:flex items-center justify-center bg-black text-white hover:bg-neutral-800 transition-colors text-xs uppercase font-semibold tracking-[0.15em]">
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Search Bar Dropdown */}
            <div 
                className={`absolute top-full left-0 w-full bg-white border-b border-neutral-200 overflow-hidden transition-all duration-300 ease-in-out ${
                    isSearchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0 border-transparent"
                }`}
            >
                <div className="container mx-auto px-4 py-5 flex items-center justify-center">
                    <div className="w-full max-w-3xl flex items-center gap-4 border-b-2 border-black pb-2">
                        <Search size={24} className="text-neutral-400" />
                        <input 
                            type="text" 
                            placeholder="SEARCH COLLECTIONS, TILES, OR STYLES..." 
                            className="w-full bg-transparent outline-none text-sm lg:text-lg tracking-widest placeholder:text-neutral-400 uppercase"
                        />
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-neutral-500">Search</button>
                    </div>
                </div>
            </div>

            {/* High-Contrast Dark Mega Menu */}
            <div 
                className={`absolute top-full left-0 w-full bg-neutral-950 text-neutral-400 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isMenuOpen ? "max-h-[800px] opacity-100 border-t border-neutral-800" : "max-h-0 opacity-0"
                }`}
            >
                <div className="w-full px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    
                    {/* Column 1: Company */}
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] border-b border-neutral-800 pb-4 mb-2">Company</h3>
                        <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            About us
                        </Link>
                        <Link href="/why-choose-us" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            Why choose us
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            Contact us
                        </Link>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] border-b border-neutral-800 pb-4 mb-2">Quick Links</h3>
                        <Link href="/dealers" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            Dealers Profile
                        </Link>
                        <Link href="/news" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            News & Events
                        </Link>
                        <Link href="/display-center" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            Display Center
                        </Link>
                        <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                            Our Projects
                        </Link>
                    </div>

                    {/* Column 3: Feature / Lookbook */}
                    <div className="lg:col-span-2 flex flex-col justify-center items-center bg-neutral-900 border border-neutral-800 p-8 group cursor-pointer hover:border-neutral-600 transition-colors">
                        <div className="text-white text-xl font-serif mb-4">The 2026 Collection</div>
                        <p className="text-xs text-center leading-relaxed max-w-xs mb-6">Explore our latest porcelain and ceramic surfaces, inspired by natural European stone.</p>
                        <div className="flex items-center gap-3 text-white text-xs uppercase tracking-widest font-bold group-hover:gap-5 transition-all">
                            View Lookbook <ArrowRight size={16} />
                        </div>
                    </div>

                    {/* Column 4: Important Links & Socials */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-5 pt-2">
                            <Link href="/career" className="font-bold text-xl text-white hover:text-neutral-400 transition-colors uppercase tracking-wide">Career</Link>
                            <Link href="/faq" className="font-bold text-xl text-white hover:text-neutral-400 transition-colors uppercase tracking-wide">FAQ</Link>
                            <Link href="/" className="font-bold text-xl text-white hover:text-neutral-400 transition-colors uppercase tracking-wide">Homepage</Link>
                        </div>

                        <div className="flex flex-col gap-5 mt-auto">
                            <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] border-b border-neutral-800 pb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                <Link href="#" className="p-3 border border-neutral-700 hover:border-white hover:bg-white hover:text-black transition-all text-white">
                                    <FaFacebook size={18} />
                                </Link>
                                <Link href="#" className="p-3 border border-neutral-700 hover:border-white hover:bg-white hover:text-black transition-all text-white">
                                    <FaTwitter size={18} />
                                </Link>
                                <Link href="#" className="p-3 border border-neutral-700 hover:border-white hover:bg-white hover:text-black transition-all text-white">
                                    <FaInstagram size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;