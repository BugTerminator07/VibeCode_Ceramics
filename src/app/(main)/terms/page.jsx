"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Scale, FileText, Package, Copyright, AlertTriangle } from "lucide-react";

const TermsOfServicePage = () => {
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
                        Legal // 02
                    </span>
                </div>
            </div>

            {/* Cinematic Hero Section */}
            <section className="w-full bg-neutral-950 text-white py-20 lg:py-28 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
                {/* Subtle Background Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 text-amber-400 text-[10px] font-mono uppercase tracking-[0.3em] mb-6 shadow-sm">
                        <Scale size={12} /> Studio Legal Framework
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-white mb-6">
                        Terms of Service.
                    </h1>
                    <p className="text-sm sm:text-base text-neutral-400 font-mono tracking-widest uppercase">
                        Last Updated: September 25, 2026
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="w-full py-20 px-6 sm:px-10 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
                    
                    {/* Left Sidebar Menu (Sticky on Desktop) */}
                    <div className="hidden md:block w-64 shrink-0">
                        <div className="sticky top-32 flex flex-col gap-4 border-l border-neutral-200 pl-6">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">Directory</span>
                            <a href="#acceptance" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">01. Acceptance of Terms</a>
                            <a href="#specifications" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">02. Product Specifications</a>
                            <a href="#logistics" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">03. Orders & Logistics</a>
                            <a href="#intellectual-property" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">04. Intellectual Property</a>
                            <a href="#liability" className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">05. Limitation of Liability</a>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 space-y-16">
                        
                        {/* Intro */}
                        <div className="prose prose-neutral max-w-none">
                            <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                                Welcome to <strong>Vibe Code Ceramics</strong>. These Terms of Service govern your use of our digital studio, catalogue, Surface Studio visualizer, and any related services. By accessing or using our platform, you agree to be bound by these foundational terms.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div id="acceptance" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <FileText className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">01. Acceptance of Terms</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>By accessing our website, creating a professional studio account, or requesting physical samples, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you are using our services on behalf of an architectural firm or business entity, you represent that you have the authority to bind that entity to these Terms.</p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div id="specifications" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <AlertTriangle className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">02. Product Specifications & Variations</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>Vibe Code Ceramics specializes in high-end porcelain slabs and natural stone replicas. Please note the following regarding our physical products:</p>
                                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                                    <li><strong>Tonal Variation:</strong> Due to the advanced digital glazing and firing processes, slight variations in shade, color, and veining are inherent and intended. Digital screen representations may differ from the physical product.</li>
                                    <li><strong>Caliber & Sizing:</strong> Nominal dimensions (e.g., 160x320 cm) are provided for architectural reference. Actual manufactured sizes may vary slightly depending on the production batch and edge rectification process.</li>
                                    <li><strong>Samples:</strong> Physical samples are indicative of the general color and texture but may not capture the full graphic variation of a large-format slab.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div id="logistics" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <Package className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">03. Orders, Logistics & Samples</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p><strong>Sample Box Requests:</strong> We provide complimentary or subsidized sample boxes to verified industry professionals. We reserve the right to limit sample quantities and refuse shipment at our discretion.</p>
                                <p><strong>Commercial Orders:</strong> All commercial orders for large-format slabs require specialized freight logistics. Freight quotes, lead times, and delivery schedules will be provided in writing by our architectural consultation team and are subject to separate purchasing agreements.</p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div id="intellectual-property" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <Copyright className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">04. Intellectual Property</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>All content on this platform, including but not limited to high-resolution slab imagery, the Surface Studio 3D visualizer, interface design, logos, and product descriptions, is the exclusive property of Vibe Code Ceramics.</p>
                                <p>Architects and designers are granted a limited, non-exclusive license to download technical specifications, 3D BIM objects, and imagery strictly for the purpose of client presentations and architectural specification. Any unauthorized reproduction, scraping, or commercial resale of our digital assets is strictly prohibited.</p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div id="liability" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                                <Scale className="text-emerald-700" size={20} />
                                <h2 className="text-2xl font-serif text-neutral-900">05. Limitation of Liability</h2>
                            </div>
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-600">
                                <p>Vibe Code Ceramics shall not be held liable for any indirect, incidental, special, or consequential damages arising from the use of our digital platform or reliance on our digital catalogue.</p>
                                <p>We do not provide installation services. It is the responsibility of the purchasing party and their certified contractors to ensure that the structural environment is suitable for the installation of large-format ceramic slabs and that proper adhesion materials are utilized.</p>
                                <p className="pt-4 border-t border-neutral-100">
                                    For legal inquiries regarding these terms, please contact our administrative team at: <br/>
                                    <a href="mailto:legal@vibecodeceramics.com" className="text-emerald-700 font-bold hover:underline">legal@vibecodeceramics.com</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default TermsOfServicePage;