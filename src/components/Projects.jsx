import React from 'react';
import { Lock } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured <span className="text-cyan-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-cyan-600 text-sm font-semibold mb-4">{project.tagline}</p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-amber-600 bg-amber-50 px-3 py-2 rounded-lg mt-auto w-fit border border-amber-100">
                <Lock size={14} />
                <span>{project.repoNote}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}