"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "@/components/ui/Icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Invites", href: "#invites" },
  { label: "Boxes", href: "#boxes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["top", "invites", "boxes", "about", "contact"];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-[220px] bg-white border-r border-[#C9A84C]/10 flex-col z-50">
      {/* Logo */}
      <div className="flex items-center justify-center py-8 px-4">
        <Link href="#top">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="29" stroke="#C9A84C" strokeWidth="1.5"/>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="28" fontWeight="600" fill="#C9A84C">B</text>
            <path d="M10 44 Q30 50 50 44" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
            <path d="M10 16 Q30 10 50 16" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
          </svg>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`group flex items-center py-2.5 pl-3 text-[0.8rem] uppercase tracking-widest font-medium transition-all duration-200 rounded-sm
                ${isActive
                  ? "text-[#C9A84C] border-l-[3px] border-[#C9A84C] pl-[calc(0.75rem_-_3px)]"
                  : "text-[#1A1A1A] border-l-[3px] border-transparent hover:text-[#C9A84C] hover:border-[#C9A84C]"
                }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-6 pb-8 flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
            aria-label="TikTok"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.14 8.14 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
            </svg>
          </a>
        </div>
        <p className="text-[10px] text-[#6B6B6B] font-light">© 2025 Baroque Invites</p>
      </div>
    </aside>
  );
}

