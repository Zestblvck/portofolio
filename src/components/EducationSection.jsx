import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="formation" className="py-20 bg-white relative border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Ma formation<span className="text-sky-600">.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Parcours scientifique et études supérieures en ingénierie.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="card-minimal p-6 rounded-3xl space-y-3 border border-sky-100 card-minimal-hover"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold border border-sky-200">
                  {item.period}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900">
                {item.degree}
              </h3>

              <div className="text-sm font-bold text-sky-700 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sky-600" />
                <span>{item.institution}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 text-xs font-normal flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {item.location}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {item.details}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
