"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
    Menu, MapPin, BookOpen, Search, 
    X, Grid2X2, ArrowRight, Sparkles, User, LogOut, ChevronDown
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import productsData from "../data/products.json";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // ESC key listener to close search & profile drawers instantly
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsSearchOpen(false);
                setIsProfileOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Fetch the authenticated user session
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // Handle user logout
    const handleSignOut = async () => {
        await authClient.signOut();
        setIsProfileOpen(false);
        router.push('/');
        router.refresh();
    };

    // Live search suggestions filtered from products.json
    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase();
        return productsData.filter(item => 
            item.title.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.material.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ).slice(0, 5); // Limit to top 5 live suggestions
    }, [searchQuery]);

    // Handle Enter key to navigate to catalogue with search query
    const handleSearchSubmit = (e) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            setIsSearchOpen(false);
            router.push(`/catalogue?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/90 text-neutral-900 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col relative select-none">
            
            {/* Custom Shimmer Animation for Logged In User */}
            <style jsx global>{`
                @keyframes text-shimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                .animate-text-shimmer {
                    animation: text-shimmer 4s linear infinite;
                }
            `}</style>

            {/* Main Grid Navbar */}
            <div className="w-full flex h-20 items-stretch">
                
                {/* Left Section: Menu Toggle + Utility Links */}
                <div className="flex-1 flex h-full">
                    
                    {/* Hamburger Button */}
                    <button 
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            setIsSearchOpen(false);
                            setIsProfileOpen(false);
                        }}
                        className="h-full px-6 lg:px-8 flex items-center justify-center border-r border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors duration-200 group relative"
                        aria-label="Toggle Navigation Menu"
                    >
                        {isMenuOpen ? (
                            <X size={26} strokeWidth={1.75} className="group-hover:rotate-90 transition-transform duration-300" />
                        ) : (
                            <Menu size={26} strokeWidth={1.75} className="group-hover:scale-105 transition-transform" />
                        )}
                        <span className="sr-only">Menu</span>
                    </button>
                    
                    {/* Store Locator Link */}
                    <Link 
                        href="/store-locator" 
                        className="h-full px-6 hidden lg:flex items-center gap-2.5 border-r border-neutral-200 hover:bg-neutral-50 transition-colors text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 hover:text-black group"
                    >
                        <MapPin size={15} strokeWidth={1.8} className="text-neutral-400 group-hover:text-black transition-colors" />
                        <span>Store Locator</span>
                    </Link>
                    
                    {/* Catalogue Link */}
                    <Link 
                        href="/catalogue" 
                        className="h-full px-6 hidden lg:flex items-center gap-2.5 hover:bg-neutral-50 transition-colors text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 hover:text-black group"
                    >
                        <BookOpen size={15} strokeWidth={1.8} className="text-neutral-400 group-hover:text-black transition-colors" />
                        <span>Catalogue</span>
                    </Link>
                </div>

                {/* Middle Section: Centerpiece Brand Identity */}
                <div className="flex h-full items-center justify-center px-6 lg:px-12 relative">
                    <Link href="/" className="flex items-center gap-3.5 group">
                        <div className="text-black group-hover:rotate-90 transition-transform duration-700 ease-in-out">
                            <Grid2X2 size={32} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center border-l-2 border-neutral-200 pl-3.5 group-hover:border-black transition-colors">
                            <span className="text-lg lg:text-2xl font-black tracking-[0.25em] uppercase leading-none text-black">
                                Vibe Code
                            </span>
                            <span className="text-[9px] lg:text-[10px] tracking-[0.45em] uppercase text-neutral-400 font-semibold mt-1">
                                Ceramics • Studio
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Right Section: Tools + Search + Auth */}
                <div className="flex-1 flex h-full justify-end items-center">
                    
                    {/* Interactive 3D Room Visualizer Badge */}
                    <Link 
                        href="/room-visualizer" 
                        className="h-full px-6 hidden xl:flex flex-col items-center justify-center border-l border-neutral-200 hover:bg-neutral-50 transition-all group/vis"
                    >
                        <span className="font-bold uppercase tracking-[0.18em] text-[10px] text-neutral-500 group-hover/vis:text-black transition-colors">
                            Surface Studio
                        </span>
                        
                        <div className="mt-1 flex items-center gap-2 bg-neutral-950 px-3 py-1 rounded-full shadow-sm group-hover/vis:bg-black group-hover/vis:scale-105 transition-all duration-300 border border-neutral-800">
                            <div className="relative flex items-center justify-center h-2 w-2">
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                            </div>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white font-black">
                                3D Studio
                            </span>
                        </div>
                    </Link>

                    {/* Search Trigger Button */}
                    <button 
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen);
                            setIsMenuOpen(false);
                            setIsProfileOpen(false);
                        }}
                        className={`h-full px-5 lg:px-7 flex items-center justify-center border-l border-neutral-200 transition-colors ${
                            isSearchOpen ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-700"
                        }`}
                        aria-label="Toggle Search"
                    >
                        <Search size={20} strokeWidth={1.75} />
                    </button>

                    {/* United Authentication Pod: Logged In vs Logged Out */}
                    <div className="hidden sm:flex items-center h-full border-l border-neutral-200">
                        {user ? (
                            // LOGGED IN STATE
                            <div className="relative h-full">
                                <button 
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center h-full px-6 gap-3.5 group hover:bg-neutral-50 transition-all bg-white relative z-10 border-none outline-none"
                                >
                                    {/* Architectural Blueprint Avatar */}
                                    <div className="w-9 h-9 bg-neutral-950 flex items-center justify-center border border-neutral-800 shadow-sm relative overflow-hidden group-hover:shadow-md transition-all duration-300">
                                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                                        <span className="text-white text-xs font-mono font-bold uppercase relative z-10">
                                            {(user.name || user.email || "V").charAt(0)}
                                        </span>
                                    </div>
                                    
                                    {/* Text Info with Premium Shimmer Effect */}
                                    <div className="flex flex-col items-start justify-center text-left hidden xl:flex">
                                        <span 
                                            className="text-xs uppercase font-black tracking-[0.18em] animate-text-shimmer bg-[length:200%_auto] text-transparent bg-clip-text"
                                            style={{ backgroundImage: 'linear-gradient(to right, #047857 20%, #34d399 40%, #34d399 60%, #047857 80%)' }}
                                        >
                                            {user.name || user.email?.split('@')[0]}
                                        </span>
                                        <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-400 font-mono mt-0.5">
                                            Verified Studio
                                        </span>
                                    </div>

                                    {/* Dropdown Indicator */}
                                    <ChevronDown size={14} strokeWidth={2} className={`text-neutral-400 transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Profile Dropdown Menu */}
                                <div className={`absolute top-full right-0 w-56 bg-white border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out origin-top-right ${isProfileOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                                    <div className="p-5 border-b border-neutral-100 bg-neutral-50/50">
                                        <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Studio Access</p>
                                        <p className="text-xs font-mono text-black truncate">{user.email}</p>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <Link href="/profile" onClick={() => setIsProfileOpen(false)} className="px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-50 transition-colors flex items-center gap-3 text-neutral-700">
                                            <User size={14} className="text-emerald-600" /> Studio Dashboard
                                        </Link>
                                        {/* Explicit Log Out Button */}
                                        <button onClick={handleSignOut} className="px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-3 text-neutral-700 text-left w-full group">
                                            <LogOut size={14} className="text-neutral-400 group-hover:text-red-500 transition-colors" /> Log Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // LOGGED OUT STATE (Buttons)
                            <div className="flex items-center h-full px-4 bg-neutral-50/60 gap-2">
                                <Link 
                                    href="/login" 
                                    className="px-4 py-2.5 text-xs uppercase font-bold tracking-[0.18em] text-neutral-700 hover:text-black hover:bg-white rounded border border-transparent hover:border-neutral-300 transition-all"
                                >
                                    Log In
                                </Link>

                                <Link 
                                    href="/signup" 
                                    className="px-5 py-2.5 bg-black text-white hover:bg-neutral-800 transition-all text-xs uppercase font-bold tracking-[0.18em] rounded shadow-sm flex items-center gap-2 group"
                                >
                                    <span>Sign Up</span>
                                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Expandable Search Drawer with Live Suggestions */}
            <div 
                className={`absolute top-full left-0 w-full bg-white border-b border-neutral-300 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                    isSearchOpen ? "max-h-[420px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 border-transparent pointer-events-none"
                }`}
            >
                <div className="container mx-auto px-6 max-w-4xl flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Search size={22} className="text-neutral-400 shrink-0" />
                        <input 
                            type="text" 
                            autoFocus={isSearchOpen}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchSubmit}
                            placeholder="SEARCH SURFACES, PORCELAIN SLABS, OR CATEGORIES (PRESS ENTER)..." 
                            className="w-full bg-transparent outline-none text-xs sm:text-sm lg:text-base tracking-[0.15em] uppercase font-mono text-black placeholder:text-neutral-400"
                        />
                        <span className="hidden md:inline-block text-[10px] font-mono uppercase tracking-widest text-neutral-400 border border-neutral-200 px-2 py-1 rounded bg-neutral-50 whitespace-nowrap">
                            ESC to Close
                        </span>
                    </div>

                    {/* Live Results Dropdown */}
                    {searchQuery.trim() !== "" && (
                        <div className="border-t border-neutral-100 pt-4 flex flex-col gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                                Instant Matches ({searchResults.length})
                            </span>
                            {searchResults.length === 0 ? (
                                <p className="text-xs font-mono text-neutral-500 py-2">No direct product matches found. Press Enter to search archive.</p>
                            ) : (
                                <div className="flex flex-col gap-1 max-h-56 overflow-y-auto">
                                    {searchResults.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/catalogue/${item.id}`}
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                setSearchQuery("");
                                            }}
                                            className="flex items-center justify-between p-2.5 hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-cover bg-center border border-neutral-200 shrink-0" style={{ backgroundImage: `url(${item.image})` }} />
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-neutral-900 group-hover:text-emerald-800 transition-colors">{item.title}</span>
                                                    <span className="text-[9px] font-mono text-neutral-400 uppercase">{item.category} • {item.dimensions}</span>
                                                </div>
                                            </div>
                                            <span className="text-xs font-mono font-bold text-neutral-900">${item.price.toFixed(2)}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* High-Contrast Obsidian Blueprint Mega Menu */}
            <div 
                className={`absolute top-full left-0 w-full bg-[#0A0A0A] text-neutral-400 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-neutral-800 ${
                    isMenuOpen ? "max-h-[850px] opacity-100 shadow-2xl" : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="w-full px-8 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
                    
                    {/* Column 1: Company Profile */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 mb-2">
                            <span className="text-[10px] font-mono text-amber-500">// 01</span>
                            <h3 className="font-bold text-xs text-white uppercase tracking-[0.25em]">Brand</h3>
                        </div>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            About Studio
                        </Link>
                        <Link href="/why-choose-us" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Why Choose Us
                        </Link>
                        <Link href="/career" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Careers
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Direct Intake
                        </Link>
                    </div>

                    {/* Column 2: Architectural Network */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 mb-2">
                            <span className="text-[10px] font-mono text-amber-500">// 02</span>
                            <h3 className="font-bold text-xs text-white uppercase tracking-[0.25em]">Network</h3>
                        </div>
                        <Link href="/display-centers" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Display Centers
                        </Link>
                        <Link href="/dealers" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Dealers Registry
                        </Link>
                        <Link href="/store-locator" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Store Locator
                        </Link>
                        <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors flex items-center gap-2 group text-sm">
                            <span className="w-0 group-hover:w-3.5 h-[1px] bg-amber-400 transition-all duration-300"></span>
                            Selected Works
                        </Link>
                    </div>

                    {/* Column 3 & 4: Feature Highlight Card */}
                    <div className="lg:col-span-2 flex flex-col justify-between bg-neutral-900/60 border border-neutral-800 p-8 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-black text-white pointer-events-none">
                            26
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-3">
                                <Sparkles size={14} />
                                <span className="uppercase tracking-widest font-bold">New Release</span>
                            </div>
                            <h4 className="text-white text-2xl font-serif mb-3">The Obsidian Monolith Series</h4>
                            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6 font-sans">
                                1600x3200mm continuous-veined porcelain slabs calibrated for high-traffic commercial facades and luxury estates.
                            </p>
                        </div>
                        <Link 
                            href="/catalogue" 
                            onClick={() => setIsMenuOpen(false)}
                            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold group-hover:gap-5 transition-all text-amber-400"
                        >
                            <span>Explore Catalog</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>

                    {/* Column 5: Quick Dossier & Socials */}
                    <div className="flex flex-col justify-between gap-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 mb-2">
                                <span className="text-[10px] font-mono text-amber-500">// 03</span>
                                <h3 className="font-bold text-xs text-white uppercase tracking-[0.25em]">Dossier</h3>
                            </div>
                            <Link href="/news" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors text-sm">Chronicle & Events</Link>
                            <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors text-sm">Technical FAQ</Link>
                        </div>

                        <div className="pt-6 border-t border-neutral-900">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">Networks</span>
                            <div className="flex gap-2.5">
                                <a href="https://www.facebook.com/tasdid.zubier" className="p-2.5 border border-neutral-800 hover:border-white hover:text-white transition-colors text-neutral-400"><FaFacebook size={14} /></a>
                                <a href="#" className="p-2.5 border border-neutral-800 hover:border-white hover:text-white transition-colors text-neutral-400"><FaTwitter size={14} /></a>
                                <a href="#" className="p-2.5 border border-neutral-800 hover:border-white hover:text-white transition-colors text-neutral-400"><FaInstagram size={14} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
};

export default Navbar;