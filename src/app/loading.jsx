import React from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden">
            
            {/* Subtle Architectural Background Grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-10">
                
                {/* Animated Geometric Logo */}
                <div className="relative w-16 h-16 transform rotate-45">
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5 w-full h-full">
                        {/* Top-Left: Outlined Square */}
                        <div className="w-full h-full border border-neutral-600 animate-pulse" style={{ animationDelay: "0ms" }}></div>
                        
                        {/* Top-Right: Emerald Accent Filled Square */}
                        <div className="w-full h-full bg-emerald-600 animate-pulse shadow-[0_0_15px_rgba(5,150,105,0.4)]" style={{ animationDelay: "150ms" }}></div>
                        
                        {/* Bottom-Left: White Filled Square */}
                        <div className="w-full h-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ animationDelay: "300ms" }}></div>
                        
                        {/* Bottom-Right: Outlined Square */}
                        <div className="w-full h-full border border-neutral-600 animate-pulse" style={{ animationDelay: "450ms" }}></div>
                    </div>
                </div>

                {/* Typography & Progress Line */}
                <div className="flex flex-col items-center gap-4 mt-4">
                    <div className="flex flex-col items-center">
                        <span className="text-white font-sans font-black tracking-[0.3em] uppercase text-sm mb-1">
                            Vibe Code
                        </span>
                        <span className="text-amber-400 font-mono text-[9px] tracking-[0.4em] uppercase">
                            Loading Studio Environment
                        </span>
                    </div>

                    {/* Infinite Scanning Line */}
                    <div className="w-48 h-[1px] bg-neutral-800 relative overflow-hidden mt-2">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-amber-400 opacity-80 animate-[translate_1.5s_ease-in-out_infinite]" 
                             style={{
                                 animation: 'scan 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                             }}
                        >
                            <style>{`
                                @keyframes scan {
                                    0% { transform: translateX(-100%); }
                                    100% { transform: translateX(300%); }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}