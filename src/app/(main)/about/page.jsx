"use client";

import React from "react";
import Link from "next/link";
import { Grid2X2, ArrowRight, ShieldCheck, Compass, Sparkles, Layers } from "lucide-react";

const AboutUs = () => {
    return (
        <div className="w-full bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
            
            {/* Hero Section */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-neutral-200 flex flex-col justify-center">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-500 mb-6 block">
                        Est. 2026 • Brand Heritage
                    </span>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-black">
                        Architectural <br />Surfaces, Redefined.
                    </h1>
                    <p className="text-neutral-600 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "We believe that every tile is more than a surface—it is a foundation of human experience, sculpted from earth and engineered for eternity."
                    </p>
                </div>
            </section>

            {/* Split Media & Vision Section */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-neutral-200">
                <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-200">
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4">Our Philosophy</h2>
                    <h3 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-8">
                        The Intersection of Art and Engineering
                    </h3>
                    <p className="text-neutral-600 text-sm lg:text-base leading-relaxed mb-6">
                        At Vibecoder Ceramics, we bridge raw geological elements with cutting-edge European manufacturing technology. Every slab we produce undergoes rigorous pressure-testing and aesthetic refinement to guarantee absolute visual harmony.
                    </p>
                    <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                        Whether designing minimalist commercial spaces or luxury residential interiors, our collections provide structural integrity without ever compromising on soul.
                    </p>
                </div>

                <div className="relative min-h-[400px] lg:min-h-full bg-neutral-100 overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')` }}
                    />
                </div>
            </section>

            {/* Core Pillars Grid */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-neutral-200 bg-neutral-50">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-3 block">Foundational Values</span>
                    <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight">Built On Four Pillars</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div className="bg-white p-8 border border-neutral-200 flex flex-col justify-between group hover:border-black transition-colors">
                        <div>
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                <Compass size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Precision Cut</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                Calibrated down to the sub-millimeter for seamless grout lines and continuous visual patterns.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 border border-neutral-200 flex flex-col justify-between group hover:border-black transition-colors">
                        <div>
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                <ShieldCheck size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Lifetime Durability</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                High-density porcelain slabs engineered to withstand extreme thermal shock, impact, and wear.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 border border-neutral-200 flex flex-col justify-between group hover:border-black transition-colors">
                        <div>
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                <Sparkles size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Aesthetic Purity</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                Glazes sourced from natural minerals that capture the authentic depth of raw European marble and slate.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 border border-neutral-200 flex flex-col justify-between group hover:border-black transition-colors">
                        <div>
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                <Layers size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Eco-Conscious</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                Closed-loop manufacturing cycles that recycle 98% of processing water and minimize carbon footprints.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-black text-white">
                <Grid2X2 size={48} strokeWidth={1.5} className="mb-6 text-neutral-400" />
                <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                    Ready to Explore Our Showroom?
                </h2>
                <p className="text-neutral-400 text-sm lg:text-base max-w-lg mb-10 leading-relaxed">
                    Discover our full suite of porcelain slabs, bathroom finishes, and interactive 3D tools designed for your next project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/collections/new-arrivals" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors">
                        View Collections
                    </Link>
                    <Link href="/contact" className="border border-neutral-700 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
                        Contact Showroom
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;