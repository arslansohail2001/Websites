import Link from "next/link";

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
      <section className="py-2xl max-w-container-max mx-auto px-margin-mobile md:px-gutter border-b border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
          <div className="md:col-span-12">
            <span className="font-label text-label uppercase tracking-widest text-outline">CAPABILITIES</span>
          </div>
        </div>
        <div className="flex flex-col border-t border-outline-variant/30">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-lg border-b border-outline-variant/30 group hover:bg-surface-variant/30 transition-colors cursor-pointer">
            <div className="md:col-span-1 flex items-center">
              <span className="font-h4 text-h4 text-outline group-hover:text-primary transition-colors">01</span>
            </div>
            <div className="md:col-span-4 flex items-center">
              <h3 className="font-h3 text-h3 text-on-surface">Strategy</h3>
            </div>
            <div className="md:col-span-6 flex items-center">
              <p className="font-body text-body text-on-surface-variant">Digital Transformation • Product Strategy • Technical Architecture</p>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors transform group-hover:translate-x-2">arrow_forward</span>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-lg border-b border-outline-variant/30 group hover:bg-surface-variant/30 transition-colors cursor-pointer">
            <div className="md:col-span-1 flex items-center">
              <span className="font-h4 text-h4 text-outline group-hover:text-primary transition-colors">02</span>
            </div>
            <div className="md:col-span-4 flex items-center">
              <h3 className="font-h3 text-h3 text-on-surface">Design</h3>
            </div>
            <div className="md:col-span-6 flex items-center">
              <p className="font-body text-body text-on-surface-variant">UI/UX Design • Design Systems • Prototyping</p>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors transform group-hover:translate-x-2">arrow_forward</span>
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-lg border-b border-outline-variant/30 group hover:bg-surface-variant/30 transition-colors cursor-pointer">
            <div className="md:col-span-1 flex items-center">
              <span className="font-h4 text-h4 text-outline group-hover:text-primary transition-colors">03</span>
            </div>
            <div className="md:col-span-4 flex items-center">
              <h3 className="font-h3 text-h3 text-on-surface">Development</h3>
            </div>
            <div className="md:col-span-6 flex items-center">
              <p className="font-body text-body text-on-surface-variant">Web Apps • Mobile Apps • Cloud Infrastructure</p>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors transform group-hover:translate-x-2">arrow_forward</span>
            </div>
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-lg border-b border-outline-variant/30 group hover:bg-surface-variant/30 transition-colors cursor-pointer">
            <div className="md:col-span-1 flex items-center">
              <span className="font-h4 text-h4 text-outline group-hover:text-primary transition-colors">04</span>
            </div>
            <div className="md:col-span-4 flex items-center">
              <h3 className="font-h3 text-h3 text-on-surface">AI</h3>
            </div>
            <div className="md:col-span-6 flex items-center">
              <p className="font-body text-body text-on-surface-variant">Machine Learning • Data Engineering • LLM Integration</p>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors transform group-hover:translate-x-2">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-2xl max-w-container-max mx-auto px-margin-mobile md:px-gutter border-b border-outline-variant/30">
        <div className="flex justify-between items-end mb-xl">
          <span className="font-label text-label uppercase tracking-widest text-outline">SELECTED WORK</span>
          <a className="font-small text-small text-primary hover:underline flex items-center gap-xs" href="#">
            View All Work <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-xl">
          {/* Work 1 */}
          <div className="group cursor-pointer">
            <div className="bg-cover bg-center w-full aspect-[4/3] rounded-lg mb-md bg-surface-variant border border-outline-variant/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWmwlQEDVmWk9V5czp68WwNfKYec_DtJJFO5Ugqob_Z5j0_n-QaA15CBEhGqUAgbQK-QpTROdSI5gELxCtuRdfYj_vR2qwbGCdNbRm-xCcIyy3AsGwudQUcIsvXXeQAMMlhjpOpvEsvkcgKdLq4E8gxtEn8hAJevbnSJd5ZdCKWVVSPlHQqBcCe_l-VynS4CFvob0eTvI9lNA6fxGkNO2D9gFvM4iJ-7G0jcmjX43YJzetoXTebrCi')" }}></div>
            <h3 className="font-h4 text-h4 text-on-surface mb-xs">Nova Financial Platform</h3>
            <p className="font-body text-body text-on-surface-variant mb-xs">A complete overhaul of a legacy banking system.</p>
            <span className="font-label text-label text-outline uppercase">FINANCE</span>
          </div>
          {/* Work 2 (Offset) */}
          <div className="group cursor-pointer md:mt-2xl">
            <div className="bg-cover bg-center w-full aspect-[4/3] rounded-lg mb-md bg-surface-variant border border-outline-variant/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt1_KviqalD9cnhNOdF20LyyB9XtTZWQnfKQOosdR0JliW-uASv3CpXX39Dfups_F4O8Q8NCW1JlFcAEpqDFE-B0p70b1Ee_zX4rSXVVRm3Gg7TvTd09SYY-R-KTdccfTfznKyU-ZLwvT5aJO33KxMOADTAwSVAzeX9_4zR3gNDr7lXyVhdQI8abFprEXm8PVcPs2a24dImMIh4Ob5U41vTEA6oDZrizCREjDjklMierrRj-Njvv1t')" }}></div>
            <h3 className="font-h4 text-h4 text-on-surface mb-xs">Aura Intelligence</h3>
            <p className="font-body text-body text-on-surface-variant mb-xs">Predictive analytics engine for supply chain management.</p>
            <span className="font-label text-label text-outline uppercase">LOGISTICS</span>
          </div>
        </div>
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
