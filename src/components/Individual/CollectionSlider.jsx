"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import productsData from "../data/products.json";

const DiscoverCollection = () => {
    // Select max 10 items and duplicate them for the infinite loop
    const displayProducts = productsData.slice(0, 10);
    const infiniteProducts = [...displayProducts, ...displayProducts];
    
    const trackRef = useRef(null);
    const position = useRef(0); // Tracks exact pixel position
    const [isPaused, setIsPaused] = useState(false);

    // GPU-Accelerated Continuous Animation Loop
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationFrameId;

        const animate = () => {
            if (!isPaused) {
                // Speed of the marquee (lower is slower)
                position.current -= 0.6; 
                
                // Calculate the exact halfway point (the width of the original 10 items)
                const halfWidth = track.scrollWidth / 2;

                // Seamlessly snap back to 0 when we reach the end of the first set
                if (Math.abs(position.current) >= halfWidth) {
                    position.current = 0;
                }

                // Apply GPU-accelerated transform
                track.style.transform = `translate3d(${position.current}px, 0, 0)`;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Manual Arrow Controls with Smooth Transitions
    const handleManualScroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;

        const cardWidth = 324; // Approx width of one card + gap
        const halfWidth = track.scrollWidth / 2;

        if (direction === "left") {
            position.current += cardWidth;
            // If going backwards past 0, jump to the duplicate set instantly
            if (position.current > 0) position.current -= halfWidth;
        } else {
            position.current -= cardWidth;
            // If going forward past the half, jump back
            if (Math.abs(position.current) >= halfWidth) position.current += halfWidth;
        }

        // Add a temporary CSS transition for the manual click
        track.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        track.style.transform = `translate3d(${position.current}px, 0, 0)`;

        // Remove the transition after it finishes so the continuous scroll doesn't stutter
        setTimeout(() => {
            if (track) track.style.transition = "none";
        }, 400);
    };

    return (
        <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] bg-neutral-200 flex-1 max-w-[150px] md:max-w-[300px]"></div>
                    <h2 className="text-lg md:text-2xl font-bold uppercase tracking-widest text-neutral-900 text-center px-4">
                        Discover the Best Surfaces Collection
                    </h2>
                    <div className="h-[1px] bg-neutral-200 flex-1 max-w-[150px] md:max-w-[300px]"></div>
                </div>

                <p className="text-center text-sm text-neutral-500 max-w-5xl mx-auto mb-16 leading-relaxed">
                    Looking for the best architectural surfaces? Explore the exclusive Vibe Code Ceramics collection, designed to bring lasting beauty and strength to your projects. From polished slabs to tactile outdoor textures, our surfaces suit every space—living room, kitchen, bathroom, or exterior facade. Choose from a curated range of ceramic and porcelain that enhances your interiors with elegance and durability you can trust.
                </p>

                {/* Continuous Auto-Sliding Area */}
                <div 
                    className="relative w-full flex items-center group mb-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* Left Navigation Arrow */}
                    <button 
                        onClick={() => handleManualScroll("left")}
                        className="absolute -left-2 md:-left-12 z-10 p-2 text-neutral-400 hover:text-neutral-900 transition-colors bg-white/80 backdrop-blur-sm rounded-full md:bg-transparent"
                        aria-label="Previous items"
                    >
                        <ArrowLeft size={24} strokeWidth={1.5} />
                    </button>

                    {/* Mask Container (Hides overflow) */}
                    <div className="w-full overflow-hidden" style={{ cursor: isPaused ? "grab" : "default" }}>
                        
                        {/* GPU-Accelerated Sliding Track */}
                        <div 
                            ref={trackRef}
                            className="flex gap-6 w-max will-change-transform"
                        >
                            {infiniteProducts.map((item, index) => (
                                <div 
                                    key={`${item.id}-${index}`} 
                                    className="flex-none w-[260px] sm:w-[280px] md:w-[300px] flex flex-col gap-4"
                                >
                                    {/* Medium Card Image */}
                                    <Link href={`/catalogue/${item.id}`} className="block w-full aspect-[4/3] bg-neutral-100 overflow-hidden relative border border-neutral-200 group-hover/img:border-neutral-400 transition-colors">
                                        <div 
                                            className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 ease-out"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                    </Link>
                                    
                                    {/* Card Text Area */}
                                    <div className="flex flex-col items-start px-1">
                                        <h3 className="font-bold text-neutral-900 text-sm tracking-tight mb-2 capitalize line-clamp-1">
                                            {item.category}
                                        </h3>
                                        <div className="w-6 h-[2px] bg-emerald-500 mb-3"></div>
                                        <Link 
                                            href={`/catalogue/${item.id}`} 
                                            className="text-[11px] font-bold text-neutral-600 hover:text-emerald-700 uppercase tracking-widest transition-colors"
                                        >
                                            learn more
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button 
                        onClick={() => handleManualScroll("right")}
                        className="absolute -right-2 md:-right-12 z-10 p-2 text-neutral-400 hover:text-neutral-900 transition-colors bg-white/80 backdrop-blur-sm rounded-full md:bg-transparent"
                        aria-label="Next items"
                    >
                        <ArrowRight size={24} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Footer Action Links */}
                <div className="flex flex-col gap-8 items-center md:items-end w-full">
                    <Link 
                        href="/catalogue" 
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-3 w-fit"
                    >
                        <span className="w-4 h-[2px] bg-emerald-500"></span>
                        Discover All Products
                    </Link>

                    <div className="w-full flex justify-center border-t border-neutral-100 pt-10">
                        <Link 
                            href="/catalogue" 
                            className="flex items-center gap-3 border border-neutral-300 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-all shadow-sm"
                        >
                            <Search size={14} /> Advanced Search
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DiscoverCollection;