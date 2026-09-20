"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
    Leaf, Droplets, Flame, Recycle, ShieldCheck, 
    ArrowRight, Compass, FileText, CheckCircle2, 
    Wind, Globe, Sparkles 
} from "lucide-react";

const SustainabilityPage = () => {
    const [activePillar, setActivePillar] = useState(0);

    // Core circularity pillars
    const pillars = [
        {
            title: "Closed-Loop Hydration",
            tag: "WATER RECLAMATION",
            icon: Droplets,
            stat: "100%",
            statLabel: "Water Recycled in Production",
            description: "Industrial water used during slab extrusion, diamond-blade sizing, and polishing cycles is captured through centrifuge filtration systems. Zero untreated industrial wastewater enters municipal watersheds.",
            details: [
                "Multi-stage decantation and flocculation tanks",
                "Sub-micron particulate separation before re-injection",
                "Rainwater harvesting integrated into foundry rooflines"
            ]
        },
        {
            title: "Thermal Energy Harvesting",
            tag: "HEAT COGENERATION",
            icon: Flame,
            stat: "-65%",
            statLabel: "Kiln Energy Emissions",
            description: "Our high-temperature European roller kilns operate with regenerative thermal oxidizers. Waste heat radiating from 1,220°C firing chambers is captured to power prep-drying tunnels and radiant factory floor heat.",
            details: [
                "Automated thermodynamic ducting network",
                "Real-time sensor-driven gas-air mixture optimization",
                "Transitioning toward green hydrogen combustion blends"
            ]
        },
        {
            title: "Pre-Consumer Mineral Matrix",
            tag: "RAW MATERIALS",
            icon: Recycle,
            stat: "42%",
            statLabel: "Recycled Mineral Content",
            description: "Slabs incorporate pre-consumer ceramic shards, feldspar scraps, and refined inert quarry remnants. We refuse synthetic binders, resins, and volatile organic solvents, ensuring an inert composition.",
            details: [
                "Zero toxic polymer resins or crystalline silica dust spikes",
                "Traceable sourcing within a 250 km radius of foundries",
                "Natural mineral pigments free of bioaccumulative heavy metals"
            ]
        },
        {
            title: "Permanent Architectural Lifespan",
            tag: "LIFECYCLE",
            icon: ShieldCheck,
            stat: "100+",
            statLabel: "Year Structural Guarantee",
            description: "Porcelain is intrinsically fireproof, UV-impervious, and chemically stable. Unlike vinyl composites or treated timbers that need frequent replacement, our surfaces outlive the structures they adorn and remain 100% recyclable.",
            details: [
                "Zero off-gassing (VOC-Free / Class A1 Fire Rating)",
                "Full crush-recyclability into aggregate road base",
                "Contributes directly to LEED v4 and BREEAM credits"
            ]
        }
    ];

    // Global environmental accreditations
    const certifications = [
        {
            name: "LEED v4 Certified",
            authority: "U.S. Green Building Council",
            scope: "Materials & Resources: Environmental Product Declarations & Sourcing"
        },
        {
            name: "Greenguard Gold",
            authority: "UL Environment",
            scope: "Verified low chemical emissions for sensitive educational & medical interiors"
        },
        {
            name: "ISO 14001:2015",
            authority: "International Org for Standardization",
            scope: "Global standard for active environmental management systems"
        },
        {
            name: "EPD Verification",
            authority: "Institut Bauen und Umwelt e.V.",
            scope: "Full cradle-to-grave Life Cycle Assessment (LCA) compliance"
        }
    ];

    return (
        <div className="w-full bg-[#060B08] text-neutral-100 font-sans selection:bg-emerald-500 selection:text-black min-h-screen">
            
            {/* Hero Section */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-emerald-950/60 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-3 bg-[#0A1610] border border-emerald-800/40 px-4 py-2 w-fit mb-6">
                        <Leaf size={14} className="text-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300">
                            Circularity Protocol // Sector 12
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        Engineered For <br />
                        <span className="text-emerald-400 font-serif font-normal italic lowercase">Permanent</span> Earth.
                    </h1>

                    <p className="text-neutral-300 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "High architectural design must not come at planetary expense. We forge ultra-dense porcelain slabs through closed-loop hydrology, waste-heat capture, and zero-resin mineral purity."
                    </p>
                </div>
            </section>

            {/* Live Environmental KPI Bar */}
            <section className="w-full border-b border-emerald-950/60 bg-[#040806] px-8 lg:px-24 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="border-l-2 border-emerald-500/40 pl-5">
                        <span className="text-3xl lg:text-5xl font-mono font-black text-white block mb-1">100%</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Process Water Recycled</span>
                    </div>
                    <div className="border-l-2 border-emerald-500/40 pl-5">
                        <span className="text-3xl lg:text-5xl font-mono font-black text-white block mb-1">42%</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Recycled Mineral Mass</span>
                    </div>
                    <div className="border-l-2 border-emerald-500/40 pl-5">
                        <span className="text-3xl lg:text-5xl font-mono font-black text-white block mb-1">0%</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">VOC Off-Gassing</span>
                    </div>
                    <div className="border-l-2 border-emerald-500/40 pl-5">
                        <span className="text-3xl lg:text-5xl font-mono font-black text-white block mb-1">A1</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Non-Combustible Grade</span>
                    </div>
                </div>
            </section>

            {/* Interactive Pillars of Circularity */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-emerald-950/60 bg-[#08100C]">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 block mb-2">
                                Four Tenets of Manufacturing
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                                The Lifecycle Blueprint
                            </h2>
                        </div>
                        <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest max-w-sm">
                            Inspect each phase of our low-carbon kiln and filtration systems.
                        </p>
                    </div>

                    {/* Pillar Navigation Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {pillars.map((pillar, idx) => {
                            const IconComponent = pillar.icon;
                            const isActive = activePillar === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActivePillar(idx)}
                                    className={`p-6 text-left border transition-all flex flex-col justify-between min-h-[180px] ${
                                        isActive 
                                            ? "bg-[#0F2218] border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.15)]" 
                                            : "bg-[#060D09] border-emerald-950 hover:border-emerald-800"
                                    }`}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <IconComponent size={20} className={isActive ? "text-emerald-300" : "text-neutral-500"} />
                                        <span className="text-[10px] font-mono text-neutral-500">0{idx + 1}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                                            {pillar.tag}
                                        </span>
                                        <h3 className="text-base font-bold uppercase tracking-tight text-white">
                                            {pillar.title}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Pillar Detail Dossier */}
                    <div className="bg-[#050A07] border border-emerald-900/60 p-8 lg:p-12 relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            <div className="lg:col-span-8">
                                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-400 block mb-2">
                                    // Deep Dive Spec — 0{activePillar + 1}
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                                    {pillars[activePillar].title}
                                </h3>
                                <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-sans">
                                    {pillars[activePillar].description}
                                </p>

                                <div className="space-y-3 pt-6 border-t border-emerald-950">
                                    {pillars[activePillar].details.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs text-neutral-300">
                                            <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#08120C] border border-emerald-950 text-center">
                                <span className="text-5xl lg:text-6xl font-mono font-black text-emerald-400 mb-2">
                                    {pillars[activePillar].stat}
                                </span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                                    {pillars[activePillar].statLabel}
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Certifications Matrix */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-emerald-950/60 bg-[#050A07]">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 block mb-3">
                            Third-Party Verification
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
                            International Accreditations
                        </h2>
                        <p className="text-xs text-neutral-400 font-serif italic">
                            "Every square meter produced adheres to stringent European Union and North American environmental reporting criteria."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div 
                                key={index} 
                                className="bg-[#08120D] border border-emerald-950 p-8 flex flex-col justify-between hover:border-emerald-700/60 transition-colors"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                                            {cert.name}
                                        </h3>
                                        <ShieldCheck size={20} className="text-emerald-400" />
                                    </div>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 block mb-3">
                                        Issued by: {cert.authority}
                                    </span>
                                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                                        {cert.scope}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Bottom LCA Dossier CTA */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-black text-white">
                <Globe size={44} strokeWidth={1.5} className="mb-6 text-emerald-400 animate-pulse" />
                <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-4">
                    Download The 2026 ESG Manifesto
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed font-sans">
                    Need cradle-to-gate data or EPD documentation for a commercial LEED building submission? Access our engineering reports.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        href="/contact?topic=sustainability-epd" 
                        className="bg-emerald-500 text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
                    >
                        <FileText size={14} />
                        <span>Request EPD Dossier</span>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default SustainabilityPage;