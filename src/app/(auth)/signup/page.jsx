"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, ArrowRight, Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    // Realistic dark marble/ceramic aesthetic for the background
    const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop";

    return (
        <div className="min-h-screen flex w-full font-sans bg-white text-black overflow-hidden">
            
            {/* Left Section - The Visual Identity */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-neutral-950">
                {/* Slow panning background image */}
                <div 
                    className="absolute inset-0 opacity-60 scale-105 animate-[spin_120s_linear_infinite_reverse] origin-center"
                    style={{
                        backgroundImage: `url(${BACKGROUND_IMAGE})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-16">
                    <Link href="/" className="flex items-center gap-3 text-white w-fit group">
                        <div className="group-hover:rotate-90 transition-transform duration-700">
                            <Grid2X2 size={32} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center border-l border-white/30 pl-3">
                            <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">
                                Vibecoder
                            </span>
                            <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mt-1">
                                Ceramics
                            </span>
                        </div>
                    </Link>

                    <div>
                        <h2 className="text-4xl font-serif text-white mb-4 leading-tight">
                            Crafting surfaces that <br /> define generations.
                        </h2>
                        <p className="text-neutral-400 text-sm tracking-wide max-w-md">
                            Join our community of architects, designers, and visionaries. Gain exclusive access to 3D room visualizers, trade pricing, and our 2026 Lookbook.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section - The Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
                
                {/* Mobile Logo (Only visible on small screens) */}
                <Link href="/" className="absolute top-8 left-8 lg:hidden flex items-center gap-3 text-black">
                    <Grid2X2 size={24} strokeWidth={1.5} />
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">Vibecoder</span>
                </Link>

                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black uppercase tracking-[0.1em] mb-2">Create Account</h1>
                        <p className="text-neutral-500 text-sm">Design starts here. Set up your profile.</p>
                    </div>

                    {/* Social Auth Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
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

                    <div className="relative flex items-center justify-center mb-8">
                        <div className="w-full border-t border-neutral-200"></div>
                        <span className="absolute bg-white px-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                            Or register with email
                        </span>
                    </div>

                    {/* The Form */}
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        
                        {/* Username Input */}
                        <div className="relative border-b-2 border-neutral-200 focus-within:border-black transition-colors group">
                            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 flex items-center gap-2 mb-1">
                                <User size={12} /> Username
                            </label>
                            <input 
                                type="text" 
                                required
                                className="w-full bg-transparent outline-none py-2 text-sm placeholder:text-neutral-300"
                                placeholder="architect_01"
                            />
                        </div>

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

                        {/* Terms */}
                        <div className="flex items-start gap-3 pt-2">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                required
                                className="mt-1 w-4 h-4 rounded-none border-neutral-300 text-black focus:ring-black accent-black" 
                            />
                            <label htmlFor="terms" className="text-xs text-neutral-500 leading-relaxed">
                                I agree to Vibecoder Ceramics' <Link href="/terms" className="text-black underline underline-offset-2 hover:text-neutral-500 transition-colors">Terms of Service</Link> and <Link href="/privacy" className="text-black underline underline-offset-2 hover:text-neutral-500 transition-colors">Privacy Policy</Link>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-black text-white p-4 flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors group mt-4">
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Join Now</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-12 text-center">
                        <p className="text-xs text-neutral-500 uppercase tracking-widest">
                            Already have an account? <Link href="/login" className="text-black font-bold hover:text-neutral-500 transition-colors ml-2">Log In</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}