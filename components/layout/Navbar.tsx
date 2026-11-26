"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Invites", href: "/#invites" },
  { label: "Boxes", href: "/#boxes" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const SECTION_IDS = ["top", "invites", "boxes", "about", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      if (window.scrollY < 120) {
        setActiveSection("top");
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2, rootMargin: "-15% 0px -35% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const sectionId = href.replace(/^.*?#/, "");
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <header className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl z-50 transition-all duration-300">
      {/* Light Luxury Capsule Container */}
      <nav
        className={`relative flex items-center justify-between md:justify-start px-5 md:px-7 py-2 md:py-2.5 rounded-full transition-all duration-300 border ${
          isScrolled
            ? "bg-white/65 backdrop-blur-xl border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : "bg-white/35 backdrop-blur-md border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Left: Brand / Logo */}
        <Link
          href="/#top"
          onClick={(e) => handleClick(e, "/#top")}
          className="flex items-center group shrink-0 py-0.5"
        >
          <Image
            src="/logo/sidebar_header.png"
            alt="Baroque Invites"
            width={150}
            height={80}
            priority
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-7 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace(/^.*?#/, "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative py-1 px-0.5 cursor-pointer flex flex-col items-center"
              >
                <span
                  className={`text-sm md:text-[14px] tracking-wide transition-colors ${
                    isActive
                      ? "text-black font-bold"
                      : "text-black/80 font-medium hover:text-black"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full bg-black/5 text-[#1A1A1A] p-1.5 border border-black/10 hover:bg-black/10 transition-colors"
          aria-label="Toggle navigation"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-4 h-0.5 bg-[#1A1A1A] block rounded-full"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-4 h-0.5 bg-[#1A1A1A] block rounded-full my-0.5"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-4 h-0.5 bg-[#1A1A1A] block rounded-full"
          />
        </button>
      </nav>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-3 rounded-3xl bg-white/80 backdrop-blur-2xl border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.1)] flex flex-col gap-1.5"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace(/^.*?#/, "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleClick(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-black/[0.06] text-black font-bold"
                      : "text-black/80 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-5 h-[2px] bg-black rounded-full" />
                  )}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
