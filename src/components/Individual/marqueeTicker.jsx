"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Sparkles, Radio } from "lucide-react";
import productsData from "../data/products.json";

const MarqueeTicker = () => {
    const [currentTime, setCurrentTime] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    // Initialize and run live ticker after mount to prevent SSR hydration mismatch
    useEffect(() => {
        setCurrentTime(new Date());
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Generate real ticker items dynamically from your products data
    const tickerProducts = productsData.slice(0, 8).map(item => ({
        id: item.id,
        text: `✨ LIVE SPEC // ${item.title.toUpperCase()} (${item.dimensions}) — $${item.price.toFixed(2)}/m² — [VIEW DOSSIER]`
    }));

    // Analog clock angle math
    const seconds = currentTime ? currentTime.getSeconds() : 0;
    const minutes = currentTime ? currentTime.getMinutes() : 0;
    const hours = currentTime ? currentTime.getHours() % 12 : 0;

    const secondDegrees = seconds * 6; 
    const minuteDegrees = minutes * 6 + seconds * 0.1;
    const hourDegrees = hours * 30 + minutes * 0.5;

    // Date & 12-hour digital time formatting
    const formattedDate = currentTime ? format(currentTime, "EEEE, d MMMM yyyy") : "--";
    const formattedTime = currentTime ? format(currentTime, "hh:mm:ss a") : "--:--:--";

    return (
        <div className="w-full bg-[#04241B] border-y border-amber-500/40 text-amber-100 font-mono text-xs overflow-hidden flex items-center h-16 relative z-40 top-0 select-none shadow-[0_0_30px_rgba(4,36,27,0.95)]">
            
            {/* Left Static Badge with Pulsing Live Indicator */}
            <div className="bg-[#062D20] border-r border-amber-500/30 px-6 h-full flex items-center gap-3 shrink-0 z-10">
                <div className="relative flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping absolute" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300 relative shadow-[0_0_12px_#f59e0b]" />
                </div>
                <span className="font-bold tracking-widest text-amber-300 uppercase text-[11px] flex items-center gap-1.5">
                    <Radio size={14} className="text-amber-400 animate-pulse" /> LIVE FEED
                </span>
            </div>

            {/* Native HTML Marquee with Pause on Hover & Clickable Links */}
            <div 
                className="flex-1 overflow-hidden h-full flex items-center px-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <marquee 
                    scrollamount="6"
                    behavior="scroll" 
                    direction="left"
                    truespeed="true"
                    className="w-full h-full flex items-center cursor-pointer"
                    style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                >
                    <div 
                        className="flex items-center gap-12 py-3"
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                    >
                        {tickerProducts.map((prod) => (
                            <Link 
                                key={prod.id} 
                                href={`/catalogue/${prod.id}`}
                                className="inline-flex items-center gap-3 shrink-0 group hover:opacity-15 transition-opacity"
                            >
                                <Sparkles size={14} className="text-amber-400 group-hover:scale-125 transition-transform" />
                                <span className="uppercase tracking-wider text-xs text-amber-100 font-semibold group-hover:text-amber-300 transition-colors">
                                    {prod.text}
                                </span>
                                <span className="text-emerald-700 ml-8">//</span>
                            </Link>
                        ))}
                    </div>
                </marquee>
            </div>

            {/* Right Static Date, Analog Dial, & 12-Hour Digital Time */}
            <div className="bg-[#031C14] border-l border-amber-500/30 px-6 h-full hidden xl:flex items-center gap-5 shrink-0 z-10 font-mono text-xs text-amber-300">
                
                {/* Date Display */}
                <span className="text-amber-200/90 tracking-wider font-sans whitespace-nowrap">{formattedDate}</span>
                
                <span className="text-emerald-700">|</span>

                {/* Detailed Analog Clock with Dial Tick Notches */}
                <div className="flex items-center gap-3">
                    <svg 
                        className="w-9 h-9 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.35)]" 
                        viewBox="0 0 32 32" 
                        fill="none"
                    >
                        {/* Dial Outer Rim */}
                        <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.5" className="text-amber-500/80 fill-[#02130e]" />
                        
                        {/* 12 Hour Dial Markers */}
                        {[...Array(12)].map((_, i) => (
                            <line
                                key={i}
                                x1="16"
                                y1="3"
                                x2="16"
                                y2={i % 3 === 0 ? "6.5" : "5"}
                                stroke={i % 3 === 0 ? "#f59e0b" : "#047857"}
                                strokeWidth={i % 3 === 0 ? "1.5" : "1"}
                                strokeLinecap="round"
                                transform={`rotate(${i * 30} 16 16)`}
                            />
                        ))}

                        {/* Hour Hand */}
                        <line 
                            x1="16" 
                            y1="16" 
                            x2="16" 
                            y2="9.5" 
                            strokeLinecap="round" 
                            transform={`rotate(${hourDegrees} 16 16)`} 
                            className="text-amber-100" 
                            strokeWidth="2.2" 
                        />
                        
                        {/* Minute Hand */}
                        <line 
                            x1="16" 
                            y1="16" 
                            x2="16" 
                            y2="6.5" 
                            strokeLinecap="round" 
                            transform={`rotate(${minuteDegrees} 16 16)`} 
                            className="text-amber-400" 
                            strokeWidth="1.6" 
                        />
                        
                        {/* Second Hand with Counterweight */}
                        <g transform={`rotate(${secondDegrees} 16 16)`}>
                            <line x1="16" y1="19" x2="16" y2="5" strokeLinecap="round" className="text-amber-500" strokeWidth="1" />
                            <circle cx="16" cy="19" r="1" className="fill-amber-500" />
                        </g>

                        {/* Center Dial Pin */}
                        <circle cx="16" cy="16" r="1.5" className="fill-amber-300 stroke-[#02130e]" strokeWidth="0.5" />
                    </svg>

                    {/* 12-Hour Digital Time */}
                    <span className="text-amber-400 font-bold tracking-wider whitespace-nowrap">{formattedTime}</span>
                </div>
            </div>

        </div>
    );
};

export default MarqueeTicker;