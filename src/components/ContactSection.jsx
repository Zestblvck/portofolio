import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, ExternalLink, Car } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Section Header */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">Opportunités</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1d1d1f] tracking-tight mt-1">
            Restons en contact.
          </h2>
          <p className="text-base text-[#86868b] max-w-xl mx-auto mt-3">
            À la recherche d'un <span className="font-semibold text-neutral-900">Contrat de Professionnalisation (2026 – 2027)</span> en Data Engineering, Fullstack ou DevOps.
          </p>
        </div>

        {/* Direct Action Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
          
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-6 rounded-3xl card-apple border border-neutral-200/80 space-y-3 hover:border-black/20 transition-all block group"
          >
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-neutral-500">Adresse Email</div>
              <div className="text-sm font-bold text-neutral-900 truncate mt-0.5">{personalInfo.email}</div>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="p-6 rounded-3xl card-apple border border-neutral-200/80 space-y-3 hover:border-black/20 transition-all block group"
          >
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-neutral-500">Téléphone Direct</div>
              <div className="text-sm font-bold text-neutral-900 mt-0.5">{personalInfo.phone}</div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-3xl card-apple border border-neutral-200/80 space-y-3 hover:border-black/20 transition-all block group"
          >
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-neutral-500">Profil LinkedIn</div>
              <div className="text-sm font-bold text-neutral-900 mt-0.5 flex items-center gap-1">
                <span>linkedin.com/in/zmeziane</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>
          </a>

        </div>

        {/* Location & License Badge */}
        <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 inline-flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-700">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-neutral-500" />
            Rennes, France & Mobilité nationale
          </span>
          <span className="flex items-center gap-1.5">
            <Car className="w-4 h-4 text-neutral-500" />
            Permis B (Véhiculé)
          </span>
        </div>

      </div>
    </section>
  );
}
