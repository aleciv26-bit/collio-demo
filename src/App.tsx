import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
