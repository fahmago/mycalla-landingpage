import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhoWeAre from './components/WhoWeAre';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <WhoWeAre />
      <Portfolio />
      <About />
      <Footer />
    </main>
  );
}
