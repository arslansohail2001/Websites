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
