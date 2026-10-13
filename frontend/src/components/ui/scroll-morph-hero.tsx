"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/ui/project-modal";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
    onClick?: () => void;
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({
    src,
    index,
    target,
    onClick,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 45,
                damping: 18,
                mass: 0.8,
            }}
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: -IMG_WIDTH / 2,
                marginTop: -IMG_HEIGHT / 2,
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group pointer-events-auto"
            onClick={onClick}
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-surface-container"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-surface-container-highest flex flex-col items-center justify-center p-4 border border-outline-variant/20 select-none"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-primary uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-on-surface">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const IMAGES = Array.from({ length: TOTAL_IMAGES }).map((_, i) => projects[i % projects.length].image);

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
    const [isExplored, setIsExplored] = useState(false);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax tracking
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => unsubscribeParallax();
    }, [smoothMouseX]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 60);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // Responsive container sizing
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.offsetWidth || (typeof window !== "undefined" ? window.innerWidth : 1200),
                    height: containerRef.current.offsetHeight || 800,
                });
            }
        };

        updateSize();
        const observer = new ResizeObserver(updateSize);
        observer.observe(containerRef.current);
        window.addEventListener("resize", updateSize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    // Initial entrance progression
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 400);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Scatter positions memoized around (0, 0)
    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    // Interactive click actions
    const triggerExplore = () => {
        if (introPhase !== "circle") {
            setIntroPhase("circle");
        }
        setIsExplored(true);
    };

    const toggleExplore = () => {
        if (introPhase !== "circle") {
            setIntroPhase("circle");
        }
        setIsExplored((prev) => !prev);
    };

    const rotateArc = (delta: number) => {
        setRotationAngle((prev) => prev + delta);
    };

    const handleContainerClick = () => {
        if (!isExplored) {
            triggerExplore();
        } else {
            // In explored mode, clicking container advances the carousel rotation
            rotateArc(15);
        }
    };

    // Calculate layout geometry
    const isMobile = containerSize.width < 768;
    const minDimension = Math.min(containerSize.width, containerSize.height);

    // Well-balanced radius with generous padding around the center text and CTA button
    const circleRadius = isMobile 
        ? Math.min(minDimension * 0.38, 220) 
        : Math.min(minDimension * 0.44, 360);

    const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
    const arcRadius = baseRadius * (isMobile ? 1.4 : 1.15);
    const arcApexY = containerSize.height * (isMobile ? 0.16 : 0.14);
    const arcCenterY = arcApexY + arcRadius;
    const spreadAngle = isMobile ? 100 : 130;
    const startAngle = -90 - (spreadAngle / 2);
    const step = spreadAngle / (TOTAL_IMAGES - 1);

    return (
        <div
            ref={containerRef}
            onClick={handleContainerClick}
            className="relative w-full h-full bg-surface dark:bg-surface-container-lowest overflow-hidden border-b border-outline-variant/20 cursor-pointer select-none"
        >
            <div className="relative h-full w-full perspective-1000">
                {/* Initial Circle Center Heading & Click-to-Explore CTA: Exactly Centralized */}
                <AnimatePresence>
                    {!isExplored && (
                        <motion.div
                            key="circle-cta"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={
                                    introPhase === "circle"
                                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                        : { opacity: 0, filter: "blur(10px)" }
                                }
                                transition={{ duration: 0.8 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-[1.15] max-w-md sm:max-w-lg mx-auto"
                            >
                                Work that moves <br /> businesses forward.
                            </motion.h1>

                            {introPhase === "circle" && (
                                <motion.button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        triggerExplore();
                                    }}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00346b] hover:bg-[#002855] text-white text-xs font-bold tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer pointer-events-auto"
                                >
                                    <span className="material-symbols-outlined text-[18px]">touch_app</span>
                                    CLICK TO EXPLORE
                                </motion.button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Explored Arc Header and Interactive Carousel Controls */}
                <AnimatePresence>
                    {isExplored && (
                        <motion.div
                            key="arc-header"
                            initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                            transition={{ duration: 0.6 }}
                            className="absolute top-[8%] md:top-[10%] inset-x-0 mx-auto flex flex-col items-center justify-center text-center px-4 pointer-events-auto z-20"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-[#00346b] uppercase mb-2">
                                Curated Showcase
                            </span>
                            <h2 className="font-h2 text-h2-mobile md:text-h2 text-on-surface tracking-tight mb-3">
                                Explore Our Portfolio
                            </h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed mb-6">
                                We partner with enterprise organizations to design and engineer digital platforms that define modern capability.
                            </p>

                            {/* Carousel Controls */}
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        rotateArc(-25);
                                    }}
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-outline-variant/30 text-on-surface hover:bg-[#00346b] hover:text-white transition-all shadow-sm cursor-pointer"
                                    title="Rotate Left"
                                >
                                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleExplore();
                                    }}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-outline-variant/30 text-on-surface text-xs font-semibold hover:border-[#00346b] hover:text-[#00346b] transition-all shadow-sm cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-sm">restart_alt</span>
                                    Reset to Circle
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        rotateArc(25);
                                    }}
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-outline-variant/30 text-on-surface hover:bg-[#00346b] hover:text-white transition-all shadow-sm cursor-pointer"
                                    title="Rotate Right"
                                >
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3D Animated Cards: Centered from exact (50%, 50%) origin */}
                <div className="absolute inset-0 pointer-events-none">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else if (!isExplored) {
                            // Perfectly centered Circle Formation
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            target = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                                scale: 1,
                                opacity: 1,
                            };
                        } else {
                            // Explored Arc Formation with interactive carousel rotation and parallax
                            const currentArcAngle = startAngle + (i * step) + rotationAngle;
                            const arcRad = (currentArcAngle * Math.PI) / 180;
                            target = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.35 : 1.7,
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                                onClick={() => {
                                    if (!isExplored) {
                                        triggerExplore();
                                    } else {
                                        setSelectedProject(projects[i % projects.length]);
                                    }
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Project Modal when card clicked in explored state */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
