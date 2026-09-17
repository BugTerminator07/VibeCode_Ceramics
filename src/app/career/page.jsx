"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Briefcase, MapPin, Clock, Sparkles } from "lucide-react";

const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState("all");

    // Open positions database
    const jobsData = [
        {
            id: 1,
            title: "Senior Full-Stack Architectural Developer",
            department: "Engineering",
            location: "New York, NY / Remote",
            type: "Full-Time",
            experience: "4+ Years Experience",
            description: "Lead the development of next-gen interactive 3D room visualizers, WebGL material shaders, and high-performance Next.js routing for our global showroom network."
        },
        {
            id: 2,
            title: "Master Porcelain & Slab Engineer",
            department: "Manufacturing",
            location: "Milan Foundry, Italy",
            type: "Full-Time",
            experience: "6+ Years Experience",
            description: "Oversee automated European kiln firing standards, closed-loop hydration cycles, and sub-millimeter laser calibration tolerances for oversized porcelain slabs."
        },
        {
            id: 3,
            title: "Global Showroom & Retail Director",
            department: "Design",
            location: "Dubai Flagship, UAE",
            type: "Full-Time",
            experience: "5+ Years Experience",
            description: "Manage architectural client relationships, curate physical display center installations, and direct VIP trade consultations across our Middle Eastern hubs."
        },
        {
            id: 4,
            title: "CAD Waterjet Specialist & Technologist",
            department: "Engineering",
            location: "Tokyo Lab, Japan",
            type: "Full-Time",
            experience: "3+ Years Experience",
            description: "Program multi-axis waterjet cutting systems to produce bespoke, continuous-vein geometry for luxury commercial developments and private estates."
        }
    ];

    const filteredJobs = selectedDepartment === "all" 
        ? jobsData 
        : jobsData.filter(job => job.department.toLowerCase() === selectedDepartment.toLowerCase());

    return (
        <div className="w-full bg-[#F7F5F0] text-stone-900 font-sans selection:bg-amber-800 selection:text-white min-h-screen">
            
            {/* Hero Section - Warm Editorial Vibe */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-stone-200 relative overflow-hidden flex flex-col justify-center">
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-2 bg-stone-200/60 px-4 py-2 w-fit mb-6 border border-stone-300">
                        <Sparkles size={14} className="text-amber-800" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-700">Careers & Studio Culture</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.05] mb-8 text-stone-900">
                        Shape the future <br /><span className="italic">of surfaces.</span>
                    </h1>
                    <p className="text-stone-600 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Join an uncompromising collective of engineers, material scientists, and architectural designers building the permanent foundation of modern spaces."
                    </p>
                </div>
            </section>

            {/* Department Filter Bar */}
            <section className="w-full px-8 lg:px-24 py-8 border-b border-stone-200 bg-[#EFECE6] sticky top-0 z-20 backdrop-blur-md bg-opacity-90">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
                        Filter By Department:
                    </span>
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0">
                        {["all", "Engineering", "Manufacturing", "Design"].map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border whitespace-nowrap ${
                                    selectedDepartment === dept 
                                        ? "bg-stone-900 text-stone-100 border-stone-900 shadow-sm" 
                                        : "bg-white text-stone-600 border-stone-300 hover:border-stone-900 hover:text-stone-900"
                                }`}
                            >
                                {dept === "all" ? "All Open Positions" : dept}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings Grid */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-stone-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredJobs.map((job) => (
                        <div 
                            key={job.id}
                            className="bg-white border border-stone-200 p-8 lg:p-12 flex flex-col justify-between group hover:border-stone-400 transition-all hover:shadow-xl relative overflow-hidden"
                        >
                            <div>
                                {/* Top Badges */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-stone-100 text-stone-800 px-3 py-1 border border-stone-200">
                                        {job.department}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold">
                                        {job.type}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-serif font-bold tracking-tight mb-4 text-stone-900 group-hover:text-amber-900 transition-colors">
                                    {job.title}
                                </h3>

                                <div className="flex flex-wrap gap-4 text-xs text-stone-500 uppercase tracking-widest mb-6 pb-6 border-b border-stone-100">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={14} className="text-amber-800" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-stone-400" />
                                        <span>{job.experience}</span>
                                    </div>
                                </div>

                                <p className="text-xs lg:text-sm text-stone-600 leading-relaxed mb-8">
                                    {job.description}
                                </p>
                            </div>

                            <Link 
                                href={`/contact?role=${encodeURIComponent(job.title)}`}
                                className="w-full bg-stone-900 text-white border border-stone-900 py-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-900 hover:border-amber-900 transition-colors"
                            >
                                <Briefcase size={14} />
                                <span>Submit Application Dossier</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-[#EFECE6] text-stone-900 border-t border-stone-200">
                <Compass size={40} className="mb-6 text-stone-500" />
                <h2 className="text-3xl lg:text-5xl font-serif font-normal tracking-tight mb-6">
                    Don't See Your Specific Role?
                </h2>
                <p className="text-stone-600 text-sm lg:text-base max-w-lg mb-10 leading-relaxed font-serif italic">
                    "We are always looking for exceptional creators and engineers. Send your portfolio and background directly to our studio curation team."
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors shadow-md">
                        Send Open Application
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default CareersPage;