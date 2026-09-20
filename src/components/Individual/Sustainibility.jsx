"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
    ChevronLeft, ChevronRight, ArrowRight, 
    Droplets, Flame, Recycle, ShieldCheck, 
    Leaf, Sparkles, CheckCircle2
} from "lucide-react";

const Sustainability = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const highlights = [
        {
            id: 1,
            tag: "WATER CIRCULARITY",
            title: "Closed-Loop Hydration",
            stat: "100%",
            statLabel: "Process Water Recycled",
            icon: Droplets,
            subheading: "Zero-Effluent Centrifugal Extraction",
            description: "Industrial water from high-pressure diamond cutting and slab calibration is collected into multi-stage centrifuge separation tanks. Particulates are extracted for reuse, while purified water re-enters production with zero municipal discharge.",
            points: [
                "Closed-loop decantation with sub-micron recovery",
                "Rainwater capture across 45,000 m² factory roofing",
                "Eliminates 12.8M liters of annual aquifer depletion"
            ],
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 2,
            tag: "KILN COGENERATION",
            title: "Thermal Harvesting",
            stat: "-65%",
            statLabel: "Thermal Carbon Footprint",
            icon: Flame,
            subheading: "Regenerative Thermodynamic Recovery",
            description: "Excess thermal energy radiating from our 1,220°C roller kilns is redirected into pre-drying tunnels and facility heating. Automated sensors adjust gas-air stoichiometry in real time to minimize fuel burn.",
            points: [
                "Direct thermodynamic ducting cuts natural gas consumption",
                "Preheating tunnels powered entirely by waste kiln air",
                "Transitioning toward green hydrogen combustion blends"
            ],
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 3,
            tag: "MINERAL PURITY",
            title: "Pre-Consumer Matrix",
            stat: "42%",
            statLabel: "Recycled Solid Mass",
            icon: Recycle,
            subheading: "Inert Mineral Reclamation",
            description: "Broken greenware and fired ceramic remnants are micronized and reintroduced into the raw powder matrix. The formulation uses zero synthetic binding glues, petroleum polymers, or artificial resins.",
            points: [
                "Zero synthetic resins, phthalates, or chemical binders",
                "100% natural mineral pigmentation with zero heavy metals",
                "Locally quarried feldspar within a 250 km radius"
            ],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 4,
            tag: "CIRCULAR LIFESPAN",
            title: "Permanent Surfaces",
            stat: "100+",
            statLabel: "Year Structural Guarantee",
            icon: ShieldCheck,
            subheading: "Inherent Architectural Durability",
            description: "Unlike vinyl, laminate, or composites that degrade within decades, sintered porcelain remains impervious to UV discoloration, extreme thermal shocks, and scratches—ending replacement disposal cycles.",
            points: [
                "Class A1 European non-combustible fire certification",
                "Fully crush-recyclable into aggregate road sub-base",
                "Directly qualifies projects for LEED v4 and BREEAM credits"
            ],
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    // 4-second auto-cycle timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % highlights.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [currentIndex, highlights.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % highlights.length);
    };

    const activeItem = highlights[currentIndex];
    const IconComponent = activeItem.icon;

    return (
        <section className="w-full bg-[#F7F7F6] text-neutral-900 px-6 sm:px-10 lg:px-24 py-32 border-b border-neutral-200 relative overflow-hidden select-none selection:bg-neutral-900 selection:text-white">
            
            {/* Architectural Sub-grid Background Accent */}
            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
                <div>
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-emerald-800 font-bold">
                            // Circularity Directive
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950">
                        Sustainability.
                    </h2>
                </div>

                {/* Progress Indicators & Navigation Controls */}
                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-mono tracking-widest text-neutral-500">
                            PHASE <span className="text-neutral-950 font-bold text-sm">0{currentIndex + 1}</span> / 0{highlights.length}
                        </span>
                        {/* Smooth 4-Second Animated Progress Bar */}
                        <div className="w-28 h-1 bg-neutral-200 rounded-full mt-2 overflow-hidden relative">
                            <div 
                                key={currentIndex}
                                className="h-full bg-emerald-600 animate-progress"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button 
                            onClick={prevSlide}
                            className="p-3.5 bg-white border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all duration-300 shadow-sm rounded-none group"
                            aria-label="Previous Highlight"
                        >
                            <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="p-3.5 bg-white border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all duration-300 shadow-sm rounded-none group"
                            aria-label="Next Highlight"
                        >
                            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Interactive Stage */}
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Floating Architectural Showcase Card */}
                <div className="bg-white border border-neutral-300/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
                    
                    {/* CAD Coordinate Markers */}
                    <span className="absolute top-3 left-4 text-[9px] font-mono text-neutral-300 pointer-events-none tracking-widest">+ 45° 28' N / 9° 11' E</span>
                    <span className="absolute bottom-3 right-4 text-[9px] font-mono text-neutral-300 pointer-events-none tracking-widest">[ ISO-14001 COMPLIANT ]</span>

                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                        
                        {/* Left Column: Dossier Content with Staggered Fade Transitions */}
                        <div 
                            key={`content-${currentIndex}`} 
                            className="lg:col-span-7 p-8 sm:p-14 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200 animate-fade-slide"
                        >
                            <div>
                                {/* Top Tag Pod */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full">
                                        <IconComponent size={14} className="text-emerald-700" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-800">
                                            {activeItem.tag}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                                        SPEC // 00{activeItem.id}
                                    </span>
                                </div>

                                <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-2 font-semibold">
                                    {activeItem.subheading}
                                </span>

                                <h3 className="text-3xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-tight mb-6">
                                    {activeItem.title}
                                </h3>

                                <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed mb-8 max-w-xl">
                                    {activeItem.description}
                                </p>

                                {/* Specification Points */}
                                <div className="space-y-3.5 pt-6 border-t border-neutral-100 mb-8">
                                    {activeItem.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                                            <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Direct Link to Sustainability Page */}
                            <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                                <Link 
                                    href="/sustainability" 
                                    className="inline-flex items-center gap-3 text-xs uppercase font-bold tracking-[0.25em] text-neutral-950 hover:text-emerald-800 transition-colors group"
                                >
                                    <span>Inspect Full Circularity Manifesto</span>
                                    <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white transition-all">
                                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Dynamic Architectural Visual Stage */}
                        <div className="lg:col-span-5 relative flex flex-col justify-between bg-neutral-950 text-white overflow-hidden p-8 sm:p-12">
                            
                            {/* Background Image Layer with Crossfade & Ken Burns Scale */}
                            {highlights.map((item, idx) => (
                                <div 
                                    key={item.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        idx === currentIndex ? "opacity-60 z-10 scale-105" : "opacity-0 z-0 scale-100"
                                    }`}
                                    style={{
                                        transition: "opacity 1s ease-in-out, transform 6s ease-out"
                                    }}
                                >
                                    <div 
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                </div>
                            ))}

                            {/* Floating Top Badge */}
                            <div className="relative z-20 flex justify-between items-center">
                                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-neutral-300">
                                    <Sparkles size={12} className="text-emerald-400" />
                                    <span>Empirical Verification</span>
                                </div>
                                <span className="font-mono text-xs text-white/40">2026 AUDIT</span>
                            </div>

                            {/* Animated High-Impact Metric Block */}
                            <div key={`metric-${currentIndex}`} className="relative z-20 animate-fade-slide">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                                    
                                    <span className="text-5xl sm:text-7xl font-mono font-black text-white block mb-2 tracking-tight">
                                        {activeItem.stat}
                                    </span>
                                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300 font-bold block mb-3">
                                        {activeItem.statLabel}
                                    </span>
                                    <p className="text-xs text-neutral-300 font-serif italic leading-relaxed">
                                        Independently verified under European ISO 14001:2015 environmental production criteria.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Bottom Interactive Plinth Switcher */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {highlights.map((item, index) => {
                        const isSelected = currentIndex === index;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setCurrentIndex(index)}
                                className={`p-5 text-left border transition-all duration-300 relative overflow-hidden ${
                                    isSelected 
                                        ? "bg-white border-neutral-950 shadow-md ring-1 ring-neutral-950" 
                                        : "bg-white/70 border-neutral-200 hover:bg-white hover:border-neutral-400"
                                }`}
                            >
                                {isSelected && (
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600" />
                                )}
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                                        0{item.id}
                                    </span>
                                    <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-emerald-700" : "text-neutral-400"}`}>
                                        {item.stat}
                                    </span>
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-tight block truncate ${isSelected ? "text-neutral-950" : "text-neutral-600"}`}>
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

            </div>

            {/* Custom Animations for Smooth Keyframe Interpolation */}
            <style jsx global>{`
                @keyframes progressFill {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-progress {
                    animation: progressFill 4s linear infinite;
                }
                @keyframes fadeSlide {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-slide {
                    animation: fadeSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

        </section>
    );
};

export default Sustainability;