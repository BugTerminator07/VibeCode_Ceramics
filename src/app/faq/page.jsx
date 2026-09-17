"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Compass, ShieldCheck, ArrowRight } from "lucide-react";

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(0);

    // FAQ dataset tailored for high-end architectural ceramics
    const faqsData = [
        {
            question: "What is the standard thickness and dimension of Vibecoder slabs?",
            answer: "Our ultra-high-density porcelain slabs are manufactured in precision formats including 1200x2700mm and 1600x3200mm, with standard structural thicknesses available in 6mm (facades/walls), 12mm (countertops/floors), and 20mm (heavy commercial environments)."
        },
        {
            question: "How can architectural studios request physical sample kits?",
            answer: "Architects, interior designers, and commercial developers can request curated sample boxes directly through our intake portal. Kits include physical cuts of our matte-finish porcelain, obsidian monolith lines, and veining swatches."
        },
        {
            question: "What is the precision tolerance for custom waterjet cutting?",
            answer: "Using multi-axis laser calibration and waterjet technology, we achieve an exact tolerance margin of ±0.1mm. This allows for micro-grout joints and unbroken, continuous marble veining patterns across complex layouts."
        },
        {
            question: "Do you offer trade discounts and dedicated account management?",
            answer: "Yes. Registered architectural firms and commercial builders qualify for our Trade Tier, which provides tiered volume pricing, dedicated project managers, and priority scheduling for global display center walkthroughs."
        },
        {
            question: "What does the lifetime structural warranty cover?",
            answer: "Every certified consignment leaves our European foundries backed by a comprehensive structural guarantee against thermal shock cracking, surface fading, and structural degradation under normal commercial or residential use."
        },
        {
            question: "How are oversized porcelain slabs shipped internationally?",
            answer: "All oversized slabs are secured in reinforced steel-framed crates, vacuum-sealed against moisture, and transported via specialized logistics partners with real-time GPS telemetry to ensure zero transit fracture."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-[#061A14] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black min-h-screen">
            
            {/* Hero Section - Emerald & Gold Vibe */}
            <section className="w-full px-8 lg:px-24 py-24 lg:py-32 border-b border-emerald-900/50 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                <div className="max-w-4xl relative z-10">
                    <div className="flex items-center gap-2 bg-[#0C2A20] px-4 py-2 w-fit mb-6 border border-amber-500/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <Sparkles size={14} className="text-amber-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300">Knowledge Base // Sector 10</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                        Frequently <br /><span className="text-amber-400 font-serif italic font-normal lowercase">Asked</span> Questions.
                    </h1>
                    <p className="text-emerald-200/70 text-lg lg:text-xl font-serif italic max-w-2xl leading-relaxed">
                        "Find detailed technical specifications, shipping protocols, trade registration guidelines, and warranty information."
                    </p>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="w-full px-8 lg:px-24 py-24 border-b border-emerald-900/50 bg-[#081F17]">
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index}
                                className={`border transition-all duration-300 overflow-hidden ${
                                    isOpen 
                                        ? "bg-[#0B2920] border-amber-500/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
                                        : "bg-[#09241B] border-emerald-900/40 hover:border-emerald-700"
                                }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full p-6 lg:p-8 text-left flex items-center justify-between gap-6 cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-mono font-bold tracking-widest ${isOpen ? "text-amber-400" : "text-emerald-600"}`}>
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-lg lg:text-xl font-bold uppercase tracking-tight text-white">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`p-2 rounded-full border transition-transform duration-300 ${isOpen ? "bg-amber-400 text-black border-amber-400 rotate-180" : "bg-[#061A14] text-amber-400 border-emerald-900"}`}>
                                        <ChevronDown size={16} />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 lg:px-8 pb-8 pt-2 border-t border-emerald-900/50 text-emerald-100/80 text-sm lg:text-base leading-relaxed font-serif animate-fadeIn">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="w-full px-8 lg:px-24 py-28 flex flex-col items-center text-center bg-[#05140F] text-white">
                <HelpCircle size={48} strokeWidth={1.5} className="mb-6 text-amber-400 animate-pulse" />
                <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                    Have Further Inquiries?
                </h2>
                <p className="text-emerald-200/70 text-sm lg:text-base max-w-lg mb-10 leading-relaxed">
                    If your specific architectural question isn't listed above, reach out directly to our engineering consultancy desk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-amber-400 text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-300 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        Initialize Contact
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default FAQPage;