import React from 'react';
import { hobbies } from '../data/portfolioData';
import { Palette, Paintbrush, Music } from 'lucide-react';

export default function HobbiesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5 text-white" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-white" />;
      case 'Music': return <Music className="w-5 h-5 text-white" />;
      default: return <Palette className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="hobbies" className="py-20 bg-[#f5f5f7] border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">Créativité</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
            Loisirs & Passions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl card-apple text-left space-y-4 border border-neutral-200/80 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
                  {getIcon(hobby.icon)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1d1d1f]">
                    {hobby.title}
                  </h3>
                  <div className="text-xs font-medium text-neutral-500 mt-0.5">
                    {hobby.subtitle}
                  </div>
                </div>

                <p className="text-xs text-[#515154] leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
