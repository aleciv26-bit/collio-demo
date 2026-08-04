import { useState } from 'react';
import { X, Clock, Wine, MapPin, Check, ArrowRight } from 'lucide-react';
import { experiences, type Experience } from '@/data/experiences';

export default function Experiences() {
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <section id="esperienze" className="relative py-24 sm:py-32 bg-earth-900 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-wine-700/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-olive-700/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-300" />
            <span className="text-xs uppercase tracking-[0.35em] text-gold-300 font-semibold">
              I Nostri Pacchetti & Esperienze
            </span>
            <span className="h-px w-10 bg-gold-300" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-cream-50 leading-tight text-balance">
            Degustazioni e Tour indimenticabili
          </h2>
          <p className="mt-5 text-cream-100/70 leading-relaxed">
            Scegli l'esperienza che fa per te. Clicca su un pacchetto per scoprire tutti i dettagli e i prezzi.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <article
              key={exp.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-earth-800 border border-cream-100/10 transition-all duration-500 hover:-translate-y-2 hover:border-gold-300/40 hover:shadow-2xl hover:shadow-black/40"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-800 via-earth-800/30 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-earth-900/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider text-gold-300 font-semibold">
                  {exp.kind === 'Degustazione' ? (
                    <Wine className="h-3 w-3" />
                  ) : (
                    <MapPin className="h-3 w-3" />
                  )}
                  {exp.kind}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display text-xl font-medium text-cream-50 leading-snug">
                  {exp.name}
                </h3>
                <p className="mt-2 text-sm text-cream-100/60 leading-relaxed line-clamp-2">
                  {exp.description}
                </p>

                <div className="mt-auto pt-5 flex items-center justify-between">
                  <span className="text-xs text-cream-100/50 inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {exp.duration}
                  </span>
                  <button
                    onClick={() => setActive(exp)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/50 px-4 py-2 text-xs font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-300 hover:text-earth-900 hover:border-gold-300"
                  >
                    Vedi Prezzo
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && <ExperienceModal exp={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ExperienceModal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-earth-900/80 backdrop-blur-sm animate-fade-in" />

      <div
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto no-scrollbar rounded-t-3xl sm:rounded-3xl bg-cream-50 shadow-2xl animate-slide-up sm:animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={exp.image} alt={exp.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-earth-900/30" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-earth-900/70 backdrop-blur-sm text-cream-50 transition-colors hover:bg-wine-700"
            aria-label="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full bg-gold-300 px-3 py-1 text-[10px] uppercase tracking-wider text-earth-900 font-bold">
            {exp.kind === 'Degustazione' ? <Wine className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
            {exp.kind}
          </span>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <h3 className="font-display text-3xl font-medium text-earth-900 leading-tight">
            {exp.name}
          </h3>

          <div className="mt-4 flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-earth-600">
              <Clock className="h-4 w-4 text-olive-600" />
              {exp.duration}
            </span>
            <span className="h-4 w-px bg-cream-300" />
            <span className="font-display text-3xl font-semibold text-wine-700">
              {exp.price} <span className="text-xl">€</span>
            </span>
          </div>

          <p className="mt-5 text-earth-700 leading-relaxed">{exp.description}</p>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
              Cosa include
            </h4>
            <ul className="space-y-2.5">
              {exp.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-earth-700">
                  <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-olive-100 text-olive-700 shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#prenota"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center rounded-full bg-wine-700 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-wine-600 hover:-translate-y-0.5"
            >
              Prenota questa esperienza
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-cream-300 px-6 py-3.5 text-sm font-semibold text-earth-700 transition-colors hover:bg-cream-100"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
