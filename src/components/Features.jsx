import React from 'react';
import { Shield, Users, PieChart, Zap } from 'lucide-react';

const features = [
  {
    icon: PieChart,
    title: 'Total wealth view',
    desc: 'Link banks, brokerage, crypto, and real assets for a live 360° picture of your net worth.',
    accent: 'from-sky-400 to-blue-500',
  },
  {
    icon: Users,
    title: 'Family accounts',
    desc: 'Invite partners and relatives, set roles and permissions, and plan together with clarity.',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Bank‑grade security',
    desc: 'End‑to‑end encryption, granular access, and SOC2‑aligned practices baked in.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Smart automation',
    desc: 'Auto‑categorization, savings rules, and alerts so you never miss what matters.',
    accent: 'from-fuchsia-400 to-purple-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),rgba(2,6,23,0)_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything in one secure hub
          </h2>
          <p className="mt-3 text-white/70">
            Designed for modern households that want clarity, control, and confidence about their money.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-slate-950`}> 
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl transition group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
