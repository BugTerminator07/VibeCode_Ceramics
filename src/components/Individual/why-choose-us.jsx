"use client";

import React from "react";
import Link from "next/link";
import { 
    ArrowUpRight, Building2, Briefcase, 
    Compass, ShieldCheck, MapPin, Users, 
    Sparkles, ArrowRight, Layers
} from "lucide-react";

const WhyChooseUs = () => {
    const pillars = [
        {
            id: "01",
            route: "/about",
            category: "Heritage & Craft",
            title: "About Us",
            subtitle: "Uncompromising Material Mastery",
            description: "Forged in European roller kilns at 1,220°C, our continuous-vein porcelain monoliths combine sub-millimeter laser calibration with pure inert minerals. We engineer surfaces designed to outlast structural lifespans.",
            meta: [
                { label: "Tolerance", value: "±0.1mm" },
                { label: "Origin", value: "Milan & Sassuolo" },
                { label: "Fire Rating", value: "Class A1" }
            ],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            linkText: "Explore Our Studio Legacy",
            icon: Building2
        },
        {
            id: "02",
            route: "/career",
            category: "Culture & Talent",
            title: "Careers",
            subtitle: "Shape the Future of Surfaces",
            description: "Join an elite collective of architectural technologists, WebGL shader developers, and ceramic material scientists. We empower cross-functional teams to build tools and surfaces at global architectural scale.",
            meta: [
                { label: "Work Culture", value: "Global / Hybrid" },
                { label: "Sectors", value: "CAD / R&D / Web" },
                { label: "Openings", value: "4 Roles Active" }
            ],
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
            linkText: "View Open Positions",
            icon: Users
        },
        {
            id: "03",
            route: "/store-locator",
            category: "Global Presence",
            title: "Store Locator",
            subtitle: "12 Flagship Showrooms",
            description: "Experience the tactile depth of monolithic porcelain in person. Our design centers across SoHo, Brera, Roppongi, and Dubai offer physical stone slab libraries, sample checkout, and private architect consultations.",
            meta: [
                { label: "Presence", value: "5 Continents" },
                { label: "Interactive", value: "Live Maps" },
                { label: "Services", value: "Private Booking" }
            ],
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
            linkText: "Locate Nearest Showroom",
            icon: MapPin
        }
    ];

    return (
        <section className="w-full bg-[#FAFAFA] text-neutral-900 px-6 sm:px-10 lg:px-24 py-32 border-b border-neutral-200 relative selection:bg-neutral-900 selection:text-white">
            
            {/* Subtle Architectural Sub-grid Background */}
            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
                <div>
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-2 h-2 rounded-full bg-neutral-900" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-500 font-bold">
                            // The Distinction
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950">
                        Why Choose Us.
                    </h2>
                </div>

                <p className="text-neutral-600 text-sm font-serif italic max-w-md leading-relaxed">
                    "A synthesis of European material permanence, boundary-pushing engineering careers, and global tactile showroom pavilions."
                </p>
            </div>

            {/* Three Pillars Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
                {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                        <div 
                            key={pillar.id}
                            className="group bg-white border border-neutral-300/90 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] hover:border-neutral-950 flex flex-col justify-between transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Card Top Preview Image Window */}
                            <div className="w-full h-56 relative border-b border-neutral-200 overflow-hidden bg-neutral-100">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                    style={{ backgroundImage: `url(${pillar.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Top Floating Badges */}
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className="bg-white/95 backdrop-blur-md border border-neutral-200 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-900 shadow-sm">
                                        {pillar.category}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4">
                                    <span className="font-mono text-xs text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 border border-white/20">
                                        SEC // {pillar.id}
                                    </span>
                                </div>

                                {/* Bottom Subtitle Tag inside image window */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-200">
                                        {pillar.subtitle}
                                    </span>
                                    <Icon size={16} className="text-white/80" />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-950 tracking-tight mb-4 group-hover:text-neutral-700 transition-colors">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed mb-8">
                                        {pillar.description}
                                    </p>

                                    {/* Architectural Metric Specs */}
                                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-neutral-100 mb-8 bg-neutral-50/50 px-3">
                                        {pillar.meta.map((m, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                                                    {m.label}
                                                </span>
                                                <span className="text-xs font-bold uppercase font-mono text-neutral-900 mt-0.5 truncate">
                                                    {m.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Link Action Button */}
                                <Link 
                                    href={pillar.route}
                                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800 py-4 px-6 flex items-center justify-between text-xs uppercase font-bold tracking-[0.2em] transition-all group/btn shadow-sm"
                                >
                                    <span>{pillar.linkText}</span>
                                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default WhyChooseUs;