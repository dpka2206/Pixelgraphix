'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** All Pixel card tags use accent yellow */
const TAG_STYLE = 'text-accent border-accent/25 bg-accent/10';
const GLOW_STYLE = 'bg-accent/15';
const DOT_STYLE = 'bg-accent';

/** 12 services → 6 staggered pairs */
const services = [
  {
    name: 'Website Development',
    blurb: 'Modern, responsive sites built for speed, SEO, and conversion.',
    accent: '01',
    tag: 'Web',
  },
  {
    name: 'Landing Pages & Sales Funnels',
    blurb: 'High-intent pages designed to capture leads and close deals.',
    accent: '02',
    tag: 'Funnels',
  },
  {
    name: 'UI/UX Design',
    blurb: 'Interfaces that feel effortless and guide users to action.',
    accent: '03',
    tag: 'Product',
  },
  {
    name: 'Brand Identity & Logo Design',
    blurb: 'Visual systems that make your brand unmistakable.',
    accent: '04',
    tag: 'Brand',
  },
  {
    name: 'Meta Ads & Google Ads',
    blurb: 'Paid campaigns structured for qualified traffic and ROI.',
    accent: '05',
    tag: 'Paid Media',
  },
  {
    name: 'SEO & Performance Analytics',
    blurb: 'Organic visibility and insights that keep growth compounding.',
    accent: '06',
    tag: 'Growth',
  },
  {
    name: 'CRM Development & Automation',
    blurb: 'Custom CRM workflows that keep every lead organized.',
    accent: '07',
    tag: 'Systems',
  },
  {
    name: 'Marketing Automation',
    blurb: 'Nurture sequences and triggers that run without handoffs.',
    accent: '08',
    tag: 'Automation',
  },
  {
    name: 'AI Business Solutions',
    blurb: 'Practical AI systems that save time and unlock scale.',
    accent: '09',
    tag: 'AI',
  },
  {
    name: 'Business Dashboards',
    blurb: 'Live views of the metrics that actually move the business.',
    accent: '10',
    tag: 'Data',
  },
  {
    name: 'Performance Marketing',
    blurb: 'Full-funnel acquisition focused on outcomes, not vanity.',
    accent: '11',
    tag: 'Performance',
  },
  {
    name: 'E-Commerce Experiences',
    blurb: 'Online stores and product journeys engineered to convert.',
    accent: '12',
    tag: 'Commerce',
  },
];

const pairs = [];
for (let i = 0; i < services.length; i += 2) {
  pairs.push([services[i], services[i + 1]]);
}

export default function GraphixSection() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 640px)', () => {
        const rows = rowsRef.current.filter(Boolean);

        rows.forEach((row) => {
          const left = row.querySelector('[data-side="left"]');
          const right = row.querySelector('[data-side="right"]');
          if (!left || !right) return;

          gsap.set(left, { xPercent: -40, rotate: -3 });
          gsap.set(right, { xPercent: 40, rotate: 3 });

          const tl = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: row,
              start: 'top 90%',
              end: 'top 35%',
              scrub: 1.6,
              invalidateOnRefresh: true,
            },
          });

          tl.to(left, { xPercent: 0, rotate: -1.5 }, 0).to(
            right,
            { xPercent: 0, rotate: 1.5 },
            0
          );
        });
      });

      mm.add('(max-width: 639px)', () => {
        const rows = rowsRef.current.filter(Boolean);

        rows.forEach((row) => {
          const cards = row.querySelectorAll('[data-side]');
          cards.forEach((card) => {
            gsap.from(card, {
              y: 40,
              opacity: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                once: true,
              },
            });
          });
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pixel"
      ref={sectionRef}
      className="section-wash-warm relative scroll-mt-24 text-foreground"
    >
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-6 md:max-w-6xl md:px-10 md:pt-20 md:pb-8">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          Pixel
        </p>
        <h2 className="font-display text-left text-4xl font-extrabold tracking-tight text-foreground uppercase sm:text-7xl md:text-8xl">
          Pixel
        </h2>
        <p className="mt-5 max-w-xl text-left text-base leading-relaxed text-muted md:text-lg">
          Websites, growth systems, automation, and AI — engineered under one
          roof so your brand ships faster and scales smarter.
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 pb-8 sm:gap-6 sm:px-6 md:max-w-6xl md:gap-6 md:px-10 md:pb-10">
        {pairs.map(([left, right], rowIndex) => {
          const rightLower = rowIndex % 2 === 0;
          const isLast = rowIndex === pairs.length - 1;

          return (
            <div
              key={left.name}
              ref={(el) => {
                rowsRef.current[rowIndex] = el;
              }}
              className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-x-5 md:gap-x-6"
            >
              <article
                data-side="left"
                className={`group relative flex min-h-[200px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:border-white/20 will-change-transform sm:min-h-[240px] sm:p-7 md:min-h-[280px] md:rounded-[2rem] md:p-9 ${
                  rightLower || isLast ? 'sm:mt-0' : 'sm:mt-5 md:mt-6'
                }`}
              >
                <CardFace service={left} />
              </article>

              <article
                data-side="right"
                className={`group relative flex min-h-[200px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:border-white/20 will-change-transform sm:min-h-[240px] sm:p-7 md:min-h-[280px] md:rounded-[2rem] md:p-9 ${
                  rightLower && !isLast ? 'sm:mt-5 md:mt-6' : 'sm:mt-0'
                }`}
              >
                <CardFace service={right} />
              </article>
            </div>
          );
        })}
      </div>

      <div className="mx-auto flex max-w-5xl justify-center px-5 pb-12 sm:px-6 md:max-w-6xl md:justify-end md:px-10 md:pb-14">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-soft hover:shadow-[0_0_28px_rgba(232,255,71,0.35)]"
        >
          Start a Project
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}

function CardFace({ service }) {
  return (
    <>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-accent" />
      <div
        className={`pointer-events-none absolute -top-24 -right-20 h-48 w-48 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100 ${GLOW_STYLE}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${TAG_STYLE}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${DOT_STYLE}`} />
          {service.tag}
        </span>
        <span className="font-display text-xs text-muted/70">{service.accent}</span>
      </div>

      <div className="relative mt-auto pt-10">
        <h3 className="font-display text-2xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {service.name}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted md:text-base">
          {service.blurb}
        </p>
      </div>
    </>
  );
}
