'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="pointer-events-none fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:top-6">
      <div className="pointer-events-auto relative">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/50 px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:gap-4 sm:px-5">
          <a href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-[10px] font-bold tracking-tight text-accent"
            >
              PG
            </span>
            <span className="font-display truncate text-sm font-semibold tracking-wide text-foreground sm:text-base">
              Pixel Graphix
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-all hover:bg-accent-soft hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] sm:inline-flex"
            >
              Start a Project
            </a>

            <a
              href="#contact"
              className="rounded-full bg-accent px-3 py-2 text-xs font-medium text-background transition-all hover:bg-accent-soft sm:hidden"
            >
              Start
            </a>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:border-accent/40 hover:text-accent md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-200 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 block h-0.5 w-full bg-current transition-opacity duration-200 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-200 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="absolute top-[calc(100%+0.75rem)] left-0 right-0 overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-background"
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
