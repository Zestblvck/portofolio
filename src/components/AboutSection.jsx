import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, MapPin, Award, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Avatar Column */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm overflow-hidden">
              <img
                src="/photo_zm.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Bio Content Column */}
          <div className="md:col-span-8 space-y-6 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">À propos</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
                Présentation.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#515154] leading-relaxed">
              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center gap-3">
                <User className="w-4 h-4 text-neutral-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-900">3ᵉ année ESIR</div>
                  <div className="text-[11px] text-neutral-500">Rennes, France</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center gap-3">
                <Award className="w-4 h-4 text-neutral-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-900">CPGE MP</div>
                  <div className="text-[11px] text-neutral-500">Maths & Physique</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-neutral-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-neutral-900">Contrat de Pro</div>
                  <div className="text-[11px] text-neutral-500">2026 – 2027</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
