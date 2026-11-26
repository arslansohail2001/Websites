"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GlassFolder, { FolderFile, FolderArt } from "./glass-folder-cards";
import EnvelopeCard from "./EnvelopeCard";
import BoxCard from "./BoxCard";
import { categoryToSlug } from "@/lib/slug-utils";

export interface CategoryFolderData {
  category: string;
  label: string;
  meta: string;
  art?: FolderArt;
  image?: string;
  tone: "light" | "dark";
  seed: number;
  files: FolderFile[];
}

export const INVITE_CATEGORY_FOLDERS: CategoryFolderData[] = [
  {
    category: "All",
    label: "All Invites",
    meta: "100+ Designs",
    image: "/assets/ethnic-bg/mughal-palace.svg",
    art: "none",
    tone: "dark",
    seed: 7,
    files: [
      { name: "Royal Gold Foil", meta: "Hot Stamped", image: "/assets/invites/sh-3.jpg" },
      { name: "Suede Keepsake", meta: "Velvet Touch", image: "/assets/invites/tri-1.jpg" },
      { name: "Acrylic Suite", meta: "Crystal Panel", image: "/assets/invites/40.jpg" },
      { name: "Floral Wreath", meta: "Hand Painted", image: "/assets/invites/1.jpg" },
    ],
  },
  {
    category: "New Arrival",
    label: "New Arrival",
    meta: "2026 Bridal Edit",
    image: "/assets/invites/new-arrival-suite.jpg",
    art: "none",
    tone: "dark",
    seed: 12,
    files: [
      { name: "Scalloped Cartouche", meta: "Gold Leaf", image: "/assets/invites/new-arrival-cartouche.jpg" },
      { name: "Letterpress Ivory", meta: "Floral Border", image: "/assets/invites/new-arrival-ivory.jpg" },
      { name: "Vintage Botanical Suite", meta: "Deckled Edge", image: "/assets/invites/new-arrival-suite.jpg" },
      { name: "Peony Arch Liner", meta: "Foil Accents", image: "/assets/invites/new-arrival-floral.jpg" },
    ],
  },
  {
    category: "Royal",
    label: "Royal Foil",
    meta: "Gold Leaf & Velvet",
    image: "/assets/ethnic-bg/rajasthani-sunset.svg",
    art: "none",
    tone: "dark",
    seed: 25,
    files: [
      { name: "Grand Gold Seal", meta: "Hot Stamped", image: "/assets/invites/sh-3.jpg" },
      { name: "Imperial Navy", meta: "Gold Trim", image: "/assets/invites/b11.jpg" },
      { name: "Majestic Crest", meta: "Monogrammed", image: "/assets/invites/more-3.jpg" },
      { name: "Midnight Gold", meta: "Foil Edge", image: "/assets/invites/editdd.jpg" },
    ],
  },
  {
    category: "Acrylic",
    label: "Crystal Acrylic",
    meta: "Nikkah Glass & Gold",
    image: "/assets/invites/acrylic-box-ref.jpg",
    art: "none",
    tone: "light",
    seed: 33,
    files: [
      { name: "Clear Glass Panel", meta: "UV Metallic", image: "/assets/invites/40.jpg" },
      { name: "Frosted Rose Gold", meta: "Beveled Edge", image: "/assets/invites/44.jpg" },
      { name: "Mirror Gold Border", meta: "Acrylic", image: "/assets/invites/46.jpg" },
      { name: "Arch Acrylic", meta: "Custom Shape", image: "/assets/invites/1-5.jpg" },
    ],
  },
  {
    category: "Digital",
    label: "Digital Print",
    meta: "Contemporary Desi",
    image: "/assets/ethnic-bg/heritage-fort.svg",
    art: "none",
    tone: "light",
    seed: 42,
    files: [
      { name: "Minimalist Botanical", meta: "Cotton Paper", image: "/assets/invites/p-1.jpg" },
      { name: "Vintage Monogram", meta: "Letterpress", image: "/assets/invites/b2.jpg" },
      { name: "Contemporary Rose", meta: "Matte Print", image: "/assets/invites/MR-2.jpg" },
      { name: "Bespoke Script", meta: "Deckled Edge", image: "/assets/invites/bb1.jpg" },
    ],
  },
  {
    category: "Floral",
    label: "Floral Suites",
    meta: "Gul & Botanics",
    image: "/assets/ethnic-bg/kashmir-floral.svg",
    art: "none",
    tone: "light",
    seed: 58,
    files: [
      { name: "Garden Elegance", meta: "Gold Border", image: "/assets/invites/1.jpg" },
      { name: "Wildflower Foil", meta: "Watercolor", image: "/assets/invites/FLAP-2.jpg" },
      { name: "Pastel Blossom", meta: "Laser Cut", image: "/assets/invites/butter-1.jpg" },
      { name: "Royal Bird & Floral", meta: "Embossed", image: "/assets/invites/BIRD-1.jpg" },
    ],
  },
  {
    category: "Box Invitation",
    label: "Royal Box Suites",
    meta: "Cushioned Velvet",
    image: "/assets/ethnic-bg/valima-night.svg",
    art: "none",
    tone: "dark",
    seed: 69,
    files: [
      { name: "Velvet Rigid Box", meta: "Ribbon Pull", image: "/assets/boxes/1.jpg" },
      { name: "Gold Foil Keepsake", meta: "Padded Lid", image: "/assets/boxes/1-1.jpg" },
      { name: "Royal Announcement", meta: "Compartment", image: "/assets/boxes/10.jpg" },
      { name: "Magnetic Card Box", meta: "Luxury Finish", image: "/assets/boxes/11.jpg" },
    ],
  },
];

export const BOXES_CATEGORY_FOLDERS: CategoryFolderData[] = [
  {
    category: "All",
    label: "All Box Sets",
    meta: "36+ Designs",
    image: "/assets/ethnic-bg/valima-night.svg",
    art: "none",
    tone: "dark",
    seed: 14,
    files: [
      { name: "Velvet Favor Box", meta: "Gold Monogram", image: "/assets/boxes/1.jpg" },
      { name: "Announcement Keepsake", meta: "Padded Interior", image: "/assets/boxes/10.jpg" },
      { name: "Rigid Gift Box", meta: "Magnetic Close", image: "/assets/boxes/1-1.jpg" },
      { name: "Monogram Card Box", meta: "Hot Foil", image: "/assets/boxes/2-1.jpg" },
    ],
  },
  {
    category: "Favor Box",
    label: "Favor Boxes",
    meta: "Satin & Velvet",
    image: "/assets/ethnic-bg/pichwai-garden.svg",
    art: "none",
    tone: "light",
    seed: 22,
    files: [
      { name: "Petite Velvet Favor", meta: "Silk Ribbon", image: "/assets/boxes/1.jpg" },
      { name: "Gold Leaf Favor", meta: "Embossed", image: "/assets/boxes/1-2.jpg" },
      { name: "Pearl Favor Case", meta: "Compartment", image: "/assets/boxes/1-3.jpg" },
    ],
  },
  {
    category: "Announcement Box",
    label: "Announcement",
    meta: "Grand Suites",
    image: "/assets/ethnic-bg/mughal-palace.svg",
    art: "none",
    tone: "dark",
    seed: 35,
    files: [
      { name: "Royal Wedding Box", meta: "Brooch Clasp", image: "/assets/boxes/10.jpg" },
      { name: "Grand Luxe Keepsake", meta: "Velvet Base", image: "/assets/boxes/11.jpg" },
      { name: "Imperial Reveal Box", meta: "Gold Foil", image: "/assets/boxes/12a.jpg" },
    ],
  },
  {
    category: "Card Box",
    label: "Card Boxes",
    meta: "Foiled & Monogram",
    image: "/assets/ethnic-bg/kashmir-floral.svg",
    art: "none",
    tone: "light",
    seed: 48,
    files: [
      { name: "Monogram Card Set", meta: "Wax Seal", image: "/assets/boxes/2-1.jpg" },
      { name: "Textured Linen Box", meta: "Gold Inlay", image: "/assets/boxes/2-3.jpg" },
      { name: "Bespoke Invitation Box", meta: "Foil Edge", image: "/assets/boxes/3-1.jpg" },
    ],
  },
  {
    category: "Rigid Box",
    label: "Rigid Boxes",
    meta: "Sturdy & Premium",
    image: "/assets/ethnic-bg/marble-pavilion.svg",
    art: "none",
    tone: "light",
    seed: 57,
    files: [
      { name: "Magnetic Hard Box", meta: "Matte Finish", image: "/assets/boxes/1-1.jpg" },
      { name: "Heavyweight Gift Case", meta: "Die Cut Foam", image: "/assets/boxes/4-1.jpg" },
      { name: "Prestige Box Suite", meta: "Double Flap", image: "/assets/boxes/5.jpg" },
    ],
  },
  {
    category: "Packaging",
    label: "Packaging",
    meta: "Bespoke Solutions",
    image: "/assets/ethnic-bg/rajasthani-sunset.svg",
    art: "none",
    tone: "light",
    seed: 64,
    files: [
      { name: "Luxe Gifting Wrap", meta: "Custom Crest", image: "/assets/boxes/10.jpg" },
      { name: "Ornate Carry Set", meta: "Matching Bag", image: "/assets/boxes/11.jpg" },
      { name: "Presentation Suite", meta: "Gold Foil", image: "/assets/boxes/1.jpg" },
    ],
  },
];

interface CategoryFoldersProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onFileSelect?: (file: FolderFile) => void;
  folders?: CategoryFolderData[];
  type?: "invites" | "boxes";
}

export default function CategoryFolders({
  activeCategory,
  onSelectCategory,
  onFileSelect,
  folders = INVITE_CATEGORY_FOLDERS,
  type = "invites",
}: CategoryFoldersProps) {
  const router = useRouter();
  const cardWidth = 260;

  return (
    <div className="relative w-full my-8">
      {/* Category header */}
      <div className="flex items-center justify-center mb-6 px-1">
        <span className="text-xs uppercase tracking-widest text-[#6B6B6B] font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
          Explore Collections
        </span>
      </div>

      {/* 4 categories per row with left-aligned second row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1140px] mx-auto pb-8 pt-2 px-2 justify-items-center">
        {folders.map((item, idx) => {
          const isActive = activeCategory === item.category;
          const slug = categoryToSlug(item.category);
          return (
            <div
              key={item.category}
              className={`transition-all duration-300 p-1 cursor-pointer flex flex-col items-center ${
                isActive ? "opacity-100" : "opacity-85 hover:opacity-100"
              }`}
              onClick={() => {
                onSelectCategory(item.category);
                router.push(`/portfolio/${slug}?type=${type}`);
              }}
            >
              {item.category.toLowerCase() === "royal" && type === "invites" ? (
                <EnvelopeCard
                  label="Royal Foil"
                  meta={item.meta}
                  width={cardWidth}
                  open={isActive}
                  files={item.files}
                  variant="royal"
                />
              ) : item.category.toLowerCase() === "new arrival" && type === "invites" ? (
                <EnvelopeCard
                  label="New Arrival"
                  meta={item.meta}
                  width={cardWidth}
                  open={isActive}
                  files={item.files}
                  variant="floral"
                />
              ) : item.category.toLowerCase() === "acrylic" && type === "invites" ? (
                <BoxCard
                  label="Crystal Acrylic"
                  meta={item.meta}
                  width={cardWidth}
                  open={isActive}
                  files={item.files}
                />
              ) : (
                <GlassFolder
                  label={item.label}
                  meta={item.meta}
                  art={item.art}
                  image={item.image}
                  tone={item.tone}
                  seed={item.seed}
                  files={item.files}
                  open={isActive}
                  onOpenChange={(open) => {
                    if (open) onSelectCategory(item.category);
                  }}
                  onFileSelect={(file) => {
                    onSelectCategory(item.category);
                    onFileSelect?.(file);
                  }}
                  width={cardWidth}
                  appearDelay={idx * 60}
                />
              )}
              <div className="text-center mt-3 flex flex-col items-center">
                <span
                  className={`text-xs tracking-wider uppercase transition-colors ${
                    isActive ? "text-[#C9A84C] font-semibold" : "text-[#1A1A1A]/70 hover:text-[#C9A84C]"
                  }`}
                >
                  {item.category === "All" ? "View All" : item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
