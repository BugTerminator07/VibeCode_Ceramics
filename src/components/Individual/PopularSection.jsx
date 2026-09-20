import React from "react";
import Link from "next/link";
import { ArrowUpRight, Newspaper, Terminal, MapPin, Compass, ArrowRight } from "lucide-react";

const PopularSection = () => {
    return (
        <section className="w-full bg-[#FAFAFA] text-neutral-900 px-8 lg:px-24 py-28 border-b border-neutral-200 relative selection:bg-neutral-900 selection:text-white">
            
            {/* Architectural Sub-grid Background Accent */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-neutral-900" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 font-bold">
                            // Curated Portals
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950">
                        Popular.
                    </h2>
                </div>
                <p className="text-neutral-600 text-sm font-serif italic max-w-md leading-relaxed">
                    "Direct portals into our architectural chronicle, software repositories, and physical worldwide flagship pavilions."
                </p>
            </div>

            {/* Three Portals Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
                
                {/* 1. NEWS: Clean Architectural Journal / Editorial Ceramic Dispatch */}
                <Link 
                    href="/news"
                    className="group bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-900 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                >
                    <div>
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-8">
                            <div className="flex items-center gap-2 text-neutral-700">
                                <Newspaper size={15} className="text-neutral-900" />
                                <span className="text-[10px] font-mono tracking-widest uppercase">Ceramic Journal</span>
                            </div>
                            <span className="text-[9px] font-mono uppercase px-2 py-0.5 border border-neutral-200 text-neutral-500 bg-neutral-50">
                                Vol. 26
                            </span>
                        </div>

                        <span className="text-[10px] font-mono uppercase text-amber-700 tracking-widest block mb-2 font-semibold">
                            Editorial & Exhibition
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-950 leading-tight mb-4 group-hover:text-amber-900 transition-colors">
                            The Milan Triennale Monolith Exhibition
                        </h3>

                        <p className="text-xs text-neutral-600 font-sans leading-relaxed mb-6">
                            Unveiling our ultra-large continuous veined porcelain slabs alongside European structural architects and acoustic innovators.
                        </p>
                    </div>

                    <div className="pt-6 border-t border-neutral-100 flex items-center justify-between text-xs uppercase font-bold tracking-[0.2em] text-neutral-950">
                        <span>Read Press Dispatches</span>
                        <div className="p-2 border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </Link>

                {/* 2. PROJECTS: Preserved Technical CAD / Blueprint Dossier */}
                <Link 
                    href="/projects"
                    className="group bg-[#060D0A] border border-emerald-950 p-8 flex flex-col justify-between hover:border-emerald-500/60 transition-all duration-500 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.15)]"
                >
                    {/* CAD Crosshairs */}
                    <span className="absolute top-2 right-3 font-mono text-[9px] text-emerald-800/80 pointer-events-none">+ 1:50 BIM</span>
                    <span className="absolute bottom-2 left-3 font-mono text-[9px] text-emerald-800/80 pointer-events-none">[REF: 42-SLAB]</span>

                    <div>
                        <div className="flex items-center justify-between border-b border-emerald-950 pb-4 mb-8">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <Terminal size={14} />
                                <span className="text-[10px] font-mono tracking-widest uppercase">Works // Repositories</span>
                            </div>
                            <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
                                12 Builds
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                                Code & Fabrication
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-mono font-bold uppercase tracking-tight text-white leading-tight mb-4 group-hover:text-emerald-300 transition-colors">
                            The Code Archive & Case Studies
                        </h3>

                        <div className="p-3 bg-[#030805] border border-emerald-950 font-mono text-[10px] text-emerald-300/80 space-y-1 mb-6">
                            <div>&gt; STACK: Next.js / Tailwind / WebGL</div>
                            <div>&gt; STATUS: Production Verified</div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-emerald-950 flex items-center justify-between text-xs uppercase font-mono font-bold tracking-[0.2em] text-emerald-400">
                        <span>Execute Archive</span>
                        <div className="p-2 border border-emerald-900 group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </Link>

                {/* 3. DISPLAY CENTER: Sun-Drenched Architectural Showroom Window */}
                <Link 
                    href="/display-centers"
                    className="group bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-900 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                >
                    <div>
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                            <div className="flex items-center gap-2 text-neutral-800">
                                <Compass size={15} className="text-neutral-900" />
                                <span className="text-[10px] font-mono tracking-widest uppercase">Physical Galleries</span>
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-neutral-900 text-white">
                                12 Hubs
                            </span>
                        </div>

                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2 font-semibold">
                            Tactile Spatial Centers
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-950 leading-tight mb-4 group-hover:text-neutral-700 transition-colors">
                            Global Display Centers
                        </h3>

                        {/* Visual Image Preview */}
                        <div className="w-full h-32 relative mb-4 border border-neutral-200 overflow-hidden">
                            <div 
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
                        </div>

                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <MapPin size={13} className="text-neutral-800 shrink-0" />
                            <span>Milan • New York • Dubai • Tokyo</span>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-neutral-100 flex items-center justify-between text-xs uppercase font-bold tracking-[0.2em] text-neutral-950">
                        <span>Book Showroom Tour</span>
                        <div className="p-2 border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default PopularSection;