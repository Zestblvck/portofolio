import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative border-t border-sky-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Disponible pour Alternance 2026-2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Me contacter<span className="text-sky-600">.</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Un projet ou une opportunité d'alternance ? N'hésitez pas à me contacter directement via l'un des moyens ci-dessous.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Email */}
          <a
            href={`mailto:${personalInfo.email}?subject=Proposition%20d'alternance%20-%20Zakariae%20MEZIANE`}
            className="card-minimal rounded-3xl p-6 border border-sky-100 hover:border-sky-300 card-minimal-hover group text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">Email Direct</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors pt-1">
                {personalInfo.email}
              </div>
            </div>
            <div className="pt-2 inline-flex items-center gap-1 text-xs font-bold text-sky-600">
              <span>Envoyer un email</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Phone */}
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="card-minimal rounded-3xl p-6 border border-blue-100 hover:border-blue-300 card-minimal-hover group text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">Téléphone</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                {personalInfo.phone}
              </div>
            </div>
            <div className="pt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
              <span>Appeler / SMS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-minimal rounded-3xl p-6 border border-indigo-100 hover:border-indigo-300 card-minimal-hover group text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">LinkedIn</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors pt-1">
                linkedin.com/in/zmeziane
              </div>
            </div>
            <div className="pt-2 inline-flex items-center gap-1 text-xs font-bold text-indigo-600">
              <span>Voir mon profil</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Location Banner */}
        <div className="mt-8 p-4 rounded-2xl card-minimal text-center text-xs font-medium text-slate-600 flex items-center justify-center gap-2 border border-sky-100">
          <MapPin className="w-4 h-4 text-sky-600" />
          <span>Basé à Rennes, France • Ouvert aux opportunités en présentiel ou hybride</span>
        </div>

      </div>
    </section>
  );
}
