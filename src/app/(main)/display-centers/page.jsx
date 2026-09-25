"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
    ArrowLeft, ArrowRight, MapPin, 
    Globe, Phone, Clock, CalendarCheck, X, Navigation
} from "lucide-react";

// Global Showroom Data with added mapQueries
const displayCenters = [
    {
        id: "milan",
        city: "Milan",
        title: "The Flagship Pavilion",
        address: "Via Brera 24, 20121 Milano MI, Italy",
        phone: "+39 02 1234 5678",
        hours: "Mon-Sat: 10:00 - 19:00",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&crop=center&q=80",
        tag: "Global Headquarters",
        mapQuery: "Via Brera 24, Milano MI, Italy"
    },
    {
        id: "dubai",
        city: "Dubai",
        title: "D3 Architecture Studio",
        address: "Building 4, Dubai Design District, UAE",
        phone: "+971 4 123 4567",
        hours: "Sun-Thu: 09:00 - 18:00",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&crop=center&q=80",
        tag: "Middle East Hub",
        mapQuery: "Dubai Design District, UAE"
    },
    {
        id: "new-york",
        city: "New York",
        title: "SoHo Surface Gallery",
        address: "101 Spring St, New York, NY 10012, USA",
        phone: "+1 212-555-0198",
        hours: "Mon-Sat: 10:00 - 18:00",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center&q=80",
        tag: "Americas Hub",
        mapQuery: "101 Spring St, New York, NY"
    },
    {
        id: "tokyo",
        city: "Tokyo",
        title: "Ginza Material Lab",
        address: "6-Chome Ginza, Chuo City, Tokyo 104-0061",
        phone: "+81 3-1234-5678",
        hours: "Mon-Sun: 11:00 - 20:00",
        image: "https://images.unsplash.com/photo-1590856029826-c7a5d002aac2?w=1200&h=800&fit=crop&crop=center&q=80",
        tag: "Asia-Pacific Hub",
        mapQuery: "Ginza, Chuo City, Tokyo, Japan"
    }
];

const DisplayCentersPage = () => {
    const router = useRouter();
    const [activeMap, setActiveMap] = useState(null);

    return (
        <div className="w-full bg-[#FAFAFA] text-neutral-900 min-h-screen font-sans selection:bg-neutral-900 selection:text-white">
            
            {/* Top Navigation Bar */}
            <div className="w-full border-b border-neutral-200 bg-white sticky top-0 z-40">
                <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between">
                    <button 
                        onClick={() => router.back()} 
                        className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-900 hover:text-emerald-700 transition-colors group"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Studio
                    </button>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
                        Network // 01
                    </span>
                </div>
            </div>

            {/* Cinematic Hero Section */}
            <section className="w-full bg-neutral-950 text-white py-24 lg:py-36 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="w-full h-full bg-cover bg-center opacity-30 scale-105"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=2000&q=80&fit=crop')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 text-amber-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-6 shadow-sm">
                        <Globe size={12} /> Global Architectural Network
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-8">
                        Display Centers.
                    </h1>
                    <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto">
                        Experience the scale, texture, and light refraction of Vibe Code slabs in person. Our global galleries are engineered to serve as collaborative hubs for architects, designers, and visionaries.
                    </p>
                </div>
            </section>

            {/* Locations Grid Section */}
            <section className="w-full py-24 px-6 sm:px-10 lg:px-20 max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutral-200 pb-12">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                            Select a Region
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950">
                            Find your nearest studio.
                        </h2>
                    </div>
                    <Link 
                        href="/contact" 
                        className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 hover:text-neutral-950 transition-colors flex items-center gap-2"
                    >
                        Contact General Support <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {displayCenters.map((center, index) => (
                        <div key={center.id} className="group flex flex-col">
                            {/* Image Container with Hover Zoom */}
                            <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden mb-6">
                                <div 
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                    style={{ backgroundImage: `url(${center.image})` }}
                                />
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2 border border-neutral-200 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-900">
                                        {center.city}
                                    </span>
                                </div>
                            </div>

                            {/* Details Container */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest">
                                        // {center.tag}
                                    </span>
                                    <span className="text-[10px] font-mono text-neutral-400">0{index + 1}</span>
                                </div>
                                
                                <h3 className="text-2xl font-serif text-neutral-950 mb-6 group-hover:text-emerald-800 transition-colors">
                                    {center.title}
                                </h3>

                                <div className="space-y-4 mb-8 text-sm text-neutral-600 font-sans flex-grow">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={16} className="text-neutral-400 shrink-0 mt-0.5" />
                                        <span>{center.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={16} className="text-neutral-400 shrink-0" />
                                        <span>{center.hours}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-neutral-400 shrink-0" />
                                        <span>{center.phone}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                                    <Link 
                                        href={`/contact?inquiry=Book+Visit+${center.city}`}
                                        className="flex-1 text-center py-3 bg-neutral-950 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-emerald-800 transition-colors"
                                    >
                                        Book Consultation
                                    </Link>
                                    <button 
                                        onClick={() => setActiveMap(center)}
                                        className="px-4 py-3 border border-neutral-300 text-neutral-600 hover:text-white hover:bg-neutral-950 hover:border-neutral-950 transition-all duration-300 group/btn relative overflow-hidden"
                                        title="View on Map"
                                    >
                                        <MapPin size={16} className="relative z-10 group-hover/btn:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Private Viewing CTA */}
            <section className="w-full bg-[#0A0A0A] text-white py-24 px-6 sm:px-10 lg:px-20 mt-12 border-t border-neutral-900">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <CalendarCheck size={32} className="text-amber-400 mb-6" strokeWidth={1.5} />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-4">
                        Professional Architecture Network
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif mb-6 leading-tight">
                        Need a private slab viewing?
                    </h2>
                    <p className="text-neutral-400 font-sans leading-relaxed max-w-2xl mb-10 text-sm sm:text-base">
                        For commercial architects, interior designers, and high-volume contractors, we offer private out-of-hours viewings and custom material sourcing sessions at all our flagship locations.
                    </p>
                    <Link 
                        href="/contact?inquiry=Private+Viewing"
                        className="px-8 py-4 bg-white text-neutral-950 text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors shadow-lg flex items-center gap-3"
                    >
                        Schedule Private Viewing <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

            {/* Interactive Cinematic Map Modal */}
            {activeMap && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity"
                        onClick={() => setActiveMap(null)}
                    />

                    {/* Modal Container */}
                    <div className="relative z-10 w-full max-w-5xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-[600px] animate-in fade-in zoom-in-95 duration-300">
                        
                        {/* Map Details Panel */}
                        <div className="w-full md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-800 shrink-0">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                                        Location Data
                                    </span>
                                    <button 
                                        onClick={() => setActiveMap(null)}
                                        className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors rounded-full"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                                <h3 className="text-2xl font-serif text-white mb-2">{activeMap.city} Studio</h3>
                                <p className="text-xs text-neutral-400 font-mono tracking-widest uppercase mb-8">
                                    {activeMap.title}
                                </p>
                                <div className="space-y-4 text-sm text-neutral-300">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={16} className="text-neutral-500 mt-1 shrink-0" />
                                        <span className="leading-relaxed">{activeMap.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={16} className="text-neutral-500 shrink-0" />
                                        <span>{activeMap.hours}</span>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMap.mapQuery)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 mt-8 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                            >
                                <Navigation size={14} /> Navigate in Maps
                            </a>
                        </div>

                        {/* Interactive Google Map iframe with Architectural Filters */}
                        <div className="w-full h-full flex-1 relative bg-neutral-900 group">
                            {/* Hover instructions overlay */}
                            <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-neutral-400 border border-neutral-800 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                                Hover to reveal terrain
                            </div>
                            
                            <iframe 
                                className="w-full h-full grayscale-[100%] contrast-[110%] brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-700 ease-in-out border-0"
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMap.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default DisplayCentersPage;