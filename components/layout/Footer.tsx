import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Facebook, Instagram } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <Link href="#top" className="inline-block transition-transform hover:scale-105">
          <Image
            src="/logo/footer.png"
            alt="Baroque Invites"
            width={180}
            height={100}
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Tagline */}
        <p className="font-serif italic text-white text-xl">Crafting Timeless Stories</p>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-[#6B6B6B] font-light text-sm">
          <a href="tel:+923177474736" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
            <Phone size={14} />
            <span>+92 317 7474 736</span>
          </a>
          <span className="hidden sm:block text-[#6B6B6B]/40">·</span>
          <a href="mailto:hello@baroqueinvites.com" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
            <Mail size={14} />
            <span>hello@baroqueinvites.com</span>
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-5 items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A84C] transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A84C] transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A84C] transition-colors" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.14 8.14 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-sm h-px bg-[#C9A84C]/20 my-2" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-[#6B6B6B]/60 text-xs font-light">
          <span>© 2025 Baroque Invites. All rights reserved.</span>
          <Link href="/privacy-policy" className="hover:text-[#C9A84C] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

