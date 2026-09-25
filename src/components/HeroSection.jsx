import React, { useState } from 'react';
import { personalInfo, alternanceRythm } from '../data/portfolioData';
import { ArrowDown, Mail, MapPin, CheckCircle2, Car, Calendar, Clock, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';

export default function HeroSection() {
  const [planningOpen, setPlanningOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-36 pb-24 flex items-center justify-center bg-apple-hero overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-9">
        
        {/* Photo & Apple-Style Badge */}
        <div className="flex flex-col items-center gap-5">
          
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-neutral-200 to-neutral-400 shadow-sm">
            <img
              src="/photo_zm.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 text-neutral-900 text-xs font-medium shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>3ᵉ année École d'Ingénieur (ESIR Rennes)</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 text-neutral-800 text-xs font-medium shadow-xs">
              <Car className="w-3.5 h-3.5 text-neutral-600" />
              <span>Permis B (Véhiculé)</span>
            </span>
          </div>

        </div>

        {/* Hero Headline & Subheadline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1d1d1f] tracking-tight leading-[1.08]">
            {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-2xl font-normal text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            Ingénierie des Systèmes d'Information | Fullstack, IA & Data
          </p>
        </div>

        {/* Highlighted Contrat de Professionnalisation Card */}
        <div className="p-6 sm:p-8 rounded-3xl card-apple max-w-2xl mx-auto space-y-5 text-left border border-neutral-200/80">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 font-mono">
              <Briefcase className="w-4 h-4 text-neutral-800" />
              <span>Recherche de Contrat de Professionnalisation</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 text-white text-[11px] font-medium">
              2026 – 2027
            </span>
          </div>
          
          <p className="text-base sm:text-lg font-medium text-[#1d1d1f] leading-snug">
            Disponible dès <span className="font-semibold underline decoration-neutral-400 underline-offset-4">Septembre 2026</span> • Temps plein en entreprise : <span className="font-semibold underline decoration-emerald-500 underline-offset-4">dès le 15 Février 2027</span>
          </p>

          {/* Detailed Planning Accordion */}
          <div className="p-4 rounded-2xl bg-neutral-100/80 border border-neutral-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                <Calendar className="w-4 h-4 text-neutral-700" />
                <span>Planning prévisionnel d'alternance ESIR 2026-2027</span>
              </div>
              <button
                onClick={() => setPlanningOpen(!planningOpen)}
                className="text-xs text-neutral-600 hover:text-black font-semibold flex items-center gap-1 transition-colors"
              >
                <span>{planningOpen ? "Masquer" : "Voir le détail des mois"}</span>
                {planningOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="space-y-2 pt-1 border-t border-neutral-200/80 text-xs text-neutral-700">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>Rentrée Sept. 2026 : 3 sem. école (1-25 Sept.) / 3 sem. entreprise (28 Sept.-16 Oct.)</span>
              </div>

              {planningOpen && (
                <div className="space-y-2.5 pt-2 border-t border-neutral-200/60">
                  {alternanceRythm.detailedPeriods.map((item, idx) => (
                    <div key={idx} className={`p-2 rounded-xl text-xs flex items-start gap-2 ${item.isHighlight ? 'bg-emerald-100/80 border border-emerald-300 font-semibold text-emerald-900' : 'bg-white/80 border border-neutral-200/60 text-neutral-800'}`}>
                      {item.isHighlight ? <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" /> : <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />}
                      <div>
                        <div className="font-bold">{item.period}</div>
                        <div className="text-[11px] opacity-90">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 font-bold text-emerald-900 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Du 15 Fév. 2027 au 3 Sept. 2027 : TEMPS PLEIN CONTINU en entreprise</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600 pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              Rennes, France & Mobilité nationale
            </span>
            <span className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-neutral-500" />
              Permis B (Véhiculé)
            </span>
          </div>

        </div>

        {/* Apple Style Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="btn-apple-primary flex items-center gap-2"
          >
            <span>Découvrir mes projets</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="btn-apple-secondary flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-neutral-700" />
            <span>Me contacter</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300/80 shadow-xs transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
