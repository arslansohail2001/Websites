export default function Insights() {
  return (
    <main className="flex-grow pt-24 pb-xl relative">
      <div className="absolute inset-0 grid-bg z-0 opacity-50 pointer-events-none"></div>
      
      {/* Category Nav */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-lg overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-md pb-xs whitespace-nowrap border-b border-outline-variant/30">
          <button className="font-label text-label uppercase tracking-widest text-primary border-b-2 border-primary pb-xs px-xs">All Insights</button>
          <button className="font-label text-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs px-xs">Strategy</button>
          <button className="font-label text-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs px-xs">Design</button>
          <button className="font-label text-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs px-xs">Technology</button>
          <button className="font-label text-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs px-xs">AI</button>
          <button className="font-label text-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors pb-xs px-xs">Business</button>
        </div>
      </div>

      {/* Featured Article */}
      <section className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-xl">
        <div className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-lg items-center border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="md:col-span-7 h-64 md:h-[500px] w-full overflow-hidden relative">
            <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="A conceptual image representing artificial intelligence intersecting with corporate strategy." src="/images/insight_data_team.jpg" />
            <div className="absolute top-md left-md bg-surface/90 backdrop-blur px-sm py-xs rounded font-label text-label uppercase text-primary tracking-widest border border-outline-variant/50">Featured</div>
          </div>
          <div className="md:col-span-5 p-md md:pr-xl flex flex-col justify-center">
            <div className="flex items-center gap-sm mb-sm font-small text-small text-on-surface-variant">
              <span className="font-semibold text-primary">Technology &amp; AI</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h2 className="font-h2 text-h2 text-on-surface mb-md group-hover:text-primary transition-colors">The Cognitive Enterprise: Architecting Systems for Generative Intelligence</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed line-clamp-3">
              Beyond the hype cycle of large language models lies the structural challenge of integrating cognitive capabilities into legacy enterprise architecture. We explore the design patterns required to build intelligent, adaptable organizations that leverage AI not as a tool, but as a core operational nervous system.
            </p>
            <div className="flex items-center gap-xs font-label text-label uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
              Read Article <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex justify-between items-end mb-lg border-b border-outline-variant/30 pb-sm">
          <h3 className="font-h3 text-h3 text-on-surface">Latest Thinking</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg">
          {/* Article Card 1 */}
          <article className="group flex flex-col border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 w-full overflow-hidden border-b border-outline-variant/30">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Workspace scene demonstrating sophisticated UI/UX design" src="/images/insight_ui_workspace.jpg" />
            </div>
            <div className="p-md flex-grow flex flex-col">
              <div className="flex items-center gap-sm mb-xs font-small text-small text-on-surface-variant">
                <span className="text-primary font-semibold">Design</span>
                <span>•</span>
                <span>Oct 12, 2024</span>
              </div>
              <h4 className="font-h4 text-h4 text-on-surface mb-sm group-hover:text-primary transition-colors line-clamp-2">Designing for Density: Information Architecture in Financial Interfaces</h4>
              <p className="font-body text-body text-on-surface-variant mb-md flex-grow line-clamp-3">
                Balancing extreme data density with cognitive clarity requires a systematic approach to typographic hierarchy and spatial geometry.
              </p>
              <div className="flex items-center gap-xs font-label text-label uppercase tracking-widest text-primary mt-auto">
                Read More
              </div>
            </div>
          </article>
          {/* Article Card 2 */}
          <article className="group flex flex-col border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 w-full overflow-hidden border-b border-outline-variant/30">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Abstract representation of strategic business consulting" src="/images/insight_exec_meeting.jpg" />
            </div>
            <div className="p-md flex-grow flex flex-col">
              <div className="flex items-center gap-sm mb-xs font-small text-small text-on-surface-variant">
                <span className="text-primary font-semibold">Strategy</span>
                <span>•</span>
                <span>Oct 05, 2024</span>
              </div>
              <h4 className="font-h4 text-h4 text-on-surface mb-sm group-hover:text-primary transition-colors line-clamp-2">The Architecture of Resilience: Post-Digital Business Models</h4>
              <p className="font-body text-body text-on-surface-variant mb-md flex-grow line-clamp-3">
                Agility is no longer sufficient. Enterprise systems must be engineered for structural resilience in the face of continuous market volatility.
              </p>
              <div className="flex items-center gap-xs font-label text-label uppercase tracking-widest text-primary mt-auto">
                Read More
              </div>
            </div>
          </article>
          {/* Article Card 3 */}
          <article className="group flex flex-col border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 w-full overflow-hidden border-b border-outline-variant/30">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Macro photography of a high-end silicon microchip" src="/images/insight_server_macro.jpg" />
            </div>
            <div className="p-md flex-grow flex flex-col">
              <div className="flex items-center gap-sm mb-xs font-small text-small text-on-surface-variant">
                <span className="text-primary font-semibold">Technology</span>
                <span>•</span>
                <span>Sep 28, 2024</span>
              </div>
              <h4 className="font-h4 text-h4 text-on-surface mb-sm group-hover:text-primary transition-colors line-clamp-2">Decoupling the Monolith: A Pragmatic Approach to Microservices</h4>
              <p className="font-body text-body text-on-surface-variant mb-md flex-grow line-clamp-3">
                A rigorous methodology for identifying domain boundaries and transitioning legacy applications into robust, scalable distributed systems.
              </p>
              <div className="flex items-center gap-xs font-label text-label uppercase tracking-widest text-primary mt-auto">
                Read More
              </div>
            </div>
          </article>
        </div>

        <div className="mt-lg flex justify-center">
          <button className="px-lg py-sm border border-outline-variant text-on-surface font-label text-label uppercase tracking-widest rounded-full hover:bg-surface-variant transition-colors">Load More Insights</button>
        </div>
      </section>
    </main>
  );
}
