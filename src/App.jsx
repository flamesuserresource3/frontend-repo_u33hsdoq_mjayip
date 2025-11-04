import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <Features />
      <section className="relative w-full bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <h3 className="text-2xl font-semibold">Built for clarity and confidence</h3>
          <p className="mt-3 text-white/70">
            Hub Finance brings your accounts, assets, and family planning together in one elegant dashboard.
            Stay organized, automate the busy work, and make smarter decisions with real‑time insights.
          </p>
        </div>
      </section>
      <Pricing />
      <Footer />
    </div>
  );
}
