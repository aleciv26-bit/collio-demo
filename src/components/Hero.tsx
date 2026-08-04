import { ChevronDown, Wine } from 'lucide-react';
import { HERO_IMG } from '@/data/images';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Vigneti del Collio al tramonto"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/55 to-earth-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="h-px w-12 bg-gold-300" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold-300 font-medium">
              Collio · Friuli-Venezia Giulia
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] text-cream-50 text-balance animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            L'eccellenza del Collio nel rispetto della tradizione.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg text-cream-100/85 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            Scopri i nostri vini pluripremiati e vivi un'esperienza sensoriale unica tra le colline del Friuli.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#esperienze"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-8 py-4 text-sm font-semibold text-earth-900 shadow-xl shadow-gold-500/25 transition-all duration-300 hover:bg-gold-200 hover:-translate-y-1"
            >
              <Wine className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Scopri le Degustazioni
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-full border border-cream-100/40 px-8 py-4 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:bg-cream-50/10 hover:border-cream-100/70"
            >
              Contattaci
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#vini"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-100/70 hover:text-gold-300 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scopri</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
