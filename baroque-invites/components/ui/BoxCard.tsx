"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface BoxCardProps {
  label?: string;
  meta?: string;
  width?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  files?: Array<{ name: string; meta?: string; image?: string }>;
  className?: string;
}

export default function BoxCard({
  label = "Crystal Acrylic",
  meta = "Nikkah Glass & Gold",
  width = 270,
  open: controlledOpen,
  files = [
    { name: "Clear Glass Panel", image: "/assets/invites/40.jpg" },
    { name: "Frosted Rose Gold", image: "/assets/invites/44.jpg" },
  ],
  className = "",
}: BoxCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = Boolean(controlledOpen || isHovered);

  const W = width;
  const H = 190;
  const acrylicCardImg = files[0]?.image || "/assets/invites/40.jpg";
  const secondaryCardImg = files[1]?.image || "/assets/invites/44.jpg";

  return (
    <div
      className={`relative select-none cursor-pointer ${className}`}
      style={{ width: W, height: H + 80 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      {/* Stage Container with Headroom for Raised Acrylic Card */}
      <div className="relative w-full h-full pt-20 flex justify-center">
        {/* Soft Ambient Shadow */}
        <div
          className="absolute bottom-2 left-4 right-4 h-9 rounded-full bg-[#3B6258]/35 blur-xl transition-all duration-500"
          style={{
            transform: isOpen ? "scale(1.08) translateY(8px)" : "scale(1)",
            opacity: isOpen ? 0.6 : 0.35,
          }}
        />

        {/* Box 3D Container */}
        <div
          className="relative rounded-2xl overflow-visible shadow-2xl transition-transform duration-500"
          style={{
            width: W,
            height: H,
            perspective: 1200,
          }}
        >
          {/* 1. Box Back Wall / Interior Velvet Cavity */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-[#A2D0C3]/40"
            style={{
              background: "linear-gradient(145deg, #7FAFA1 0%, #5C8C7F 50%, #466E63 100%)",
              boxShadow: "inset 0 4px 12px rgba(0,0,0,0.25)",
            }}
          >
            {/* Subtle frosted glass reflection lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg viewBox="0 0 200 100" className="w-full h-full fill-none stroke-white" strokeWidth="0.8">
                <line x1="0" y1="20" x2="200" y2="80" strokeDasharray="3 3" />
                <line x1="20" y1="0" x2="180" y2="100" strokeDasharray="2 4" />
              </svg>
            </div>
          </div>

          {/* 2. Inner Crystal Acrylic Invitation Card (Glides upward on hover) */}
          <div className="absolute inset-x-4 top-2 h-[175px] pointer-events-none z-10">
            {/* Secondary Back Plate */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-md border border-white/40 bg-white/10 backdrop-blur-sm"
              animate={{
                y: isOpen ? -60 : -10,
                rotate: isOpen ? 3 : 1.5,
                scale: isOpen ? 0.98 : 0.94,
              }}
              transition={{
                duration: isOpen ? 0.85 : 0.5,
                delay: isOpen ? 0.14 : 0,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <Image
                src={secondaryCardImg}
                alt="Acrylic Suite Back Plate"
                fill
                className="object-cover opacity-80"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-[#466E63]/20" />
            </motion.div>

            {/* Primary Crystal Glass Invitation Card */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-white/60 bg-white/20 backdrop-blur-md"
              animate={{
                y: isOpen ? -52 : 0,
                rotate: isOpen ? -2 : 0,
                scale: isOpen ? 1.02 : 1,
              }}
              transition={{
                duration: isOpen ? 0.9 : 0.5,
                delay: isOpen ? 0.1 : 0,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{
                boxShadow: "0 10px 25px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,0.4)",
              }}
            >
              <Image
                src={acrylicCardImg}
                alt="Crystal Acrylic Card"
                fill
                className="object-cover"
                sizes="240px"
              />
              {/* Beveled crystal border reflection */}
              <div className="absolute inset-1 rounded-lg border border-white/70 pointer-events-none" />
              <div className="absolute inset-2 rounded-md border border-dashed border-[#F5E4A8]/60 pointer-events-none" />

              {/* Crystal Glass Shimmer Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.2) 100%)",
                }}
              />
            </motion.div>
          </div>

          {/* 3. Luxury Rigid Box Front Pocket (Mint/Sage Cardstock with Calligraphy & Bow) */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden shadow-lg border border-[#A2D0C3]/50">
            {/* Box Front Face: Mint/Sage brushed cardstock matching user reference */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, #94C4B5 0%, #7EAE9F 50%, #68998A 100%)",
              }}
            >
              {/* Soft Calligraphy Motif on the Box Front (Inspired by reference photo) */}
              <div className="absolute inset-x-0 top-12 bottom-16 opacity-30 flex items-center justify-center pointer-events-none">
                <span className="font-serif text-5xl font-light text-white tracking-widest select-none drop-shadow-sm">
                  قبول ہے
                </span>
              </div>

              {/* Delicate gold foil border lines on the box */}
              <div className="absolute inset-2.5 rounded-xl border border-white/35 pointer-events-none" />
              <div className="absolute inset-3 rounded-lg border border-dashed border-[#F5E4A8]/40 pointer-events-none" />
            </div>

            {/* Chiffon Ribbon Bow Tied at Top (Matching reference photo) */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
              {/* Ribbon Bow Knot & Loops */}
              <div className="relative w-16 h-8 flex items-center justify-center">
                {/* Left bow loop */}
                <div
                  className="absolute left-1 w-7 h-5 rounded-full border border-white/70 bg-white/90 shadow-sm"
                  style={{
                    transform: "rotate(-18deg)",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F0F6F4 100%)",
                  }}
                />
                {/* Right bow loop */}
                <div
                  className="absolute right-1 w-7 h-5 rounded-full border border-white/70 bg-white/90 shadow-sm"
                  style={{
                    transform: "rotate(18deg)",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F0F6F4 100%)",
                  }}
                />
                {/* Center knot */}
                <div className="relative w-3.5 h-3.5 rounded-full bg-white shadow-md border border-white/80 z-10" />
              </div>
              {/* Ribbon tails hanging gently */}
              <div className="relative w-8 h-4 flex justify-between px-1 -mt-1.5 opacity-90">
                <div
                  className="w-1.5 h-4 bg-white/95 rounded-b-sm shadow-sm"
                  style={{ transform: "rotate(-15deg)" }}
                />
                <div
                  className="w-1.5 h-4 bg-white/95 rounded-b-sm shadow-sm"
                  style={{ transform: "rotate(15deg)" }}
                />
              </div>
            </div>

            {/* Typography Centralized inside Box Front */}
            <div className="absolute inset-x-0 bottom-5 px-4 text-center flex flex-col items-center justify-center">
              <h4 className="font-serif text-2xl font-bold text-white tracking-wide drop-shadow-md">
                {label}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
