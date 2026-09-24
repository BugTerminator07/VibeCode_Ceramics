"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import productsData from "@/components/data/products.json";
import { 
    ArrowLeft, ArrowRight, Sparkles, Layers, 
    Columns3, ShieldCheck, Ruler, CheckCircle2 
} from "lucide-react";

const ArchitecturalFlutedPage = () => {
    const router = useRouter();

    // Filter products that feature fluted, grooved, or linear profiles
    const flutedProducts = useMemo(() => {
        return productsData.filter(p => 
            p.finish?.toLowerCase().includes('flut') || 
            p.finish?.toLowerCase().includes('groov') ||
            p.title.toLowerCase().includes('flut') ||
            p.description.toLowerCase().includes('linear') ||
            p.category.toLowerCase().includes('slab')
        );
    }, []);

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
                        Finish Typology // 04
                    </span>
                </div>
            </div>

            {/* Cinematic Hero Section */}
            <section className="w-full bg-neutral-950 text-white py-24 lg:py-36 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="w-full h-full bg-cover bg-center opacity-40 scale-105"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 text-amber-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-6 shadow-sm">
                        <Sparkles size={12} /> Rhythmic Vertical Shadowplay
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-8">
                        Architectural Fluted.
                    </h1>
                    <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto">
                        Precision-extruded linear reliefs engineered for feature walls and statement columns, creating dynamic interplay between light and shadow throughout the day.
                    </p>
                </div>
            </section>

            {/* Editorial Narrative Section */}
            <section className="w-full py-24 px-6 sm:px-10 lg:px-20 border-b border-neutral-200 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                            01 // Linear Extrusion
                        </span>
                        <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-950 mb-3">
                            Geometric Precision
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            Each fluted panel is manufactured via high-precision extrusion dies, guaranteeing razor-sharp parallel grooves and flawless modular alignment.
                        </p>
                    </div>

                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                            02 // Dynamic Shadowplay
                        </span>
                        <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-950 mb-3">
                            Living Surfaces
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            As ambient light moves across the room, the vertical ribs catch and refract photons differently, turning static walls into living visual installations.
                        </p>
                    </div>

                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                            03 // Spatial Focal Points
                        </span>
                        <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-950 mb-3">
                            Feature Columns & Walls
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            Designed specifically to anchor hospitality lobbies, executive boardrooms, and luxury residential feature hearths with undeniable architectural presence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filtered Product Showcase */}
            <section className="w-full py-24 px-6 sm:px-10 lg:px-20 max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                            Archive Collection
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950">
                            Available Fluted & Linear Surfaces
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                        Showing {flutedProducts.length} Specifications
                    </span>
                </div>

                {flutedProducts.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-neutral-300 bg-white">
                        <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">No fluted surfaces found in the current dataset.</p>
                        <Link href="/catalogue" className="px-6 py-3 bg-neutral-950 text-white text-xs font-mono uppercase tracking-widest">
                            Browse Entire Catalogue
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {flutedProducts.map((item) => (
                            <div 
                                key={item.id}
                                className="group flex flex-col bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
                            >
                                <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden border-b border-neutral-200">
                                    <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-900 border border-neutral-200">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                                            REF // {item.id}
                                        </span>
                                        <h3 className="text-xl font-serif text-neutral-950 mb-3 group-hover:text-emerald-800 transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-600 mb-6">
                                            <span>{item.dimensions}</span>
                                            <span>•</span>
                                            <span>{item.thickness || "10mm"}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                                        <span className="text-sm font-mono font-bold text-neutral-900">
                                            ${item.price.toFixed(2)} <span className="text-[10px] text-neutral-400 font-normal">/ m²</span>
                                        </span>
                                        <Link 
                                            href={`/catalogue/${item.id}`}
                                            className="text-[10px] font-bold font-mono uppercase tracking-widest text-neutral-900 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                                        >
                                            <span>Inspect</span>
                                            <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Technical Specifications Summary Footer */}
            <section className="w-full bg-neutral-900 text-white py-20 px-6 sm:px-10 lg:px-20 mt-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 block mb-2">
                            Specification Standard
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif">
                            Inquire about custom profile depths for our Fluted range.
                        </h2>
                    </div>
                    <Link 
                        href="/contact?inquiry=Architectural+Fluted+Sample+Box"
                        className="px-8 py-4 bg-white text-neutral-950 text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors shadow-lg shrink-0 flex items-center gap-2"
                    >
                        Request Sample Box <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ArchitecturalFlutedPage;