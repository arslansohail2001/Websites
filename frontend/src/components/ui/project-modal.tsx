"use client";

import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        {/* Modal Hero Image */}
        <div className="w-full aspect-video bg-gray-100 overflow-hidden shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-12">
          <span className="inline-block font-label text-label text-outline uppercase tracking-widest mb-3">
            {project.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {project.title}
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Problem</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.problemStatement || project.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.solution || "We engineered a highly performant and scalable solution tailored to exactly meet these complex needs."}
              </p>
            </div>
            
            {project.link && (
              <div className="pt-4 border-t border-gray-100">
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-[#00346b] font-semibold hover:underline"
                 >
                   View Live Project <span className="material-symbols-outlined text-sm">open_in_new</span>
                 </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
