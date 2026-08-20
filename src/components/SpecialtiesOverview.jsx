import React from 'react';
import { domains } from '../data/portfolioData';
import { Code2, Server, BarChart3, CheckCircle2, Layers, ArrowRight, Sparkles } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Code2: Code2,
  Server: Server,
  BarChart3: BarChart3,
  CheckCircle2: CheckCircle2,
};

export default function SpecialtiesOverview({ activeDomain, setActiveDomain }) {
  return (
    <section id="domains" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Domaines d'Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Une vision à 360° du <span className="text-gradient-cyan">Cycle de Vie Logiciel</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Grâce à ma formation à l'ESIR et à mes projets concrets, j'interviens sur l'ensemble de la chaîne de valeur informatique. Clique sur un domaine pour filtrer les projets associés.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.filter(d => d.id !== 'all').map((domain) => {
            const IconComponent = iconMap[domain.icon] || Layers;
            const isSelected = activeDomain === domain.id;

            return (
              <div
                key={domain.id}
                onClick={() => {
                  setActiveDomain(domain.id);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-2 border-cyan-500 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                    : 'glass-panel glass-panel-hover'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${domain.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {domain.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {domain.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                {/* Filter Link Action */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Filtrer les projets</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
