'use client';

import BorderGlow from '@/components/BorderGlow';

const production = [
  '2D & 3D Animation',
  'Video Editing & Post',
  'Motion Graphics & VFX',
  'Color & Sound Design',
  'Commercial & Brand Films',
  'Short Film Production',
  'Creative Direction',
  'Reels & Social Video',
  'Product & Food Photo',
  'Drone & Cinematic',
];

const itSolutions = [
  'Website Development',
  'Landing Pages & Funnels',
  'UI/UX Design',
  'Brand Identity & Logo',
  'Meta & Google Ads',
  'SEO & Analytics',
  'CRM & Automation',
  'AI Business Solutions',
  'Business Dashboards',
  'Performance Marketing',
];

const GLOW_COLORS = ['#e8ff47', '#c4d63a', '#5ce1e6'];

export default function WhatWeDoSection() {
  return (
    <section
      id="services"
      className="section-band-accent relative scroll-mt-24 px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          What We Do
        </p>
        <h2 className="font-display max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Two Divisions.{' '}
          <span className="text-accent">One Mission.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Helping businesses communicate better, market smarter, and grow faster
          — through the perfect balance of creative production and intelligent
          technology.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <DivisionCard
            eyebrow="IT Solutions"
            title="Pixel"
            href="#pixel"
            cta="Explore IT Solutions"
            items={itSolutions}
          />
          <DivisionCard
            eyebrow="Production"
            title="Graphix"
            href="#graphix"
            cta="View Production Portfolio"
            items={production}
          />
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ eyebrow, title, href, cta, items }) {
  return (
    <BorderGlow
      className="h-full"
      edgeSensitivity={28}
      glowColor="68 95 60"
      backgroundColor="#161616"
      borderRadius={28}
      glowRadius={36}
      glowIntensity={1.1}
      coneSpread={25}
      animated={false}
      colors={GLOW_COLORS}
      fillOpacity={0.45}
    >
      <div className="flex h-full flex-col p-6 sm:p-8 md:p-10">
        <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          {eyebrow}
        </p>
        <h3 className="font-display mt-3 text-3xl font-extrabold tracking-tight uppercase md:text-5xl">
          {title}
        </h3>
        <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-muted sm:px-3 sm:text-xs md:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent sm:mt-10"
        >
          {cta}
          <span aria-hidden>→</span>
        </a>
      </div>
    </BorderGlow>
  );
}
