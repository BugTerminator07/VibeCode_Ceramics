"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Grid2X2, ArrowRight, MapPin, Phone, Mail, Clock, Send, CheckCircle2, Layers, Compass, Sliders } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [projectTier, setProjectTier] = useState("commercial"); // commercial, residential, custom
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        firm: "",
        budget: "$50k - $150k",
        dimensions: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-white selection:text-black">
            
            {/* Hero Section with CAD Grid Pattern */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-neutral-800 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-5xl relative z-10">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 w-fit mb-6">
                        <Compass size={14} className="text-amber-500 animate-spin" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Intake Portal // Sector 04</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        Direct <br />Architectural Intake.
                    </h1>
                    <p className="text-neutral-400 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Initiate a formal specification brief for commercial developments, custom waterjet slab fabrication, or private structural installations."
                    </p>
                </div>
            </section>

            {/* Main Interactive Complex Grid */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800">
                
                {/* Left: Advanced Project Tier Engine & Form (7 Columns) */}
                <div className="lg:col-span-7 p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-neutral-800 bg-neutral-950 flex flex-col justify-center">
                    <div className="mb-10">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-3 block">Step 01: Select Project Classification</span>
                        
                        {/* Interactive Scope Selector Tabs */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { id: "commercial", label: "Commercial Scale" },
                                { id: "residential", label: "Private Estate" },
                                { id: "custom", label: "Custom Waterjet" }
                            ].map((tier) => (
                                <button
                                    key={tier.id}
                                    type="button"
                                    onClick={() => setProjectTier(tier.id)}
                                    className={`py-4 px-2 text-[11px] font-bold uppercase tracking-widest border transition-all ${
                                        projectTier === tier.id 
                                            ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]" 
                                            : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600"
                                    }`}
                                >
                                    {tier.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {submitted ? (
                        <div className="bg-neutral-900 border border-neutral-800 p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
                            <div className="p-4 bg-white text-black rounded-full mb-6 animate-bounce">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-white">Brief Successfully Transmitted</h3>
                            <p className="text-neutral-400 text-sm max-w-md leading-relaxed mb-8">
                                Dossier registered under <span className="text-white font-bold">{formData.name}</span> ({projectTier.toUpperCase()} tier). Lead architect assigned. Expect contact within 12 hours.
                            </p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="border border-neutral-600 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                            >
                                Initialize New Brief
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative border-b-2 border-neutral-800 focus-within:border-white transition-colors">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 block mb-1">
                                        Principal Contact Name
                                    </label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="e.g. Marcus Vance" 
                                        className="w-full bg-transparent outline-none py-3 text-sm text-white placeholder:text-neutral-600"
                                    />
                                </div>
                                <div className="relative border-b-2 border-neutral-800 focus-within:border-white transition-colors">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 block mb-1">
                                        Architectural Firm / Studio
                                    </label>
                                    <input 
                                        type="text" 
                                        value={formData.firm}
                                        onChange={(e) => setFormData({...formData, firm: e.target.value})}
                                        placeholder="e.g. Studio Vanguard NY" 
                                        className="w-full bg-transparent outline-none py-3 text-sm text-white placeholder:text-neutral-600"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative border-b-2 border-neutral-800 focus-within:border-white transition-colors">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 block mb-1">
                                        Corporate Email
                                    </label>
                                    <input 
                                        type="email" 
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="m.vance@vanguard.arch" 
                                        className="w-full bg-transparent outline-none py-3 text-sm text-white placeholder:text-neutral-600"
                                    />
                                </div>
                                <div className="relative border-b-2 border-neutral-800 focus-within:border-white transition-colors">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 block mb-1">
                                        Estimated Budget Scope
                                    </label>
                                    <select 
                                        value={formData.budget}
                                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                        className="w-full bg-transparent outline-none py-3 text-sm text-neutral-300 cursor-pointer uppercase tracking-wider"
                                    >
                                        <option value="$25k - $50k" className="bg-black">$25,000 – $50,000</option>
                                        <option value="$50k - $150k" className="bg-black">$50,000 – $150,000</option>
                                        <option value="$150k - $500k+" className="bg-black">$150,000 – $500,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative border-b-2 border-neutral-800 focus-within:border-white transition-colors">
                                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 block mb-1">
                                    Structural Requirements & Dimensions ($SQFT)
                                </label>
                                <textarea 
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    placeholder="Specify slab thickness requirements, expected square footage, tile patterns, or installation target dates..."
                                    className="w-full bg-transparent outline-none py-3 text-sm text-white placeholder:text-neutral-600 resize-none"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-white text-black p-4 flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors group mt-6 shadow-2xl"
                            >
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Transmit Specification Brief</span>
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </form>
                    )}
                </div>

                {/* Right: Showroom Details & Blueprint Grid Map Container (5 Columns) */}
                <div className="lg:col-span-5 p-8 lg:p-20 flex flex-col justify-between bg-[#0e0e0e]">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-3 block">Global Command Center</span>
                        <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 text-white">
                            Showroom & Foundry
                        </h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 text-white border border-neutral-800 shrink-0">
                                    <MapPin size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">New York Design District</h3>
                                    <p className="text-neutral-400 text-xs leading-relaxed">Level 4, Vibecoder Tower, 123 Architectural Way, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 text-white border border-neutral-800 shrink-0">
                                    <Clock size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Consultation Hours</h3>
                                    <p className="text-neutral-400 text-xs leading-relaxed">Mon – Fri: 09:00 – 19:00 EST<br />Sat: By Private Appointment Only</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 text-white border border-neutral-800 shrink-0">
                                    <Phone size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Direct Line</h3>
                                    <p className="text-neutral-400 text-xs leading-relaxed">Phone: +1 (800) 555-TILE<br />Secure Channel: brief@vibecoderceramics.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-neutral-800">
                            <h3 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-neutral-500">Architectural Networks</h3>
                            <div className="flex gap-4">
                                <Link href="#" className="p-3 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-all text-neutral-400"><FaFacebook size={18} /></Link>
                                <Link href="#" className="p-3 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-all text-neutral-400"><FaTwitter size={18} /></Link>
                                <Link href="#" className="p-3 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-all text-neutral-400"><FaInstagram size={18} /></Link>
                                <Link href="#" className="p-3 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-all text-neutral-400"><FaLinkedin size={18} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Complex Blueprint Grid Graphic */}
                    <div className="mt-12 w-full h-44 bg-black relative overflow-hidden flex items-center justify-center border border-neutral-800">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:20px_20px]" />
                        <div className="absolute w-2 h-2 bg-amber-500 rounded-full animate-ping top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 text-center p-6 bg-black/80 backdrop-blur border border-neutral-800">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white block">CAD Coordinate: 40.7128° N, 74.0060° W</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-amber-500 mt-1 block">Live Showroom Telemetry Online</span>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default ContactPage;