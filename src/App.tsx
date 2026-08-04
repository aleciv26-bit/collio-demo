import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-50 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Booking />
      </main>
      <Footer />

      {/* ========================================================= */}
      {/* WIDGET WINEASSISTANT FLUTTUANTE                           */}
      {/* ========================================================= */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-3 bg-rose-950 hover:bg-rose-900 border border-rose-800 text-amber-100 px-5 py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
          >
            <span className="text-2xl">🍷</span>
            <div className="text-left">
              <p className="text-[10px] text-rose-300 font-medium uppercase tracking-wider">Assistente Virtuale</p>
              <p className="text-sm font-semibold">Chiedi a WineAssistant</p>
            </div>
          </button>
        ) : (
          <div className="w-[360px] sm:w-[400px] h-[550px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Header Chat */}
            <div className="bg-rose-950 border-b border-rose-900/50 p-4 flex justify-between items-center text-amber-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-900/80 border border-rose-700 flex items-center justify-center text-sm">
                  🍷
                </div>
                <div>
                  <h3 className="font-bold text-sm">WineAssistant</h3>
                  <p className="text-[11px] text-rose-300">Sommelier & Prenotazioni</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-rose-200 hover:text-white font-bold px-2 cursor-pointer"
                aria-label="Chiudi chat"
              >
                ✕
              </button>
            </div>

            {/* Iframe collegato alla WebApp Vercel */}
            <iframe
              src="https://wineassistant.vercel.app"
              className="w-full flex-1 border-none"
              title="WineAssistant Chat"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
