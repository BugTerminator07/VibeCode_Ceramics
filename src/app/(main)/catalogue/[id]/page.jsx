"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import productsData from "@/components/data/products.json";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { 
    ArrowLeft,ArrowRight, ChevronRight, Download, 
    Box, Ruler, ShieldCheck, CheckCircle2, 
    Layers, Sparkles, ChevronDown, MoveRight, Hexagon
} from "lucide-react";

// Interactive Accordion Component
const SpecAccordion = ({ title, icon: Icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-neutral-200">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-5 text-left group transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Icon size={16} className={`transition-colors ${isOpen ? "text-emerald-600" : "text-neutral-400 group-hover:text-neutral-900"}`} />
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-neutral-950">
                        {title}
                    </span>
                </div>
                <ChevronDown 
                    size={16} 
                    className={`text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} 
                />
            </button>
            <div 
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ProductDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    
    // PDF Export State & Ref
    const tearsheetRef = useRef(null);
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        if (params?.id) {
            // Find the active product
            const foundProduct = productsData.find(p => p.id === params.id);
            setProduct(foundProduct || null);

            // Find related products in the same category
            if (foundProduct) {
                const related = productsData
                    .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
                    .slice(0, 3);
                setRelatedProducts(related);
            }
        }
    }, [params]);

    // -------------------------------------------------------------
    // TEARSHEET PDF GENERATOR
    // -------------------------------------------------------------
    const handleExportTearsheet = async () => {
        if (!tearsheetRef.current) return;
        setIsExporting(true);
        
        try {
            // Capture the hidden tearsheet template
            const dataUrl = await toPng(tearsheetRef.current, {
                quality: 1,
                pixelRatio: 2, 
                backgroundColor: "#ffffff",
                style: { margin: "0" }
            });
            
            // Generate A4 PDF
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (tearsheetRef.current.offsetHeight * pdfWidth) / tearsheetRef.current.offsetWidth;
            
            pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`VibeCode_Tearsheet_${product.id}.pdf`);
            
        } catch (error) {
            console.error("Failed to generate PDF:", error);
            alert("Error generating the tearsheet. Please try again.");
        } finally {
            setIsExporting(false);
        }
    };

    // 404 State
    if (product === null && params?.id) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-neutral-900 p-6">
                <div className="w-16 h-16 border border-neutral-300 flex items-center justify-center mb-6">
                    <Layers size={24} className="text-neutral-400" />
                </div>
                <h1 className="text-2xl font-bold uppercase tracking-widest mb-2">Specification Not Found</h1>
                <p className="text-xs font-mono text-neutral-500 mb-8 uppercase tracking-widest">Error 404 // Invalid Archive ID</p>
                <button onClick={() => router.push('/catalogue')} className="px-8 py-3 bg-neutral-950 text-white text-xs font-mono uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors">
                    Return to Archive
                </button>
            </div>
        );
    }

    if (!product) return null; // Loading state before hydration

    return (
        <div className="w-full bg-[#FAFAFA] text-neutral-900 min-h-screen font-sans selection:bg-neutral-900 selection:text-white animate-fade-in relative">
            
            {/* Top Navigation Bar */}
            <div className="w-full border-b border-neutral-200 bg-white sticky top-0 z-40">
                <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                        <Link href="/" className="hover:text-neutral-900 transition-colors">Studio</Link>
                        <ChevronRight size={10} />
                        <Link href="/catalogue" className="hover:text-neutral-900 transition-colors">Archive</Link>
                        <ChevronRight size={10} />
                        <span className="text-neutral-900 font-bold">{product.category}</span>
                    </nav>

                    {/* Back Button */}
                    <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-900 hover:text-emerald-700 transition-colors group">
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Selection
                    </button>
                </div>
            </div>

            {/* Main Split Layout */}
            <main className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 py-12">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
                    
                    {/* LEFT COLUMN: Sticky Image Showcase */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
                        <div 
                            className="relative aspect-square md:aspect-[4/5] w-full bg-neutral-100 overflow-hidden border border-neutral-200 cursor-crosshair group shadow-sm"
                            onMouseEnter={() => setIsImageZoomed(true)}
                            onMouseLeave={() => setIsImageZoomed(false)}
                        >
                            <div 
                                className={`w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out ${isImageZoomed ? "scale-110" : "scale-100"}`}
                                style={{ backgroundImage: `url(${product.image})` }}
                            />
                            
                            {/* Hover Overlay Badges */}
                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-900 border border-neutral-200 shadow-sm">
                                    {product.category}
                                </span>
                            </div>
                            
                            {/* Interactive Zoom Indicator */}
                            <div className={`absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-neutral-900 border border-neutral-200 shadow-sm transition-opacity duration-300 ${isImageZoomed ? "opacity-0" : "opacity-100"}`}>
                                Hover to Inspect Surface
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Scrolling Technical Dossier */}
                    <div className="w-full lg:w-1/2 flex flex-col py-4 lg:py-10">
                        
                        {/* Header Info */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                                    REF // {product.id}
                                </span>
                                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 border ${
                                    product.inStock 
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-700" 
                                        : "border-amber-200 bg-amber-50 text-amber-700"
                                }`}>
                                    {product.inStock ? "Ready to Dispatch" : "Made to Order"}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-950 leading-[1.1] mb-6">
                                {product.title}
                            </h1>
                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans max-w-xl">
                                {product.description}
                            </p>
                        </div>

                        {/* Price & Action Block */}
                        <div className="py-8 border-y border-neutral-200 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-1">Base Price</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-mono font-bold text-neutral-950">${product.price.toFixed(2)}</span>
                                    <span className="text-xs font-mono text-neutral-500 uppercase">{product.currency} / m²</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Updated Download Button */}
                                <button 
                                    onClick={handleExportTearsheet}
                                    disabled={isExporting}
                                    className="px-8 py-4 bg-white border border-neutral-300 text-neutral-900 text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-neutral-50 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    {isExporting ? (
                                        <><Hexagon size={14} className="animate-spin text-neutral-400" /> Generating...</>
                                    ) : (
                                        <><Download size={14} /> Tearsheet</>
                                    )}
                                </button>
                                <button className="px-8 py-4 bg-neutral-950 text-white text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-emerald-900 transition-colors shadow-lg flex items-center justify-center gap-2">
                                    Request Sample <MoveRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Interactive Accordions for Technical Data */}
                        <div className="mb-12">
                            <SpecAccordion title="Architectural Specifications" icon={Ruler} defaultOpen={true}>
                                <div className="grid grid-cols-2 gap-y-6 gap-x-8 bg-neutral-50 p-6 border border-neutral-100">
                                    <div>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Dimensions</span>
                                        <span className="text-xs font-mono font-bold text-neutral-900">{product.dimensions}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Thickness</span>
                                        <span className="text-xs font-mono font-bold text-neutral-900">{product.thickness || "Standard"}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Material Composition</span>
                                        <span className="text-xs font-mono font-bold text-neutral-900">{product.material}</span>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Surface Finish</span>
                                        <span className="text-xs font-mono font-bold text-neutral-900">{product.finish || "Matte"}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Recommended Application</span>
                                        <span className="text-xs font-mono font-bold text-neutral-900">{product.application || "Interior / Exterior Universal"}</span>
                                    </div>
                                </div>
                            </SpecAccordion>

                            <SpecAccordion title="Environmental & Quality Ratings" icon={ShieldCheck}>
                                <div className="flex flex-col gap-3 pt-2">
                                    <div className="flex items-center gap-3 text-xs text-neutral-600">
                                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                        <span>ISO-14001 Certified Manufacturing Process</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-neutral-600">
                                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                        <span>Class A1 Non-Combustible Fire Rating</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-neutral-600">
                                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                        <span>Zero VOC Emissions (Greenguard Gold standard)</span>
                                    </div>
                                </div>
                            </SpecAccordion>

                            <SpecAccordion title="Shipping & Installation logistics" icon={Box}>
                                <p className="text-xs text-neutral-600 leading-relaxed pt-2 font-sans">
                                    Large format slabs require specialized A-frame transportation. All deliveries are made via dedicated architectural freight carriers. Installation must be performed by certified large-format porcelain installers utilizing specialized vacuum suction handling equipment.
                                </p>
                            </SpecAccordion>
                        </div>

                    </div>
                </div>
            </main>

            {/* Bottom Related Products Section */}
            {relatedProducts.length > 0 && (
                <section className="w-full bg-white border-t border-neutral-200 py-20">
                    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
                        
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={14} className="text-neutral-900" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">
                                        Similar Typologies
                                    </span>
                                </div>
                                <h2 className="text-3xl font-serif text-neutral-950">Related Surfaces</h2>
                            </div>
                            <Link href="/catalogue" className="hidden sm:flex text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors items-center gap-2 group">
                                View Full Collection <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedProducts.map(related => (
                                <Link href={`/catalogue/${related.id}`} key={related.id} className="group border border-neutral-200 hover:border-neutral-900 transition-all duration-300">
                                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                                        <div 
                                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                                            style={{ backgroundImage: `url(${related.image})` }} 
                                        />
                                    </div>
                                    <div className="p-5 flex items-center justify-between bg-white">
                                        <div>
                                            <h3 className="text-sm font-bold text-neutral-950 tracking-tight group-hover:text-emerald-800 transition-colors">
                                                {related.title}
                                            </h3>
                                            <span className="text-[10px] font-mono text-neutral-400 uppercase">{related.category}</span>
                                        </div>
                                        <span className="text-sm font-mono font-bold text-neutral-900">
                                            ${related.price.toFixed(0)}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </section>
            )}

            {/* 
                =================================================
                HIDDEN A4 TEARSHEET TEMPLATE (For PDF Export Only)
                ================================================= 
            */}
            <div className="fixed -left-[9999px] top-0 pointer-events-none">
                <div 
                    ref={tearsheetRef} 
                    className="w-[800px] bg-white p-12 flex flex-col font-sans border border-neutral-100" 
                    style={{ minHeight: '1131px' }} // Standard A4 ratio
                >
                    {/* Header */}
                    <div className="border-b border-neutral-900 pb-6 mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-black uppercase tracking-tighter text-neutral-950">Vibe Code Ceramics</h1>
                            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Architectural Surface Tearsheet</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                                Date Generated: {new Date().toLocaleDateString()}
                            </span>
                            <span className="text-xs font-mono font-bold text-emerald-700">REF // {product.id}</span>
                        </div>
                    </div>

                    {/* Image & Main Info */}
                    <div className="flex gap-8 mb-10">
                        {/* crossOrigin="anonymous" ensures html-to-image can capture Unsplash images */}
                        <img 
                            src={product.image} 
                            crossOrigin="anonymous" 
                            alt={product.title} 
                            className="w-1/2 aspect-square object-cover border border-neutral-200" 
                        />
                        <div className="w-1/2 flex flex-col pt-2">
                            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-mono uppercase tracking-widest border border-neutral-200 w-fit mb-4">
                                {product.category}
                            </span>
                            <h2 className="text-4xl font-serif text-neutral-950 leading-tight mb-4">{product.title}</h2>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-6">{product.description}</p>
                            <span className="text-3xl font-mono font-bold text-neutral-950 mt-auto">
                                ${product.price.toFixed(2)} <span className="text-sm text-neutral-500 font-normal">/ m²</span>
                            </span>
                        </div>
                    </div>

                    {/* Detailed Specifications */}
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-200 pb-2 mb-6">
                        Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-y-8 gap-x-8 mb-auto">
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Dimensions</span>
                            <span className="text-sm font-mono font-bold text-neutral-900">{product.dimensions}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Thickness</span>
                            <span className="text-sm font-mono font-bold text-neutral-900">{product.thickness || "Standard"}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Material Composition</span>
                            <span className="text-sm font-mono font-bold text-neutral-900">{product.material}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Surface Finish</span>
                            <span className="text-sm font-mono font-bold text-neutral-900">{product.finish || "Matte"}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Recommended Application</span>
                            <span className="text-sm font-mono font-bold text-neutral-900">{product.application || "Interior / Exterior Universal"}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Availability</span>
                            <span className={`text-sm font-mono font-bold ${product.inStock ? "text-emerald-700" : "text-amber-700"}`}>
                                {product.inStock ? "Ready to Dispatch" : "Made to Order"}
                            </span>
                        </div>
                    </div>

                    {/* Footer / Environmental Marks */}
                    <div className="mt-12 border-t border-neutral-900 pt-6 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                        <div className="flex gap-6">
                            <span>ISO-14001 Certified</span>
                            <span>Class A1 Fire Rating</span>
                            <span>Zero VOC</span>
                        </div>
                        <span className="font-bold text-neutral-900">vibecodeceramics.com</span>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ProductDetailPage;