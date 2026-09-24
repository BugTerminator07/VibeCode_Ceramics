import React from "react";
import Link from "next/link";
import { Grid2X2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    // Defined link objects with proper href routing and URL parameters
    const exploreLinks = [
        { name: 'New Arrivals', href: '/catalogue?category=new arrival' },
        { name: 'Porcelain Tiles', href: '/catalogue?category=porcelain tiles' },
        { name: 'Ceramic Slabs', href: '/catalogue?category=ceramic slabs' },
        { name: 'Bathroom Collection', href: '/catalogue?category=bathroom collection' },
        { name: 'Outdoor Pavers', href: '/catalogue?category=outdoor pavers' }
    ];

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Careers', href: '/career' },
        { name: 'Store Locator', href: '/store-locator' },
        { name: 'News & Events', href: '/news' }
    ];

    return (
        <footer className="w-full bg-neutral-950 text-white font-sans border-t-4 border-black">
            
            {/* Top Section - Newsletter */}
            <div className="w-full flex flex-col lg:flex-row border-b border-neutral-800">
                <div className="flex-1 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-[0.15em] mb-4">Stay Inspired</h2>
                    <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
                        Subscribe to our newsletter to receive the latest updates on new collections, interior design trends, and exclusive offers.
                    </p>
                </div>
                
                <div className="flex-1 p-8 lg:p-16 flex items-center justify-center lg:justify-start bg-neutral-900/50">
                    <div className="w-full max-w-lg flex items-center gap-4 border-b border-neutral-600 focus-within:border-white transition-colors pb-3 group">
                        <input 
                            type="email" 
                            placeholder="ENTER YOUR EMAIL ADDRESS" 
                            className="w-full bg-transparent outline-none text-sm tracking-widest placeholder:text-neutral-500 uppercase text-white"
                        />
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-neutral-400 transition-colors">
                            Subscribe <ArrowRight size={16} className="group-focus-within:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Links Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-neutral-800">
                
                {/* Column 1: Brand */}
                <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between min-h-[300px]">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="text-white group-hover:rotate-90 transition-transform duration-700 ease-in-out">
                            <Grid2X2 size={36} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center border-l border-neutral-700 pl-3">
                            <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none text-white">
                                Vibecoder
                            </span>
                            <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 mt-1">
                                Ceramics
                            </span>
                        </div>
                    </Link>
                    
                    <div className="mt-8">
                        <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                            Redefining spaces with premium architectural surfaces. Crafted for elegance, engineered for durability.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com/vibecoderceramics" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><FaFacebook size={20} /></Link>
                            <Link href="https://twitter.com/vibecoderceramics" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><FaTwitter size={20} /></Link>
                            <Link href="https://instagram.com/vibecoderceramics" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><FaInstagram size={20} /></Link>
                            <Link href="https://linkedin.com/company/vibecoderceramics" target="_blank" className="text-neutral-400 hover:text-white transition-colors"><FaLinkedin size={20} /></Link>
                        </div>
                    </div>
                </div>

                {/* Column 2: Explore */}
                <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-neutral-800">
                    <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] mb-8">Explore</h3>
                    <div className="flex flex-col gap-4">
                        {exploreLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                                <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Column 3: Company */}
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-neutral-800">
                    <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] mb-8">Company</h3>
                    <div className="flex flex-col gap-4">
                        {companyLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                                <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Column 4: Contact */}
                <div className="p-8 lg:p-12">
                    <h3 className="font-bold text-xs text-white uppercase tracking-[0.2em] mb-8">Contact Us</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4 text-neutral-400">
                            <MapPin size={20} className="shrink-0 mt-0.5 text-white" />
                            <span className="text-sm leading-relaxed">Level 4, Vibecoder Tower<br/>123 Architectural Way<br/>Design District, NY 10001</span>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-400">
                            <Phone size={20} className="shrink-0 text-white" />
                            <span className="text-sm">+1 (800) 555-TILE</span>
                        </div>
                        <div className="flex items-center gap-4 text-neutral-400">
                            <Mail size={20} className="shrink-0 text-white" />
                            <span className="text-sm">hello@vibecoderceramics.com</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar - Copyright & Legal */}
            <div className="w-full bg-black px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[10px] text-neutral-500 tracking-[0.1em] uppercase">
                    &copy; {new Date().getFullYear()} Vibecoder Ceramics. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="/privacy" className="text-[10px] text-neutral-500 hover:text-white tracking-[0.1em] uppercase transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-[10px] text-neutral-500 hover:text-white tracking-[0.1em] uppercase transition-colors">Terms of Service</Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;