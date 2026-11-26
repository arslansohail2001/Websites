export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function slugToCategory(slug: string): string {
  const map: Record<string, string> = {
    all: "All",
    "new-arrival": "New Arrival",
    royal: "Royal",
    acrylic: "Acrylic",
    digital: "Digital",
    floral: "Floral",
    "box-invitation": "Box Invitation",
    "favor-box": "Favor Box",
    "announcement-box": "Announcement Box",
    "card-box": "Card Box",
    "rigid-box": "Rigid Box",
    packaging: "Packaging",
  };
  if (map[slug]) return map[slug];
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
