import { useEffect, useState } from 'react';
import { Menu, X, Wine } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'I Nostri Vini', href: '#vini' },
  { label: 'Degustazioni & Tour', href: '#esperienze' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-earth-900/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 rounded-full border border-gold-300/70 text-gold-300 transition-transform duration-500 group-hover:rotate-12">
            <Wine className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-wide text-cream-50">
              Collio Demo
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-gold-300/90">
              Cantina Vinicola
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-cream-100/90 hover:text-gold-300 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#prenota"
            className="hidden sm:inline-flex items-center rounded-full bg-gold-300 px-6 py-2.5 text-sm font-semibold text-earth-900 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:bg-gold-200 hover:shadow-gold-400/40 hover:-translate-y-0.5"
          >
            Prenota Esperienza
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-cream-100/30 text-cream-50"
            aria-label="Apri menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 mt-3' : 'max-h-0'
        }`}
      >
        <ul className="mx-4 rounded-2xl bg-earth-900/98 backdrop-blur-md border border-cream-100/10 p-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-cream-100 hover:bg-cream-100/10 hover:text-gold-300 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#prenota"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-gold-300 px-4 py-3 text-center font-semibold text-earth-900"
            >
              Prenota Esperienza
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
