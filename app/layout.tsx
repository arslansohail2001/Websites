import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baroque Invites | Luxury Wedding Stationery",
  description:
    "Bespoke luxury wedding invitations crafted with foil printing, suede finishes, acrylic panels, and ornate boxing — serving couples across Pakistan and the United Kingdom.",
  keywords: [
    "luxury wedding invitations",
    "bespoke wedding stationery",
    "foil printing Pakistan",
    "acrylic invitations",
    "suede wedding cards",
    "Baroque Invites",
  ],
  openGraph: {
    title: "Baroque Invites | Luxury Wedding Stationery",
    description:
      "Timeless, bespoke wedding invitations crafted in Pakistan. Foil prints, suede, acrylic, and keepsake boxed sets.",
    url: "https://baroqueinvites.com",
    siteName: "Baroque Invites",
    images: [
      {
        url: "https://baroqueinvites.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Baroque Invites – Luxury Wedding Stationery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baroque Invites | Luxury Wedding Stationery",
    description: "Bespoke luxury wedding invitations from Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white text-[#1A1A1A] antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
