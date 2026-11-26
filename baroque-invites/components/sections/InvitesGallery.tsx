"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryFolders, { INVITE_CATEGORY_FOLDERS } from "@/components/ui/CategoryFolders";
import CardCraftingVideo from "@/components/sections/CardCraftingVideo";
import type { GalleryImage } from "@/lib/placeholder-data";

interface InvitesGalleryProps {
  images?: GalleryImage[];
}

export default function InvitesGallery({ images = [] }: InvitesGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="invites" className="bg-white py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="SEE WHAT WE OFFER"
          heading="Wedding Invites"
          align="center"
          className="mb-6"
        />

        {/* Interactive Glass Folder Categories */}
        <CategoryFolders
          type="invites"
          activeCategory={activeFilter}
          onSelectCategory={(cat) => {
            setActiveFilter(cat);
          }}
          folders={INVITE_CATEGORY_FOLDERS}
        />

        {/* Video Showing the Making of Cards */}
        <CardCraftingVideo />
      </div>
    </section>
  );
}
