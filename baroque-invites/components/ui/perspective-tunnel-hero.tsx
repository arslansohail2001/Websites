"use client";

import {
  motion,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  animate,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface TunnelCardItem {
  src: string;
  title: string;
}

interface TunnelCardData {
  item: TunnelCardItem;
  angleCos: number;
  angleSin: number;
  radiusFactorX: number;
  radiusFactorY: number;
  rotationZ: number;
  index: number;
}

const PARALLAX_SPRING = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}

interface TunnelCardProps {
  card: TunnelCardData;
  progress: MotionValue<number>;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  total: number;
  stage: StageDimensions;
  onCardClick?: (index: number) => void;
}

function TunnelCard({ card, progress, pointer, total, stage, onCardClick }: TunnelCardProps) {
  const staggerSpan = 0.55;
  const start = (card.index / total) * (1 - staggerSpan);
  const end = start + staggerSpan;

  const localProgress = useTransform(progress, [start, end], [0, 1]);

  const farZ = stage.isMobile ? -1200 : -1700;
  const nearZ = stage.isMobile ? 350 : 500;
  const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

  const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);

  const cardWidth = stage.isMobile
    ? Math.max(130, Math.min(180, stage.width * 0.38))
    : Math.max(180, Math.min(270, stage.width * 0.18));

  const baseX = card.angleCos * (stage.width * card.radiusFactorX);
  const baseY = card.angleSin * (stage.height * card.radiusFactorY);
  const panStrength = stage.isMobile ? 20 : 45;

  const transform = useTransform(
    [z, pointer.x, pointer.y],
    ([currZ, px, py]: number[]) => {
      const offsetX = baseX - px * panStrength;
      const offsetY = baseY - py * panStrength;
      return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
    }
  );

  return (
    <motion.div
      style={{
        width: cardWidth,
        transform,
        opacity,
        zIndex: card.index + 1,
      }}
      className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer"
      onClick={() => onCardClick?.(card.index)}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10 ring-1 ring-[#C9A84C]/30 hover:ring-[#C9A84C] hover:shadow-2xl hover:shadow-[#C9A84C]/25 transition-all duration-500">
        <img
          src={card.item.src}
          alt={card.item.title}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3.5 sm:p-4">
          <span className="text-[11px] sm:text-xs font-serif tracking-wider uppercase text-white/95 drop-shadow-md">
            {card.item.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export interface PerspectiveTunnelHeroProps {
  folderName: string;
  eyebrow?: string;
  description?: string;
  cards?: TunnelCardItem[];
  onCardClick?: (index: number) => void;
}

export default function PerspectiveTunnelHero({
  folderName,
  eyebrow = "BAROQUE COLLECTION",
  description = "Scroll down to browse the full gallery of designs below.",
  cards = [],
  onCardClick,
}: PerspectiveTunnelHeroProps) {
  const reduce = useReducedMotion();

  const [stage, setStage] = useState<StageDimensions>({
    width: 1440,
    height: 900,
    isMobile: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setStage({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Build tunnel card geometries based on the input cards
  const displayCards: TunnelCardItem[] =
    cards.length > 0
      ? cards
      : [
          { src: "/assets/invites/sh-3.jpg", title: "Velvet Monogram" },
          { src: "/assets/invites/tri-1.jpg", title: "Tri-Fold Gold" },
          { src: "/assets/invites/40.jpg", title: "Regal Barat Suite" },
          { src: "/assets/invites/1.jpg", title: "Raw Silk Crest" },
          { src: "/assets/invites/sh-1.jpg", title: "Gold Foil Nikkah" },
          { src: "/assets/invites/MAROON-BUTTER-2.jpg", title: "Maroon Butterfly" },
          { src: "/assets/invites/asasas.jpg", title: "Crystal Acrylic" },
          { src: "/assets/invites/b11.jpg", title: "Emerald Shendi" },
          { src: "/assets/invites/more-3.jpg", title: "Wax Seal Monogram" },
        ];

  const tunnelCards: TunnelCardData[] = displayCards.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180);
    const radiusFactorX = 0.28 + (i % 3) * 0.08;
    const radiusFactorY = 0.26 + (i % 2) * 0.09;

    return {
      item,
      angleCos: Math.cos(goldenAngle),
      angleSin: Math.sin(goldenAngle),
      radiusFactorX,
      radiusFactorY,
      rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
      index: i,
    };
  });

  // Automatically trigger the full 3D tunnel animation without requiring any scrolling
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.0001,
  });

  useEffect(() => {
    if (reduce) {
      rawProgress.set(0.65);
      return;
    }

    // Auto-plays full animation continuously in luxury waves
    const controls = animate(rawProgress, [0, 1], {
      duration: 5.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    });

    return () => controls.stop();
  }, [rawProgress, reduce]);

  const pointer = useCameraParallax(!reduce);

  const scrollToGrid = () => {
    const gridEl = document.getElementById("portfolio-grid");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-[#FAF7F2] text-[#1A1A1A] select-none flex items-center justify-center"
      style={{
        perspective: stage.isMobile ? "900px" : "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Subtle Luxury Pattern & Ambient Gold Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12)_0%,transparent_75%)]" />

      {/* Depth Ring Guides with Antique Gold Accent */}
      <div className="pointer-events-none absolute h-[46vmin] w-[46vmin] rounded-full border border-[#C9A84C]/20" />
      <div className="pointer-events-none absolute h-[72vmin] w-[72vmin] rounded-full border border-dashed border-[#C9A84C]/25" />

      {/* Central Anchor Typography with Folder Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none z-0 flex flex-col items-center text-center px-6 max-w-2xl"
      >
        <p className="text-xs font-sans uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-3">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[0.95] text-[#1A1A1A]">
          {folderName}
        </h1>
        <p className="mt-4 max-w-[42ch] text-xs sm:text-sm font-sans text-[#6B6B6B] leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Scroll Prompt to View Gallery Below */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        onClick={scrollToGrid}
        className="pointer-events-auto absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C9A84C] cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span>Scroll to View Gallery</span>
        <div className="h-6 w-px bg-gradient-to-b from-[#C9A84C] to-transparent animate-pulse" />
      </motion.div>

      {/* 3D Z-Space Plane with Flying Cards */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {tunnelCards.map((card, i) => (
          <TunnelCard
            key={i}
            card={card}
            progress={smoothProgress}
            pointer={pointer}
            total={tunnelCards.length}
            stage={stage}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}
