import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">Diplômes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
            Formation académique.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl card-apple text-left space-y-3 border border-neutral-200/80 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium">
                    {edu.badge}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1d1d1f]">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-700 mt-0.5">
                    {edu.institution}
                  </div>
                </div>

                <p className="text-xs text-[#515154] leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-[#86868b] pt-2 border-t border-neutral-100">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
