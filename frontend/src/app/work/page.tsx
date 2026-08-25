import IntroAnimation from "@/components/ui/scroll-morph-hero";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
export default function Work() {
  return (
    <main className="pt-24 pb-xl flex-grow">
      {/* Hero Section */}
      <section className="w-full h-[800px] mb-xl rounded-b-3xl overflow-hidden border-b border-outline-variant/20">
        <IntroAnimation />
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

      {/* Project Grid (Card Layout) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
