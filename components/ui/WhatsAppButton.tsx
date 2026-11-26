"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function FloatingSocialActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const socials = [
    {
      id: "facebook",
      label: "Facebook",
      tooltip: "Follow on Facebook",
      href: "https://facebook.com/baroqueinvites",
      bg: "bg-[#1877F2]",
      shadowColor: "rgba(24,119,242,0.45)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      tooltip: "Follow on Instagram",
      href: "https://instagram.com/baroqueinvite",
      bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      shadowColor: "rgba(221,42,123,0.45)",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      tooltip: "Chat on WhatsApp",
      href: "https://wa.me/923177474736?text=Hello%2C%20I%20am%20interested%20in%20your%20wedding%20invitations",
      bg: "bg-[#25D366]",
      shadowColor: "rgba(37,211,102,0.45)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      ref={widgetRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center select-none"
      aria-label="Social channels folder widget"
    >
      {/* Popped-out Full Icons when Folder is Opened */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center gap-3 mb-3">
            {socials.map((item, idx) => {
              const isHovered = hoveredBtn === item.id;
              const popDistance = (socials.length - idx) * 18;
              return (
                <motion.div
                  key={item.id}
                  className="relative flex items-center justify-center"
                  initial={{
                    opacity: 0,
                    scale: 0.1,
                    y: popDistance + 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.1,
                    y: popDistance,
                    transition: { duration: 0.16 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 480,
                    damping: 24,
                    mass: 0.8,
                    delay: (socials.length - 1 - idx) * 0.05,
                  }}
                >
                  {/* Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, x: 8, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-full mr-3 bg-[#1A1A1A]/95 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap pointer-events-none backdrop-blur-md border border-white/10 hidden sm:inline-block z-10"
                      >
                        {item.tooltip}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Circular Full Action Icon */}
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.tooltip}
                    className={`${item.bg} w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer border border-white/30`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    onMouseEnter={() => setHoveredBtn(item.id)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    style={{
                      boxShadow: isHovered
                        ? `0 6px 20px ${item.shadowColor}`
                        : "0 4px 14px rgba(0,0,0,0.25)",
                    }}
                  >
                    {item.icon}
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* The Transparent App Folder Widget Button (Matching Reference Photo) */}
      <div className="flex flex-col items-center">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close social folder" : "Open social folder"}
          className={`relative w-[50px] h-[50px] rounded-full backdrop-blur-xl border shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer transition-all ${
            isOpen
              ? "bg-[#1A1A1A] text-white border-white/30"
              : "bg-white/25 hover:bg-white/40 border-white/50"
          }`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          {isOpen ? (
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="text-white" />
            </motion.div>
          ) : (
            /* 3 Mini App Icons placed neatly above the circle without clipping */
            <div className="flex flex-col items-center justify-center gap-1 w-full h-full relative z-10">
              {/* Top row: 2 mini icons */}
              <div className="flex items-center justify-center gap-1">
                {/* Mini Facebook */}
                <div className="w-[18px] h-[18px] rounded-full bg-[#1877F2] flex items-center justify-center shadow-md shrink-0 border border-white/20">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                {/* Mini Instagram */}
                <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-md shrink-0 border border-white/20">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  </svg>
                </div>
              </div>
              {/* Bottom row: Mini WhatsApp */}
              <div className="w-[18px] h-[18px] rounded-full bg-[#25D366] flex items-center justify-center shadow-md shrink-0 border border-white/20">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
              </div>
          )}
        </motion.button>

        {/* Text Label Below Folder (Matching "Video" in reference photo) */}
        <span className="text-[11px] font-semibold text-[#1A1A1A] drop-shadow-sm tracking-wide mt-1">
          Social
        </span>
      </div>
    </aside>
  );
}
