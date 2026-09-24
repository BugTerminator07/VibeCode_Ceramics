"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import productsData from "@/components/data/products.json";
import { 
    Search, X, Eye, Sparkles, Layers, 
    ArrowRight, ChevronLeft, ChevronRight,
    Crosshair, SlidersHorizontal
} from "lucide-react";

const ITEMS_PER_PAGE = 8;

// We isolate the main content so we can wrap it in Suspense for the useSearchParams hook
const CatalogueContent = () => {
    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get("category");

    const [searchQuery, setSearchQuery] = useState("");
    
    // 1. Initialize the category directly from the URL (or default to "all")
    const [selectedCategory, setSelectedCategory] = useState(
        categoryFromUrl ? categoryFromUrl.toLowerCase() : "all"
    );
    
    const [currentPage, setCurrentPage] = useState(1);
    const [activeModalProduct, setActiveModalProduct] = useState(null);

    // 2. Listen for URL changes (in case the user clicks a footer link while ALREADY on the catalogue page)
    useEffect(() => {
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl.toLowerCase());
            setCurrentPage(1); // Reset pagination when category changes
        } else {
            setSelectedCategory("all");
        }
    }, [categoryFromUrl]);

    // Extract unique categories dynamically
    const categories = useMemo(() => {
        const unique = Array.from(new Set(productsData.map((p) => p.category)));
        return ["all", ...unique];
    }, []);

    // Filter logic
    const filteredProducts = useMemo(() => {
        let list = [...productsData];

        if (selectedCategory !== "all") {
            list = list.filter((item) => item.category.toLowerCase() === selectedCategory);
        }

        if (searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase();
            list = list.filter(
                (item) =>
                    item.title.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.material.toLowerCase().includes(q)
            );
        }

        return list;
    }, [searchQuery, selectedCategory]);

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset to page 1 when search changes manually
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    return (
        <div className="w-full bg-[#FAFAFA] text-neutral-900 min-h-screen font-sans selection:bg-neutral-900 selection:text-white pb-24">
            
            {/* Minimal Header */}
            <section className="w-full px-6 sm:px-10 lg:px-12 py-16 border-b border-neutral-200 bg-white relative">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 font-bold">
                                Vibe Code Database
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950">
                            The Archive.
                        </h1>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 flex flex-col md:items-end">
                        <span className="text-neutral-900 font-bold text-sm">{filteredProducts.length}</span>
                        <span>Active Specifications</span>
                    </div>
                </div>
            </section>

            {/* 2-Column Master Layout */}
            <main className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 py-12 flex flex-col lg:flex-row gap-12 items-start">
                
                {/* LEFT COLUMN: Premium Category Menu & Ceramic Animation */}
                <aside className="w-full lg:w-1/4 shrink-0 flex flex-col gap-10 lg:sticky lg:top-28">
                    
                    {/* Upgraded High-End Category Menu */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 border-b border-neutral-200 pb-4">
                            <SlidersHorizontal size={14} className="text-neutral-900" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                                Collections Index
                            </span>
                        </div>
                        
                        <ul className="flex flex-col gap-2">
                            {categories.map((cat, index) => {
                                const isActive = selectedCategory === cat;
                                return (
                                    <li key={cat}>
                                        <button
                                            onClick={() => {
                                                // When clicked manually, remove URL parameter for cleaner browsing
                                                window.history.replaceState(null, '', '/catalogue');
                                                setSelectedCategory(cat);
                                            }}
                                            className={`group w-full flex items-center justify-between px-5 py-4 transition-all duration-300 ${
                                                isActive
                                                    ? "bg-neutral-950 text-white shadow-xl scale-[1.02]"
                                                    : "bg-white border border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 shadow-sm"
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className={`text-[10px] font-mono ${isActive ? "text-neutral-400" : "text-neutral-400"}`}>
                                                    0{index}
                                                </span>
                                                <span className="text-[11px] font-mono font-bold uppercase tracking-widest">
                                                    {cat}
                                                </span>
                                            </div>
                                            {isActive && (
                                                <ArrowRight size={14} className="text-emerald-400 animate-pulse" />
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Ceramic-Themed Animation: Floating Sintered Slabs */}
                    <div className="hidden lg:flex flex-col bg-white border border-neutral-200 p-6 shadow-sm overflow-hidden relative group">
                        <div className="flex items-center gap-2 mb-8">
                            <Layers size={14} className="text-neutral-900" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">
                                Sintering Process
                            </span>
                        </div>
                        
                        {/* SVG Isometric Slab Animation */}
                        <div className="relative w-full aspect-square flex items-center justify-center bg-neutral-50 border border-neutral-100">
                            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                                {/* Top Layer */}
                                <g className="animate-slab-1">
                                    <polygon points="100,40 160,70 100,100 40,70" fill="#ffffff" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                    <polygon points="40,70 100,100 100,110 40,80" fill="#e5e5e5" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                    <polygon points="100,100 160,70 160,80 100,110" fill="#d4d4d4" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                </g>
                                {/* Middle Layer */}
                                <g className="animate-slab-2">
                                    <polygon points="100,80 160,110 100,140 40,110" fill="#f5f5f5" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                    <polygon points="40,110 100,140 100,150 40,120" fill="#e5e5e5" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                    <polygon points="100,140 160,110 160,120 100,150" fill="#d4d4d4" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                </g>
                                {/* Bottom Layer */}
                                <g className="animate-slab-3">
                                    <polygon points="100,120 160,150 100,180 40,150" fill="#fafafa" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                    <polygon points="40,150 100,180 100,190 40,160" fill="#e5e5e5" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                    <polygon points="100,180 160,150 160,160 100,190" fill="#d4d4d4" stroke="#171717" strokeWidth="1" strokeLinejoin="round" />
                                </g>
                                {/* Scanning Laser */}
                                <line x1="100" y1="20" x2="100" y2="190" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" className="animate-laser" />
                                <circle cx="100" cy="100" r="2" fill="#10b981" className="animate-laser-dot" />
                            </svg>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">
                                Multi-Layer Pressing & Extrusion
                            </span>
                        </div>
                    </div>
                </aside>

                {/* RIGHT COLUMN: Search Bar & Product Grid */}
                <div className="w-full lg:w-3/4 flex flex-col min-h-[600px]">
                    
                    {/* Top Search Command Bar */}
                    <div className="w-full bg-white border border-neutral-200 shadow-sm flex items-center px-4 py-2 mb-10">
                        <Search size={18} className="text-neutral-400 mr-3" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH MATERIAL, SLAB, OR SPECIFICATION..."
                            className="w-full bg-transparent border-none py-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-900 outline-none placeholder:text-neutral-300"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors bg-neutral-50 rounded-full"
                            >
                                <X size={14} strokeWidth={2} />
                            </button>
                        )}
                    </div>
                    
                    {/* Grid Area */}
                    {paginatedProducts.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center border border-dashed border-neutral-300 bg-white p-16">
                            <Crosshair size={40} className="text-neutral-300 mb-6" />
                            <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900 mb-2">
                                Zero Matches Found
                            </h3>
                            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-8 max-w-md">
                                The architectural surface you are searching for is not currently in the selected archive.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    window.history.replaceState(null, '', '/catalogue');
                                    setSelectedCategory("all");
                                }}
                                className="px-8 py-3.5 bg-neutral-950 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Product Grid - 8 Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {paginatedProducts.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group flex flex-col bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden relative"
                                    >
                                        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
                                            <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-900 border border-neutral-200 shadow-sm">
                                                {item.category}
                                            </span>
                                        </div>

                                        {/* Image Showcase */}
                                        <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden border-b border-neutral-200">
                                            <div
                                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            
                                            {/* Quick Inspect Hover */}
                                            <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-colors duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                                                <button
                                                    onClick={() => setActiveModalProduct(item)}
                                                    className="bg-white text-neutral-900 px-6 py-3 text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl hover:bg-neutral-100 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500"
                                                >
                                                    <Eye size={14} /> Quick Inspect
                                                </button>
                                            </div>
                                        </div>

                                        {/* Detailed Specifications Body */}
                                        <div className="p-6 flex flex-col flex-grow bg-white">
                                            <div className="flex items-start justify-between mb-3">
                                                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                                                    REF // {item.id}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl font-serif text-neutral-950 leading-tight mb-5 group-hover:text-emerald-900 transition-colors">
                                                {item.title}
                                            </h3>

                                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                                                <div className="flex flex-col border-l-2 border-neutral-100 pl-3">
                                                    <span className="text-[9px] font-mono text-neutral-400 uppercase">Dimensions</span>
                                                    <span className="text-[11px] font-mono font-bold text-neutral-800">{item.dimensions}</span>
                                                </div>
                                                <div className="flex flex-col border-l-2 border-neutral-100 pl-3">
                                                    <span className="text-[9px] font-mono text-neutral-400 uppercase">Thickness</span>
                                                    <span className="text-[11px] font-mono font-bold text-neutral-800">{item.thickness || "Standard"}</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                                                <div className="w-full sm:w-auto flex-1 flex flex-col">
                                                    <span className="text-[9px] font-mono text-neutral-400 uppercase">Price per m²</span>
                                                    <span className="text-xl font-mono font-bold text-neutral-900">
                                                        ${item.price.toFixed(2)}
                                                    </span>
                                                </div>
                                                <Link 
                                                    href={`/catalogue/${item.id}`}
                                                    className="w-full sm:w-auto px-6 py-3.5 bg-neutral-950 text-white text-[10px] font-bold font-mono uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-md group/link"
                                                >
                                                    Full Specification <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="mt-auto flex items-center justify-center gap-3 border-t border-neutral-200 pt-10">
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-neutral-200 disabled:hover:text-neutral-900 transition-all rounded-full"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    
                                    <div className="flex items-center gap-2">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentPage(i + 1)}
                                                className={`w-10 h-10 text-xs font-mono font-bold transition-all rounded-full border ${
                                                    currentPage === i + 1 
                                                        ? "bg-neutral-900 text-white border-neutral-900 shadow-md" 
                                                        : "bg-transparent text-neutral-500 border-transparent hover:bg-neutral-200"
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-neutral-200 disabled:hover:text-neutral-900 transition-all rounded-full"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

            </main>

            {/* Quick Specification Modal */}
            {activeModalProduct && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
                    <div className="bg-white max-w-4xl w-full border border-neutral-300 shadow-2xl relative overflow-hidden flex flex-col">
                        <div className="px-8 py-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                            <div className="flex items-center gap-3">
                                <Sparkles size={16} className="text-emerald-600" />
                                <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold">
                                    Quick Inspect // {activeModalProduct.id}
                                </span>
                            </div>
                            <button onClick={() => setActiveModalProduct(null)} className="text-neutral-400 hover:text-neutral-950 transition-colors bg-white border border-neutral-200 p-2 shadow-sm rounded-full">
                                <X size={16} strokeWidth={2} />
                            </button>
                        </div>

                        <div className="p-0 sm:p-0 grid grid-cols-1 md:grid-cols-2 items-stretch">
                            <div className="aspect-square md:aspect-auto w-full bg-neutral-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activeModalProduct.image})` }} />
                            </div>

                            <div className="p-8 sm:p-10 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-mono uppercase tracking-widest border border-neutral-200 mb-4">
                                        {activeModalProduct.category}
                                    </span>
                                    <h2 className="text-3xl font-serif text-neutral-950 leading-tight mb-4">
                                        {activeModalProduct.title}
                                    </h2>

                                    <p className="text-neutral-600 leading-relaxed text-sm mb-8 font-sans">
                                        {activeModalProduct.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-widest">Base Price</span>
                                        <span className="text-2xl font-mono font-bold text-neutral-950">
                                            ${activeModalProduct.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <Link 
                                        href={`/catalogue/${activeModalProduct.id}`}
                                        className="px-8 py-4 bg-neutral-950 text-white text-[11px] font-mono uppercase tracking-[0.2em] hover:bg-emerald-900 transition-colors shadow-lg flex items-center gap-2"
                                    >
                                        View Full Spec <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Animations for UI & SVGs */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease-out forwards;
                }
                @keyframes floatSlab1 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes floatSlab2 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(4px); }
                }
                @keyframes floatSlab3 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(12px); }
                }
                @keyframes scanLaser {
                    0% { transform: translateX(-40px); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(40px); opacity: 0; }
                }

                .animate-slab-1 { animation: floatSlab1 4s ease-in-out infinite; }
                .animate-slab-2 { animation: floatSlab2 4s ease-in-out infinite; }
                .animate-slab-3 { animation: floatSlab3 4s ease-in-out infinite; }
                .animate-laser { animation: scanLaser 3s linear infinite; }
                .animate-laser-dot { animation: scanLaser 3s linear infinite; }
            `}</style>
        </div>
    );
};

// Next.js 13+ requires a Suspense boundary when using useSearchParams in a client component
export default function CataloguePageWrapper() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA]" />}>
            <CatalogueContent />
        </Suspense>
    );
}