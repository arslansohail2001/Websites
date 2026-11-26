export const INVITES_GALLERY_QUERY = `*[_type == "galleryImage" && galleryType == "invites"] | order(order asc) {
  _id,
  title,
  category,
  galleryType,
  "imageUrl": image.asset->url,
  "altText": coalesce(altText, title),
  order,
  featured
}`;

export const BOXES_GALLERY_QUERY = `*[_type == "galleryImage" && galleryType == "boxes"] | order(order asc) {
  _id,
  title,
  category,
  galleryType,
  "imageUrl": image.asset->url,
  "altText": coalesce(altText, title),
  order,
  featured
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  heroSlides[] {
    "slideImageUrl": slideImage.asset->url,
    eyebrow,
    heading,
    subtext
  },
  phone,
  email,
  whatsappNumber,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  statsCustomers,
  statsYears,
  statsDesigns
}`;

