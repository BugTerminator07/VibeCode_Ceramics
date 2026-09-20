"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, Search, MapPin, Phone, Mail, Award, ArrowRight, Building, CheckCircle2, Compass } from "lucide-react";

const DealersPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTier, setSelectedTier] = useState("all");

    // Comprehensive dealer network dataset
    const dealersData = [
        {
            id: 1,
            name: "Vanguard Architectural Surfaces",
            city: "New York",
            country: "United States",
            address: "450 11th Ave, Design District, NY 10018",
            phone: "+1 (212) 555-0192",
            email: "ny.vanguard@vibecoderceramics.com",
            tier: "Global Flagship Partner",
            specialty: "Commercial & High-Rise Slabs"
        },
        {
            id: 2,
            name: "Aethelgard Stone & Tile Studio",
            city: "London",
            country: "United Kingdom",
            address: "14 Brompton Rd, Knightsbridge, London SW3 1ED",
            phone: "+44 20 7946 0912",
            email: "london.studio@vibecoderceramics.com",
            tier: "Authorized Showroom",
            specialty: "Residential Estate Paving"
        },
        {
            id: 3,
            name: "Milano Marmi & Ceramiche",
            city: "Milan",
            country: "Italy",
            address: "Via Montenapoleone 8, 20121 Milano MI",
            phone: "+39 02 8765 4321",
            email: "milano.partner@vibecoderceramics.com",
            tier: "Global Flagship Partner",
            specialty: "Custom Waterjet Fabrication"
        },
        {
            id: 4,
            name: "Nihon Architectonics Lab",
            city: "Tokyo",
            country: "Japan",
            address: "6-10-1 Roppongi, Minato City, Tokyo 106-0032",
            phone: "+81 3 5555 0143",
            email: "tokyo.lab@vibecoderceramics.com",
            tier: "Authorized Showroom",
            specialty: "Minimalist Porcelain Slabs"
        },
        {
            id: 5,
            name: "Atlas Gulf Surfaces",
            city: "Dubai",
            country: "United Arab Emirates",
            address: "Al Quoz Industrial Area 3, Dubai",
            phone: "+971 4 555 8920",
            email: "dubai.gulf@vibecoderceramics.com",
            tier: "Global Flagship Partner",
            specialty: "Large-Scale Commercial Towers"
        },
        {
            id: 6,
            name: "Nordic Form & Surface",
            city: "Stockholm",
            country: "Sweden",
            address: "Birger Jarlsgatan 18, 114 34 Stockholm",
            phone: "+46 8 123 4567",
            email: "stockholm.nordic@vibecoderceramics.com",
            tier: "Authorized Showroom",
            specialty: "Sustainable Architectural Paving"
        }
    ];

    // Filter logic
    const filteredDealers = dealersData.filter((dealer) => {
        const matchesSearch = 
            dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dealer.country.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesTier = selectedTier === "all" || dealer.tier === selectedTier;

        return matchesSearch && matchesTier;
    });

    return (
        <div className="w-full bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-white selection:text-black">
            
            {/* Hero Section */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-neutral-800 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 w-fit mb-6">
                        <Compass size={14} className="text-amber-500 animate-spin" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Global Directory // Sector 06</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        Authorized <br />Dealer Network.
                    </h1>
                    <p className="text-neutral-400 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Connect with our certified global showrooms, master fabricators, and exclusive architectural distribution partners."
                    </p>
                </div>
            </section>

            {/* Search & Filter Control Bar */}
            <section className="w-full px-8 lg:px-24 py-10 border-b border-neutral-800 bg-neutral-950">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Search Input */}
                    <div className="w-full md:w-1/2 flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-4 py-3 focus-within:border-white transition-colors">
                        <Search size={20} className="text-neutral-500 shrink-0" />
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH BY CITY, COUNTRY, OR STUDIO NAME..."
                            className="w-full bg-transparent outline-none text-xs uppercase tracking-widest placeholder:text-neutral-600 text-white"
                        />
                    </div>

                    {/* Tier Filter Buttons */}
                    <div className="w-full md:w-auto flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
                        {["all", "Global Flagship Partner", "Authorized Showroom"].map((tier) => (
                            <button
                                key={tier}
                                onClick={() => setSelectedTier(tier)}
                                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border whitespace-nowrap ${
                                    selectedTier === tier 
                                        ? "bg-white text-black border-white shadow-lg" 
                                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
                                }`}
                            >
                                {tier === "all" ? "All Locations" : tier}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Dealers Grid Showcase with Background Watermark Logos */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-neutral-800 bg-[#0c0c0c]">
                
                {filteredDealers.length === 0 ? (
                    <div className="text-center py-24 border border-dashed border-neutral-800 bg-neutral-950">
                        <Building size={48} className="mx-auto text-neutral-600 mb-4" />
                        <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-white">No Dealers Found</h3>
                        <p className="text-neutral-500 text-xs uppercase tracking-wider">Try adjusting your search query or tier filter.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDealers.map((dealer) => (
                            <div 
                                key={dealer.id}
                                className="bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between group hover:border-neutral-500 transition-all hover:shadow-2xl relative overflow-hidden"
                            >
                                {/* Background Watermark Logo Graphic */}
                                <Building 
                                    size={180} 
                                    strokeWidth={0.5} 
                                    className="absolute -bottom-8 -right-8 text-white/[0.03] pointer-events-none group-hover:scale-110 group-hover:text-white/[0.06] transition-all duration-700" 
                                />

                                <div className="relative z-10">
                                    {/* Tier Badge & Specialty */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-neutral-900 text-neutral-300 px-3 py-1 border border-neutral-800">
                                            {dealer.tier}
                                        </span>
                                        <span className="text-[9px] uppercase tracking-widest text-amber-500 font-semibold">
                                            {dealer.specialty}
                                        </span>
                                    </div>

                                    {/* Dealer Name & Location */}
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-white group-hover:text-neutral-300 transition-colors">
                                        {dealer.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
                                        <MapPin size={14} className="text-amber-500" />
                                        <span>{dealer.city}, {dealer.country}</span>
                                    </div>

                                    {/* Address & Contact Info */}
                                    <div className="space-y-3 pt-6 border-t border-neutral-900 mb-8">
                                        <p className="text-xs text-neutral-400 leading-relaxed">
                                            {dealer.address}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-neutral-300">
                                            <Phone size={14} className="text-neutral-500 shrink-0" />
                                            <span>{dealer.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-300">
                                            <Mail size={14} className="text-neutral-500 shrink-0" />
                                            <span className="truncate">{dealer.email}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Link 
                                    href={`/contact?dealer=${encodeURIComponent(dealer.name)}`}
                                    className="relative z-10 w-full bg-neutral-900 text-white border border-neutral-800 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors"
                                >
                                    <span>Schedule Visit</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                            </div>
                        ))}
                    </div>
                )}

            </section>

            {/* Bottom Call to Action for Partner Applications */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-black text-white border-t border-neutral-800">
                <Grid2X2 size={48} strokeWidth={1.5} className="mb-6 text-neutral-500 animate-pulse" />
                <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                    Become an Authorized Partner
                </h2>
                <p className="text-neutral-400 text-sm lg:text-base max-w-lg mb-10 leading-relaxed">
                    Are you an architectural distributor, design studio, or stone showroom? Apply to join our global network of verified dealers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors shadow-2xl">
                        Apply For Dealership
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default DealersPage;