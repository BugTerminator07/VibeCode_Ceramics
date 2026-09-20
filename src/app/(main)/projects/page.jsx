"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, ExternalLink, GitBranch, Layers, Sparkles } from "lucide-react";

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Complete project database with a fierce dragon-vibe image for Dragon News
    const projectsData = [
        {
            id: 1,
            title: "Dragon News",
            category: "Full-Stack Apps",
            description: "A dynamic news portal featuring categorical filtering, responsive layouts, and clean API routing.",
            link: "https://dragon-news-pink-two.vercel.app/",
            tech: "React / Next.js / Tailwind",
            phase: "Advanced",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop" // Fiery / mythological dragon aesthetic
        },
        {
            id: 2,
            title: "Book Vibe",
            category: "Full-Stack Apps",
            description: "An interactive book discovery and reading list application with detailed review modules.",
            link: "https://mellifluous-mousse-ba8cae.netlify.app/",
            tech: "React / Router / Tailwind",
            phase: "Advanced",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Digital Tools Shop",
            category: "E-Commerce",
            description: "A specialized digital editor software shop featuring product showcases and checkout UX.",
            link: "https://digital-tools-tasdid.netlify.app/",
            tech: "JavaScript / Tailwind / DOM",
            phase: "Intermediate",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "IPL Cricket Bide",
            category: "Full-Stack Apps",
            description: "A live cricket bidding and management web application designed for IPL fantasy leagues.",
            link: "https://tasdid.netlify.app/",
            tech: "React State Management",
            phase: "Advanced",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "English Janala",
            category: "Web Apps",
            description: "An educational platform built to help users learn English vocabulary and structured grammar.",
            link: "https://bugterminator07.github.io/EnglishJanala/",
            tech: "HTML / CSS / JavaScript",
            phase: "Intermediate",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Payoo Mobile",
            category: "E-Commerce",
            description: "A mobile financial service interface replicating core digital wallet features like bKash.",
            link: "https://bugterminator07.github.io/PAYOO-Mobile/",
            tech: "DOM Manipulation / Tailwind",
            phase: "Intermediate",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 7,
            title: "Job Tracker",
            category: "Web Apps",
            description: "A productivity dashboard designed to track job applications, statuses, and interview schedules.",
            link: "https://bugterminator07.github.io/Job-Tracker/",
            tech: "JavaScript ES6 / LocalStorage",
            phase: "Intermediate",
            status: "DEPLOYED",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 8,
            title: "TechWave",
            category: "Landings",
            description: "A technology trends website showcasing modern hardware, software innovations, and articles.",
            link: "https://bugterminator07.github.io/TechWave/",
            tech: "HTML5 / Advanced CSS Grid",
            phase: "Foundational",
            status: "ARCHIVED",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 9,
            title: "G3 Architects",
            category: "Landings",
            description: "An architectural firm landing page featuring clean grid layouts and minimalist typography.",
            link: "https://bugterminator07.github.io/Architecture-website/",
            tech: "Responsive Design / Flexbox",
            phase: "Foundational",
            status: "ARCHIVED",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 10,
            title: "Influencer Gear",
            category: "Landings",
            description: "A product e-commerce landing page tailored for content creators and online influencers.",
            link: "https://bugterminator07.github.io/influencer-web/",
            tech: "CSS Grid / Media Queries",
            phase: "Foundational",
            status: "ARCHIVED",
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 11,
            title: "New Tea",
            category: "Landings",
            description: "A beverage and drink-based brand website with aesthetic product cards and brand storytelling.",
            link: "https://bugterminator07.github.io/new-tea/",
            tech: "HTML / Tailwind CSS",
            phase: "Foundational",
            status: "ARCHIVED",
            image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 12,
            title: "Responsive Portfolio (First Build)",
            category: "Foundations",
            description: "The very first portfolio website built when starting the journey into web development.",
            link: "https://bugterminator07.github.io/responsive-portfolio-website/",
            tech: "HTML / CSS Basics",
            phase: "Genesis",
            status: "ROOT",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
        }
    ];

    // Filter logic
    const filteredProjects = selectedCategory === "all" 
        ? projectsData 
        : projectsData.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="w-full bg-[#050505] text-neutral-100 font-mono selection:bg-emerald-500 selection:text-black min-h-screen">
            
            {/* Terminal Header Hero */}
            <section className="w-full px-8 lg:px-24 py-20 lg:py-28 border-b border-neutral-800 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                
                <div className="max-w-5xl relative z-10">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 w-fit mb-6 shadow-lg">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-widest text-emerald-400">root@bugterminator07:~# ./show-all-builds.sh</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-white">
                        Milestones of Code <br />& Creative Grit.
                    </h1>
                    
                    <p className="text-neutral-400 text-sm lg:text-base max-w-2xl leading-relaxed font-sans">
                        "Each build here represents real hours of problem-solving, late-night debugging, and creative growth—from my first HTML template to advanced Next.js web applications."
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="w-full px-8 lg:px-24 py-8 border-b border-neutral-800 bg-neutral-950 sticky top-0 z-20 backdrop-blur-md bg-opacity-90">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
                        <Terminal size={16} className="text-emerald-400" />
                        <span>Filter Repository:</span>
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                        {["all", "Full-Stack Apps", "E-Commerce", "Web Apps", "Landings", "Foundations"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all border whitespace-nowrap ${
                                    selectedCategory === cat 
                                        ? "bg-emerald-500 text-black border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                                }`}
                            >
                                {cat === "all" ? "[ All Repositories ]" : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid with Visible Theme Image Banners */}
            <section className="w-full px-8 lg:px-24 py-20 border-b border-neutral-800 bg-[#080808]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div 
                            key={project.id}
                            className="bg-neutral-950 border border-neutral-800 flex flex-col justify-between group hover:border-emerald-500 transition-all hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] relative overflow-hidden"
                        >
                            {/* Top Theme Image Window Banner */}
                            <div className="w-full h-48 relative border-b border-neutral-800 overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-85"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                                
                                <div className="absolute top-3 left-3 bg-neutral-900/90 backdrop-blur border border-neutral-800 px-3 py-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 bg-neutral-900/90 backdrop-blur border border-neutral-800 px-2.5 py-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-300">
                                        {project.phase}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                                            <GitBranch size={12} className="text-emerald-400" />
                                            <span>v1.0.{12 - idx}</span>
                                        </div>
                                        <span className={`text-[9px] font-bold px-2 py-0.5 border ${
                                            project.status === "DEPLOYED" 
                                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" 
                                                : "border-neutral-700 bg-neutral-900 text-neutral-400"
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-white group-hover:text-emerald-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-xs font-sans text-neutral-300 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="text-[10px] text-neutral-400 mb-4 bg-neutral-900 p-2 border border-neutral-800 font-mono">
                                        <span className="text-emerald-400">STACK:</span> {project.tech}
                                    </div>

                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full bg-neutral-900 text-neutral-200 border border-neutral-800 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400 transition-all shadow-md"
                                    >
                                        <span>Execute Preview</span>
                                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Terminal Footer */}
            <section className="w-full px-8 lg:px-24 py-20 flex flex-col items-center text-center bg-black text-white border-t border-neutral-800">
                <Terminal size={40} className="mb-4 text-emerald-400 animate-pulse" />
                <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-tight mb-4 font-mono">
                    Ready For Production.
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mb-8 leading-relaxed font-sans">
                    Every project here tells a story of debugging, learning, and leveling up. Now focused on high-performance full-stack engineering and custom architectures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-emerald-500 text-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        Collaborate With Me
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ProjectsPage;