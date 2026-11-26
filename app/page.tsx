import HeroSlider from "@/components/sections/HeroSlider";
import InvitesGallery from "@/components/sections/InvitesGallery";
import BoxesGallery from "@/components/sections/BoxesGallery";
import StatsCounter from "@/components/sections/StatsCounter";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import { sanityClient } from "@/lib/sanity";
import { INVITES_GALLERY_QUERY, BOXES_GALLERY_QUERY } from "@/lib/sanity.queries";
import { placeholderInvites, placeholderBoxes } from "@/lib/placeholder-data";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  caption?: string;
}

const REAL_INSTAGRAM_POSTS: InstagramPost[] = [
  { id: "ig1", media_url: "/assets/instagram/683739216_1946752475947739_4811470433772811330_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Bespoke Royal Foil Invitation Suite" },
  { id: "ig2", media_url: "/assets/instagram/688064582_1308583894669725_945583696383788629_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Velvet Keepsake Box Set" },
  { id: "ig3", media_url: "/assets/instagram/689009807_1944996959555362_8798830136824392572_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Crystal Acrylic Panel" },
  { id: "ig4", media_url: "/assets/instagram/689822612_2064506627743476_9062266325579365413_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Floral Deckled Edge Stationery" },
  { id: "ig5", media_url: "/assets/instagram/694926608_1317156903891958_2772438264616054960_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Monogram Foil Stamped Detail" },
  { id: "ig6", media_url: "/assets/instagram/704726300_2198865237534517_2201281912780314222_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Emerald Green & Gold Velvet Folder" },
  { id: "ig7", media_url: "/assets/instagram/706155143_18123883195732578_2644518015725097565_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Intricate Laser Cut Details" },
  { id: "ig8", media_url: "/assets/instagram/706711544_18123883897732578_4244866470229569320_n.jpg", permalink: "https://instagram.com/baroqueinvite", media_type: "IMAGE", caption: "Luxury Wedding Announcement Keepsake" },
];

async function getInstagramPosts(): Promise<InstagramPost[]> {
  "use cache";
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return REAL_INSTAGRAM_POSTS;
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,media_type,caption&limit=8&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return REAL_INSTAGRAM_POSTS;
    const data = await res.json();
    return data.data && data.data.length > 0 ? data.data : REAL_INSTAGRAM_POSTS;
  } catch {
    return REAL_INSTAGRAM_POSTS;
  }
}

async function getSanityGallery(query: string) {
  "use cache";
  try {
    return await sanityClient.fetch(query);
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const [invitesSanity, boxesSanity, instagramPosts] = await Promise.all([
    getSanityGallery(INVITES_GALLERY_QUERY),
    getSanityGallery(BOXES_GALLERY_QUERY),
    getInstagramPosts(),
  ]);

  const invitesImages = invitesSanity || placeholderInvites;
  const boxesImages = boxesSanity || placeholderBoxes;

  return (
    <>
      <HeroSlider />
      <InvitesGallery images={invitesImages} />
      <BoxesGallery images={boxesImages} />
      <StatsCounter />
      <AboutSection />
      <ContactSection />
      <InstagramFeed posts={instagramPosts} />
    </>
  );
}
