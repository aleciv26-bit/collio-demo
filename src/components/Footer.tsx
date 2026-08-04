import { Wine, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const hours = [
  { d: 'Lun – Ven', h: '10:00 – 19:00' },
  { d: 'Sabato', h: '10:00 – 20:00' },
  { d: 'Domenica', h: 'Chiuso' },
];

export default function Footer() {
  return (
    <footer id="contatti" className="bg-earth-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-full border border-gold-300/70 text-gold-300">
                <Wine className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold text-cream-50">Collio Demo</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-gold-300/90">
                  Cantina Vinicola
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm text-cream-100/60 leading-relaxed max-w-xs">
              L'eccellenza del Collio nel rispetto della tradizione. Vini pluripremiati dal 1962.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid place-items-center h-10 w-10 rounded-full border border-cream-100/20 text-cream-100/80 transition-all hover:bg-gold-300 hover:text-earth-900 hover:border-gold-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid place-items-center h-10 w-10 rounded-full border border-cream-100/20 text-cream-100/80 transition-all hover:bg-gold-300 hover:text-earth-900 hover:border-gold-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium text-cream-50 mb-5">Contatti</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-cream-100/70">
                <MapPin className="h-4 w-4 mt-0.5 text-gold-300 shrink-0" />
                <span>Via dei Vigneti 12, Collio, Friuli-Venezia Giulia, Italia</span>
              </li>
              <li>
                <a href="tel:+390048100000" className="flex items-center gap-3 text-cream-100/70 hover:text-gold-300 transition-colors">
                  <Phone className="h-4 w-4 text-gold-300 shrink-0" />
                  +39 0481 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@colliodemo.it" className="flex items-center gap-3 text-cream-100/70 hover:text-gold-300 transition-colors">
                  <Mail className="h-4 w-4 text-gold-300 shrink-0" />
                  info@colliodemo.it
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-medium text-cream-50 mb-5">Orari di Apertura</h4>
            <ul className="space-y-3 text-sm">
              {hours.map((row) => (
                <li key={row.d} className="flex items-center justify-between gap-3 text-cream-100/70">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-gold-300" />
                    {row.d}
                  </span>
                  <span className={row.h === 'Chiuso' ? 'text-wine-300' : 'text-cream-50'}>
                    {row.h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-lg font-medium text-cream-50 mb-5">Navigazione</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'I Nostri Vini', href: '#vini' },
                { label: 'Degustazioni & Tour', href: '#esperienze' },
                { label: 'Prenota Esperienza', href: '#prenota' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-cream-100/70 hover:text-gold-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-cream-100/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-100/50">
            © {new Date().getFullYear()} Collio Demo · Cantina Vinicola. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
