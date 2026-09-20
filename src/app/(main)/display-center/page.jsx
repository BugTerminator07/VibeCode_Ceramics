"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, MapPin, Phone, Clock, ArrowRight, Compass, Building2, Sparkles, Calendar, Layers } from "lucide-react";

const DisplayCentersPage = () => {
    const [selectedRegion, setSelectedRegion] = useState("all");

    // Expanded Flagship Display Centers Database
    const displayCenters = [
        {
            id: 1,
            city: "New York",
            name: "SoHo Architectural Display Center",
            region: "Americas",
            address: "480 Broadway, Level 2, New York, NY 10013",
            phone: "+1 (212) 555-8910",
            hours: "Mon – Sat: 09:00 – 19:00 EST",
            sqft: "14,000 SQ FT",
            featuredSlabs: ["Carrara White Vein", "Obsidian Matte Monolith", "Raw Concrete Slab"],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 2,
            city: "Milan",
            name: "Brera Material Arts Pavilion",
            region: "Europe",
            address: "Via Brera 22, 20121 Milano MI, Italy",
            phone: "+39 02 8901 2345",
            hours: "Mon – Fri: 10:00 – 20:00 CET",
            sqft: "18,500 SQ FT",
            featuredSlabs: ["Italian Calacatta Gold", "Nero Marquina", "Terracotta Glaze"],
            image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 3,
            city: "Tokyo",
            name: "Roppongi Minimalist Gallery",
            region: "Asia-Pacific",
            address: "6-10-1 Roppongi, Minato City, Tokyo 106-0032",
            phone: "+81 3 5411 9021",
            hours: "Mon – Sat: 10:00 – 18:00 JST",
            sqft: "11,200 SQ FT",
            featuredSlabs: ["Nordic Slate", "Brushed Limestone", "Zenith Monolith"],
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 4,
            city: "London",
            name: "Knightsbridge Design Citadel",
            region: "Europe",
            address: "18 Brompton Rd, Knightsbridge, London SW3 1ED",
            phone: "+44 20 7589 1122",
            hours: "Mon – Sat: 09:30 – 18:30 GMT",
            sqft: "16,000 SQ FT",
            featuredSlabs: ["Imperial Basalt", "English Limestone", "Polished Onyx"],
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 5,
            city: "Paris",
            name: "Le Marais Ceramic Atelier",
            region: "Europe",
            address: "42 Rue de Turenne, 75003 Paris, France",
            phone: "+33 1 42 72 89 00",
            hours: "Mon – Sat: 10:00 – 19:00 CET",
            sqft: "12,800 SQ FT",
            featuredSlabs: ["French Limestone", "Brushed Basalt", "Chalk Vein"],
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 6,
            city: "Dubai",
            name: "Al Quoz Design Harbor",
            region: "Middle East",
            address: "Street 8, Al Quoz Industrial Area 3, Dubai, UAE",
            phone: "+971 4 333 9021",
            hours: "Sun – Thu: 09:00 – 19:00 GST",
            sqft: "22,000 SQ FT",
            featuredSlabs: ["Desert Sandstone", "Polished Onyx", "Imperial Basalt"],
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 7,
            city: "Sydney",
            name: "Barangaroo Architectural Hub",
            region: "Oceania",
            address: "100 Barangaroo Ave, Sydney NSW 2000, Australia",
            phone: "+61 2 9200 4500",
            hours: "Mon – Sat: 09:00 – 17:30 AEST",
            sqft: "13,500 SQ FT",
            featuredSlabs: ["Coastal Quartz", "Raw Concrete", "Zenith Monolith"],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 8,
            city: "Singapore",
            name: "Orchard Design Matrix",
            region: "Asia-Pacific",
            address: "391 Orchard Rd, #04-12, Singapore 238872",
            phone: "+65 6738 9011",
            hours: "Daily: 10:00 – 21:00 SGT",
            sqft: "15,100 SQ FT",
            featuredSlabs: ["Equatorial Slate", "Calacatta Gold", "Matte Monolith"],
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    const filteredCenters = selectedRegion === "all" 
        ? displayCenters 
        : displayCenters.filter(center => center.region.toLowerCase() === selectedRegion.toLowerCase());

    return (
        <div className="w-full bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-white selection:text-black min-h-screen">
            
            {/* Hero Section */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-neutral-800 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 w-fit mb-6">
                        <Compass size={14} className="text-amber-500 animate-spin" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Showroom Network // Sector 08</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        Global Display <br />Centers.
                    </h1>
                    <p className="text-neutral-400 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Experience the true physical scale, tactile depth, and continuous veining of our porcelain slabs across our international architectural galleries."
                    </p>
                </div>
            </section>

            {/* Region Filter Bar */}
            <section className="w-full px-8 lg:px-24 py-10 border-b border-neutral-800 bg-neutral-950">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
                        Filter By Region:
                    </span>
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0">
                        {["all", "Americas", "Europe", "Middle East", "Asia-Pacific", "Oceania"].map((reg) => (
                            <button
                                key={reg}
                                onClick={() => setSelectedRegion(reg)}
                                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border whitespace-nowrap ${
                                    selectedRegion === reg 
                                        ? "bg-white text-black border-white shadow-lg" 
                                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
                                }`}
                            >
                                {reg === "all" ? "All Display Centers" : reg}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Display Centers Grid */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-neutral-800 bg-[#0c0c0c]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {filteredCenters.map((center) => (
                        <div 
                            key={center.id}
                            className="bg-neutral-950 border border-neutral-800 flex flex-col justify-between group hover:border-neutral-500 transition-all hover:shadow-2xl relative overflow-hidden"
                        >
                            {/* Image Header with Zoom */}
                            <div className="h-72 overflow-hidden relative border-b border-neutral-800">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                                    style={{ backgroundImage: `url(${center.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                                
                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-neutral-700 px-3 py-1">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                                        {center.region} Flagship
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-neutral-700 px-3 py-1 flex items-center gap-1.5 text-neutral-300">
                                    <Layers size={12} className="text-amber-500" />
                                    <span className="text-[9px] uppercase tracking-widest font-bold">{center.sqft}</span>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
                                        <MapPin size={14} />
                                        <span>{center.city}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-neutral-300 transition-colors">
                                        {center.name}
                                    </h3>
                                    
                                    <div className="space-y-3 py-6 border-y border-neutral-900 mb-6 text-xs text-neutral-400">
                                        <div className="flex items-start gap-2">
                                            <Building2 size={14} className="text-neutral-500 shrink-0 mt-0.5" />
                                            <span>{center.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-neutral-500 shrink-0" />
                                            <span>{center.hours}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone size={14} className="text-neutral-500 shrink-0" />
                                            <span>{center.phone}</span>
                                        </div>
                                    </div>

                                    {/* Featured Slabs Pills */}
                                    <div className="mb-8">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-3">
                                            Featured Gallery Install:
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {center.featuredSlabs.map((slab, i) => (
                                                <span key={i} className="text-[9px] uppercase tracking-wider bg-neutral-900 text-neutral-300 px-3 py-1 border border-neutral-800">
                                                    {slab}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Appointment CTA Button */}
                                <Link 
                                    href={`/contact?center=${encodeURIComponent(center.name)}`}
                                    className="w-full bg-neutral-900 text-white border border-neutral-800 py-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors"
                                >
                                    <Calendar size={14} />
                                    <span>Book Private Consultation Suite</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-black text-white border-t border-neutral-800">
                <Grid2X2 size={48} strokeWidth={1.5} className="mb-6 text-neutral-500 animate-pulse" />
                <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                    Request a Private Architectural Tour
                </h2>
                <p className="text-neutral-400 text-sm lg:text-base max-w-lg mb-10 leading-relaxed">
                    Planning a large-scale commercial development? Schedule an exclusive VIP walkthrough with our senior material engineers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors shadow-2xl">
                        Contact Concierge
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default DisplayCentersPage;