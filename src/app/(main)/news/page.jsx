"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, Search, Calendar, ArrowRight, Newspaper, Compass, Tag, Clock, User, MapPin } from "lucide-react";

const NewsEventsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Comprehensive news dataset structured for the upcoming dynamic details page
    const articlesData = [
        {
            id: 1,
            title: "Milan Design Week 2026: The Obsidian Monolith Showcase",
            category: "Exhibition",
            date: "September 12, 2026",
            readTime: "4 min read",
            author: "Elena Rostova",
            location: "Milan, Italy",
            summary: "Vibecoder Ceramics unveils its immersive structural pavilion at Milan Design Week, featuring oversized porcelain slabs carved from natural volcanic rock formations.",
            content: [
                "Milan Design Week 2026 has witnessed one of the most striking architectural installations of the decade. Vibecoder Ceramics, in collaboration with Vanguard Studio, unveiled the 'Obsidian Monolith'—a towering 12-meter temporary pavilion constructed entirely from ultra-high-density porcelain slabs.",
                "The exhibition explores the boundary between raw geological matter and precision engineering. Visitors walked through corridors lined with matte-finish slabs featuring continuous veining that stretched seamlessly across floors, walls, and ceiling grids.",
                "'We wanted to demonstrate that porcelain is no longer just a surface finish; it is a primary structural medium,' noted lead architect Marcus Vance during the opening keynote."
            ],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "Achieving 100% Closed-Loop Water Recycling Across European Foundries",
            category: "Sustainability",
            date: "August 28, 2026",
            readTime: "3 min read",
            author: "Dr. Henrik Lindqvist",
            location: "Stockholm Facility, Sweden",
            summary: "Our primary manufacturing facility has officially transitioned to a completely closed-loop hydration cycle, recycling 98% of industrial processing water.",
            content: [
                "Environmental stewardship is deeply embedded in Vibecoder Ceramics' engineering ethos. Today, our primary European manufacturing foundry has officially certified its transition to a 100% closed-loop hydration and filtration cycle.",
                "By integrating advanced multi-stage reverse osmosis and solar-powered thermal kilns, the facility now recycles 98% of all industrial water utilized during wet pressing and polishing phases.",
                "This milestone significantly reduces our overall carbon footprint while maintaining the absolute sub-millimeter precision and structural integrity required for luxury architectural applications."
            ],
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 3,
            title: "Introducing the 2026 Architectural Slate & Marble Lookbook",
            category: "Press Release",
            date: "August 14, 2026",
            readTime: "5 min read",
            author: "Claire Dupont",
            location: "New York Design District",
            summary: "Explore our latest digital portfolio highlighting matte-finish porcelain slabs designed specifically for minimalist commercial tower facades.",
            image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 4,
            title: "Architectural Masterclass Series: Tokyo Design District",
            category: "Event",
            date: "July 30, 2026",
            readTime: "6 min read",
            author: "Kenji Sato",
            location: "Roppongi Lab, Tokyo",
            summary: "Join our principal structural engineers for a live workshop on sub-millimeter calibration and continuous veining techniques in Tokyo.",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 5,
            title: "Expansion of the Global Flagship Dealer Network into Dubai",
            category: "Press Release",
            date: "July 12, 2026",
            readTime: "3 min read",
            author: "Tariq Al-Mansoor",
            location: "Al Quoz, Dubai",
            summary: "We are proud to announce our partnership with Atlas Gulf Surfaces, opening a new 10,000 sq. ft. showroom in Al Quoz Industrial Area.",
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1000&auto=format&fit=crop",
            featured: false
        }
    ];

    // Filter logic
    const filteredArticles = articlesData.filter((item) => {
        const matchesSearch = 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.author.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="w-full bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-white selection:text-black">
            
            {/* Hero Section */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-neutral-800 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 w-fit mb-6">
                        <Compass size={14} className="text-amber-500 animate-spin" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Chronicle // Sector 07</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        News & <br />Architectural Events.
                    </h1>
                    <p className="text-neutral-400 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Stay informed on global exhibitions, sustainability milestones, engineering breakthroughs, and upcoming design masterclasses."
                    </p>
                </div>
            </section>

            {/* Search & Category Filter Control Bar */}
            <section className="w-full px-8 lg:px-24 py-10 border-b border-neutral-800 bg-neutral-950">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Search Input */}
                    <div className="w-full md:w-1/2 flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-4 py-3 focus-within:border-white transition-colors">
                        <Search size={20} className="text-neutral-500 shrink-0" />
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH ARTICLES, EXHIBITIONS, OR AUTHORS..."
                            className="w-full bg-transparent outline-none text-xs uppercase tracking-widest placeholder:text-neutral-600 text-white"
                        />
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="w-full md:w-auto flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
                        {["all", "Exhibition", "Sustainability", "Press Release", "Event"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border whitespace-nowrap ${
                                    selectedCategory === cat 
                                        ? "bg-white text-black border-white shadow-lg" 
                                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
                                }`}
                            >
                                {cat === "all" ? "All Dossiers" : cat}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Articles Grid Showcase */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-neutral-800 bg-[#0c0c0c]">
                
                {filteredArticles.length === 0 ? (
                    <div className="text-center py-24 border border-dashed border-neutral-800 bg-neutral-950">
                        <Newspaper size={48} className="mx-auto text-neutral-600 mb-4" />
                        <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-white">No Dossiers Found</h3>
                        <p className="text-neutral-500 text-xs uppercase tracking-wider">Try adjusting your search query or category filter.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
                            <div 
                                key={article.id}
                                className="bg-neutral-950 border border-neutral-800 flex flex-col justify-between group hover:border-neutral-500 transition-all hover:shadow-2xl relative overflow-hidden"
                            >
                                {/* Thumbnail Image with Zoom */}
                                <div className="h-56 overflow-hidden relative border-b border-neutral-800">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                                        style={{ backgroundImage: `url(${article.image})` }}
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-neutral-700 px-3 py-1">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur border border-neutral-700 px-3 py-1 flex items-center gap-1.5 text-neutral-300">
                                        <MapPin size={10} className="text-amber-500" />
                                        <span className="text-[9px] uppercase tracking-widest">{article.location}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col justify-between flex-grow">
                                    <div>
                                        {/* Meta Information */}
                                        <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={12} className="text-amber-500" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={12} className="text-neutral-500" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Title & Summary */}
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-neutral-300 transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                                            {article.summary}
                                        </p>

                                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500 mb-8 pt-4 border-t border-neutral-900">
                                            <User size={12} className="text-neutral-400" />
                                            <span>By {article.author}</span>
                                        </div>
                                    </div>

                                    {/* Action Link */}
                                    <Link 
                                        href={`/news/${article.id}`}
                                        className="w-full bg-neutral-900 text-white border border-neutral-800 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors"
                                    >
                                        <span>Read Full Dossier</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>
                )}

            </section>

        </div>
    );
};

export default NewsEventsPage;