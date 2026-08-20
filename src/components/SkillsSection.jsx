import React from 'react';
import { skills } from '../data/portfolioData';
import { Code2, Server, BarChart3, CheckCircle2, Terminal } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="comp" className="py-20 bg-slate-50 relative border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Mes compétences<span className="text-sky-600">.</span>
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-2" />
        </div>

        <div className="space-y-10">
          
          {/* Front-end Block */}
          <div className="card-minimal p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Front-end Web</h3>
                <p className="text-xs text-slate-500">Interfaces réactives, dynamiques et responsive</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-center hover:bg-white hover:border-sky-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 text-sm mb-1">{skill.name}</div>
                  <span className="text-[10px] font-semibold text-sky-700 bg-white px-2 py-0.5 rounded-full border border-sky-200">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Back-end Block */}
          <div className="card-minimal p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Back-end & APIs</h3>
                <p className="text-xs text-slate-500">Architecture serveur, bases de données et sécurité</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-center hover:bg-white hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 text-sm mb-1">{skill.name}</div>
                  <span className="text-[10px] font-semibold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud Block */}
          <div className="card-minimal p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">DevOps, CI/CD & Cloud</h3>
                <p className="text-xs text-slate-500">Infrastructure as Code, automatisation et conteneurisation</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {skills.devops.map((skill) => (
                <div key={skill.name} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-center hover:bg-white hover:border-amber-300 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 text-sm mb-1">{skill.name}</div>
                  <span className="text-[10px] font-semibold text-amber-700 bg-white px-2 py-0.5 rounded-full border border-amber-200">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Data & BI / Testing Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Data BI */}
            <div className="card-minimal p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Data & Business Intelligence</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.dataBi.map((s) => (
                  <div key={s.name} className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-center">
                    <div className="font-bold text-slate-900 text-xs">{s.name}</div>
                    <div className="text-[10px] text-emerald-700 font-medium">{s.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing */}
            <div className="card-minimal p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-slate-900">Test & Qualité Logicielle</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.testingQuality.map((s) => (
                  <div key={s.name} className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-center">
                    <div className="font-bold text-slate-900 text-xs">{s.name}</div>
                    <div className="text-[10px] text-purple-700 font-medium">{s.category}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
