"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Facebook, Instagram } from "@/components/ui/Icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Invites", href: "#invites" },
  { label: "Boxes", href: "#boxes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Sticky header */}
      <header className="flex md:hidden sticky top-0 z-50 bg-white border-b border-[#C9A84C]/20 items-center justify-between px-5 py-3">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 w-7 h-7 items-start justify-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-7 bg-[#1A1A1A] origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="block h-0.5 w-5 bg-[#1A1A1A]"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-7 bg-[#1A1A1A] origin-center"
          />
        </button>

        {/* Logo center */}
        <a href="#top">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="29" stroke="#C9A84C" strokeWidth="1.5"/>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="28" fontWeight="600" fill="#C9A84C">B</text>
          </svg>
        </a>

        {/* WhatsApp icon */}
        <a
          href="https://wa.me/923177474736?text=Hello%2C%20I%20am%20interested%20in%20your%20wedding%20invitations"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366]"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F0F0F]/95 flex flex-col md:hidden"
            style={{ top: "57px" }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="text-white font-serif text-4xl font-medium hover:text-[#C9A84C] transition-colors py-2 tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex gap-6 items-center justify-center pb-12">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A84C] transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A84C] transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#C9A84C] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.14 8.14 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

