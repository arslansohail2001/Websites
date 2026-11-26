"use client";

import { useState } from "react";
import Link from "next/link";
import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import GalleryGrid from "@/components/ui/GalleryGrid";
import DesignDetailModal from "@/components/ui/DesignDetailModal";
import type { GalleryImage } from "@/lib/placeholder-data";
import { ArrowLeft } from "lucide-react";

interface PortfolioClientProps {
  category: string;
  type: "invites" | "boxes";
  images: GalleryImage[];
  archCards?: string[];
}

export default function PortfolioClient({
  category,
  type,
  images,
}: PortfolioClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Prepare cards for the 3D Perspective Tunnel Hero
  const tunnelCards = images.slice(0, 16).map((img, i) => ({
    src: img.imageUrl || "https://picsum.photos/seed/baroque/800/800",
    title: img.title || `${category} #${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A]">
      {/* Floating Top Bar with ONLY Back Button */}
      <div className="fixed top-6 left-6 md:top-8 md:left-12 z-50">
        <Link
          href={type === "boxes" ? "/#boxes" : "/#invites"}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#1A1A1A] hover:text-[#C9A84C] font-medium border border-[#C9A84C]/30 hover:border-[#C9A84C] px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md transition-all duration-300"
        >
          <ArrowLeft size={15} />
          <span>Back to {type === "boxes" ? "Boxes" : "Invites"}</span>
        </Link>
      </div>

      {/* Full-Screen 3D Perspective Tunnel Hero with Folder Name */}
      <PerspectiveTunnelHero
        folderName={category}
        eyebrow={type === "boxes" ? "LUXURY BOX COLLECTION" : "BESPOKE INVITATION SUITE"}
        description="Scroll down to fly through the 3D corridor and discover every handcrafted design below."
        cards={tunnelCards}
        onCardClick={(i) => setLightboxIndex(i)}
      />

      {/* Small Compact Gallery Grid of That Category */}
      <section
        id="portfolio-grid"
        className="bg-white py-16 px-6 md:px-12 border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="section-eyebrow">CURATED PORTFOLIO</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] font-semibold mt-1">
              {category} Designs
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-sans mt-1">
              Click any piece to inspect metallic hot foil textures, wax seals, and envelope calligraphy up close.
            </p>
          </div>

          <GalleryGrid
            images={images}
            onImageClick={(i) => setLightboxIndex(i)}
            compact={true}
          />
        </div>
      </section>

      {/* Design Detail Modal Popup View with Specs (Size, Include, MOQ) */}
      <DesignDetailModal
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        initialIndex={lightboxIndex}
        images={images}
        category={category}
        type={type}
      />
    </div>
  );
}
