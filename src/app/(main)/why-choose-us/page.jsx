"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, ArrowRight, CheckCircle2, Award, Wrench, Sparkles, Layers, Compass } from "lucide-react";

const WhyChooseUs = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const editorialFeatures = [
        {
            title: "Sub-Millimeter Precision",
            subtitle: "Laser Calibration",
            description: "Every slab is cut using multi-axis waterjet and laser calibration technology, ensuring an exact tolerance margin of ±0.1mm for seamless, continuous veining.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
            metric: "±0.1mm Tolerance"
        },
        {
            title: "Thermal & Impact Resilience",
            subtitle: "Uncompromising Density",
            description: "Fired at over 1,250°C in automated European kilns, our porcelain slabs achieve a near-zero porosity rating, making them completely immune to thermal shock and heavy commercial stress.",
            image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop",
            metric: "Mohs Rating 8/10"
        },
        {
            title: "Eco-Conscious Synthesis",
            subtitle: "Closed-Loop Manufacturing",
            description: "Luxury should never cost the earth. Our primary production facility recycles 98% of industrial process water and runs entirely on harvested solar energy.",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
            metric: "98% Water Recycled"
        }
    ];

    return (
        <div className="w-full bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
            
            {/* Hero Section with Architectural Grid Backdrop */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-neutral-200 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute right-12 top-1/2 -translate-y-1/2 text-neutral-100 pointer-events-none hidden lg:block">
                    <Grid2X2 size={500} strokeWidth={0.5} />
                </div>

                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-2 bg-neutral-100 px-4 py-2 w-fit border border-neutral-200 mb-6">
                        <Sparkles size={14} className="text-amber-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-700">The Vibecoder Standard</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-black">
                        Engineered <br />For Eternity.
                    </h1>
                    <p className="text-neutral-600 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Standard tiles cover a floor. Vibecoder architectural surfaces define the atmosphere, structure, and legacy of the entire space."
                    </p>
                </div>
            </section>

            {/* Complex Interactive Editorial Showcase */}
            <section className="w-full border-b border-neutral-200">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Left: Interactive Selector Panel */}
                    <div className="p-8 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-200 bg-neutral-50">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-3 block">Technical Masterclass</span>
                        <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-12">
                            Pillars of Excellence
                        </h2>

                        <div className="flex flex-col gap-6">
                            {editorialFeatures.map((feat, index) => (
                                <button
                                    key={feat.title}
                                    onClick={() => setActiveFeature(index)}
                                    className={`text-left p-8 transition-all border group relative overflow-hidden ${
                                        activeFeature === index 
                                            ? "bg-black text-white border-black shadow-2xl scale-[1.02]" 
                                            : "bg-white text-neutral-900 border-neutral-200 hover:border-black"
                                    }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${activeFeature === index ? "text-neutral-400" : "text-neutral-500"}`}>
                                            {feat.subtitle}
                                        </span>
                                        <span className={`text-xs font-black px-3 py-1 border ${activeFeature === index ? "border-neutral-700 bg-neutral-900 text-white" : "border-neutral-200 bg-neutral-100 text-black"}`}>
                                            {feat.metric}
                                        </span>
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight mb-3">
                                        {feat.title}
                                    </h3>
                                    <p className={`text-xs lg:text-sm leading-relaxed ${activeFeature === index ? "text-neutral-300" : "text-neutral-500"}`}>
                                        {feat.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dynamic Image Preview Frame with Zoom Effect */}
                    <div className="relative min-h-[500px] lg:min-h-full bg-neutral-950 overflow-hidden group">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80"
                            style={{ backgroundImage: `url(${editorialFeatures[activeFeature].image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12 lg:p-16">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-2">Active Specification View</span>
                            <div className="text-white text-2xl lg:text-3xl font-serif italic mb-2">
                                "{editorialFeatures[activeFeature].title}"
                            </div>
                            <div className="w-16 h-1 bg-white mt-4"></div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Asymmetric 3-Column Visual Grid */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-neutral-200 bg-neutral-50">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-3 block">Architectural Support</span>
                    <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight">Why Leading Firms Partner With Us</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="bg-white border border-neutral-200 overflow-hidden group flex flex-col justify-between">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop')` }} />
                        </div>
                        <div className="p-8">
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                                <Award size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Trade Pricing & Tiers</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                Dedicated account management for architectural studios and commercial developers with scalable project volume discounts.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-neutral-200 overflow-hidden group flex flex-col justify-between">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1000&auto=format&fit=crop')` }} />
                        </div>
                        <div className="p-8">
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                                <Wrench size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Custom Waterjet Sizing</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                Beyond standard formats, we offer bespoke cuts and oversized slab fabrication engineered precisely to blueprint blueprints.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-neutral-200 overflow-hidden group flex flex-col justify-between">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop')` }} />
                        </div>
                        <div className="p-8">
                            <div className="p-3 bg-neutral-100 w-fit text-black mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                                <CheckCircle2 size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-lg uppercase tracking-wider mb-3">Lifetime Warranty</h3>
                            <p className="text-neutral-500 text-xs leading-relaxed">
                                Every consignment leaves our facility backed by a comprehensive structural guarantee against fading, cracking, and wear.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-black text-white">
                <Grid2X2 size={48} strokeWidth={1.5} className="mb-6 text-neutral-400" />
                <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                    Test the Materiality Yourself
                </h2>
                <p className="text-neutral-400 text-sm lg:text-base max-w-lg mb-10 leading-relaxed">
                    Order a curated architectural sample box or launch our 3D room visualizer to experiment with textures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/room-visualizer" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors">
                        Launch Room Visualizer
                    </Link>
                    <Link href="/contact" className="border border-neutral-700 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
                        Request Sample Kit
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default WhyChooseUs;