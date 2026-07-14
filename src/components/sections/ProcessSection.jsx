'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LineSidebar from '@/components/LineSidebar';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Discover',
    blurb:
      'We begin by understanding your business, audience, competitors, and goals.',
  },
  {
    title: 'Strategize',
    blurb:
      'Research, planning, creative direction, and technical architecture — mapped before a single frame is shot or a single line of code is written.',
  },
  {
    title: 'Design',
    blurb:
      'Crafting visual identities, user experiences, storyboards, and creative assets that set the tone for the entire project.',
  },
  {
    title: 'Develop',
    blurb:
      'Building websites, editing videos, creating animations, and integrating the digital systems your business runs on.',
  },
  {
    title: 'Launch',
    blurb:
      'Testing, refining, and delivering a polished, production-ready final product — on time, every time.',
  },
  {
    title: 'Grow',
    blurb:
      'Continuous optimization, marketing support, and long-term collaboration so results keep compounding after launch.',
  },
];

const labels = steps.map((s) => s.title);

export default function ProcessSection() {
  const stageRef = useRef(null);
  const stickyRef = useRef(null);
  const [active, setActive] = useState(0);
  const [compact, setCompact] = useState(false);
  const current = steps[active] ?? steps[0];

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const sticky = stickyRef.current;
    if (!stage || !sticky) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stage,
        start: 'top top',
        end: () =>
          `+=${Math.max(
            steps.length *
              window.innerHeight *
              (window.matchMedia('(max-width: 1023px)').matches ? 0.45 : 0.7),
            1
          )}`,
        pin: sticky,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const next = Math.min(
            steps.length - 1,
            Math.floor(self.progress * steps.length)
          );
          setActive((prev) => (prev === next ? prev : next));
        },
      });
    }, stage);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={stageRef}
      className="section-wash-warm relative scroll-mt-24 text-foreground"
    >
      <div
        ref={stickyRef}
        className="flex min-h-screen flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
            Our Process
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            From Idea to <span className="text-accent">Impact</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Every great project follows a thoughtful, transparent process — from
            the first conversation to long-term growth.
          </p>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-[minmax(220px,0.9fr)_1.2fr] lg:gap-16">
            <LineSidebar
              items={labels}
              accentColor="#e8ff47"
              textColor="#9a9a94"
              markerColor="#2a2a2a"
              showIndex
              showMarker
              proximityRadius={compact ? 70 : 100}
              maxShift={compact ? 12 : 28}
              falloff="smooth"
              markerLength={compact ? 28 : 56}
              markerGap={compact ? 6 : 8}
              tickScale={0.45}
              scaleTick
              itemGap={compact ? 16 : 28}
              fontSize={compact ? 0.95 : 1.15}
              smoothing={100}
              defaultActive={0}
              activeIndex={active}
              onItemClick={(index) => setActive(index)}
              className="font-display"
            />

            <article
              key={active}
              className="rounded-[1.5rem] border border-white/10 bg-surface p-6 transition-opacity duration-300 sm:rounded-[1.75rem] sm:p-8 md:rounded-[2rem] md:p-10"
            >
              <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent uppercase">
                Step {String(active + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display mt-3 text-2xl font-extrabold tracking-tight sm:mt-4 sm:text-3xl md:text-5xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
                {current.blurb}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
