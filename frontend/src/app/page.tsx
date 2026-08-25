import Link from "next/link";
import HomepageProjects from "@/components/ui/homepage-projects";
import { Timeline } from "@/components/ui/timeline";
import { projects } from "@/data/projects";

const capabilitiesData = [
  {
    title: "Strategy",
    content: (
      <div>
        <p className="text-on-surface-variant font-body mb-6 text-lg max-w-xl">
          We align technology with your business goals to ensure scalable, future-proof foundations.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Digital Transformation</span>
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Product Strategy</span>
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Technical Architecture</span>
        </div>
      </div>
    )
  },
  {
    title: "Design",
    content: (
      <div>
        <p className="text-on-surface-variant font-body mb-6 text-lg max-w-xl">
          Crafting intuitive, premium user experiences that drive engagement and retention.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">UI/UX Design</span>
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Design Systems</span>
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Prototyping</span>
        </div>
      </div>
    )
  },
  {
    title: "Development",
    content: (
      <div>
        <p className="text-on-surface-variant font-body mb-6 text-lg max-w-xl">
          Engineering robust, high-performance applications leveraging the latest web technologies.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Web Apps</span>
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Mobile Apps</span>
           <span className="px-4 py-2 rounded-full border border-outline-variant/50 text-small font-small bg-surface-container-lowest text-on-surface">Cloud Infrastructure</span>
        </div>
      </div>
    )
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/10">
        <video 
          className="absolute inset-0 h-full w-full object-cover object-bottom z-0" 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4" 
          muted 
          autoPlay 
          loop 
          playsInline 
        />
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 w-full flex flex-col items-center justify-center text-center h-full">
          <div className="max-w-5xl flex flex-col items-center justify-center -mt-32 md:-mt-48">
            <h1 className="font-h1-mobile text-h1-mobile md:font-h1 md:text-h1 mb-lg text-white drop-shadow-2xl">WE BUILD DIGITAL EXPERIENCES FOR AMBITIOUS BUSINESSES.</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-sm mt-md">
              <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white px-md py-sm rounded-full font-small text-small hover:bg-white/20 transition-all flex items-center justify-center gap-xs group">
                Start a Project <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/work" className="border border-white/20 bg-transparent text-white/80 hover:text-white px-md py-sm rounded-full font-small text-small hover:bg-white/5 backdrop-blur-sm transition-all flex items-center justify-center gap-xs group">
                View Our Work <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-2xl max-w-container-max mx-auto px-margin-mobile md:px-gutter border-b border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <span className="font-label text-label uppercase tracking-widest text-outline">OUR APPROACH</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-h2 text-h2 mb-md text-on-surface">DIGITAL PRODUCTS SHOULD NOT JUST LOOK GOOD. THEY SHOULD WORK HARD.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              We are a technology and design consultancy focused on solving complex problems through elegant, scalable solutions. We don't just build software; we architect ecosystems that drive measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="border-b border-outline-variant/30">
        <Timeline data={capabilitiesData} />
      </section>

      {/* Selected Work Section */}
      <section className="py-2xl max-w-container-max mx-auto px-margin-mobile md:px-gutter border-b border-outline-variant/30">
        <div className="flex justify-between items-end mb-xl">
          <span className="font-label text-label uppercase tracking-widest text-outline">SELECTED WORK</span>
          <Link className="font-small text-small text-primary hover:underline flex items-center gap-xs" href="/work">
            View All Work <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <HomepageProjects projects={projects.slice(0, 4)} />
      </section>

      {/* Expertise Section (Dark) */}
      <section className="py-3xl bg-brand-dark text-white relative overflow-hidden border-b border-outline-variant/30">
        <div className="absolute inset-0 dark-grid-bg opacity-30 z-0"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-12 text-center mb-xl">
            <h2 className="font-h1-mobile text-h1-mobile md:font-h1 md:text-h1 text-white">Built for what's next.</h2>
          </div>
          <div className="md:col-span-4 p-lg border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <span className="material-symbols-outlined text-brand-cyan text-data-display mb-md">memory</span>
            <h3 className="font-h4 text-h4 mb-sm">Modern Architecture</h3>
            <p className="font-body text-body text-white/70">Building resilient systems utilizing microservices and serverless infrastructure.</p>
          </div>
          <div className="md:col-span-4 p-lg border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <span className="material-symbols-outlined text-brand-cyan text-data-display mb-md">lock</span>
            <h3 className="font-h4 text-h4 mb-sm">Enterprise Security</h3>
            <p className="font-body text-body text-white/70">Implementing zero-trust models and rigorous compliance protocols from day one.</p>
          </div>
          <div className="md:col-span-4 p-lg border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
            <span className="material-symbols-outlined text-brand-cyan text-data-display mb-md">speed</span>
            <h3 className="font-h4 text-h4 mb-sm">High Performance</h3>
            <p className="font-body text-body text-white/70">Optimizing for global scale, low latency, and uncompromised reliability.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-3xl bg-surface relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center relative z-10">
          <h2 className="font-h2 text-h2 text-on-surface mb-lg">HAVE A PROBLEM WORTH SOLVING?</h2>
          <Link href="/contact" className="bg-primary-container text-white px-lg py-md rounded-lg font-small text-small hover:bg-primary transition-colors inline-flex items-center gap-xs shadow-sm hover:shadow-md">
            Start a Conversation <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
