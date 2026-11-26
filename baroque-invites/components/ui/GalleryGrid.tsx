"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/lib/placeholder-data";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  compact?: boolean;
}

export default function GalleryGrid({ images, onImageClick, compact = false }: GalleryGridProps) {
  const gridClasses = compact
    ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-3.5"
    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 md:gap-4";

  return (
    <div className={gridClasses}>
      {images.map((img, i) => (
        <motion.div
          key={img._id || `img-${i}`}
          className="relative aspect-square overflow-hidden cursor-pointer group rounded-lg ring-1 ring-black/5 hover:ring-[#C9A84C] transition-all duration-300 shadow-sm bg-gray-50"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
          onClick={() => onImageClick(i)}
        >
          <Image
            src={img.imageUrl || "https://picsum.photos/seed/baroque/800/800"}
            alt={img.altText || img.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="text-white w-6 h-6 drop-shadow" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

