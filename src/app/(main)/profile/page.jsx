"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
    LayoutGrid, Package, Settings, LogOut, 
    ArrowRight, Trash2, Clock, MapPin, CreditCard, ShieldCheck 
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import productsData from "@/components/data/products.json";

export default function ProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    
    const [activeTab, setActiveTab] = useState("surfaces");

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        }
    }, [session, isPending, router]);

    // Handle user logout
    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/');
        router.refresh();
    };

    // Mock Data for UI presentation
    const savedSurfaces = productsData.slice(0, 4); // Grabbing first 4 products as "saved"
    const sampleOrders = [
        { id: "VC-8829-1", date: "Sep 20, 2026", status: "In Transit", items: 3, tracking: "AWB-7729103" },
        { id: "VC-7102-4", date: "Aug 12, 2026", status: "Delivered", items: 1, tracking: "AWB-4491022" }
    ];

    if (isPending) {
        return (
            <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border border-neutral-300 border-t-black rounded-full animate-spin"></div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">Authenticating Studio...</span>
                </div>
            </div>
        );
    }

    if (!session) return null; // Prevent flash of content before redirect

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans">
            
            {/* Custom Shimmer Animation */}
            <style jsx global>{`
                @keyframes text-shimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                .animate-text-shimmer {
                    animation: text-shimmer 4s linear infinite;
                }
            `}</style>

            {/* Profile Header (Dark Mode) */}
            <section className="w-full bg-neutral-950 text-white pt-24 pb-16 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                
                <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                    <div className="flex items-center gap-6">
                        {/* Large Architectural Blueprint Avatar */}
                        <div className="w-24 h-24 bg-neutral-900 flex items-center justify-center border border-neutral-700 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:8px_8px]"></div>
                            <span className="text-white text-3xl font-mono font-bold uppercase relative z-10">
                                {(user?.name || user?.email || "V").charAt(0)}
                            </span>
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                                    <ShieldCheck size={10} /> Verified Professional
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-serif mb-1">
                                Welcome, <span className="animate-text-shimmer bg-[length:200%_auto] text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #047857 20%, #34d399 40%, #34d399 60%, #047857 80%)' }}>
                                    {user?.name || "Architect"}
                                </span>.
                            </h1>
                            <p className="text-sm text-neutral-400 font-mono tracking-widest">{user?.email}</p>
                        </div>
                    </div>

                    <button onClick={handleSignOut} className="px-6 py-3 border border-neutral-800 text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white hover:bg-neutral-900 transition-all flex items-center gap-2">
                        <LogOut size={14} /> Log Out
                    </button>
                </div>
            </section>

            {/* Main Dashboard Body */}
            <section className="w-full px-6 sm:px-10 lg:px-20 py-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">
                
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-64 shrink-0 flex flex-col gap-2">
                    <button 
                        onClick={() => setActiveTab("surfaces")}
                        className={`flex items-center gap-3 p-4 text-xs font-bold uppercase tracking-widest transition-all border-l-2 ${activeTab === "surfaces" ? "border-black bg-neutral-100 text-black" : "border-transparent text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"}`}
                    >
                        <LayoutGrid size={16} /> Saved Surfaces
                    </button>
                    <button 
                        onClick={() => setActiveTab("samples")}
                        className={`flex items-center gap-3 p-4 text-xs font-bold uppercase tracking-widest transition-all border-l-2 ${activeTab === "samples" ? "border-black bg-neutral-100 text-black" : "border-transparent text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"}`}
                    >
                        <Package size={16} /> Sample Requests
                    </button>
                    <button 
                        onClick={() => setActiveTab("settings")}
                        className={`flex items-center gap-3 p-4 text-xs font-bold uppercase tracking-widest transition-all border-l-2 ${activeTab === "settings" ? "border-black bg-neutral-100 text-black" : "border-transparent text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"}`}
                    >
                        <Settings size={16} /> Account Settings
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-h-[500px]">
                    
                    {/* TAB 1: Saved Surfaces */}
                    {activeTab === "surfaces" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
                                <h2 className="text-2xl font-serif">Your Surface Library</h2>
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{savedSurfaces.length} Items</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {savedSurfaces.map((item) => (
                                    <div key={item.id} className="group flex flex-col bg-white border border-neutral-200 hover:border-black transition-colors duration-300">
                                        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                                            <div 
                                                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm text-neutral-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 shadow-sm">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        <div className="p-5 flex flex-col grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-700">{item.category}</span>
                                            </div>
                                            <h3 className="text-sm font-bold text-neutral-900 mb-1 leading-snug">{item.title}</h3>
                                            <p className="text-xs text-neutral-500 mb-4">{item.dimensions} • {item.finish}</p>
                                            
                                            <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                                                <span className="text-xs font-mono font-bold">${item.price.toFixed(2)}</span>
                                                <Link href={`/catalogue/${item.id}`} className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 hover:text-emerald-700 transition-colors flex items-center gap-1">
                                                    Specs <ArrowRight size={12} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB 2: Sample Requests */}
                    {activeTab === "samples" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
                                <h2 className="text-2xl font-serif">Sample & Order History</h2>
                                <Link href="/catalogue" className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest hover:text-black flex items-center gap-2">
                                    Request New Box <ArrowRight size={12} />
                                </Link>
                            </div>

                            <div className="flex flex-col gap-4">
                                {sampleOrders.map((order) => (
                                    <div key={order.id} className="p-6 bg-white border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-neutral-300 transition-colors">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs font-mono font-bold uppercase text-neutral-900">Order {order.id}</span>
                                            <div className="flex items-center gap-2 text-xs text-neutral-500">
                                                <Clock size={12} /> {order.date} • {order.items} Samples
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3">
                                            <div className={`px-3 py-1 text-[10px] font-mono uppercase tracking-widest font-bold border ${order.status === "Delivered" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"}`}>
                                                {order.status}
                                            </div>
                                            <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-xs font-bold uppercase tracking-widest text-neutral-900 transition-colors">
                                                Track
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB 3: Account Settings */}
                    {activeTab === "settings" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="mb-8 pb-4 border-b border-neutral-200">
                                <h2 className="text-2xl font-serif">Account Settings</h2>
                            </div>

                            <div className="max-w-xl space-y-8">
                                {/* Read-only Info */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">Studio Identity</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-neutral-50 border border-neutral-200">
                                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Username / Studio Name</span>
                                            <span className="text-sm font-semibold">{user?.name || "Not provided"}</span>
                                        </div>
                                        <div className="p-4 bg-neutral-50 border border-neutral-200">
                                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Registered Email</span>
                                            <span className="text-sm font-semibold truncate">{user?.email}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder Inputs */}
                                <div className="space-y-4 pt-6 border-t border-neutral-100">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 flex items-center gap-2">
                                        <MapPin size={14} /> Default Shipping Address
                                    </h3>
                                    <input type="text" placeholder="123 Architecture Blvd, Suite 400" className="w-full p-3 text-sm border border-neutral-200 focus:border-black outline-none bg-white" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="City" className="w-full p-3 text-sm border border-neutral-200 focus:border-black outline-none bg-white" />
                                        <input type="text" placeholder="Postal Code" className="w-full p-3 text-sm border border-neutral-200 focus:border-black outline-none bg-white" />
                                    </div>
                                </div>

                                <button className="mt-6 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
}