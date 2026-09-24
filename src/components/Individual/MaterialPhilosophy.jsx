"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers } from "lucide-react";

const finishes = [
    {
        id: "polished",
        name: "Mirror Polished",
        tagline: "High-Gloss Optical Refraction",
        description: "Achieved through a multi-stage diamond head grinding process, creating an ultra-reflective surface that amplifies spatial light in grand interiors.",
        spec: "Gloss level > 95% • Zero Micro-Porosity",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        href: "/mirror-polished"
    },
    {
        id: "honed",
        name: "Matte Honed",
        tagline: "Velvety Tactile Absorption",
        description: "A silky, non-reflective finish that absorbs ambient light. Designed for minimalist sanctuaries and serene architectural footpaths.",
        spec: "Slip Resistance R10 • Soft-Touch Tactility",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        href: "/matte-honed"
    },
    {
        id: "structured",
        name: "3D Structured",
        tagline: "Tactile Mineral Topography",
        description: "Molded with synchronous digital pressing technology that maps natural stone ridges and fossilized textures directly into the porcelain body.",
        spec: "Depth Variation up to 2.5mm • Frost Proof",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        href: "/3d-structured"
    },
    {
        id: "fluted",
        name: "Architectural Fluted",
        tagline: "Rhythmic Vertical Shadowplay",
        description: "Precision-extruded linear reliefs engineered for feature walls and statement columns, creating dynamic interplay between light and shadow throughout the day.",
        spec: "Custom Depth Profiling • Acoustic Dampening",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        href: "/architectural-fluted"
    }
];

const MaterialPhilosophy = () => {
    const [activeFinish, setActiveFinish] = useState(finishes[0]);

    return (
        <section className="w-full bg-[#0A0A0A] text-white py-28 px-6 sm:px-10 lg:px-20 font-sans relative overflow-hidden">
            
            {/* Background Blueprint Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutral-800 pb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={14} className="text-amber-400" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 font-bold">
                                Surface Anatomy // Craftsmanship
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
                            The Science of Texture.
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed">
                        Beyond visual aesthetics lies our obsession with touch. Each Vibe Code surface undergoes proprietary molecular treatments to achieve distinct tactile signatures.
                    </p>
                </div>

                {/* Interactive Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Interactive Finish Selector */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {finishes.map((finish) => {
                            const isActive = activeFinish.id === finish.id;
                            return (
                                <button
                                    key={finish.id}
                                    onClick={() => setActiveFinish(finish)}
                                    className={`group text-left p-6 transition-all duration-500 border ${
                                        isActive 
                                            ? "bg-neutral-900 border-amber-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] translate-x-2" 
                                            : "bg-transparent border-neutral-800/80 hover:border-neutral-700 text-neutral-400 hover:text-white"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`text-[10px] font-mono tracking-widest uppercase ${isActive ? "text-amber-400" : "text-neutral-500"}`}>
                                            Finish Type // 0{finishes.indexOf(finish) + 1}
                                        </span>
                                        <ArrowRight size={14} className={`transition-transform duration-300 ${isActive ? "text-amber-400 translate-x-1" : "opacity-0 group-hover:opacity-50"}`} />
                                    </div>
                                    <h3 className={`text-xl font-bold tracking-tight uppercase ${isActive ? "text-white font-serif text-2xl" : "text-neutral-300"}`}>
                                        {finish.name}
                                    </h3>
                                    <p className="text-xs text-neutral-500 font-mono mt-1">
                                        {finish.tagline}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Dynamic Preview Showcase */}
                    <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        
                        {/* Background Image with Smooth Crossfade */}
                        <div className="absolute inset-0 z-0">
                            <div 
                                className="w-full h-full bg-cover bg-center opacity-40 transition-all duration-700 ease-out scale-105"
                                style={{ backgroundImage: `url(${activeFinish.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-transparent" />
                        </div>

                        {/* Top Badge */}
                        <div className="relative z-10 flex items-center justify-between">
                            <span className="bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-amber-400 border border-amber-500/30">
                                {activeFinish.spec}
                            </span>
                            <Layers size={20} className="text-neutral-500" />
                        </div>

                        {/* Bottom Detail Content */}
                        <div className="relative z-10 mt-24 space-y-6">
                            <div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-2">
                                    {activeFinish.tagline}
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                                    {activeFinish.name}
                                </h3>
                                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-xl">
                                    {activeFinish.description}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                                <Link 
                                    href={activeFinish.href} 
                                    className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-400 hover:text-white transition-colors group"
                                >
                                    <span>Explore {activeFinish.name}</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                                    Vibe Code Standards
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default MaterialPhilosophy;