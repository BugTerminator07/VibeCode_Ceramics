"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // The 4 cinematic slides data
    // The 4 cinematic slides data with verified high-res architectural images
    const slides = [
        {
            id: 1,
            title: "Echoes of Excellence",
            subtitle: "The Obsidian Monolith Collection",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop" // Dark architectural stone interior
        },
        {
            id: 2,
            title: "Designed for Life",
            subtitle: "Uncompromising Durability & Purity",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop" // Warm minimalist stone & porcelain island
        },
        {
            id: 3,
            title: "The Art of Stone",
            subtitle: "Continuous Vein Porcelain Slabs",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1920&auto=format&fit=crop" // Marble & stone gallery layout
        },
        {
            id: 4,
            title: "Architectural Scale",
            subtitle: "Oversized Formats for Infinite Spaces",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop" // Grand monumental interior
        }
    ];

    // Auto-play logic: Change slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        // Cleanup timer on component unmount to prevent memory leaks
        return () => clearInterval(timer);
    }, []);

    // Manual navigation functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[85vh] min-h-[600px] bg-black overflow-hidden flex items-center justify-center selection:bg-white selection:text-black">
            
            {/* Background Images Layer */}
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        {/* Slow zoom effect on the active image for luxury feel */}
                        <div 
                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
                                isActive ? "scale-105" : "scale-100"
                            }`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                        {/* Dark gradient overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                        <div className="absolute inset-0 bg-black/20" /> {/* Extra dimming */}
                    </div>
                );
            })}

            {/* Central Content Layer */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl">
                
                {/* We use a key based on currentSlide to trigger the fade-up animation every time the slide changes */}
                <div key={currentSlide} className="flex flex-col items-center animate-fade-in-up">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-neutral-300 mb-4 drop-shadow-md">
                        {slides[currentSlide].subtitle}
                    </span>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-10 drop-shadow-xl leading-none">
                        {slides[currentSlide].title}
                    </h1>

                    <Link 
                        href="/catalogue" 
                        className="group flex items-center gap-3 bg-white text-black px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    >
                        <span>Find Out More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>

            {/* Left Navigation Arrow */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 text-white/50 hover:text-white hover:bg-black/20 border border-transparent hover:border-white/20 backdrop-blur-sm transition-all duration-300 rounded-full group"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={32} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Right Navigation Arrow */}
            <button 
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 text-white/50 hover:text-white hover:bg-black/20 border border-transparent hover:border-white/20 backdrop-blur-sm transition-all duration-300 rounded-full group"
                aria-label="Next Slide"
            >
                <ChevronRight size={32} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Bottom Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full ${
                            currentSlide === index 
                                ? "w-8 h-1.5 bg-white" 
                                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Inline CSS for the text animation */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default HeroSlider;