'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const LightRays = dynamic(() => import('@/components/LightRays'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#e8ff47"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Soft lime falloff into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background via-background/80 to-transparent"
      />

      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-2 pt-20 text-center">
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
