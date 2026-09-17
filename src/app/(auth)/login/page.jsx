"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, ArrowRight, Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    // New high-end architectural surface finishes
    const textures = [
        { 
            name: "Polished Onyx", 
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
            color: "#e5e5e5"
        },
        { 
            name: "Architectural Concrete", 
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
            color: "#a3a3a3"
        },
        { 
            name: "Nordic Slate", 
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
            color: "#404040"
        }
    ];

    const [activeTexture, setActiveTexture] = useState(textures[0]);

    return (
        <div className="min-h-screen flex w-full font-sans bg-white text-black overflow-hidden">
            
            {/* Left Section - The Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
                
                {/* Mobile Logo */}
                <Link href="/" className="absolute top-8 left-8 lg:hidden flex items-center gap-3 text-black">
                    <Grid2X2 size={24} strokeWidth={1.5} />
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">Vibecoder</span>
                </Link>

                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black uppercase tracking-[0.1em] mb-2">Welcome Back</h1>
                        <p className="text-neutral-500 text-sm">Enter your portal to access your showroom profile.</p>
                    </div>

                    {/* Social Auth Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <button className="flex items-center justify-center py-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all group">
                            <FaGoogle size={18} className="group-hover:scale-110 transition-transform" />
                        </button>
                        <button className="flex items-center justify-center py-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all group">
                            <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
                        </button>
                        <button className="flex items-center justify-center py-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all group">
                            <FaFacebook size={18} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center mb-6">
                        <div className="w-full border-t border-neutral-200"></div>
                        <span className="absolute bg-white px-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                            Or continue with email
                        </span>
                    </div>

                    {/* The Form */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        
                        {/* Email Input */}
                        <div className="relative border-b-2 border-neutral-200 focus-within:border-black transition-colors group">
                            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 flex items-center gap-2 mb-1">
                                <Mail size={12} /> Email Address
                            </label>
                            <input 
                                type="email" 
                                required
                                className="w-full bg-transparent outline-none py-2 text-sm placeholder:text-neutral-300"
                                placeholder="hello@example.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative border-b-2 border-neutral-200 focus-within:border-black transition-colors group">
                            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 flex items-center gap-2 mb-1">
                                <Lock size={12} /> Password
                            </label>
                            <div className="flex items-center">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    required
                                    className="w-full bg-transparent outline-none py-2 text-sm placeholder:text-neutral-300"
                                    placeholder="••••••••"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="p-2 text-neutral-400 hover:text-black transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-xs pt-1">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded-none border-neutral-300 accent-black" />
                                <span className="text-neutral-500 font-medium">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="font-bold text-black uppercase tracking-wider hover:underline underline-offset-4">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-black text-white p-4 flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors group mt-2">
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Log In</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>

                    {/* Signup Link */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                            New to Vibecoder? <Link href="/signup" className="text-black font-bold hover:text-neutral-500 transition-colors ml-2">Create Account</Link>
                        </p>
                    </div>

                </div>
            </div>

            {/* Right Section - Interactive Texture & Surface Showcase */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-neutral-100 flex-col justify-between p-16">
                
                {/* Dynamic Background Image that changes on click */}
                <div 
                    className="absolute inset-0 opacity-90 transition-all duration-700 ease-in-out scale-105"
                    style={{
                        backgroundImage: `url(${activeTexture.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                
                {/* Soft gradient overlay so text remains legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />

                {/* Top Branding */}
                <div className="relative z-10 flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 border border-neutral-200 shadow-sm">
                        <Sparkles size={14} className="text-amber-600" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800">Interactive Surface Preview</span>
                    </div>

                    <Link href="/" className="flex items-center gap-3 text-black group">
                        <div className="flex flex-col text-right justify-center border-r border-black/20 pr-3">
                            <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">
                                Vibecoder
                            </span>
                            <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 mt-1">
                                Ceramics
                            </span>
                        </div>
                        <div className="group-hover:-rotate-90 transition-transform duration-700">
                            <Grid2X2 size={32} strokeWidth={1.5} />
                        </div>
                    </Link>
                </div>

                {/* Bottom Interactive Switcher */}
                <div className="relative z-10 bg-white/90 backdrop-blur-xl p-8 border border-neutral-200 shadow-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                        Select Showroom Finish: <span className="text-black">{activeTexture.name}</span>
                    </p>
                    <div className="flex items-center gap-4">
                        {textures.map((tex) => (
                            <button
                                key={tex.name}
                                onClick={() => setActiveTexture(tex)}
                                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase font-semibold tracking-wider transition-all border ${
                                    activeTexture.name === tex.name 
                                        ? "bg-black text-white border-black scale-105 shadow-md" 
                                        : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
                                }`}
                            >
                                <span className="w-3 h-3 rounded-full border border-neutral-400" style={{ backgroundColor: tex.color }} />
                                {tex.name}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}