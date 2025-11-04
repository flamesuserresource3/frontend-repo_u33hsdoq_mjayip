import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient + vignette for readability */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),rgba(2,6,23,0)_50%)]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center sm:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-400" />
          Bank-grade security • Family-ready
        </span>

        <h1 className="max-w-4xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Hub Finance
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A modern wealth hub to plan, track, and grow everything you own —
          across accounts, assets, and family members — all in one place.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 shadow/50 shadow-white/20 transition hover:shadow-lg hover:shadow-white/20"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-left text-white/70">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border border-white/20 bg-gradient-to-br from-amber-400 to-pink-500"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-emerald-400" />
            Trusted by families and founders worldwide
          </div>
        </div>
      </div>
    </section>
  );
}
