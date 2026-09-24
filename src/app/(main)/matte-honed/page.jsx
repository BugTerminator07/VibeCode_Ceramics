import Link from 'next/link';

export default function MatteHonedFinishPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-widest text-zinc-400 mb-4 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full shadow-inner">
          Signature Finish Collection
        </span>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
          Matte Honed
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10">
          Engineered for absolute light absorption and a velvety, skin-soft tactile experience. Designed to calm the senses and elevate architectural surfaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/contact"
            className="bg-white text-black font-medium px-6 py-3 rounded-md hover:bg-zinc-200 transition duration-200 text-center"
          >
            Request a Sample
          </Link>
          <Link
            href="/catalogue"
            className="border border-zinc-700 text-zinc-300 px-6 py-3 rounded-md hover:border-zinc-500 hover:text-white transition duration-200 text-center"
          >
            Explore Catalog
          </Link>
        </div>
      </section>

      {/* Sensory Highlight Section */}
      <section className="border-t border-zinc-800/60 bg-[#161616] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
              Velvety Tactile Absorption
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 font-light">
              Unlike traditional glossy finishes that bounce light aggressively, Matte Honed diffuses illumination evenly across its micro-textured surface. When touched, it offers a warm, muted resistance that feels organic and skin-soft.
            </p>
            <ul className="space-y-3 text-zinc-300 text-sm font-light">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                Zero glare under intense directional lighting
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                Anti-fingerprint nano-textured surface
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                Deep, light-absorbing pigment depth
              </li>
            </ul>
          </div>
          
          {/* Visual Texture Simulation Card */}
          <div className="relative h-80 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#1a1a1a] to-zinc-950 opacity-90"></div>
            <div className="relative z-10 text-center p-6">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-mono">Surface Physics</p>
              <p className="text-3xl font-light text-zinc-200">Silk-Soft Matte</p>
              <span className="inline-block mt-4 text-xs text-zinc-400 bg-zinc-800/50 px-3 py-1 rounded border border-zinc-700/50">
                LRV: 3.2% (Low Reflection)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-light text-white mb-10 text-center tracking-wide">
          Technical Characteristics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition">
            <h4 className="text-white font-medium mb-2">Light Reflectance</h4>
            <p className="text-zinc-400 text-sm font-light">Ultra-low LRV rating, absorbing ambient photons for a deeply muted profile.</p>
          </div>
          <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition">
            <h4 className="text-white font-medium mb-2">Surface Durability</h4>
            <p className="text-zinc-400 text-sm font-light">Scratch and mar-resistant formulation protected by a molecular topcoat.</p>
          </div>
          <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition">
            <h4 className="text-white font-medium mb-2">Maintenance</h4>
            <p className="text-zinc-400 text-sm font-light">Effortless wipe-clean capability without degrading the low-sheen velvet barrier.</p>
          </div>
        </div>
      </section>
    </main>
  );
}