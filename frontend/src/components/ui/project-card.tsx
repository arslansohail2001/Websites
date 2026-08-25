"use client";

import * as React from "react";
import { useState } from "react";
import { Project } from "@/data/projects";
import { ProjectModal } from "@/components/ui/project-modal";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, project, ...props }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <div
          ref={ref}
          className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl ${className || ""}`}
          {...props}
        >
          {/* Card Image Section */}
          <div className="aspect-video overflow-hidden border-b border-outline-variant/30">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Card Content Section */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-h4 text-h4 transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 font-body text-body text-on-surface-variant line-clamp-3">{project.description}</p>
            
            {/* Learn More Button CTA */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="mt-6 inline-block self-start bg-[#00346b] hover:bg-[#002855] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Learn more
            </button>
          </div>
        </div>

        {isModalOpen && (
          <ProjectModal 
            project={project} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
