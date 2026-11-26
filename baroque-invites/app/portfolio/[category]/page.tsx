import PortfolioClient from "./PortfolioClient";
import { placeholderInvites, placeholderBoxes } from "@/lib/placeholder-data";
import { slugToCategory } from "@/lib/slug-utils";

export const instant = false;

interface PageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ type?: string }>;
}

export default async function PortfolioCategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { category: slug } = await params;
  const { type: rawType } = await searchParams;
  const type: "invites" | "boxes" = rawType === "boxes" ? "boxes" : "invites";
  const categoryName = slugToCategory(slug);

  const allDataSource = type === "boxes" ? placeholderBoxes : placeholderInvites;
  const filtered = allDataSource.filter(
    (item) => categoryName.toLowerCase() === "all" || item.category.toLowerCase() === categoryName.toLowerCase()
  );

  const images = filtered.length > 0 ? filtered : allDataSource;

  // Build 24-32 cards for Three.js 3D Arch
  const archCards = images.map((i) => i.imageUrl).filter(Boolean);
  while (archCards.length < 24) {
    for (const item of allDataSource) {
      if (archCards.length >= 24) break;
      archCards.push(item.imageUrl);
    }
  }

  return (
    <PortfolioClient
      category={categoryName}
      type={type}
      images={images}
      archCards={archCards.slice(0, 32)}
    />
  );
}
