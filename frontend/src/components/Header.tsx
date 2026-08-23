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
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl z-50">
      <div className={`transition-all duration-300 rounded-full px-6 py-3 flex justify-between items-center ${
        isSolidMode 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg border border-black/10 dark:border-white/10" 
          : "bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
      }`}>
        <Link href="/" className="flex items-center gap-xs">
          <span className={`material-symbols-outlined transition-colors ${isSolidMode ? "text-primary" : "text-white"}`}>grid_view</span>
          <span className={`font-h4 text-h4 font-extrabold tracking-tighter transition-colors ${isSolidMode ? "text-on-surface" : "text-white"}`}>FILL</span>
        </Link>
        <nav className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-small text-small transition-colors ${
                  isActive
                    ? (isSolidMode ? "text-primary border-b-2 border-primary" : "text-white border-b-2 border-white")
                    : (isSolidMode ? "text-on-surface-variant hover:text-on-surface" : "text-white/70 hover:text-white")
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
