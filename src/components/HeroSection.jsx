import React, { useState } from 'react';
import { personalInfo, alternanceRythm } from '../data/portfolioData';
import { ArrowDown, Mail, MapPin, Sparkles, CheckCircle2, Car, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';

export default function HeroSection() {
  const [planningOpen, setPlanningOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center bg-sky-gradient overflow-hidden">
      
      {/* Decorative Sky Blue Soft Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Photo & Status Badge */}
        <div className="flex flex-col items-center gap-4">
          
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-500 shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="/photo_zm.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
              <span>Actuellement en 3ᵉ année d'école d'ingénieur (ESIR Rennes)</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-sm">
              <Car className="w-4 h-4 text-emerald-600" />
              <span>Permis B (Véhiculé)</span>
            </span>
          </div>

        </div>

        {/* Hero Name & Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-sky-700 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>
        </div>

        {/* Highlighted Alternance Offer & Rhythm Box */}
        <div className="p-6 sm:p-8 rounded-3xl card-minimal max-w-2xl mx-auto space-y-5 border border-sky-200 shadow-md">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 font-mono">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Recherche d'Alternance 2026-2027</span>
          </div>
          
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            Disponible dès <span className="text-sky-600 underline decoration-sky-300 underline-offset-4">Septembre 2026</span> • Temps plein en entreprise dès <span className="text-emerald-700 underline decoration-emerald-300 underline-offset-4">Février 2027</span>
          </p>

          {/* Planning breakdown card */}
          <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 text-left space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Planning d'alternance officiel (ESIR)</span>
              </div>
              <button
                onClick={() => setPlanningOpen(!planningOpen)}
                className="text-xs text-sky-700 font-semibold hover:underline flex items-center gap-1"
              >
                <span>{planningOpen ? "Masquer" : "Voir le rythme"}</span>
                {planningOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Detailed Planning Steps */}
            <div className="space-y-2 pt-1 border-t border-sky-200/60">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Début Septembre 2026 : 3 sem. entreprise / 3 sem. école</span>
              </div>
              
              {planningOpen && (
                <div className="space-y-2 pt-1 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Période 2 : 3 sem. entreprise / 5 sem. école</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Période 3 : 5 sem. entreprise / 3 sem. école</span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dès Février 2027 : Présence à TEMPS PLEIN en entreprise</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sky-600" />
              Rennes, France & Mobilité
            </span>
            <span className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-emerald-600" />
              Permis B (Véhiculé)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projet"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Voir mes projets</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-800 border border-sky-200 font-bold text-sm shadow-sm transition-all flex items-center gap-2 hover:border-sky-300"
          >
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Me contacter</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-sky-200 shadow-sm transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
