"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const STATS = [
  { value: 4700, label: "Satisfied Customers" },
  { value: 5, label: "Years of Experience" },
  { value: 450, label: "Custom Designs" },
];

export default function StatsCounter() {
  return (
    <section className="bg-[#0F0F0F] py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#C9A84C]/20">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center py-10 md:py-6 px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="font-serif text-6xl md:text-7xl text-[#C9A84C] font-semibold leading-none mb-3">
              <CountUp
                end={stat.value}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
                suffix="+"
              />
            </div>
            <p className="text-white/70 text-xs uppercase tracking-[0.15em] font-light text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

