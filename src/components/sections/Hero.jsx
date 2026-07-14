'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const DotGrid = dynamic(() => import('@/components/DotGrid'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed dots — stay visible through the bottom of the hero */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <DotGrid
          dotSize={5}
          gap={22}
          baseColor="#2a2f14"
          activeColor="#e8ff47"
          proximity={140}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="hero-dot-grid"
        />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-20 pb-16 text-center md:pb-20">
        <p className="mb-6 text-xs font-medium tracking-[0.28em] text-accent uppercase sm:text-sm">
          Creative Studio · Production · IT Solutions
        </p>

        <h1 className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-foreground uppercase sm:text-7xl md:text-8xl lg:text-9xl">
          <a
            href="#pixel"
            className="transition-colors duration-300 hover:text-accent"
          >
            Pixel
          </a>{' '}
          <a
            href="#graphix"
            className="transition-colors duration-300 hover:text-accent"
          >
            Graphix
          </a>
        </h1>

        <p className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
          Where Creativity Meets{' '}
          <span className="text-accent">Technology</span>
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          We craft cinematic visuals, high-performing websites, and growth-driven
          digital solutions that help brands stand out in a competitive world.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#services"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-soft hover:shadow-[0_0_28px_rgba(232,255,71,0.35)]"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-accent/35 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent/10"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
