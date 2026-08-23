export default function Work() {
  return (
    <main className="pt-24 pb-xl flex-grow">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-xl">
        <div className="max-w-4xl">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface mb-lg">Work that moves businesses forward.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">We partner with enterprise organizations to design and engineer digital platforms that define modern capability. Our approach blends technical rigor with editorial precision.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-xl sticky top-[64px] z-40 bg-surface/90 backdrop-blur-sm py-4 border-b border-outline-variant/20 overflow-x-auto no-scrollbar">
        <div className="flex gap-sm whitespace-nowrap">
          <button className="px-6 py-2 rounded-full border border-primary bg-primary text-on-primary font-label text-label transition-colors">All</button>
          <button className="px-6 py-2 rounded-full border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label text-label">Digital Products</button>
          <button className="px-6 py-2 rounded-full border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label text-label">Web</button>
          <button className="px-6 py-2 rounded-full border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label text-label">AI</button>
          <button className="px-6 py-2 rounded-full border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label text-label">Brand</button>
          <button className="px-6 py-2 rounded-full border border-outline-variant/50 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-label text-label">Enterprise</button>
        </div>
      </section>

      {/* Project Grid (Editorial Layout) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-32">
        {/* Project 1 */}
        <article className="group cursor-pointer">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-lg rounded-lg border border-outline-variant/20 relative bg-surface-container-low">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A massive, high-tech command center interface" src="/images/work_noc_center.jpg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-gutter">
            <div className="md:col-span-8">
              <h2 className="font-data-display text-data-display mb-sm text-on-surface">Global Logistics Operating System</h2>
              <p className="font-body text-body text-on-surface-variant mb-md max-w-xl">Re-architecting the core operational platform for a Fortune 500 supply chain leader. We consolidated 14 legacy systems into a singular, highly performant web application.</p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-sm border-t md:border-t-0 md:border-l border-outline-variant/20 pt-md md:pt-0 md:pl-md">
              <div>
                <span className="block font-label text-label text-outline uppercase mb-1">Industry</span>
                <span className="font-small text-small text-on-surface">Enterprise Logistics</span>
              </div>
              <div>
                <span className="block font-label text-label text-outline uppercase mb-1">Services</span>
                <span className="font-small text-small text-on-surface">Digital Products, AI</span>
              </div>
              <div>
                <span className="block font-label text-label text-outline uppercase mb-1">Year</span>
                <span className="font-small text-small text-on-surface">2023 - 2024</span>
              </div>
              <div className="mt-auto pt-md">
                <a className="inline-flex items-center gap-2 font-label text-label text-primary uppercase group-hover:text-primary-container transition-colors" href="#">
                  View Project <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="group cursor-pointer">
          <div className="w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden mb-lg rounded-lg border border-outline-variant/20 relative bg-surface-container-low md:w-5/6 md:ml-auto">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Abstract, generative AI visualization" src="/images/work_architectural_plans.jpg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-gutter">
            <div className="md:col-span-8 md:col-start-3">
              <h2 className="font-data-display text-data-display mb-sm text-on-surface">AI-Driven Financial Forecasting</h2>
              <p className="font-body text-body text-on-surface-variant mb-md max-w-xl">Designing a complex predictive analytics dashboard for institutional investors, turning petabytes of market data into actionable, elegant visual insights.</p>
            </div>
            <div className="md:col-span-2 flex flex-col gap-sm border-t md:border-t-0 md:border-l border-outline-variant/20 pt-md md:pt-0 md:pl-md">
              <div>
                <span className="block font-label text-label text-outline uppercase mb-1">Industry</span>
                <span className="font-small text-small text-on-surface">FinTech</span>
              </div>
              <div>
                <span className="block font-label text-label text-outline uppercase mb-1">Services</span>
                <span className="font-small text-small text-on-surface">Web, Brand</span>
              </div>
              <div className="mt-auto pt-md">
                <a className="inline-flex items-center gap-2 font-label text-label text-primary uppercase group-hover:text-primary-container transition-colors" href="#">
                  View Project <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
