"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import productsData from "@/components/data/products.json";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { 
    Ruler, Search, Calculator, Package, 
    Layers, Scale, ArrowRight, Check, 
    Droplet, ArrowLeft, Hexagon, Grid2X2, Download
} from "lucide-react";

const EstimatorPage = () => {
    // 1. PROJECT SCOPE STATE
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [surfaceType, setSurfaceType] = useState("floor");
    const [pattern, setPattern] = useState("straight");
    const [groutJoint, setGroutJoint] = useState(2); 

    // 2. MATERIAL SELECTION STATE
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTile, setSelectedTile] = useState(productsData[0]);

    // 3. PDF EXPORT STATE
    const reportRef = useRef(null);
    const [isExporting, setIsExporting] = useState(false);

    // Derived Waste Factor
    const wasteFactor = useMemo(() => {
        switch(pattern) {
            case "brick": return 1.10; 
            case "chevron": return 1.15; 
            case "diagonal": return 1.15; 
            default: return 1.05; 
        }
    }, [pattern]);

    // Filter tiles for search
    const filteredTiles = useMemo(() => {
        if (!searchQuery) return productsData;
        const q = searchQuery.toLowerCase();
        return productsData.filter(t => 
            t.title.toLowerCase().includes(q) || 
            t.id.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q)
        );
    }, [searchQuery]);

    // CORE CALCULATOR ENGINE
    const calculations = useMemo(() => {
        const l = parseFloat(length) || 0;
        const w = parseFloat(width) || 0;
        const baseArea = l * w; 
        
        let tileWidth = 0.6;
        let tileLength = 1.2;
        let thicknessMm = 10;
        
        if (selectedTile) {
            const dims = selectedTile.dimensions.match(/(\d+)\s*x\s*(\d+)/);
            if (dims) {
                tileWidth = parseFloat(dims[1]) / 100; 
                tileLength = parseFloat(dims[2]) / 100;
            }
            const thick = selectedTile.thickness?.match(/(\d+(\.\d+)?)/);
            if (thick) thicknessMm = parseFloat(thick[1]);
        }

        const tileArea = tileWidth * tileLength;
        const totalAreaWithWaste = baseArea * wasteFactor;
        
        const exactTilesNeeded = baseArea / tileArea;
        const tilesToOrder = Math.ceil(totalAreaWithWaste / tileArea);
        
        const weightPerSqMeter = thicknessMm * 2.4;
        const totalWeightKg = totalAreaWithWaste * weightPerSqMeter;
        const palletsNeeded = Math.ceil(totalWeightKg / 1000); 

        const tW_mm = tileWidth * 1000;
        const tL_mm = tileLength * 1000;
        let groutKg = 0;
        if (tW_mm > 0 && tL_mm > 0) {
            const groutFormula = ((tW_mm + tL_mm) / (tW_mm * tL_mm)) * thicknessMm * groutJoint * 1.6;
            groutKg = (groutFormula * totalAreaWithWaste).toFixed(1);
        }

        const materialCost = totalAreaWithWaste * (selectedTile?.price || 0);

        return {
            baseArea: baseArea.toFixed(2),
            totalAreaWithWaste: totalAreaWithWaste.toFixed(2),
            tilesToOrder,
            totalWeightKg: totalWeightKg.toFixed(0),
            palletsNeeded,
            groutKg,
            materialCost: materialCost.toFixed(2),
            wastePercent: Math.round((wasteFactor - 1) * 100)
        };
    }, [length, width, selectedTile, wasteFactor, groutJoint]);

    // -------------------------------------------------------------
    // PDF GENERATION FUNCTION (UPDATED)
    // -------------------------------------------------------------
    const handleExportPDF = async () => {
        if (!reportRef.current) return;
        
        setIsExporting(true);
        
        try {
            // Use html-to-image to perfectly handle modern CSS colors (oklch, lab)
            const dataUrl = await toPng(reportRef.current, {
                quality: 1,
                pixelRatio: 2, // High resolution
                backgroundColor: "#ffffff",
                style: {
                    margin: "0", 
                }
            });
            
            // Calculate dimensions to maintain aspect ratio on an A4 page
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (reportRef.current.offsetHeight * pdfWidth) / reportRef.current.offsetWidth;
            
            // Add image to PDF and trigger download
            pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`VibeCode_Project_Estimate_${selectedTile?.id || 'Doc'}.pdf`);
            
        } catch (error) {
            console.error("Failed to generate PDF:", error);
            alert("There was an error generating the PDF. Please try again.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="w-full bg-[#FAFAFA] text-neutral-900 min-h-screen font-sans">
            
            {/* Minimal Header */}
            <header className="w-full border-b border-neutral-200 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/catalogue" className="p-2 border border-neutral-200 hover:bg-neutral-100 transition-colors">
                            <ArrowLeft size={16} />
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold uppercase tracking-widest text-neutral-950">
                                Project Estimator
                            </h1>
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                                Quantity, Logistics & Materials
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* LEFT COLUMN: Input Parameters */}
                <div className="lg:col-span-5 space-y-8">
                    
                    {/* Module 1: Material Selection */}
                    <div className="bg-white border border-neutral-200 p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 border-b border-neutral-100 pb-4">
                            <Search size={16} className="text-emerald-700" />
                            <h2 className="text-xs font-bold uppercase tracking-widest">1. Select Material</h2>
                        </div>
                        
                        <div className="relative">
                            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">Search Archive</label>
                            <input 
                                type="text" 
                                placeholder="Search by name, ID, or category..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setIsDropdownOpen(true);
                                }}
                                onFocus={() => setIsDropdownOpen(true)}
                                className="w-full border border-neutral-300 px-4 py-3 text-xs font-mono uppercase focus:border-neutral-900 outline-none transition-colors"
                            />
                            
                            {isDropdownOpen && (
                                <div className="absolute z-50 top-full left-0 w-full mt-1 bg-white border border-neutral-300 shadow-xl max-h-64 overflow-y-auto">
                                    <div className="flex justify-between items-center p-2 border-b border-neutral-100 bg-neutral-50 sticky top-0">
                                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Results ({filteredTiles.length})</span>
                                        <button onClick={() => setIsDropdownOpen(false)} className="text-neutral-400 hover:text-black text-xs font-mono">Close</button>
                                    </div>
                                    {filteredTiles.map(tile => (
                                        <button
                                            key={tile.id}
                                            onClick={() => {
                                                setSelectedTile(tile);
                                                setIsDropdownOpen(false);
                                                setSearchQuery("");
                                            }}
                                            className="w-full text-left p-3 hover:bg-neutral-50 border-b border-neutral-100 flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-cover bg-center border border-neutral-200" style={{ backgroundImage: `url(${tile.image})` }} />
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-neutral-900 line-clamp-1">{tile.title}</span>
                                                    <span className="text-[9px] font-mono text-neutral-500">{tile.dimensions} • {tile.category}</span>
                                                </div>
                                            </div>
                                            {selectedTile?.id === tile.id && <Check size={14} className="text-emerald-600" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {selectedTile && (
                            <div className="mt-4 p-4 border border-neutral-200 bg-neutral-50 flex items-start gap-4">
                                {/* crossOrigin="anonymous" is critical for html-to-image to capture external images */}
                                <img src={selectedTile.image} crossOrigin="anonymous" alt={selectedTile.title} className="w-16 h-16 object-cover border border-neutral-300 shadow-sm shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-mono text-emerald-700 uppercase tracking-widest mb-1">Active Selection</span>
                                    <span className="text-sm font-bold text-neutral-950 leading-tight mb-1">{selectedTile.title}</span>
                                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-500 uppercase">
                                        <span>{selectedTile.dimensions}</span>
                                        <span>${selectedTile.price} / m²</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Module 2: Spatial Parameters */}
                    <div className="bg-white border border-neutral-200 p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 border-b border-neutral-100 pb-4">
                            <Ruler size={16} className="text-neutral-900" />
                            <h2 className="text-xs font-bold uppercase tracking-widest">2. Spatial Parameters</h2>
                        </div>
                        
                        <div className="mb-6">
                            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">Application Surface</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['floor', 'wall', 'facade'].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setSurfaceType(type)}
                                        className={`py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${surfaceType === type ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">Length (Meters)</label>
                                <input 
                                    type="number" 
                                    min="0"
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                    className="w-full border border-neutral-300 px-4 py-3 text-sm font-mono focus:border-neutral-900 outline-none"
                                    placeholder="e.g. 5.5"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">Width (Meters)</label>
                                <input 
                                    type="number" 
                                    min="0"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    className="w-full border border-neutral-300 px-4 py-3 text-sm font-mono focus:border-neutral-900 outline-none"
                                    placeholder="e.g. 4.0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Module 3: Installation Variables */}
                    <div className="bg-white border border-neutral-200 p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 border-b border-neutral-100 pb-4">
                            <Grid2X2 size={16} className="text-neutral-900" />
                            <h2 className="text-xs font-bold uppercase tracking-widest">3. Installation Variables</h2>
                        </div>
                        
                        <div className="mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">Laying Pattern (Wastage)</label>
                                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5">+{calculations.wastePercent}% Waste</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {['straight', 'brick', 'chevron'].map(pat => (
                                    <button 
                                        key={pat}
                                        onClick={() => setPattern(pat)}
                                        className={`py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${pattern === pat ? 'bg-neutral-100 border-neutral-900 text-neutral-900 font-bold' : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400'}`}
                                    >
                                        {pat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">Grout Joint Width (mm)</label>
                            <input 
                                type="range" 
                                min="1" max="10" step="1"
                                value={groutJoint}
                                onChange={(e) => setGroutJoint(parseFloat(e.target.value))}
                                className="w-full accent-neutral-900"
                            />
                            <div className="flex justify-between mt-2 text-[10px] font-mono text-neutral-400">
                                <span>Seamless (1mm)</span>
                                <span className="text-neutral-900 font-bold">{groutJoint} mm</span>
                                <span>Rustic (10mm)</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Live Architectural Report (Target for PDF) */}
                <div className="lg:col-span-7 flex flex-col gap-4 sticky top-28">
                    
                    {/* The Printable Area */}
                    <div ref={reportRef} className="bg-white border border-neutral-300 shadow-xl print:shadow-none print:border-none">
                        
                        {/* PDF Header */}
                        <div className="bg-neutral-950 text-white p-6 md:p-8 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Vibe Code Ceramics // Estimate</span>
                                <h2 className="text-2xl md:text-3xl font-serif">Project Dossier</h2>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">Material Ref:</span>
                                <span className="text-xs font-mono font-bold text-emerald-400">{selectedTile?.id || 'N/A'}</span>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            {/* Selected Product Summary inside PDF */}
                            {selectedTile && (
                                <div className="mb-8 pb-6 border-b border-neutral-100 flex items-center gap-4">
                                    <img src={selectedTile.image} crossOrigin="anonymous" alt={selectedTile.title} className="w-20 h-20 object-cover border border-neutral-200" />
                                    <div>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-1">{selectedTile.title}</h3>
                                        <p className="text-xs font-mono text-neutral-500 uppercase">{selectedTile.dimensions} • {selectedTile.finish}</p>
                                    </div>
                                </div>
                            )}

                            {/* Primary Quantity Output */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="border border-neutral-200 p-5 bg-neutral-50 flex flex-col items-center justify-center text-center">
                                    <Calculator size={20} className="text-emerald-700 mb-3" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Total Coverage Area</span>
                                    <span className="text-3xl font-mono font-bold text-neutral-950">{calculations.totalAreaWithWaste} <span className="text-sm font-normal text-neutral-500">m²</span></span>
                                    <span className="text-[9px] font-mono text-neutral-400 mt-2">Includes {calculations.wastePercent}% pattern waste</span>
                                </div>
                                <div className="border border-neutral-200 p-5 bg-neutral-50 flex flex-col items-center justify-center text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] border-b-2 border-b-neutral-900">
                                    <Layers size={20} className="text-neutral-900 mb-3" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Tiles to Order</span>
                                    <span className="text-4xl font-mono font-black text-neutral-950">{calculations.tilesToOrder}</span>
                                    <span className="text-[9px] font-mono text-neutral-400 mt-2">Exact Pieces Required</span>
                                </div>
                            </div>

                            {/* Advanced Logistics & Materials Grid */}
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-200 pb-2 mb-4">
                                Logistics & Auxiliary Materials
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="flex flex-col p-4 border border-neutral-100">
                                    <div className="flex items-center gap-2 mb-2 text-neutral-500">
                                        <Scale size={14} />
                                        <span className="text-[10px] font-mono uppercase tracking-widest">Gross Tonnage</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold">{calculations.totalWeightKg} <span className="text-xs text-neutral-400">kg</span></span>
                                </div>
                                <div className="flex flex-col p-4 border border-neutral-100">
                                    <div className="flex items-center gap-2 mb-2 text-neutral-500">
                                        <Package size={14} />
                                        <span className="text-[10px] font-mono uppercase tracking-widest">Est. Pallets</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold">{calculations.palletsNeeded} <span className="text-xs text-neutral-400">pallets</span></span>
                                </div>
                                <div className="flex flex-col p-4 border border-neutral-100">
                                    <div className="flex items-center gap-2 mb-2 text-neutral-500">
                                        <Droplet size={14} />
                                        <span className="text-[10px] font-mono uppercase tracking-widest">Grout Req.</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold">{calculations.groutKg} <span className="text-xs text-neutral-400">kg</span></span>
                                </div>
                            </div>

                            {/* Financial Summary */}
                            <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-1">Estimated Material Cost</span>
                                    <span className="text-2xl md:text-3xl font-mono font-bold text-neutral-900">${calculations.materialCost}</span>
                                    <span className="text-[9px] text-neutral-500 block mt-1">Excludes freight, grout, and installation labor.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Export Action Button (Outside the printable ref) */}
                    <button 
                        onClick={handleExportPDF}
                        disabled={isExporting}
                        className="w-full p-5 bg-neutral-950 text-white text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-emerald-900 disabled:opacity-70 disabled:hover:bg-neutral-950 transition-colors flex items-center justify-center gap-2 shadow-xl"
                    >
                        {isExporting ? (
                            <>
                                <Hexagon size={16} className="animate-spin text-emerald-400" />
                                Processing PDF Generation...
                            </>
                        ) : (
                            <>
                                <Download size={16} /> Export PDF Dossier
                            </>
                        )}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default EstimatorPage;