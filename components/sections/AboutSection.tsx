"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Paintbrush, FlaskConical, Truck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: Paintbrush,
    image: "/assets/about/Designers.png",
    title: "Creative Designs",
    desc: "Fully custom — no two invitations are alike.",
  },
  {
    icon: FlaskConical,
    image: "/assets/about/sample.png",
    title: "Sample Testing",
    desc: "Approve a physical sample before bulk production.",
  },
  {
    icon: Truck,
    image: "/assets/about/Delivery.png",
    title: "4–5 Days Delivery",
    desc: "Fast nationwide delivery, carefully packed.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FAF7F2] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Left: 60% */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow block mb-4">WHO WE ARE</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] font-medium leading-tight mb-6">
            At Baroque Invites, we believe every wedding deserves a story told through timeless &amp; elegant invitations.
          </h2>
          <p className="text-[#6B6B6B] font-light leading-relaxed mb-4">
            We craft bespoke foiled prints and keepsake invitations tailored to your unique love story — serving couples across Pakistan and the United Kingdom.
          </p>
          <p className="text-[#6B6B6B] font-light leading-relaxed">
            From delicate suede finishes to bold acrylic panels, every piece is designed with intention, printed with precision, and delivered with care.
          </p>
        </motion.div>

        {/* Right: 40% */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#C9A84C] flex items-center justify-between gap-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-[#C9A84C]" size={20} />
                    <h3 className="font-medium text-[#1A1A1A] text-sm">{feat.title}</h3>
                  </div>
                  <p className="text-[#6B6B6B] text-sm font-light">{feat.desc}</p>
                </div>
                <div className="shrink-0 w-16 h-16 relative">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

