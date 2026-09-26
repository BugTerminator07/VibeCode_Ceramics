"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
    Grid2X2, ShieldAlert, ArrowRight, Lock, 
    Fingerprint, Terminal, Compass, Scan, Sparkles, RefreshCw
} from "lucide-react";

function AccessRequiredContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [scanProgress, setScanProgress] = useState(18);
    const [currentTime, setCurrentTime] = useState("");

    // Detect the route the user was attempting to access
    const rawRedirect = searchParams.get("redirect") || "/catalogue";
    const cleanDestination = rawRedirect.replace("/", "").toUpperCase() || "CATALOGUE";

    // Animated biometric radar telemetry loop
    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress((prev) => (prev >= 100 ? 12 : prev + Math.floor(Math.random() * 8) + 2));
        }, 320);

        const timeInterval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toTimeString().split(" ")[0] + " UTC");
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#020b0e] text-teal-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-teal-500 selection:text-black">
            
            {/* Ambient Cyan/Teal Volumetric Light Fields */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-500/15 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-emerald-500/15 via-teal-500/5 to-transparent blur-[160px] pointer-events-none" />

            {/* Precision Blueprint Grid & Crosshair Guides */}
            <div 
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-space: 40px;
                        linear-gradient(to right, #2dd4bf 1px, transparent 1px),
                        linear-gradient(to bottom, #2dd4bf 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px"
                }}
            />

            {/* Top Security Bar */}
            <header className="relative z-20 w-full border-b border-teal-950/80 bg-[#020b0e]/70 backdrop-blur-md px-6 sm:px-12 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="text-teal-400 group-hover:rotate-90 transition-transform duration-700">
                        <Grid2X2 size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col border-l border-teal-800/40 pl-3">
                        <span className="text-xs font-black tracking-[0.28em] uppercase text-white">Vibe Code</span>
                        <span className="text-[8px] font-mono tracking-[0.4em] uppercase text-teal-400/80">Ceramics Studio</span>
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-teal-400 font-semibold hidden sm:inline-block">
                        GATEWAY PROTOCOL // LEVEL 04
                    </span>
                </div>
            </header>

            {/* Central Vault Chamber */}
            <main className="relative z-20 max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center my-auto">
                
                {/* Active Interactive Radar Reticle */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-10 flex items-center justify-center">
                    
                    {/* Outer Rotating Compass Ring */}
                    <div className="absolute inset-0 rounded-full border border-teal-500/20 border-dashed animate-[spin_60s_linear_infinite]" />
                    
                    {/* Counter-Rotating Segment Ring */}
                    <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-teal-400/60 border-r-cyan-400/40 animate-[spin_16s_linear_infinite_reverse]" />

                    {/* Radar Pulse Sweep */}
                    <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-teal-950/40 via-teal-900/10 to-transparent border border-teal-800/50 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.12)]">
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(45,212,191,0.25)_360deg)] animate-[spin_4s_linear_infinite]" />
                        
                        {/* Target Reticle Crosshairs */}
                        <div className="absolute w-full h-[1px] bg-teal-500/20" />
                        <div className="absolute h-full w-[1px] bg-teal-500/20" />

                        {/* Central Holographic Icon */}
                        <div className="relative z-10 p-4 rounded-full bg-black/80 border border-teal-500/50 text-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                            <Fingerprint size={36} strokeWidth={1.5} className="animate-pulse" />
                        </div>
                    </div>

                    {/* Floating HUD Badges */}
                    <div className="absolute -top-2 bg-[#021317] border border-teal-500/40 px-2.5 py-0.5 text-[8px] font-mono uppercase tracking-widest text-teal-300 shadow-md">
                        ID // ENCRYPTED
                    </div>
                    <div className="absolute -bottom-2 bg-[#021317] border border-teal-500/40 px-2.5 py-0.5 text-[8px] font-mono uppercase tracking-widest text-cyan-300 flex items-center gap-1 shadow-md">
                        <Lock size={9} /> ACCESS LOCKED
                    </div>
                </div>

                {/* Status Telemetry Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-800/60 text-teal-300 text-[10px] font-mono uppercase tracking-[0.25em] mb-6 shadow-sm">
                    <Terminal size={12} className="text-teal-400" />
                    <span>Attempted Vector:</span>
                    <span className="text-white font-bold bg-teal-900/80 px-2 py-0.5 rounded border border-teal-700/50">
                        /{cleanDestination}
                    </span>
                </div>

                {/* Typography Header */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.08] mb-6">
                    Clearance Required for <br />
                    <span className="bg-gradient-to-r from-teal-200 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                        Architectural Archive.
                    </span>
                </h1>

                <p className="max-w-2xl text-teal-200/70 font-sans text-sm sm:text-base leading-relaxed mb-10">
                    The surface catalog, physical showroom network, and 3D visualizer suites are calibrated for certified architects, contractors, and design partners. Authenticate your studio session to continue.
                </p>

                {/* Authentication Portals (Dual Action) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-md">
                    
                    {/* Primary Portal: Log In */}
                    <Link
                        href={`/login?redirect=${encodeURIComponent(rawRedirect)}`}
                        className="flex-1 py-4 px-6 bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 text-neutral-950 text-xs font-mono font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(45,212,191,0.35)] hover:shadow-[0_0_45px_rgba(45,212,191,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                    >
                        <span>Authenticate</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    {/* Secondary Portal: Sign Up */}
                    <Link
                        href={`/signup?redirect=${encodeURIComponent(rawRedirect)}`}
                        className="flex-1 py-4 px-6 bg-[#041c22]/80 border border-teal-500/40 text-teal-200 hover:text-white hover:bg-teal-900/40 hover:border-teal-400 text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>Apply For Studio ID</span>
                    </Link>
                </div>

                {/* Live Scanning Gauge Bar */}
                <div className="w-full max-w-xs mt-12 flex flex-col items-center gap-2">
                    <div className="w-full flex justify-between text-[9px] font-mono text-teal-400/70 uppercase tracking-widest">
                        <span>Biometric Buffer</span>
                        <span>{scanProgress}% Verified</span>
                    </div>
                    <div className="w-full h-[2px] bg-teal-950 overflow-hidden relative border-b border-teal-900/40">
                        <div 
                            className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_10px_#2dd4bf]"
                            style={{ width: `${scanProgress}%` }}
                        />
                    </div>
                </div>

            </main>

            {/* Bottom Telemetry Ticker Footer */}
            <footer className="relative z-20 w-full border-t border-teal-950/80 bg-[#020b0e]/90 px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono uppercase tracking-[0.22em] text-teal-400/60">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-teal-400">
                        <Compass size={12} /> SECURE PROTOCOL // TLS 1.3
                    </span>
                    <span className="hidden md:inline">|</span>
                    <span className="hidden md:inline">NODE // MILAN-FRA-HKG</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <span>TIMELOCK: {currentTime || "SYNCING..."}</span>
                    <button 
                        onClick={() => router.push("/")}
                        className="text-white hover:text-teal-300 underline underline-offset-4 tracking-widest"
                    >
                        Return Home
                    </button>
                </div>
            </footer>

        </div>
    );
}

export default function AccessRequiredPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen w-full bg-[#020b0e] flex items-center justify-center">
                <div className="flex items-center gap-3 text-teal-400 font-mono text-xs uppercase tracking-widest">
                    <RefreshCw size={16} className="animate-spin" /> Initializing Vault Clearance...
                </div>
            </div>
        }>
            <AccessRequiredContent />
        </Suspense>
    );
}