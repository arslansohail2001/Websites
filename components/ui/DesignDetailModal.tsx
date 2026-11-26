"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Layers, Ruler, Box } from "lucide-react";
import type { GalleryImage } from "@/lib/placeholder-data";

export interface DesignDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex: number;
  category?: string;
  type?: "invites" | "boxes";
}

export default function DesignDetailModal({
  isOpen,
  onClose,
  images,
  initialIndex,
  category = "Luxury",
  type = "invites",
}: DesignDetailModalProps) {
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(initialIndex);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [origin, setOrigin] = useState("");

  const thumbScrollRef = useRef<HTMLDivElement>(null);

  // Capture window origin for absolute image URLs in WhatsApp
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (initialIndex >= 0 && initialIndex < images.length) {
      setSelectedDesignIndex(initialIndex);
      setActiveThumbIndex(0);
    }
  }, [initialIndex, images.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentDesign = images[selectedDesignIndex] || images[0];

  // 5 detail views of the exact same design picture (not other products)
  const suiteViews = [
    { label: "Full Suite", transform: "scale-100 object-center" },
    { label: "Detail View", transform: "scale-115 object-center" },
    { label: "Top Header", transform: "scale-120 object-top" },
    { label: "Script & Foil", transform: "scale-125 object-bottom" },
    { label: "Embossed Seal", transform: "scale-115 object-right" },
  ];

  // WhatsApp inquiry URL with pre-filled specs & image link
  const designName = currentDesign.title || `${category} Suite`;
  const imageLink = currentDesign.imageUrl.startsWith("http")
    ? currentDesign.imageUrl
    : `${origin || ""}${currentDesign.imageUrl.startsWith("/") ? "" : "/"}${currentDesign.imageUrl}`;

  const whatsappText = encodeURIComponent(
    `Hello Baroque Invites! I am inquiring about the ${designName}.\n\n` +
      `📸 Design Image: ${imageLink}\n\n` +
      `Please share pricing, catalog, and custom order details.`
  );
  const whatsappUrl = `https://wa.me/923177474736?text=${whatsappText}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 border border-black/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/8 bg-white/60 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium">
                {category} Collection
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors text-[#1A1A1A]"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body: Two-Column Split (Left: Gallery, Right: Product Specifications Only) */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-black/8">
            {/* LEFT COLUMN: Main Image & Thumbnail Carousel */}
            <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col items-center justify-start gap-3 bg-white/40">
              {/* Main Image Frame */}
              <div className="relative w-full aspect-[4/4] sm:aspect-[4/3.8] rounded-2xl overflow-hidden bg-[#F0ECE1] shadow-md border border-black/5">
                <Image
                  src={currentDesign.imageUrl}
                  alt={currentDesign.altText || currentDesign.title}
                  fill
                  className={`object-cover transition-all duration-500 ease-out ${
                    suiteViews[activeThumbIndex]?.transform || "scale-100 object-center"
                  }`}
                  sizes="(max-width: 1024px) 90vw, 500px"
                  priority
                />
              </div>

              {/* Thumbnail Strip (5 views of the same design picture, without arrows) */}
              <div
                ref={thumbScrollRef}
                className="w-full flex items-center justify-center gap-2.5 sm:gap-3 py-1 overflow-x-auto no-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {suiteViews.map((view, idx) => {
                  const isSelected = activeThumbIndex === idx;
                  return (
                    <button
                      key={`view-${idx}`}
                      onClick={() => setActiveThumbIndex(idx)}
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-white ${
                        isSelected
                          ? "border-[#C9A84C] shadow-md scale-[1.05]"
                          : "border-black/10 opacity-70 hover:opacity-100 hover:border-black/30"
                      }`}
                      aria-label={`Select ${view.label}`}
                    >
                      <Image
                        src={currentDesign.imageUrl}
                        alt={`${currentDesign.title} - ${view.label}`}
                        fill
                        className={`object-cover transition-transform duration-300 ${view.transform}`}
                        sizes="70px"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Exclusively Product Specifications & Direct WhatsApp Inquiry */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF7F2]">
              <div className="space-y-6">
                {/* Design Title */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-wide">
                    {currentDesign.title || `${category} Bespoke Suite`}
                  </h3>
                </div>

                {/* PRODUCT SPECIFICATIONS */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E3DAC9] shadow-sm space-y-5">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#8A6818] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                    Product Specifications
                  </h4>

                  {/* 1. Size */}
                  <div className="flex items-start gap-3.5 pt-1">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E3DAC9] flex items-center justify-center shrink-0 text-[#8A6818] mt-0.5">
                      <Ruler size={16} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-[#1A1A1A] block">
                        1. Size
                      </span>
                      <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mt-0.5">
                        Card: <strong className="text-[#1A1A1A] font-semibold">5" × 7"</strong> (127 × 178 mm) · Envelope: <strong className="text-[#1A1A1A] font-semibold">5.25" × 7.25"</strong> (Custom die-cut sizes available upon request).
                      </p>
                    </div>
                  </div>

                  <div className="w-full border-t border-[#F2ECE1]" />

                  {/* 2. Include */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E3DAC9] flex items-center justify-center shrink-0 text-[#8A6818] mt-0.5">
                      <Layers size={16} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-[#1A1A1A] block">
                        2. Include
                      </span>
                      <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mt-0.5">
                        Outer Luxury Foil Envelope, Main Invitation Card, Event/RSVP Insert, & Custom Embossed Wax Seal Medallion.
                      </p>
                    </div>
                  </div>

                  <div className="w-full border-t border-[#F2ECE1]" />

                  {/* 3. MOQ */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E3DAC9] flex items-center justify-center shrink-0 text-[#8A6818] mt-0.5">
                      <Box size={16} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-[#1A1A1A] block">
                        3. MOQ (Minimum Order Quantity)
                      </span>
                      <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mt-0.5">
                        <strong className="text-[#1A1A1A] font-semibold">50 Pieces</strong> minimum order for custom hot-foil stamping & bespoke calligraphy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* White Action Button: Inquire for pricing (navigates to WhatsApp) */}
              <div className="pt-6 mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] text-sm font-medium py-3.5 px-6 rounded-full shadow-sm flex items-center justify-center transition-all hover:shadow hover:scale-[1.01] active:scale-[0.99]"
                >
                  Inquire for pricing
                </a>
                <p className="text-[11px] text-[#7A756B] text-center mt-2.5 tracking-wide">
                  Direct consultation via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
