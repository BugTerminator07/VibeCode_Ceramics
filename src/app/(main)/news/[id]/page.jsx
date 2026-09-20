import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Grid2X2, ArrowLeft, Calendar, Clock, User, MapPin, Share2, Compass } from "lucide-react";

// Full dataset mirrored for dynamic lookup (in production, this can be moved to a shared utils or database file)
const articlesData = [
    {
        id: 1,
        title: "Milan Design Week 2026: The Obsidian Monolith Showcase",
        category: "Exhibition",
        date: "September 12, 2026",
        readTime: "4 min read",
        author: "Elena Rostova",
        location: "Milan, Italy",
        summary: "Vibecoder Ceramics unveils its immersive structural pavilion at Milan Design Week, featuring oversized porcelain slabs carved from natural volcanic rock formations.",
        content: [
            "Milan Design Week 2026 has witnessed one of the most striking architectural installations of the decade. Vibecoder Ceramics, in collaboration with Vanguard Studio, unveiled the 'Obsidian Monolith'—a towering 12-meter temporary pavilion constructed entirely from ultra-high-density porcelain slabs.",
            "The exhibition explores the boundary between raw geological matter and precision engineering. Visitors walked through corridors lined with matte-finish slabs featuring continuous veining that stretched seamlessly across floors, walls, and ceiling grids.",
            "'We wanted to demonstrate that porcelain is no longer just a surface finish; it is a primary structural medium,' noted lead architect Marcus Vance during the opening keynote."
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Achieving 100% Closed-Loop Water Recycling Across European Foundries",
        category: "Sustainability",
        date: "August 28, 2026",
        readTime: "3 min read",
        author: "Dr. Henrik Lindqvist",
        location: "Stockholm Facility, Sweden",
        summary: "Our primary manufacturing facility has officially transitioned to a completely closed-loop hydration cycle, recycling 98% of industrial processing water.",
        content: [
            "Environmental stewardship is deeply embedded in Vibecoder Ceramics' engineering ethos. Today, our primary European manufacturing foundry has officially certified its transition to a 100% closed-loop hydration and filtration cycle.",
            "By integrating advanced multi-stage reverse osmosis and solar-powered thermal kilns, the facility now recycles 98% of all industrial water utilized during wet pressing and polishing phases.",
            "This milestone significantly reduces our overall carbon footprint while maintaining the absolute sub-millimeter precision and structural integrity required for luxury architectural applications."
        ],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Introducing the 2026 Architectural Slate & Marble Lookbook",
        category: "Press Release",
        date: "August 14, 2026",
        readTime: "5 min read",
        author: "Claire Dupont",
        location: "New York Design District",
        summary: "Explore our latest digital portfolio highlighting matte-finish porcelain slabs designed specifically for minimalist commercial tower facades.",
        content: [
            "The 2026 Architectural Lookbook is now officially live across all global distribution channels. This year's portfolio focuses heavily on tactile depth, featuring deep charcoal slates, brushed limestones, and seamless white Carrara slabs.",
            "Designed for architects and commercial developers seeking uncompromised durability, each featured finish has undergone rigorous Mohs hardness and thermal shock testing.",
            "Digital CAD textures and physical sample kits can now be requested directly through our intake portal."
        ],
        image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Architectural Masterclass Series: Tokyo Design District",
        category: "Event",
        date: "July 30, 2026",
        readTime: "6 min read",
        author: "Kenji Sato",
        location: "Roppongi Lab, Tokyo",
        summary: "Join our principal structural engineers for a live workshop on sub-millimeter calibration and continuous veining techniques in Tokyo.",
        content: [
            "Our Roppongi Design Laboratory recently hosted over 120 leading architects from across the Asia-Pacific region for an intensive masterclass on porcelain installation tolerances.",
            "Participants engaged in hands-on calibration workshops, examining how micro-grout joints and laser-guided cuts alter the acoustic and visual flow of interior spaces.",
            "Due to high demand, additional masterclass sessions will be scheduled in London and New York for the upcoming winter quarter."
        ],
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Expansion of the Global Flagship Dealer Network into Dubai",
        category: "Press Release",
        date: "July 12, 2026",
        readTime: "3 min read",
        author: "Tariq Al-Mansoor",
        location: "Al Quoz, Dubai",
        summary: "We are proud to announce our partnership with Atlas Gulf Surfaces, opening a new 10,000 sq. ft. showroom in Al Quoz Industrial Area.",
        content: [
            "The Middle Eastern architectural landscape is entering a new era of structural luxury. Vibecoder Ceramics has officially partnered with Atlas Gulf Surfaces to establish a flagship distribution hub in Dubai.",
            "The new 10,000 square foot showroom features full-scale slab displays, private architect consultation suites, and dedicated water-jet cutting consultation desks.",
            "This expansion ensures rapid delivery times and localized technical support for mega-developments across the UAE."
        ],
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop"
    }
];

export default async function NewsDetailPage({ params }) {
    // Await params in Next.js App Router
    const resolvedParams = await params;
    const articleId = parseInt(resolvedParams.id, 10);

    // Find article by ID
    const article = articlesData.find((item) => item.id === articleId);

    // If article doesn't exist, trigger 404 page
    if (!article) {
        notFound();
    }

    return (
        <div className="w-full bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-white selection:text-black min-h-screen">
            
            {/* Top Navigation Bar */}
            <div className="w-full px-8 lg:px-24 py-8 border-b border-neutral-800 flex items-center justify-between">
                <Link 
                    href="/news" 
                    className="group inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">
                        <ArrowLeft size={18} />
                    </span>
                    <span className="text-xs uppercase font-bold tracking-[0.2em]">
                        Return to Chronicle
                    </span>
                </Link>

                <div className="flex items-center gap-2 text-neutral-500 text-xs uppercase tracking-widest">
                    <Compass size={14} className="text-amber-500" />
                    <span>Dossier ID // 0{article.id}</span>
                </div>
            </div>

            {/* Article Header */}
            <section className="w-full px-8 lg:px-24 py-16 lg:py-24 border-b border-neutral-800 max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] bg-neutral-900 text-neutral-300 px-3 py-1 border border-neutral-800">
                        {article.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold flex items-center gap-1">
                        <MapPin size={12} /> {article.location}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-8 text-white">
                    {article.title}
                </h1>

                {/* Author & Meta Grid */}
                <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-neutral-800 text-xs uppercase tracking-widest text-neutral-400">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-amber-500" />
                            <span>By {article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-neutral-500" />
                            <span>{article.date}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-neutral-500" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Featured Image Frame */}
            <section className="w-full px-8 lg:px-24 max-w-6xl mx-auto mb-16">
                <div className="w-full h-[400px] lg:h-[550px] relative border border-neutral-800 overflow-hidden shadow-2xl">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
            </section>

            {/* Article Body Content */}
            <section className="w-full px-8 lg:px-24 max-w-3xl mx-auto pb-24 border-b border-neutral-800">
                <div className="space-y-8 text-neutral-300 text-base lg:text-lg leading-relaxed font-serif">
                    {article.content.map((paragraph, index) => (
                        <p key={index} className={index === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-white" : ""}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Share / Footer Section */}
                <div className="mt-16 pt-8 border-t border-neutral-800 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-neutral-500 font-sans">
                        Share Architectural Dossier
                    </span>
                    <button className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-6 py-3 text-xs uppercase font-bold tracking-widest text-white hover:bg-white hover:text-black transition-all">
                        <Share2 size={14} /> Copy Link
                    </button>
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="w-full px-8 lg:px-24 py-20 flex flex-col items-center text-center bg-black text-white">
                <Grid2X2 size={40} strokeWidth={1.5} className="mb-4 text-neutral-500" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                    Explore More Architectural Insights
                </h3>
                <Link href="/news" className="mt-2 bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors">
                    Back to All Articles
                </Link>
            </section>

        </div>
    );
}