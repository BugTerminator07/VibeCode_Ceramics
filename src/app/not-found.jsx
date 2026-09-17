"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Grid2X2 } from "lucide-react";

export default function NotFound() {
    // Create a 36-tile grid (6x6)
    const [tiles, setTiles] = useState(Array(36).fill(true));

    // Randomly "glitch" a tile every few seconds to draw attention
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 36);
            shatterTile(randomIndex);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const shatterTile = (index) => {
        // Turn the tile black (shattered)
        setTiles((prev) => {
            const newTiles = [...prev];
            newTiles[index] = false;
            return newTiles;
        });

        // Restore the tile after 1.5 seconds
        setTimeout(() => {
            setTiles((current) => {
                const restored = [...current];
                restored[index] = true;
                return restored;
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row border-t border-neutral-200 font-sans overflow-hidden">
            
            {/* Left Section - Typography & Actions */}
            <div className="flex-1 p-8 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-200 relative">
                
                {/* Background Watermark */}
                <div className="absolute top-12 left-12 text-neutral-100 pointer-events-none">
                    <Grid2X2 size={400} strokeWidth={0.5} />
                </div>

                <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-500 mb-6 block">
                        Error 404
                    </span>
                    
                    <h1 className="text-6xl lg:text-[10rem] font-black tracking-tighter leading-none text-black mb-4">
                        404
                    </h1>
                    
                    <h2 className="text-2xl lg:text-4xl font-serif italic text-neutral-800 mb-8 border-b-2 border-black inline-block pb-2">
                        Surface Not Found.
                    </h2>
                    
                    <p className="text-neutral-500 text-sm lg:text-base max-w-md leading-relaxed mb-12">
                        The ceramic slab or collection you are looking for has been discontinued, moved to a different showroom, or simply shattered. 
                    </p>

                    <Link 
                        href="/" 
                        className="group inline-flex items-center gap-4 bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                    >
                        <span className="group-hover:-translate-x-2 transition-transform">
                            <ArrowLeft size={20} />
                        </span>
                        <span className="text-xs uppercase font-bold tracking-[0.2em]">
                            Return to Showroom
                        </span>
                    </Link>
                </div>
            </div>

            {/* Right Section - Interactive Shattering Tile Wall */}
            <div className="flex-1 bg-neutral-50 p-8 lg:p-20 flex items-center justify-center cursor-crosshair">
                <div className="w-full max-w-2xl aspect-square grid grid-cols-6 grid-rows-6 gap-1 p-1 bg-neutral-200 border border-neutral-300 shadow-2xl transform lg:-rotate-3 hover:rotate-0 transition-transform duration-700">
                    {tiles.map((isWhole, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => shatterTile(index)}
                            className={`w-full h-full transition-colors duration-500 ease-out ${
                                isWhole 
                                    ? "bg-white border border-neutral-100" 
                                    : "bg-neutral-950 scale-95"
                            }`}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    );
}