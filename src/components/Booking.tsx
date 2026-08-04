import { Wine, CalendarHeart } from 'lucide-react';
import { CELLAR_BARRELS_IMG } from '@/data/images';

export default function Booking() {
  return (
    <section id="prenota" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={CELLAR_BARRELS_IMG}
          alt="Barricaia"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/95 via-earth-900/85 to-wine-800/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10 bg-gold-300" />
          <span className="text-xs uppercase tracking-[0.35em] text-gold-300 font-semibold">
            Prenota Ora
          </span>
          <span className="h-px w-10 bg-gold-300" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-cream-50 leading-tight text-balance">
          Riserva il tuo posto tra le colline del Collio
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-cream-100/75 leading-relaxed">
          Le esperienze si svolgono su prenotazione. Contattaci per scegliere data, numero di ospiti e
          pacchetto preferito.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+390048100000"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-8 py-4 text-sm font-semibold text-earth-900 shadow-xl shadow-gold-500/25 transition-all duration-300 hover:bg-gold-200 hover:-translate-y-1"
          >
            <CalendarHeart className="h-4 w-4" />
            Prenota Esperienza
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-4 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-cream-50/10"
          >
            <Wine className="h-4 w-4" />
            Scopri i Pacchetti
          </a>
        </div>
      </div>
    </section>
  );
}
