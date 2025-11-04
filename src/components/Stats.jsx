import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Coins, Wallet, Users } from 'lucide-react';

function AnimatedNumber({ from = 0, to = 1000, duration = 2.2, suffix = '' }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [to, duration, count]);

  return (
    <motion.span className="tabular-nums">
      {rounded}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Coins,
      label: 'Assets tracked',
      value: 12500000,
      prefix: '$',
    },
    {
      icon: Wallet,
      label: 'Accounts linked',
      value: 4872,
      prefix: '',
    },
    {
      icon: Users,
      label: 'Families onboard',
      value: 2160,
      prefix: '',
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),rgba(2,6,23,0)_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real momentum, measurable impact
          </h2>
          <p className="mt-3 text-white/70">
            Live counters update as you connect accounts and grow your wealth — feel the energy in every milestone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map(({ icon: Icon, label, value, prefix }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 text-slate-950">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold text-white">
                {prefix}
                <AnimatedNumber to={value} duration={2.8} />
              </div>
              <div className="mt-2 text-sm text-white/70">{label}</div>

              {/* energy pulse */}
              <motion.div
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 blur-2xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
