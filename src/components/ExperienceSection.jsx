import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="exp" className="py-20 bg-slate-50 relative border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Mes expériences<span className="text-sky-600">.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Découvrez mes expériences de stages professionnelles en entreprise.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-2" />
        </div>

        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="card-minimal p-6 sm:p-8 rounded-3xl space-y-4 border border-sky-100 card-minimal-hover"
            >
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  {exp.location}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  {exp.company}
                </h3>
                <h4 className="text-sm font-bold text-sky-700 mt-0.5">
                  {exp.role}
                </h4>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {exp.summary}
              </p>

              {/* Details list */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
                  Missions Principales :
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-sky-100 flex flex-wrap gap-1.5">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-900 border border-sky-200 font-mono text-xs font-semibold"
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
