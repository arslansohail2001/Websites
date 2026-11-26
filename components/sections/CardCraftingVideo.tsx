"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Award, ShieldCheck, Flame } from "lucide-react";

export default function CardCraftingVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mt-12 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="section-eyebrow">ARTISAN CRAFTSMANSHIP</span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-semibold mt-1">
          The Art of Making Luxury Invitations
        </h3>
        <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans mt-2 max-w-xl mx-auto">
          Every Baroque suite is handcrafted with centuries-old letterpress techniques, precision metallic foil stamping, and hand-poured wax monograms.
        </p>
      </div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#C9A84C]/30 bg-neutral-900 group"
      >
        {!isPlaying ? (
          <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* High-res Poster Thumbnail */}
            <img
              src="/assets/hero/Burgundy Wedding Stationery Flat Lay.png"
              alt="Making of Luxury Wedding Invitations"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30 flex flex-col items-center justify-center p-6 text-center">
              {/* Play Button */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C9A84C] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play size={28} className="fill-black ml-1" />
              </div>
              <span className="text-white text-xs sm:text-sm uppercase tracking-widest font-sans font-medium mt-4">
                Watch Crafting Process
              </span>
              <p className="text-white/70 text-xs font-serif italic mt-1">
                Behind the scenes at the Baroque atelier
              </p>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube-nocookie.com/embed/L_GnMJmwu1A?autoplay=1&rel=0&modestbranding=1"
            title="The Art of Making Luxury Wedding Invitations"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </motion.div>

      {/* Craftsmanship Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-8">
        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF7F2] border border-[#C9A84C]/20">
          <Flame size={20} className="text-[#C9A84C] mb-2" />
          <h4 className="font-serif font-semibold text-[#1A1A1A] text-sm sm:text-base">Hot Foil Stamping</h4>
          <p className="text-[11px] text-[#6B6B6B] font-sans mt-1">24K metallic gold & copper pressed under heat.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF7F2] border border-[#C9A84C]/20">
          <Award size={20} className="text-[#C9A84C] mb-2" />
          <h4 className="font-serif font-semibold text-[#1A1A1A] text-sm sm:text-base">Wax Monograms</h4>
          <p className="text-[11px] text-[#6B6B6B] font-sans mt-1">Hand-poured beeswax sealed with custom crests.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF7F2] border border-[#C9A84C]/20">
          <Sparkles size={20} className="text-[#C9A84C] mb-2" />
          <h4 className="font-serif font-semibold text-[#1A1A1A] text-sm sm:text-base">Laser Butterfly Folds</h4>
          <p className="text-[11px] text-[#6B6B6B] font-sans mt-1">Micro-precision filigree on heavy velvet cardstock.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#FAF7F2] border border-[#C9A84C]/20">
          <ShieldCheck size={20} className="text-[#C9A84C] mb-2" />
          <h4 className="font-serif font-semibold text-[#1A1A1A] text-sm sm:text-base">Hand Assembly</h4>
          <p className="text-[11px] text-[#6B6B6B] font-sans mt-1">Individually examined, folded, and tied with silk.</p>
        </div>
      </div>
    </div>
  );
}
