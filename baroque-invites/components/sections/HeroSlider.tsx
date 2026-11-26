"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const SLIDES = [
  {
    eyebrow: "Luxury Wedding Stationery",
    heading: "Timeless Wedding\nInvitations",
    subtext: "Digital Printed · Acrylic · Suede · Luxe Boxed",
    cta: "Explore Our Work",
    href: "#invites",
    bg: "/assets/hero/Burgundy%20Wedding%20Stationery%20Flat%20Lay.png",
  },
  {
    eyebrow: "Bespoke Creations",
    heading: "Handcrafted for\nYour Love Story",
    subtext: "Foil Stamped · Custom Monograms · Premium Finishes",
    cta: "View Invite Designs",
    href: "#invites",
    bg: "/assets/hero/2-4.jpg",
  },
  {
    eyebrow: "Keepsake Packaging",
    heading: "Favor & Custom\nBoxed Sets",
    subtext: "Announcement · Rigid · Packaging · Card Boxes",
    cta: "Discover Our Boxes",
    href: "#boxes",
    bg: "/assets/boxes/10.jpg",
  },
  {
    eyebrow: "Pakistan & UK",
    heading: "Elegance Delivered\nTo Your Door",
    subtext: "4–5 Days Delivery · Sample Testing · 4700+ Happy Couples",
    cta: "Get in Touch",
    href: "#contact",
    bg: "/assets/invites/tri-1.jpg",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section id="top" className="relative h-screen overflow-hidden">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {SLIDES.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${slide.bg}")` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-20 md:pb-28">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="section-eyebrow block mb-4">{slide.eyebrow}</span>
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight whitespace-pre-line mb-4">
                    {slide.heading}
                  </h1>
                  <p className="text-white/80 font-light text-base md:text-lg mb-8 max-w-lg">
                    {slide.subtext}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 px-8 py-3 rounded-full text-sm font-medium tracking-wide"
                  >
                    {slide.cta}
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${i === activeIndex
                ? "bg-[#C9A84C] w-6 h-2"
                : "bg-white/40 w-2 h-2 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

