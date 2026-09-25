import React from 'react';
import { projects } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">Réalisations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
            Projets d'ingénierie.
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl card-apple border border-neutral-200/80 space-y-5 text-left"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium">
                    {project.type}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[#86868b] mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#515154] leading-relaxed">
                {project.description}
              </p>

              {/* Key points list */}
              <ul className="space-y-2 pt-2 border-t border-neutral-100">
                {project.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#515154]">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200/60 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
