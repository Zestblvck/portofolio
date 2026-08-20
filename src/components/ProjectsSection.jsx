import React from 'react';
import { projects } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projet" className="py-20 bg-white relative border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Mes projets<span className="text-sky-600">.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Découvre ci-dessous une sélection de mes réalisations académiques et personnelles les plus significatives.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-2" />
        </div>

        {/* Projects Alternating Stack */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="card-minimal rounded-3xl p-6 sm:p-8 card-minimal-hover border border-sky-100 shadow-sm transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Media / Code Preview Block */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl bg-gradient-to-br from-sky-900 via-slate-900 to-indigo-950 text-white p-6 shadow-xl space-y-4 overflow-hidden border border-sky-800">
                      
                      {/* Code Header Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-sky-800/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <span className="font-mono text-[10px] text-sky-300 uppercase tracking-widest font-bold">
                          {project.type}
                        </span>
                      </div>

                      {/* Mockup Preview Graphic */}
                      <div className="space-y-2 py-4">
                        <div className="text-xs font-mono text-sky-400">
                          // {project.title}
                        </div>
                        <div className="text-lg font-bold font-display text-white">
                          {project.subtitle}
                        </div>
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {project.techs.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-sky-950/80 text-sky-200 border border-sky-700/60 font-mono text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Accent Metrics */}
                      <div className="pt-3 border-t border-sky-800/60 flex items-center justify-between text-xs text-sky-300 font-mono">
                        <span>Application Opérationnelle</span>
                        <span>{project.year}</span>
                      </div>

                    </div>
                  </div>

                  {/* Project Details Description Block */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200">
                        {project.type} • {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key points list */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                        Objectifs & Réalisations Clés :
                      </div>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Pills */}
                    <div className="pt-4 border-t border-sky-100 flex flex-wrap gap-1.5">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
