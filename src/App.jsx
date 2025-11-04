import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <div id="stats">
        <Stats />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}
