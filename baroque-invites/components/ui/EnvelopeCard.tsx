"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface EnvelopeCardProps {
  label?: string;
  meta?: string;
  width?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  files?: Array<{ name: string; meta?: string; image?: string }>;
  variant?: "royal" | "floral";
  className?: string;
}

export default function EnvelopeCard({
  label = "Royal Foil",
  meta = "Gold Leaf & Velvet",
  width = 270,
  open: controlledOpen,
  files = [
    { name: "Gold Leaf Barat", image: "/assets/invites/sh-3.jpg" },
    { name: "Royal Crest Valima", image: "/assets/invites/tri-1.jpg" },
  ],
  variant = "royal",
  className = "",
}: EnvelopeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  // Opens on hover OR when controlledOpen is true
  const isOpen = Boolean(controlledOpen || isHovered);

  const isFloral = variant === "floral";
  const W = width;
  const H = 190;
  const r = 18; // Corner radius for bottom of envelope body
  const flapH = isFloral ? 96 : 92; // Flap height in center
  const cx = W / 2;

  const cardImg = files[0]?.image || (isFloral ? "/assets/invites/new-arrival-cartouche.jpg" : "/assets/invites/sh-3.jpg");
  const secondaryImg = files[1]?.image || (isFloral ? "/assets/invites/new-arrival-ivory.jpg" : "/assets/invites/tri-1.jpg");

  // Seamless fold line: flat across the top from x=0 to x=W at y=0
  // Royal: smooth Euro-contour
  // Floral (New Arrival): scalloped Mughal arch contour
  const flapPath = isFloral
    ? `M 0 0 L ${W} 0 ` +
      `C ${W - 10} 14, ${W - 20} 28, ${W - 26} 34 ` +
      `C ${W - 34} 42, ${W - 40} 54, ${W - 50} 64 ` +
      `C ${W - 62} 74, ${cx + 42} 80, ${cx + 26} 84 ` +
      `C ${cx + 14} 88, ${cx + 4} 94, ${cx} ${flapH} ` +
      `C ${cx - 4} 94, ${cx - 14} 88, ${cx - 26} 84 ` +
      `C ${cx - 42} 80, 62 74, 50 64 ` +
      `C 40 54, 34 42, 26 34 ` +
      `C 20 28, 10 14, 0 0 Z`
    : `M 0 0 L ${W} 0 C ${W - 8} ${flapH * 0.35}, ${W * 0.68} ${flapH * 0.88}, ${W / 2 + 16} ${flapH} Q ${W / 2} ${flapH + 6} ${W / 2 - 16} ${flapH} C ${W * 0.32} ${flapH * 0.88}, 8 ${flapH * 0.35}, 0 0 Z`;

  const flapRimPath = isFloral
    ? `M ${W} 0 ` +
      `C ${W - 10} 14, ${W - 20} 28, ${W - 26} 34 ` +
      `C ${W - 34} 42, ${W - 40} 54, ${W - 50} 64 ` +
      `C ${W - 62} 74, ${cx + 42} 80, ${cx + 26} 84 ` +
      `C ${cx + 14} 88, ${cx + 4} 94, ${cx} ${flapH} ` +
      `C ${cx - 4} 94, ${cx - 14} 88, ${cx - 26} 84 ` +
      `C ${cx - 42} 80, 62 74, 50 64 ` +
      `C 40 54, 34 42, 26 34 ` +
      `C 20 28, 10 14, 0 0`
    : `M ${W} 0 C ${W - 8} ${flapH * 0.35}, ${W * 0.68} ${flapH * 0.88}, ${W / 2 + 16} ${flapH} Q ${W / 2} ${flapH + 6} ${W / 2 - 16} ${flapH} C ${W * 0.32} ${flapH * 0.88}, 8 ${flapH * 0.35}, 0 0`;

  const flapStitchPath = isFloral
    ? `M ${W - 5} 4 ` +
      `C ${W - 14} 16, ${W - 24} 28, ${W - 28} 34 ` +
      `C ${W - 36} 42, ${W - 42} 52, ${W - 50} 60 ` +
      `C ${W - 62} 70, ${cx + 40} 76, ${cx + 24} 80 ` +
      `C ${cx + 12} 84, ${cx + 4} 88, ${cx} ${flapH - 4} ` +
      `C ${cx - 4} 88, ${cx - 12} 84, ${cx - 24} 80 ` +
      `C ${cx - 40} 76, 62 70, 50 60 ` +
      `C 42 52, 36 42, 28 34 ` +
      `C 24 28, 14 16, 5 4`
    : `M ${W - 6} 4 C ${W - 14} ${flapH * 0.35}, ${W * 0.68} ${flapH * 0.88 - 4}, ${W / 2 + 14} ${flapH - 4} Q ${W / 2} ${flapH + 2} ${W / 2 - 14} ${flapH - 4} C ${W * 0.32} ${flapH * 0.88 - 4}, 14 ${flapH * 0.35}, 6 4`;

  // Scoop curve for front pocket with rounded-b bottom
  const pocketSideY = H * 0.34;
  const pocketMidY = H * 0.52;
  const pocketPath = isFloral
    ? `M 0 ${pocketSideY} ` +
      `C 14 ${pocketSideY + 6}, 28 ${pocketSideY + 16}, 38 ${pocketSideY + 22} ` +
      `C 52 ${pocketSideY + 30}, ${cx - 36} ${pocketMidY - 6}, ${cx - 16} ${pocketMidY - 2} ` +
      `C ${cx - 6} ${pocketMidY + 2}, ${cx - 2} ${pocketMidY + 6}, ${cx} ${pocketMidY + 8} ` +
      `C ${cx + 2} ${pocketMidY + 6}, ${cx + 6} ${pocketMidY + 2}, ${cx + 16} ${pocketMidY - 2} ` +
      `C ${cx + 36} ${pocketMidY - 6}, ${W - 52} ${pocketSideY + 30}, ${W - 38} ${pocketSideY + 22} ` +
      `C ${W - 28} ${pocketSideY + 16}, ${W - 14} ${pocketSideY + 6}, ${W} ${pocketSideY} ` +
      `L ${W} ${H - r} Q ${W} ${H} ${W - r} ${H} L ${r} ${H} Q 0 ${H} 0 ${H - r} Z`
    : `M 0 ${pocketSideY} C ${W * 0.22} ${pocketSideY + 6}, ${W * 0.36} ${pocketMidY}, ${W / 2} ${pocketMidY} C ${W * 0.64} ${pocketMidY}, ${W * 0.78} ${pocketSideY + 6}, ${W} ${pocketSideY} L ${W} ${H - r} Q ${W} ${H} ${W - r} ${H} L ${r} ${H} Q 0 ${H} 0 ${H - r} Z`;

  const pocketRimPath = isFloral
    ? `M 0 ${pocketSideY} ` +
      `C 14 ${pocketSideY + 6}, 28 ${pocketSideY + 16}, 38 ${pocketSideY + 22} ` +
      `C 52 ${pocketSideY + 30}, ${cx - 36} ${pocketMidY - 6}, ${cx - 16} ${pocketMidY - 2} ` +
      `C ${cx - 6} ${pocketMidY + 2}, ${cx - 2} ${pocketMidY + 6}, ${cx} ${pocketMidY + 8} ` +
      `C ${cx + 2} ${pocketMidY + 6}, ${cx + 6} ${pocketMidY + 2}, ${cx + 16} ${pocketMidY - 2} ` +
      `C ${cx + 36} ${pocketMidY - 6}, ${W - 52} ${pocketSideY + 30}, ${W - 38} ${pocketSideY + 22} ` +
      `C ${W - 28} ${pocketSideY + 16}, ${W - 14} ${pocketSideY + 6}, ${W} ${pocketSideY}`
    : `M 0 ${pocketSideY} C ${W * 0.22} ${pocketSideY + 6}, ${W * 0.36} ${pocketMidY}, ${W / 2} ${pocketMidY} C ${W * 0.64} ${pocketMidY}, ${W * 0.78} ${pocketSideY + 6}, ${W} ${pocketSideY}`;

  const pocketStitchPath = isFloral
    ? `M 4 ${pocketSideY + 4} ` +
      `C 16 ${pocketSideY + 10}, 28 ${pocketSideY + 18}, 38 ${pocketSideY + 24} ` +
      `C 50 ${pocketSideY + 32}, ${cx - 34} ${pocketMidY - 4}, ${cx - 14} ${pocketMidY} ` +
      `C ${cx - 5} ${pocketMidY + 4}, ${cx - 2} ${pocketMidY + 6}, ${cx} ${pocketMidY + 7} ` +
      `C ${cx + 2} ${pocketMidY + 6}, ${cx + 5} ${pocketMidY + 4}, ${cx + 14} ${pocketMidY} ` +
      `C ${cx + 34} ${pocketMidY - 4}, ${W - 50} ${pocketSideY + 32}, ${W - 38} ${pocketSideY + 24} ` +
      `C ${W - 28} ${pocketSideY + 18}, ${W - 16} ${pocketSideY + 10}, ${W - 4} ${pocketSideY + 4}`
    : `M 4 ${pocketSideY + 4} C ${W * 0.22} ${pocketSideY + 10}, ${W * 0.36} ${pocketMidY + 4}, ${W / 2} ${pocketMidY + 4} C ${W * 0.64} ${pocketMidY + 4}, ${W * 0.78} ${pocketSideY + 10}, ${W - 4} ${pocketSideY + 4}`;

  return (
    <div
      className={`relative select-none cursor-pointer ${className}`}
      style={{ width: W, height: H + 80 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      {/* SVG Defs */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="royal-velvet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#380A1A" />
            <stop offset="45%" stopColor="#250612" />
            <stop offset="100%" stopColor="#150309" />
          </linearGradient>
          <linearGradient id="royal-flap-front-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3D0B1C" />
            <stop offset="70%" stopColor="#290713" />
            <stop offset="100%" stopColor="#1B040C" />
          </linearGradient>
          <linearGradient id="royal-flap-liner-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A0612" />
            <stop offset="50%" stopColor="#4A0F26" />
            <stop offset="100%" stopColor="#2E0817" />
          </linearGradient>
          <linearGradient id="gold-metal-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="50%" stopColor="#F5E4A8" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <clipPath id={`flap-clip-${label.replace(/\s+/g, "-").toLowerCase()}`}>
            <path d={flapPath} />
          </clipPath>
        </defs>
      </svg>

      {/* Stage Container with Headroom for Open Flap & Raised Card */}
      <div className="relative w-full h-full pt-20 flex justify-center">
        {/* Soft Ambient Shadow */}
        <div
          className="absolute bottom-2 left-4 right-4 h-9 rounded-full bg-black/45 blur-xl transition-all duration-500"
          style={{
            transform: isOpen ? "scale(1.08) translateY(8px)" : "scale(1)",
            opacity: isOpen ? 0.65 : 0.4,
          }}
        />

        {/* Envelope 3D Container */}
        <div
          className="relative rounded-b-[18px] overflow-visible shadow-2xl transition-transform duration-500"
          style={{
            width: W,
            height: H,
            perspective: 1200,
          }}
        >
          {/* 1. Envelope Back Wall (Velvet) */}
          <div
            className="absolute inset-0 rounded-b-[18px] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #2A0813 0%, #150308 100%)",
              border: "1px solid rgba(201, 168, 76, 0.25)",
              borderTop: "none",
            }}
          >
            {/* Inner ethnic arch lining */}
            <div className="absolute inset-x-3 top-2 h-20 opacity-25 pointer-events-none">
              <svg viewBox="0 0 200 80" className="w-full h-full fill-none stroke-[#C9A84C]" strokeWidth="0.8">
                <path d="M 10 70 C 10 25, 45 8, 100 8 C 155 8, 190 25, 190 70" />
                <path d="M 25 70 C 25 35, 52 18, 100 18 C 148 18, 175 35, 175 70" strokeDasharray="2 2" />
                <circle cx="100" cy="38" r="10" stroke="#E8D48B" />
                <circle cx="100" cy="38" r="3" fill="#C9A84C" />
              </svg>
            </div>
          </div>

          {/* 2. Inner Royal Invitation Cards (Glides upward gracefully after flap opens) */}
          <div className="absolute inset-x-4 top-2 h-[175px] pointer-events-none z-10">
            {/* Secondary Back Card */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-lg border border-[#C9A84C]/40 bg-[#160309]"
              animate={{
                y: isOpen ? -58 : -10,
                rotate: isOpen ? 3 : 1.5,
                scale: isOpen ? 0.98 : 0.94,
              }}
              transition={{
                duration: isOpen ? 0.85 : 0.5,
                delay: isOpen ? 0.18 : 0,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <Image
                src={secondaryImg}
                alt="Royal Suite Back Card"
                fill
                className="object-cover opacity-85"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>

            {/* Primary Gold Foil Card */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-[#C9A84C] bg-[#1F050E]"
              animate={{
                y: isOpen ? -50 : 0,
                rotate: isOpen ? -2 : 0,
                scale: isOpen ? 1.02 : 1,
              }}
              transition={{
                duration: isOpen ? 0.9 : 0.5,
                delay: isOpen ? 0.15 : 0,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <Image
                src={cardImg}
                alt="Royal Foil Invitation"
                fill
                className="object-cover"
                sizes="240px"
              />
              {/* Gold foil metallic frame */}
              <div className="absolute inset-1.5 rounded-lg border border-[#C9A84C]/70 pointer-events-none" />
              <div className="absolute inset-2.5 rounded-md border border-dashed border-[#E8D48B]/40 pointer-events-none" />

              {/* Gilded Monogram Accent on Top of Card */}
              {!isFloral && (
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-[#C9A84C]/60 shadow-md">
                  <span className="text-[9px] font-serif tracking-widest text-[#E8D48B] font-semibold uppercase">
                    Royal Monogram
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* 3. Front Envelope Pocket (Velvet Scoop Pouch) */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-b-[18px] overflow-hidden">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full block">
              {/* Velvet pocket shape */}
              <path
                d={pocketPath}
                fill="url(#royal-velvet-grad)"
                style={{ filter: "drop-shadow(0 -4px 10px rgba(0,0,0,0.35))" }}
              />
              {/* Outer gold rim curve */}
              <path
                d={pocketRimPath}
                fill="none"
                stroke="url(#gold-metal-stroke)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Inner dashed stitch line */}
              <path
                d={pocketStitchPath}
                fill="none"
                stroke="#E8D48B"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                strokeOpacity="0.85"
              />
            </svg>

            {/* Typography inside pocket bottom */}
            <div
              className="absolute inset-x-0 flex items-center justify-center text-center px-4"
              style={{
                top: pocketMidY + 6,
                bottom: 8,
              }}
            >
              <h4 className="font-serif text-2xl font-bold text-white tracking-wide drop-shadow-md">
                {label}
              </h4>
            </div>
          </div>

          {/* 4. Top Envelope Flap (Hinged at top: folds open 180° smoothly and gently) */}
          <motion.div
            className="absolute inset-x-0 top-0 pointer-events-none overflow-visible"
            style={{
              height: flapH + 10,
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: isOpen ? 180 : 0,
              zIndex: isOpen ? 5 : 30, // Moves behind the rising card when opened!
            }}
            transition={{
              rotateX: {
                duration: 0.95,
                ease: [0.25, 1, 0.5, 1], // Smooth, gentle luxury easing
              },
              zIndex: {
                delay: isOpen ? 0.38 : 0.05,
              },
            }}
          >
            {/* FRONT OF FLAP: Visible when closed (Burgundy + Gold Rim + Wax Seal) */}
            <div
              className="absolute inset-0 overflow-visible"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.45))",
              }}
            >
              <svg viewBox={`0 0 ${W} ${flapH + 10}`} className="w-full h-full overflow-visible block">
                <path d={flapPath} fill="url(#royal-flap-front-grad)" />
                <path
                  d={flapRimPath}
                  fill="none"
                  stroke="url(#gold-metal-stroke)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d={flapStitchPath}
                  fill="none"
                  stroke="#E8D48B"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                  strokeOpacity="0.85"
                />
                {/* Delicate gold score line along the top crease */}
                <line x1="0" y1="0.5" x2={W} y2="0.5" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.4" />
              </svg>

              {/* 3D Wax Seal Medallion on Closed Flap Tip */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: flapH - 12,
                }}
              >
                <div className="relative w-11 h-11 rounded-full shadow-2xl flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full border border-[#FAF3E0]/40"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #F0D78C 0%, #C9A84C 45%, #8A6517 90%)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.5), inset 0 2px 3px rgba(255,255,255,0.6), inset 0 -2px 3px rgba(0,0,0,0.6)",
                    }}
                  />
                  <div className="relative w-8 h-8 rounded-full border border-dashed border-[#573E0C]/60 flex items-center justify-center">
                    <span className="font-serif text-xs font-bold text-[#453006] drop-shadow-sm select-none">
                      ⚜
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* INSIDE OF FLAP: Revealed when folded open 180° (Gold Ethnic Damask Liner) */}
            <div
              className="absolute inset-0 overflow-visible"
              style={{
                transform: "rotateY(180deg)", // Reverses normal without inverting Y coordinates
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                filter: "drop-shadow(0 -4px 8px rgba(0,0,0,0.3))",
              }}
            >
              <svg viewBox={`0 0 ${W} ${flapH + 10}`} className="w-full h-full overflow-visible block">
                {isFloral ? (
                  <g clipPath={`url(#flap-clip-${label.replace(/\s+/g, "-").toLowerCase()})`}>
                    <image
                      href="/assets/invites/new-arrival-floral.jpg"
                      x="0"
                      y="-4"
                      width={W}
                      height={flapH + 20}
                      preserveAspectRatio="xMidYMid slice"
                    />
                    <rect width={W} height={flapH + 20} fill="#1F050E" opacity="0.1" />
                  </g>
                ) : (
                  <path d={flapPath} fill="url(#royal-flap-liner-grad)" />
                )}
                {/* Gold rim */}
                <path
                  d={flapRimPath}
                  fill="none"
                  stroke="url(#gold-metal-stroke)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d={flapStitchPath}
                  fill="none"
                  stroke="#E8D48B"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                  strokeOpacity="0.85"
                />
                {/* Hinge crease line */}
                <line x1="0" y1="0.5" x2={W} y2="0.5" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
