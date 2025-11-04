import React from 'react';
import { Check, CreditCard, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    features: [
      'Link up to 3 accounts',
      'Manual assets & liabilities',
      'Basic budgeting',
      'Single user',
    ],
  },
  {
    name: 'Family',
    price: '$14/mo',
    highlight: true,
    features: [
      'Unlimited accounts',
      'Shared family spaces',
      'Smart automation & alerts',
      'Priority support',
    ],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    highlight: false,
    features: [
      'Advanced reporting',
      'Export & audit trail',
      'Advisor collaboration',
      'Custom rules',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.10),rgba(2,6,23,0)_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
            <CreditCard className="h-4 w-4 text-sky-400" />
            Simple pricing
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pick a plan that grows with your goals
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white/[0.03] p-6 transition ${
                tier.highlight
                  ? 'border-white/20 shadow-xl shadow-sky-500/10 ring-1 ring-sky-400/20'
                  : 'border-white/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  <Star className="h-3.5 w-3.5" /> Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <div className="mt-2 text-3xl font-bold text-white">{tier.price}</div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-white text-slate-900 hover:shadow-lg hover:shadow-white/20'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {tier.highlight ? 'Start family plan' : 'Choose plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
