"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, Server } from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPolicyPage = () => {
    const router = useRouter();

    return (
        <div className="w-full bg-[#FAFAFA] text-neutral-900 min-h-screen font-sans selection:bg-neutral-900 selection:text-white">
            
            {/* Top Navigation Bar */}
            <div className="w-full border-b border-neutral-200 bg-white sticky top-0 z-40">
                <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between">
                    <button 
                        onClick={() => router.back()} 
                        className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-900 hover:text-emerald-700 transition-colors group"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        Back
                    </button>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
                        Legal // 01
                    </span>
                </div>
            </div>

            {/* Cinematic Hero Section */}
            <section className="w-full bg-neutral-950 text-white py-20 lg:py-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
                {/* Subtle Background Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 text-amber-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-6 shadow-sm">
                        <ShieldCheck size={12} /> Data Protection Protocol
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-white mb-6">
                        Privacy Policy.
                    </h1>
                    <p className="text-sm sm:text-base text-neutral-400 font-mono tracking-widest uppercase">
                        Last Updated: September 25, 2026
                    </p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="w-full py-20 px-6 sm:px-10 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
                    
                    {/* Left Sidebar Menu (Sticky on Desktop) */}
                    <div className="hidden md:block w-64 shrink-0">
                        <div className="sticky top-32 flex flex-col gap-4 border-l border-neutral-200 pl-6">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">Directory</span>
                            <a href="#information-collection" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">01. Data Collection</a>
                            <a href="#data-usage" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">02. Data Usage</a>
                            <a href="#cookie-policy" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">03. Cookie Policy</a>
                            <a href="#data-security" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">04. Data Security</a>
                            <a href="#your-rights" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">05. Your Rights</a>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 space-y-16">
                        
                        {/* Intro */}
                        <div className="prose prose-neutral max-w-none">
                            <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                                At <strong>Vibe Code Ceramics</strong>, we engineer our digital experiences with the same precision and integrity as our architectural surfaces. We respect the privacy of the architects, designers, and homeowners who utilize our platform. This Privacy Policy details how we collect, use, and protect your personal information when you interact with our website, catalogue, and Surface Studio tools.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div id="information-collection" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <Eye className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">01. Information We Collect</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>We collect information that you voluntarily provide to us when you register for an account, request physical sample boxes, or contact our architectural consultation team.</p>
                                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                                    <li><strong>Personal Identification:</strong> Name, email address, phone number, and professional title (e.g., Architect, Interior Designer).</li>
                                    <li><strong>Logistics Data:</strong> Shipping and billing addresses required for fulfilling sample box requests.</li>
                                    <li><strong>Digital Interaction Data:</strong> IP addresses, browser types, and usage data within our 3D Room Visualizer to optimize rendering performance.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="data-usage" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <Server className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">02. How We Use Your Data</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>The information we collect is strictly used to enhance your experience with Vibe Code Ceramics. Specifically, we utilize this data to:</p>
                                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                                    <li>Process and dispatch your architectural sample box requests.</li>
                                    <li>Save your configurations and material preferences within the Surface Studio visualizer.</li>
                                    <li>Communicate critical updates regarding slab availability, new finish releases, or changes to our policies.</li>
                                    <li>Improve our website&apos;s frontend performance and user interface.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="data-security" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <Lock className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">03. Data Security & Storage</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>We implement enterprise-grade security measures designed to protect your personal information. All data transmitted between your browser and our servers is encrypted using standard SSL/TLS protocols.</p>
                                <p>We do not sell, rent, or trade your personal information to third parties. Data is only shared with trusted logistics partners (e.g., global couriers) solely for the purpose of delivering physical samples to your studio.</p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="your-rights" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <ShieldCheck className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">04. Your Privacy Rights</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>Depending on your geographic location (such as the GDPR in Europe or CCPA in California), you possess specific rights regarding your personal data:</p>
                                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                                    <li>The right to access the personal data we hold about you.</li>
                                    <li>The right to request the deletion of your personal data ("Right to be Forgotten").</li>
                                    <li>The right to opt-out of marketing communications at any time.</li>
                                </ul>
                                <p className="pt-4 border-t border-neutral-100">
                                    To exercise any of these rights, please contact our Data Protection Officer at: <br/>
                                    <a href="mailto:privacy@vibecodeceramics.com" className="text-emerald-700 font-bold hover:underline">privacy@vibecodeceramics.com</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default PrivacyPolicyPage;