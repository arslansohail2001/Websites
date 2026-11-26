"use client";

import { useState } from "react";
import Image from "next/image";
import { Video } from "lucide-react";
import { Instagram } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import InstagramReelModal, { InstagramPost } from "@/components/ui/InstagramReelModal";

interface InstagramFeedProps {
  posts: InstagramPost[];
}

export default function InstagramFeed({ posts }: InstagramFeedProps) {
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null);

  const hasPosts = posts.length > 0;
  const displayCount = 8;
  const displayPosts: InstagramPost[] = hasPosts
    ? posts.slice(0, displayCount)
    : [
        {
          id: "ig1",
          media_url: "/assets/instagram/683739216_1946752475947739_4811470433772811330_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Bespoke Royal Foil Invitation Suite",
          timestamp: "2 days ago",
        },
        {
          id: "ig2",
          media_url: "/assets/instagram/688064582_1308583894669725_945583696383788629_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Velvet Keepsake Box Set",
          timestamp: "7 months ago",
        },
        {
          id: "ig3",
          media_url: "/assets/instagram/689009807_1944996959555362_8798830136824392572_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Crystal Acrylic Panel",
          timestamp: "1 week ago",
        },
        {
          id: "ig4",
          media_url: "/assets/instagram/689822612_2064506627743476_9062266325579365413_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "IMAGE",
          caption: "Glimpse of the wedding chapter 25-26",
          timestamp: "3 weeks ago",
        },
        {
          id: "ig5",
          media_url: "/assets/instagram/694926608_1317156903891958_2772438264616054960_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Wax Seal Ribbon Accent",
          timestamp: "1 month ago",
        },
        {
          id: "ig6",
          media_url: "/assets/instagram/704726300_2198865237534517_2201281912780314222_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Emerald Green & Gold Velvet Folder",
          timestamp: "2 months ago",
        },
        {
          id: "ig7",
          media_url: "/assets/instagram/706155143_18123883195732578_2644518015725097565_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Intricate Laser Cut Details",
          timestamp: "4 months ago",
        },
        {
          id: "ig8",
          media_url: "/assets/instagram/706711544_18123883897732578_4244866470229569320_n.jpg",
          permalink: "https://instagram.com/baroqueinvite",
          media_type: "VIDEO",
          caption: "Luxury Wedding Announcement Keepsake",
          timestamp: "5 months ago",
        },
      ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="FOLLOW US"
          heading="@BaroqueInvite"
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {displayPosts.map((post, i) => (
            <div
              key={post.id || i}
              onClick={() => setSelectedReelIndex(i)}
              className="relative aspect-square overflow-hidden group bg-[#FAF7F2] rounded-sm block cursor-pointer"
            >
              <Image
                src={post.media_url}
                alt={post.caption?.slice(0, 60) || "Instagram reel"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Reel badge */}
              {post.media_type === "VIDEO" && (
                <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1 z-10">
                  <Video className="w-3.5 h-3.5 text-white" />
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <Instagram className="text-white w-7 h-7" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="https://instagram.com/baroqueinvite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#C9A84C] transition-colors font-medium text-sm border border-[#C9A84C]/30 hover:border-[#C9A84C] px-6 py-2.5 rounded-full"
          >
            Follow us @BaroqueInvite ↗
          </a>
        </div>
      </div>

      {/* Reel Modal Popup View */}
      {selectedReelIndex !== null && (
        <InstagramReelModal
          posts={displayPosts}
          currentIndex={selectedReelIndex}
          onClose={() => setSelectedReelIndex(null)}
          onNavigate={(nextIdx) => setSelectedReelIndex(nextIdx)}
        />
      )}
    </section>
  );
}
