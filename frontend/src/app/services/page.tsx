import Link from "next/link";

export default function Services() {
  return (
    <main className="pt-32 pb-xl flex-grow">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-[120px]">
        <div className="max-w-4xl">
          <h1 className="font-h1 text-h1 md:text-[88px] md:leading-[0.95] text-on-surface mb-lg">
            Capabilities built around outcomes.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            We deploy specialized, cross-functional teams to solve complex enterprise challenges. Our methodology is rooted in technical precision and strategic clarity.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter space-y-[160px]">
        {/* Section 1: Strategy */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Title & Context */}
          <div className="md:col-span-4 sticky top-32">
            <span className="font-label text-label text-primary uppercase tracking-widest mb-sm block">01 / Focus Area</span>
            <h2 className="font-h2 text-h2 text-on-surface mb-md">Strategy</h2>
            <p className="font-body text-body text-on-surface-variant mb-lg">
              We define clear, actionable roadmaps that align business objectives with technological possibilities. Our strategic foundation ensures every engineering effort delivers measurable ROI.
            </p>
            <a className="inline-flex items-center gap-xs font-label text-label text-primary hover:text-primary-container transition-colors group" href="#">
              EXPLORE STRATEGY ENGAGEMENTS
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          {/* Bento Layout Content */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Service List Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-lg hover:border-primary/50 transition-colors">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Core Disciplines</h3>
              <ul className="space-y-sm font-body text-body text-on-surface-variant">
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Business &amp; Technical Modeling</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Digital Transformation Roadmaps</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Enterprise Architecture Planning</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Data &amp; Infrastructure Strategy</li>
              </ul>
            </div>
            {/* Image Card */}
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/30 h-[280px]">
              <img className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500" alt="A minimalist, high-end 3D rendering of abstract geometric blocks" src="/images/service_modern_architecture.jpg" />
            </div>
            {/* Process & Deliverables spanning both columns */}
            <div className="md:col-span-2 bg-surface-container-low rounded-lg p-lg border border-outline-variant/20 flex flex-col md:flex-row gap-lg justify-between">
              <div className="flex-1">
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Methodology</h3>
                <p className="font-body text-body text-on-surface">Discovery → Systems Analysis → Target Architecture Definition → Execution Roadmap</p>
              </div>
              <div className="flex-1">
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Key Deliverables</h3>
                <p className="font-body text-body text-on-surface">Strategic Briefs, Technical Audits, Cost-Benefit Models, Phased Rollout Plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Design */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-4 sticky top-32 order-1 md:order-2">
            <span className="font-label text-label text-primary uppercase tracking-widest mb-sm block">02 / Focus Area</span>
            <h2 className="font-h2 text-h2 text-on-surface mb-md">Design</h2>
            <p className="font-body text-body text-on-surface-variant mb-lg">
              Crafting intuitive interfaces that elevate user experience while maintaining strict technical viability. We build systematic design languages that scale across enterprise platforms.
            </p>
            <a className="inline-flex items-center gap-xs font-label text-label text-primary hover:text-primary-container transition-colors group" href="#">
              VIEW DESIGN SYSTEMS
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md order-2 md:order-1">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/30 h-[320px]">
              <img className="w-full h-full object-cover" alt="Digital interface components" src="/images/service_developer_hands.jpg" />
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-lg hover:border-primary/50 transition-colors">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Core Disciplines</h3>
              <ul className="space-y-sm font-body text-body text-on-surface-variant">
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> UX Research &amp; Testing</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> High-Fidelity UI Design</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Design System Engineering</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Interactive Prototyping</li>
              </ul>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-lg flex flex-col justify-center">
              <div className="mb-md">
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Methodology</h3>
                <p className="font-small text-small text-on-surface">Empathize → Define → Ideate → Prototype → Validate</p>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Key Deliverables</h3>
                <p className="font-small text-small text-on-surface">Figma Component Libraries, Usability Reports, Motion Specs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Development */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-4 sticky top-32">
            <span className="font-label text-label text-primary uppercase tracking-widest mb-sm block">03 / Focus Area</span>
            <h2 className="font-h2 text-h2 text-on-surface mb-md">Development</h2>
            <p className="font-body text-body text-on-surface-variant mb-lg">
              Building robust, scalable platforms using modern engineering practices. We treat code as craft, focusing on performance, security, and maintainable cloud infrastructure.
            </p>
            <a className="inline-flex items-center gap-xs font-label text-label text-primary hover:text-primary-container transition-colors group" href="#">
              REVIEW ARCHITECTURE SPECS
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-md">
            {/* Tech Stack Pills */}
            <div className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-lg flex flex-wrap gap-sm items-center">
              <span className="font-label text-label text-on-surface-variant uppercase mr-sm">Technologies:</span>
              <span className="px-sm py-xs bg-surface-container-low border border-outline-variant/30 rounded-full font-small text-small">React/Next.js</span>
              <span className="px-sm py-xs bg-surface-container-low border border-outline-variant/30 rounded-full font-small text-small">Node.js</span>
              <span className="px-sm py-xs bg-surface-container-low border border-outline-variant/30 rounded-full font-small text-small">Python/Django</span>
              <span className="px-sm py-xs bg-surface-container-low border border-outline-variant/30 rounded-full font-small text-small">AWS/GCP</span>
              <span className="px-sm py-xs bg-surface-container-low border border-outline-variant/30 rounded-full font-small text-small">Kubernetes</span>
            </div>
            <div className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-lg hover:border-primary/50 transition-colors">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Core Disciplines</h3>
              <ul className="space-y-sm font-body text-body text-on-surface-variant">
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Full-Stack Web Applications</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Cloud Native Infrastructure</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> API Design &amp; Integration</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> DevOps &amp; CI/CD Pipelines</li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden relative">
              <img className="absolute inset-0 w-full h-full object-cover" alt="Software architecture" src="/images/service_agile_team.jpg" />
            </div>
            <div className="col-span-1 md:col-span-12 bg-surface-container-low border border-outline-variant/20 rounded-lg p-lg flex flex-col md:flex-row gap-lg justify-between">
              <div className="flex-1">
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Methodology</h3>
                <p className="font-body text-body text-on-surface">Agile Sprints → CI/CD → Code Review → Automated QA → Zero-downtime Deployment</p>
              </div>
              <div className="flex-1">
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Key Deliverables</h3>
                <p className="font-body text-body text-on-surface">Production-Ready Repositories, API Documentation, Terraform Scripts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: AI */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-4 sticky top-32 order-1 md:order-2">
            <span className="font-label text-label text-primary uppercase tracking-widest mb-sm block">04 / Focus Area</span>
            <h2 className="font-h2 text-h2 text-on-surface mb-md">AI Integration</h2>
            <p className="font-body text-body text-on-surface-variant mb-lg">
              Deploying intelligent systems to automate workflows, personalize experiences, and uncover deep analytical insights from enterprise data lakes.
            </p>
            <a className="inline-flex items-center gap-xs font-label text-label text-primary hover:text-primary-container transition-colors group" href="#">
              DISCUSS AI READINESS
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md order-2 md:order-1">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/30 h-[320px] relative">
              <img className="w-full h-full object-cover" alt="Artificial intelligence visualization" src="/images/service_data_scientist.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-lg">
                <div className="bg-surface-container-lowest/90 backdrop-blur border border-outline-variant/50 p-md rounded-lg max-w-sm">
                  <h3 className="font-h4 text-h4 text-on-surface mb-xs">Predictive Modeling</h3>
                  <p className="font-small text-small text-on-surface-variant">Transforming historical data into forward-looking operational intelligence.</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-lg hover:border-primary/50 transition-colors">
              <h3 className="font-h4 text-h4 text-on-surface mb-sm">Core Disciplines</h3>
              <ul className="space-y-sm font-body text-body text-on-surface-variant">
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Large Language Models (LLMs)</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Predictive Analytics</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Computer Vision Systems</li>
                <li className="flex items-center gap-sm"><span className="w-[4px] h-[4px] bg-primary rounded-full"></span> Automated Data Pipelines</li>
              </ul>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-lg flex flex-col justify-center">
              <div className="mb-md">
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Methodology</h3>
                <p className="font-small text-small text-on-surface">Data Gathering → Model Selection → Training → Fine-Tuning → Integration</p>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface-variant uppercase mb-xs">Key Deliverables</h3>
                <p className="font-small text-small text-on-surface">Trained Custom Models, API Endpoints, Data Governance Frameworks.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Global CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-[160px]">
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="max-w-2xl">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">Ready to build?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Engage our team for a technical audit or to scope your next enterprise initiative.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 bg-primary text-on-primary font-h4 text-h4 px-lg py-sm rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-sm">
            Initiate Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
