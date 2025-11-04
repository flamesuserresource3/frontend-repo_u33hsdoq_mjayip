import React from 'react';
import { Shield, Mail, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-blue-500" />
          <div>
            <div className="text-lg font-semibold text-white">Hub Finance</div>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Shield className="h-3.5 w-3.5 text-emerald-400" /> Bank‑grade security
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
        <div className="flex items-center gap-3 text-white/70">
          <a href="#" aria-label="Email" className="rounded-lg border border-white/10 p-2 hover:bg-white/5"><Mail className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="rounded-lg border border-white/10 p-2 hover:bg-white/5"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="GitHub" className="rounded-lg border border-white/10 p-2 hover:bg-white/5"><Github className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-6 text-xs text-white/50 sm:px-8">
        © {new Date().getFullYear()} Hub Finance. All rights reserved.
      </div>
    </footer>
  );
}
