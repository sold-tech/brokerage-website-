import React from "react";

export default function KingsRealtySite() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HouseMark className="w-8 h-8" />
            <div className="text-xl tracking-widest font-semibold">
              KINGS <span className="font-light">REALTY & CO</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-[#c7a26b]">About</a>
            <a href="#services" className="hover:text-[#c7a26b]">Services</a>
            <a href="#listings" className="hover:text-[#c7a26b]">Listings</a>
            <a href="#team" className="hover:text-[#c7a26b]">Team</a>
            <a href="#contact" className="hover:text-[#c7a26b]">Contact</a>
            <a href="#consult" className="rounded-full border border-[#c7a26b] px-4 py-2 text-[#c7a26b] hover:bg-[#c7a26b] hover:text-black transition">Book Consult</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/60">Florida • Georgia</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
              Luxury service. <span className="text-[#c7a26b]"> Real results.</span>
            </h1>
            <p className="mt-5 text-white/80 max-w-xl">
              Kings Realty & Co. is a full-service brokerage helping buyers, sellers, and investors across Greater Orlando and North Georgia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#consult" className="inline-flex items-center justify-center rounded-xl bg-[#c7a26b] text-black px-5 py-3 font-medium hover:scale-[1.02] transition">Schedule a Free Consult</a>
              <a href="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-medium hover:border-[#c7a26b] hover:text-[#c7a26b] transition">Search the MLS</a>
            </div>
          </div>
        </div>
      </section>

      {/* Listings (placeholder grid) */}
      <section id="listings" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Featured Listings</h2>
            <a className="text-sm text-[#c7a26b] hover:underline" href="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx" target="_blank" rel="noopener noreferrer">View All MLS »</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <div key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#c7a26b]/20 to-transparent grid place-items-center text-white/60">Listing Photo</div>
                <div className="p-4">
                  <div className="font-semibold">1234 Sample St, Orlando FL</div>
                  <div className="text-sm text-white/70">4 Beds • 3 Baths • 2,350 SF</div>
                  <div className="mt-2 text-[#c7a26b] font-semibold">$675,000</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/60">Currently using MLS link. Upgrade later to Showcase IDX for full search on your site.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <HouseMark className="w-7 h-7" />
              <div className="tracking-widest">KINGS REALTY & CO</div>
            </div>
            <p className="mt-3 text-white/70 text-sm max-w-sm">Serving Greater Orlando, Lake County, and North Georgia.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-white/70 text-sm">Phone: (xxx) xxx-xxxx<br/>Email: hello@kingsrealtyco.com<br/>Office: Orlando, FL</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Kings Realty & Co. All rights reserved.</div>
      </footer>
    </div>
  );
}

function HouseMark({className="w-6 h-6"}){
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 30L32 12l24 18" stroke="#c7a26b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 52V30h32v22" stroke="#c7a26b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="28" y="36" width="8" height="10" fill="#c7a26b"/>
    </svg>
  );
}
