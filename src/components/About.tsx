import { Leaf, Award, Clock } from 'lucide-react';
import { VINEYARD_IMG, CELLAR_IMG } from '@/data/images';

const stats = [
  { icon: Leaf, value: '1962', label: 'Anno di fondazione' },
  { icon: Award, value: '30+', label: 'Premi internazionali' },
  { icon: Clock, value: '4 gen.', label: 'Di winemakers' },
];

export default function About() {
  return (
    <section id="vini" className="relative py-24 sm:py-32 bg-cream-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-earth-900/15">
              <img
                src={VINEYARD_IMG}
                alt="Filari di vite nel Collio"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-10 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-cream-50 hidden sm:block">
              <img src={CELLAR_IMG} alt="Cantina con botti" className="w-full h-40 object-cover" />
            </div>
            <div className="absolute -top-5 -left-3 sm:-left-8 h-20 w-20 rounded-full bg-gold-300/90 grid place-items-center text-earth-900 shadow-lg rotate-12">
              <span className="font-display text-2xl font-semibold">CD</span>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.35em] text-gold-600 font-semibold">
                La Nostra Storia
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-earth-900 leading-tight text-balance">
              Quattro generazioni di passione per il Collio
            </h2>
            <p className="mt-6 text-earth-700 leading-relaxed">
              Nelle colline del Friuli, dove il microclima e il terreno ponca donano carattere unico ai
              nostri vini, coltiviamo i vigneti con metodi sostenibili e vinifichiamo con rispetto per
              la tradizione e l'innovazione.
            </p>
            <p className="mt-4 text-earth-700 leading-relaxed">
              Ogni bottiglia racconta la storia della nostra terra, delle nostre mani e del tempo che
              pazientemente trasforma l'uva in eccellenza.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-cream-100 border border-cream-200 p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold-300"
                >
                  <s.icon className="h-6 w-6 mx-auto text-olive-600" />
                  <div className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-wine-700">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-earth-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
