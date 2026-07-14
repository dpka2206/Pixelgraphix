'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years of Creative Experience' },
  { value: 15, suffix: '+', label: 'Industries Served' },
  { value: 1, suffix: 'M+', label: 'Digital Impressions Generated' },
  { value: 24, suffix: '/7', label: 'Support & Collaboration' },
];

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const valueRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      valueRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        const obj = { n: 0 };

        gsap.to(obj, {
          n: stat.value,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.n)}${stat.suffix}`;
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative scroll-mt-24 px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          Our Impact
        </p>
        <h2 className="font-display max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Numbers That Reflect{' '}
          <span className="text-accent">Our Journey</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Every project represents a partnership, every client represents trust,
          and every result inspires us to build even better.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className="border-t border-white/10 pt-6">
              <p
                ref={(el) => {
                  valueRefs.current[i] = el;
                }}
                className="font-display text-4xl font-extrabold tracking-tight text-accent sm:text-5xl md:text-6xl"
              >
                0{stat.suffix}
              </p>
              <p className="mt-3 text-sm text-muted md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
