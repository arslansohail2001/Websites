"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolidMode = pathname !== "/" || isScrolled;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers", children: [
        { name: "Internships", href: "/careers/internships" }
    ]},
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl z-50">
      <div className={`transition-all duration-300 rounded-full px-6 py-3 flex justify-between items-center ${
        isSolidMode 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg border border-black/10 dark:border-white/10" 
          : "bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
      }`}>
        <Link href="/" className="flex items-center">
          <img src="/images/fill-logo-official.png" alt="Fill Logo" className={`h-8 md:h-10 w-auto object-contain transition-all ${isSolidMode ? "" : "brightness-0 invert"}`} />
        </Link>
        <nav className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.children && link.children.some(child => pathname === child.href));
            return link.children ? (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`font-small text-small transition-colors flex items-center gap-1 py-2 ${
                    isActive
                      ? (isSolidMode ? "text-primary border-b-2 border-primary" : "text-white border-b-2 border-white")
                      : (isSolidMode ? "text-on-surface-variant hover:text-on-surface border-b-2 border-transparent" : "text-white/70 hover:text-white border-b-2 border-transparent")
                  }`}
                >
                  {link.name}
                  <span className="material-symbols-outlined text-[16px] group-hover:rotate-180 transition-transform">expand_more</span>
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className={`flex flex-col min-w-[160px] rounded-xl overflow-hidden shadow-xl border ${isSolidMode ? "bg-white border-outline-variant/20" : "bg-black/90 backdrop-blur-md border-white/10"}`}>
                    {link.children.map(child => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`px-4 py-3 font-small text-small transition-colors ${isSolidMode ? "text-on-surface-variant hover:text-primary hover:bg-surface-variant" : "text-white/70 hover:text-white hover:bg-white/10"}`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`font-small text-small transition-colors py-2 ${
                  isActive
                    ? (isSolidMode ? "text-primary border-b-2 border-primary" : "text-white border-b-2 border-white")
                    : (isSolidMode ? "text-on-surface-variant hover:text-on-surface border-b-2 border-transparent" : "text-white/70 hover:text-white border-b-2 border-transparent")
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className={`px-6 py-2 rounded-full font-small text-small shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${
          isSolidMode
            ? "bg-brand-dark text-white hover:bg-brand-dark/90"
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}>
          LET'S TALK
        </Link>
      </div>
    </header>
  );
}
