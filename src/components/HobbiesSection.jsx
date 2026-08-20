import React from 'react';
import { hobbies } from '../data/portfolioData';
import { Palette, Paintbrush, Music, Sparkles, Heart } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Paintbrush: Paintbrush,
  Music: Music
};

export default function HobbiesSection() {
  return (
    <section id="loisirs" className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white relative border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-800 text-xs font-bold mb-3">
            <Heart className="w-3.5 h-3.5 text-pink-600" />
            <span>Passions & Univers Créatif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Loisirs & Créativité<span className="text-sky-600">.</span>
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            En dehors de l'ingénierie, je nourris une passion vive pour les arts visuels, le graphisme et la musique.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 rounded-full mt-3" />
        </div>

        {/* Hobbies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Graphisme & Design (Photoshop / Illustrator / Logos / Flyers) */}
          <div className="card-minimal rounded-3xl p-6 border border-purple-100 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-0.5 shadow-md group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-purple-600">
                <Palette className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-bold border border-purple-200">
                Photoshop & Illustrator
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 pt-1">
                Graphisme & Design
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Maîtrise d'<strong>Adobe Photoshop</strong> et <strong>Illustrator</strong>. Création de logos sur mesure pour des entreprises & business, conception de flyers évènementiels et travail d'identité visuelle.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-semibold border border-purple-100">
                Logos Business
              </span>
              <span className="px-2 py-0.5 rounded bg-pink-50 text-pink-700 text-[10px] font-semibold border border-pink-100">
                Design Flyers
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-semibold border border-indigo-100">
                Branding
              </span>
            </div>
          </div>

          {/* Card 2: Dessin, Graffiti & Street Art */}
          <div className="card-minimal rounded-3xl p-6 border border-rose-100 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-red-500 p-0.5 shadow-md group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-rose-600">
                <Paintbrush className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold border border-rose-200">
                Art Visuel & Coulors
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 pt-1">
                Dessin, Graffiti & Street Art
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Je dessine depuis mon enfance. Passionné par l'univers du <strong>graffiti</strong>, du <strong>street art</strong> et la dynamique des <strong>couleurs vivantes</strong>. J'aime expérimenter les formes, les typographies urbaines et les harmonies de couleurs.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 text-[10px] font-semibold border border-rose-100">
                Dessin d'enfance
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-semibold border border-amber-100">
                Graffiti Culture
              </span>
              <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 text-[10px] font-semibold border border-red-100">
                Couleurs Vives
              </span>
            </div>
          </div>

          {/* Card 3: Guitare */}
          <div className="card-minimal rounded-3xl p-6 border border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 p-0.5 shadow-md group-hover:scale-110 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-sky-600">
                <Music className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold border border-sky-200">
                Musique & Rythme
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 pt-1">
                Pratique de la Guitare
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Pratique régulière de la <strong>guitare</strong>. La musique m'apporte un équilibre, développe ma créativité, ma concentration et la persévérance.
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 text-[10px] font-semibold border border-sky-100">
                Guitare
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-100">
                Créativité Musicale
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
