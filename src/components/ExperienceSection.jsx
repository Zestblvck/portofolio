import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#f5f5f7] border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">Parcours</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
            Expériences professionnelles.
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl card-apple text-left space-y-4 border border-neutral-200/80"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">
                    {exp.role}
                  </h3>
                </div>

                <div className="text-right text-xs text-[#86868b] space-y-1">
                  <div className="flex items-center gap-1.5 justify-end font-medium text-neutral-800">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-neutral-800">
                {exp.summary}
              </p>

              <ul className="space-y-2 pt-1 border-t border-neutral-100">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-[#515154]">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.techs.map((tech) => (
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
