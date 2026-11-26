"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="section-eyebrow block mb-3">{eyebrow}</span>
      )}
      {heading && (
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] font-medium leading-tight">
          {heading}
        </h2>
      )}
    </motion.div>
  );
}

