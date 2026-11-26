"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryFolders, { BOXES_CATEGORY_FOLDERS } from "@/components/ui/CategoryFolders";
import type { GalleryImage } from "@/lib/placeholder-data";

interface BoxesGalleryProps {
  images?: GalleryImage[];
}

export interface CarouselCategoryItem {
  category: string;
  label: string;
  type: "invites" | "boxes";
  slug: string;
  tag: string;
  imageUrl: string;
}

const ALL_COLLECTIONS: CarouselCategoryItem[] = [
  // Wedding Invites Categories
  {
    category: "New Arrival",
    label: "New Arrival Invites",
    type: "invites",
    slug: "new-arrival",
    tag: "2026 Bridal",
    imageUrl: "/assets/invites/sh-3.jpg",
  },
  {
    category: "Royal",
    label: "Royal Foil Invites",
    type: "invites",
    slug: "royal",
    tag: "Gold Leaf",
    imageUrl: "/assets/invites/tri-1.jpg",
  },
  {
    category: "Acrylic",
    label: "Crystal Acrylic",
    type: "invites",
    slug: "acrylic",
    tag: "Glass & Gold",
    imageUrl: "/assets/invites/asasas.jpg",
  },
  {
    category: "Digital",
    label: "Digital Printed",
    type: "invites",
    slug: "digital",
    tag: "Minimal Luxe",
    imageUrl: "/assets/invites/editdd.jpg",
  },
  {
    category: "Floral",
    label: "Floral Suites",
    type: "invites",
    slug: "floral",
    tag: "Botanical",
    imageUrl: "/assets/invites/butter-1.jpg",
  },
  // Keepsake Boxes Categories
  {
    category: "Favor Box",
    label: "Favor Boxes",
    type: "boxes",
    slug: "favor-box",
    tag: "Satin & Velvet",
    imageUrl: "/assets/boxes/s1.jpg",
  },
  {
    category: "Announcement Box",
    label: "Announcement Boxes",
    type: "boxes",
    slug: "announcement-box",
    tag: "Grand Reveal",
    imageUrl: "/assets/boxes/1.jpg",
  },
  {
    category: "Card Box",
    label: "Card Boxes",
    type: "boxes",
    slug: "card-box",
    tag: "Monogram Crest",
    imageUrl: "/assets/boxes/s-g-2.jpg",
  },
  {
    category: "Rigid Box",
    label: "Rigid Boxes",
    type: "boxes",
    slug: "rigid-box",
    tag: "Magnetic Hard",
    imageUrl: "/assets/boxes/1-3.jpg",
  },
  {
    category: "Packaging",
    label: "Packaging Suites",
    type: "boxes",
    slug: "packaging",
    tag: "Custom Wrap",
    imageUrl: "/assets/boxes/8.jpg",
  },
];

export default function BoxesGallery({ images = [] }: BoxesGalleryProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for continuous seamless loop
  const carouselItems = [...ALL_COLLECTIONS, ...ALL_COLLECTIONS];

  return (
    <section id="boxes" className="bg-[#FAF7F2] py-24 px-4 sm:px-6 md:px-8 border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="KEEPSAKE PACKAGING"
          heading="Favor | Custom Boxes"
          align="center"
          className="mb-6"
        />

        {/* Interactive Glass Folder Categories */}
        <CategoryFolders
          type="boxes"
          activeCategory="All"
          onSelectCategory={() => {}}
          folders={BOXES_CATEGORY_FOLDERS}
        />
      </div>

      {/* Infinite Moving Carousel of Invites & Boxes Categories */}
      <div className="mt-14 w-full">
        <div className="max-w-6xl mx-auto px-1 mb-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            Curated Category Highlights · Click to Explore
          </span>
          <span className="text-[11px] text-[#6B6B6B] hidden sm:inline">
            Hover to pause · Click any suite to explore
          </span>
        </div>

        {/* Carousel Container with Edge Vignettes */}
        <div
          className="relative w-full overflow-hidden py-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left & Right Soft Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

          {/* Smooth Continuous Moving Track */}
          <motion.div
            className="flex gap-5 w-max"
            animate={isPaused ? {} : { x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {carouselItems.map((item, index) => (
              <div key={`${item.category}-${index}`} className="w-44 sm:w-52 shrink-0">
                <Link
                  href={`/portfolio/${item.slug}?type=${item.type}`}
                  className="group block cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5 group-hover:ring-[#C9A84C] transition-all duration-300 shadow-sm bg-white">
                    <Image
                      src={item.imageUrl}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 176px, 208px"
                    />

                    {/* Subtle Tag Overlay */}
                    <div className="absolute top-2 left-2">
                      <span className="text-[9px] uppercase tracking-wider font-sans font-medium px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[#1A1A1A] shadow-sm border border-black/5">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <span className="block mt-2 text-center text-xs sm:text-sm font-serif font-medium text-[#1A1A1A] group-hover:text-[#C9A84C] transition-colors truncate">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
