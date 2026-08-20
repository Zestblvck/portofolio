import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Car, Calendar } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="a_propos" className="py-20 bg-white relative border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            À propos<span className="text-sky-600">.</span>
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-8 space-y-4 text-slate-700 text-base leading-relaxed">
            {personalInfo.aboutParagraphs.map((para, idx) => (
              <p key={idx} className={idx === 0 ? "font-bold text-slate-900 text-lg" : ""}>
                {para}
              </p>
            ))}

            {/* Key Strengths Pills */}
            <div className="pt-4 flex flex-wrap gap-2">
              <span className="badge-sky">Permis B (Véhiculé)</span>
              <span className="badge-sky">Rigueur Mathématique & Analytique</span>
              <span className="badge-sky">Polyvalence Fullstack & DevOps</span>
              <span className="badge-sky">Data & Business Intelligence</span>
              <span className="badge-sky">Esprit d'équipe & Communication</span>
            </div>
          </div>

          {/* Right Highlight Box with Photo */}
          <div className="lg:col-span-4">
            <div className="card-minimal p-6 rounded-3xl space-y-6 border border-sky-200 shadow-md text-center group">
              
              {/* Zakariae's Photo */}
              <div className="relative w-36 h-36 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/photo_zm.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-lg">{personalInfo.name}</h3>
                <p className="text-xs font-semibold text-sky-700">ESIR Rennes • 3ᵉ année SI</p>
                <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  Rennes, France
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100 space-y-3 text-xs text-slate-600 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Permis :</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" /> Permis B (Véhiculé)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Rythme :</span>
                  <span className="text-sky-700 font-bold">Alternance ESIR 2026-2027</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Temps plein :</span>
                  <span className="text-emerald-700 font-bold">Dès Février 2027</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Baccalauréat :</span>
                  <span className="text-sky-700 font-bold">Mention Très Bien</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
