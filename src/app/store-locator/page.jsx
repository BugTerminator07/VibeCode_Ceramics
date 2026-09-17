"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, Search, MapPin, Phone, Clock, ArrowRight, Compass, Building2, ExternalLink, ShieldCheck } from "lucide-react";

const StoreLocatorPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("all");

    // Comprehensive global store & display center database (12 locations)
    const storesData = [
        {
            id: 1,
            name: "SoHo Architectural Display Center",
            city: "New York",
            country: "United States",
            region: "Americas",
            address: "480 Broadway, Level 2, New York, NY 10013",
            phone: "+1 (212) 555-8910",
            hours: "Mon – Sat: 09:00 – 19:00 EST",
            type: "Global Flagship Showroom",
            specialty: "High-Rise Commercial Slabs"
        },
        {
            id: 2,
            name: "Brera Material Arts Pavilion",
            city: "Milan",
            country: "Italy",
            region: "Europe",
            address: "Via Brera 22, 20121 Milano MI, Italy",
            phone: "+39 02 8901 2345",
            hours: "Mon – Fri: 10:00 – 20:00 CET",
            type: "European Design Headquarters",
            specialty: "Custom Waterjet Fabrication"
        },
        {
            id: 3,
            name: "Roppongi Minimalist Gallery",
            city: "Tokyo",
            country: "Japan",
            region: "Asia-Pacific",
            address: "6-10-1 Roppongi, Minato City, Tokyo 106-0032",
            phone: "+81 3 5411 9021",
            hours: "Mon – Sat: 10:00 – 18:00 JST",
            type: "Authorized Showroom",
            specialty: "Minimalist Porcelain Surfaces"
        },
        {
            id: 4,
            name: "Knightsbridge Design Citadel",
            city: "London",
            country: "United Kingdom",
            region: "Europe",
            address: "18 Brompton Rd, Knightsbridge, London SW3 1ED",
            phone: "+44 20 7589 1122",
            hours: "Mon – Sat: 09:30 – 18:30 GMT",
            type: "Flagship Showroom",
            specialty: "Residential Estate Paving"
        },
        {
            id: 5,
            name: "Le Marais Ceramic Atelier",
            city: "Paris",
            country: "France",
            region: "Europe",
            address: "42 Rue de Turenne, 75003 Paris, France",
            phone: "+33 1 42 72 89 00",
            hours: "Mon – Sat: 10:00 – 19:00 CET",
            type: "Authorized Showroom",
            specialty: "French Limestone & Slate"
        },
        {
            id: 6,
            name: "Al Quoz Design Harbor",
            city: "Dubai",
            country: "United Arab Emirates",
            region: "Middle East",
            address: "Street 8, Al Quoz Industrial Area 3, Dubai, UAE",
            phone: "+971 4 333 9021",
            hours: "Sun – Thu: 09:00 – 19:00 GST",
            type: "Middle East Flagship",
            specialty: "Mega-Tower Commercial Slabs"
        },
        {
            id: 7,
            name: "Barangaroo Architectural Hub",
            city: "Sydney",
            country: "Australia",
            region: "Oceania",
            address: "100 Barangaroo Ave, Sydney NSW 2000, Australia",
            phone: "+61 2 9200 4500",
            hours: "Mon – Sat: 09:00 – 17:30 AEST",
            type: "Oceania Hub",
            specialty: "Coastal Quartz & Stone"
        },
        {
            id: 8,
            name: "Orchard Design Matrix",
            city: "Singapore",
            country: "Singapore",
            region: "Asia-Pacific",
            address: "391 Orchard Rd, #04-12, Singapore 238872",
            phone: "+65 6738 9011",
            hours: "Daily: 10:00 – 21:00 SGT",
            type: "Flagship Showroom",
            specialty: "Equatorial Slate & Calacatta"
        },
        {
            id: 9,
            name: "Yorkville Stone Studio",
            city: "Toronto",
            country: "Canada",
            region: "Americas",
            address: "120 Bloor St W, Toronto, ON M5S 1M7, Canada",
            phone: "+1 (416) 555-0144",
            hours: "Mon – Sat: 10:00 – 18:00 EST",
            type: "Authorized Showroom",
            specialty: "Northern Weather-Resistant Slabs"
        },
        {
            id: 10,
            name: "Mitte Ceramic Lab",
            city: "Berlin",
            country: "Germany",
            region: "Europe",
            address: "Rosenthaler Str. 40-41, 10178 Berlin, Germany",
            phone: "+49 30 284 900",
            hours: "Mon – Fri: 09:00 – 18:00 CET",
            type: "Technical Development Lab",
            specialty: "Industrial Concrete Finishes"
        },
        {
            id: 11,
            name: "Gangnam Surface Pavilion",
            city: "Seoul",
            country: "South Korea",
            region: "Asia-Pacific",
            address: "517 Gangnam-daero, Seocho-gu, Seoul, South Korea",
            phone: "+82 2 555 7820",
            hours: "Mon – Sat: 10:00 – 19:00 KST",
            type: "Flagship Showroom",
            specialty: "Ultra-Thin Porcelain Facades"
        },
        {
            id: 12,
            name: "Jardins Marble & Tile",
            city: "São Paulo",
            country: "Brazil",
            region: "Americas",
            address: "Rua Oscar Freire 702, Jardins, São Paulo - SP, Brazil",
            phone: "+55 11 3081 9200",
            hours: "Mon – Sat: 10:00 – 19:00 BRT",
            type: "South America Partner",
            specialty: "Luxury Residential Paving"
        }
    ];

    // Selected store state (defaults to the first store in the list)
    const [selectedStore, setSelectedStore] = useState(storesData[0]);

    // Filter logic based on search and region
    const filteredStores = storesData.filter((store) => {
        const matchesSearch = 
            store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            store.country.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesRegion = selectedRegion === "all" || store.region.toLowerCase() === selectedRegion.toLowerCase();

        return matchesSearch && matchesRegion;
    });

    return (
        <div className="w-full bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-white selection:text-black min-h-screen">
            
            {/* Hero Section */}
            <section className="w-full px-8 lg:px-24 py-20 lg:py-28 border-b border-neutral-800 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 w-fit mb-6">
                        <Compass size={14} className="text-amber-500 animate-spin" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Global Locator // Sector 11</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        Interactive <br />Store Locator.
                    </h1>
                    <p className="text-neutral-400 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Explore our 12 international flagship showrooms, partner display centers, and technical labs with live Google Maps telemetry."
                    </p>
                </div>
            </section>

            {/* Search & Region Filter Bar */}
            <section className="w-full px-8 lg:px-24 py-8 border-b border-neutral-800 bg-neutral-950 sticky top-0 z-30 backdrop-blur-md bg-opacity-95">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    
                    {/* Search Input */}
                    <div className="w-full lg:w-1/3 flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-4 py-3 focus-within:border-white transition-colors">
                        <Search size={18} className="text-neutral-500 shrink-0" />
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH CITY, COUNTRY, OR SHOWROOM..."
                            className="w-full bg-transparent outline-none text-xs uppercase tracking-widest placeholder:text-neutral-600 text-white"
                        />
                    </div>

                    {/* Region Selector Pills */}
                    <div className="w-full lg:w-auto flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                        {["all", "Americas", "Europe", "Asia-Pacific", "Middle East", "Oceania"].map((reg) => (
                            <button
                                key={reg}
                                onClick={() => setSelectedRegion(reg)}
                                className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border whitespace-nowrap ${
                                    selectedRegion === reg 
                                        ? "bg-white text-black border-white shadow-lg" 
                                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
                                }`}
                            >
                                {reg === "all" ? "All Regions" : reg}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Split Pane Layout: Store List (Left) & Dynamic Full-Color Google Map + Active Store Details (Right) */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[750px]">
                
                {/* Left Side: Scrollable Store List (5 Columns) */}
                <div className="lg:col-span-5 border-r border-neutral-800 bg-[#0c0c0c] overflow-y-auto max-h-[850px] divide-y divide-neutral-900">
                    {filteredStores.length === 0 ? (
                        <div className="text-center py-24 p-8">
                            <Building2 size={40} className="mx-auto text-neutral-600 mb-4" />
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-white">No Locations Found</h3>
                            <p className="text-neutral-500 text-xs uppercase tracking-wider">Try adjusting your search criteria or region filter.</p>
                        </div>
                    ) : (
                        filteredStores.map((store) => {
                            const isSelected = selectedStore.id === store.id;
                            return (
                                <div 
                                    key={store.id}
                                    onClick={() => setSelectedStore(store)}
                                    className={`p-6 lg:p-8 cursor-pointer transition-all relative group ${
                                        isSelected 
                                            ? "bg-neutral-900 border-l-4 border-l-white" 
                                            : "bg-neutral-950 hover:bg-neutral-900/50"
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500">
                                            {store.type}
                                        </span>
                                        <span className="text-[9px] uppercase tracking-widest text-neutral-500">
                                            {store.region}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2 group-hover:text-neutral-300 transition-colors">
                                        {store.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                                        <MapPin size={14} className="text-neutral-500 shrink-0" />
                                        <span>{store.city}, {store.country}</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                                        <span>{store.phone}</span>
                                        <span className="text-amber-400 font-bold">VIEW ON MAP →</span>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Right Side: Full-Color Google Maps Iframe + Active Location Dossier (7 Columns) */}
                <div className="lg:col-span-7 flex flex-col bg-black relative">
                    
                    {/* Embedded Dynamic Full-Color Google Maps Iframe */}
                    <div className="w-full h-[400px] lg:h-[480px] relative border-b border-neutral-800">
                        <iframe
                            title={`Map for ${selectedStore.name}`}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedStore.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                            className="w-full h-full"
                        />
                    </div>

                    {/* Active Store Details Card */}
                    <div className="p-8 lg:p-12 flex flex-col justify-between flex-grow bg-neutral-950">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-neutral-900 text-amber-400 px-3 py-1 border border-neutral-800">
                                    {selectedStore.type}
                                </span>
                                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                                    Specialty: {selectedStore.specialty}
                                </span>
                            </div>

                            <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-6">
                                {selectedStore.name}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-300 uppercase tracking-wider mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span>{selectedStore.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-neutral-500 shrink-0" />
                                        <span>{selectedStore.phone}</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Clock size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                                        <span>{selectedStore.hours}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck size={16} className="text-amber-500 shrink-0" />
                                        <span>Verified Global Showroom</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-900">
                            <Link 
                                href={`/contact?center=${encodeURIComponent(selectedStore.name)}`}
                                className="flex-1 bg-white text-black py-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors shadow-xl"
                            >
                                <span>Book Private Tour</span>
                                <ArrowRight size={14} />
                            </Link>
                            <a 
                                href={`https://maps.google.com/?q=${encodeURIComponent(selectedStore.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
                            >
                                <span>Open in Google Maps</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default StoreLocatorPage;