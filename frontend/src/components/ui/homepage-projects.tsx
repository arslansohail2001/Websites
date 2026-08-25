"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { ProjectModal } from "@/components/ui/project-modal";

export default function HomepageProjects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-xl">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col rounded-[12px] bg-white border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow hover:shadow-md">
            <div className="w-full aspect-[3/2] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-6 flex-1">{project.description}</p>
              
              {/* Trigger Modal Button */}
              <button 
                onClick={() => setSelectedProject(project)}
                className="inline-block self-start bg-[#00346b] hover:bg-[#002855] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
