export default function About() {
  return (
    <main className="pt-[120px] pb-xl flex-grow">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-10 md:col-start-2 text-center reveal-up">
            <p className="font-label text-label uppercase tracking-widest text-primary-container mb-md">Our Philosophy</p>
            <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface mb-lg">
              We believe complex technology should feel simple.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              In an era of overwhelming technical complexity, we engineer clarity. Our approach strips away the superfluous, leaving only robust, highly performant systems designed for scale and institutional trust.
            </p>
          </div>
        </div>
        <div className="mt-xl reveal-up">
          <div className="w-full h-[400px] md:h-[600px] bg-cover bg-center bg-surface-container-high rounded-xl overflow-hidden relative" style={{ backgroundImage: "url('/images/server_room.jpg')" }}>
            <div className="absolute inset-0 border border-outline-variant/20 rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl reveal-up">
          <div className="md:col-span-4">
            <h2 className="font-h2 text-h2 text-on-surface">Core<br />Principles</h2>
          </div>
          <div className="md:col-span-8 flex items-end">
            <p className="font-body-lg text-body-lg text-on-surface-variant border-l border-outline-variant/30 pl-lg">
              Our work is governed by a strict adherence to these functional tenets. We do not compromise on structural integrity.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter reveal-up">
          {/* Value 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-lg rounded-xl hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary-container">architecture</span>
            </div>
            <h3 className="font-h4 text-h4 text-on-surface mb-sm">Architectural Discipline</h3>
            <p className="font-body text-body text-on-surface-variant">We build on a foundation of proven patterns, prioritizing stability and maintainability over ephemeral trends.</p>
          </div>
          {/* Value 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-lg rounded-xl hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary-container">speed</span>
            </div>
            <h3 className="font-h4 text-h4 text-on-surface mb-sm">Uncompromising Performance</h3>
            <p className="font-body text-body text-on-surface-variant">Every millisecond is optimized. We engineer systems that remain responsive under intense institutional load.</p>
          </div>
          {/* Value 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-lg rounded-xl hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-primary-container">visibility</span>
            </div>
            <h3 className="font-h4 text-h4 text-on-surface mb-sm">Editorial Clarity</h3>
            <p className="font-body text-body text-on-surface-variant">Data is only valuable if understood. We design interfaces that present complex information with stark precision.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
