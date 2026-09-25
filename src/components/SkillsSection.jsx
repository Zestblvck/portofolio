import React from 'react';
import { skills } from '../data/portfolioData';
import { Database, Server, Code2, Terminal } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#f5f5f7] border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
            Compétences techniques.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Data Engineering */}
          <div className="p-6 rounded-3xl card-apple space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200/60">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">Data Engineering & BI</h3>
                <p className="text-xs text-[#86868b]">Pipelines ETL, Data Quality, SQL & Dashboards</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {skills.dataEngineering.map((s) => (
                <div key={s.name} className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/60">
                  <div className="font-semibold text-neutral-900 text-xs">{s.name}</div>
                  <div className="text-[10px] text-neutral-500">{s.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className="p-6 rounded-3xl card-apple space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200/60">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">DevOps, Cloud & CI/CD</h3>
                <p className="text-xs text-[#86868b]">Conteneurisation, IaC & Supervision</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {skills.devopsCloud.map((s) => (
                <div key={s.name} className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/60">
                  <div className="font-semibold text-neutral-900 text-xs">{s.name}</div>
                  <div className="text-[10px] text-neutral-500">{s.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Front-end */}
          <div className="p-6 rounded-3xl card-apple space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200/60">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">Développement Frontend</h3>
                <p className="text-xs text-[#86868b]">Interfaces réactives et modernes</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {skills.frontend.map((s) => (
                <div key={s.name} className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/60">
                  <div className="font-semibold text-neutral-900 text-xs">{s.name}</div>
                  <div className="text-[10px] text-neutral-500">{s.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Back-end */}
          <div className="p-6 rounded-3xl card-apple space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200/60">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">Back-end & Sécurité</h3>
                <p className="text-xs text-[#86868b]">APIs REST, Frameworks & Auth</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {skills.backend.map((s) => (
                <div key={s.name} className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/60">
                  <div className="font-semibold text-neutral-900 text-xs">{s.name}</div>
                  <div className="text-[10px] text-neutral-500">{s.category}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
