'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO =
  "We design, build, automate, and scale digital systems that help brands grow — with absolute clarity, performance, and efficiency at the core.";

/** 5 clients per row — swap for real logos later */
const clients = [
  { name: 'Summit Build', line: 'Construction' },
  { name: 'Harbor Table', line: 'Hospitality' },
  { name: 'Northline Realty', line: 'Real Estate' },
  { name: 'PulseCare', line: 'Healthcare' },
  { name: 'BrightPath Edu', line: 'Education' },
];

const rowTop = [...clients, ...clients, ...clients];
const rowBottom = [
  ...clients.slice().reverse(),
  ...clients.slice().reverse(),
  ...clients.slice().reverse(),
];

/**
 * Combined intro section: manifesto + client rows.
 * Vertical scroll pins this block; top row → right, bottom row → left.
 * When the pin ends, Graphix begins.
 */
export default function ClientsSection() {
  const stageRef = useRef(null);
  const stickyRef = useRef(null);
  const headingRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const sticky = stickyRef.current;
    const heading = headingRef.current;
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    if (!stage || !sticky || !heading || !topRow || !bottomRow) return;

    let split;

    const ctx = gsap.context(() => {
      split = new SplitType(heading, {
        types: 'words, chars',
        tagName: 'span',
      });

      gsap.set(split.chars, { opacity: 0.15 });

      gsap.to(split.chars, {
        opacity: 1,
        ease: 'none',
        stagger: 0.015,
        scrollTrigger: {
          trigger: stage,
          start: 'top 75%',
          end: 'top 25%',
          scrub: true,
        },
      });

      const travel = () => Math.max(window.innerWidth * 0.55, 320);

      gsap.set(topRow, { x: 0 });
      gsap.set(bottomRow, { x: -travel() * 0.2 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1,
          pin: sticky,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(topRow, { x: () => travel(), duration: 1 }, 0).to(
        bottomRow,
        { x: () => -travel(), duration: 1 },
        0
      );
    }, stage);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="clients"
      ref={stageRef}
      className="section-wash-lime relative text-foreground"
      style={{ height: '200vh' }}
    >
      <div
        ref={stickyRef}
        className="flex h-screen flex-col justify-center overflow-hidden"
      >
        {/* One tight content block — no empty void under the cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <p className="mb-4 font-display text-sm font-semibold tracking-[0.3em] text-accent uppercase">
              Pixel Graphix
            </p>
            <h2
              ref={headingRef}
              className="font-display max-w-4xl text-left text-2xl leading-[1.25] font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {MANIFESTO}
            </h2>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <div
              ref={topRowRef}
              className="flex w-max will-change-transform gap-3 px-3 md:gap-4 md:px-4"
            >
              {rowTop.map((client, index) => (
                <ClientCard
                  key={`top-${client.name}-${index}`}
                  client={client}
                />
              ))}
            </div>

            <div
              ref={bottomRowRef}
              className="flex w-max will-change-transform gap-3 px-3 md:gap-4 md:px-4"
            >
              {rowBottom.map((client, index) => (
                <ClientCard
                  key={`bottom-${client.name}-${index}`}
                  client={client}
                  offset
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client, offset = false }) {
  return (
    <article
      className={`group flex h-28 w-[min(200px,72vw)] shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface px-3 text-center transition-colors duration-300 hover:border-accent/40 hover:bg-accent/5 sm:h-36 sm:w-[min(220px,45vw)] md:h-40 md:w-[calc((100vw-2.5rem)/5)] md:rounded-3xl ${
        offset ? 'translate-x-4 sm:translate-x-6 md:translate-x-10' : ''
      }`}
    >
      <p className="font-display text-sm font-bold tracking-wide text-foreground transition-colors group-hover:text-accent sm:text-sm md:text-base">
        {client.name}
      </p>
      <p className="mt-1.5 text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[10px]">
        {client.line}
      </p>
    </article>
  );
}
