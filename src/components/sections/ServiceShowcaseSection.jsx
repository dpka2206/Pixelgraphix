'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpotlightCard from '@/components/SpotlightCard';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Brand Strategy',
    blurb:
      'We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.',
    animation: '/services/strategy.json',
    tall: true,
    spotlight: 'rgba(232, 255, 71, 0.22)',
    wash: 'from-accent/10',
  },
  {
    title: 'Brand Visual',
    blurb:
      'We create brand materials that speak of your values non-verbally and complement your offering to the market.',
    animation: '/services/visual.json',
    tall: false,
    spotlight: 'rgba(255, 140, 66, 0.2)',
    wash: 'from-secondary/10',
  },
  {
    title: 'Platforms',
    blurb:
      "We think about the big picture and focus primarily on your app's business success. We research deeply, validate thoroughly, and launch confidently.",
    animation: '/services/platforms.json',
    tall: false,
    spotlight: 'rgba(92, 225, 230, 0.2)',
    wash: 'from-cyan/10',
  },
  {
    title: 'Website',
    blurb:
      "We don't just design websites. We build reliable sales & marketing tools that drive predictably good metrics.",
    animation: '/services/website.json',
    tall: true,
    spotlight: 'rgba(232, 255, 71, 0.22)',
    wash: 'from-accent/10',
  },
  {
    title: 'Mobile Apps',
    blurb:
      "We're masters of UX gamification and user engagement. In a world where any app competes with Instagram we make usable products that attract and retain.",
    animation: '/services/mobile.json',
    tall: true,
    spotlight: 'rgba(255, 140, 66, 0.2)',
    wash: 'from-secondary/10',
  },
  {
    title: 'Development',
    blurb:
      "We can take care of your product's implementation, assuring the most efficient usage of time & resources in every decision & each line of code while maintaining seamless operation.",
    animation: '/services/development.json',
    tall: false,
    spotlight: 'rgba(92, 225, 230, 0.2)',
    wash: 'from-cyan/10',
  },
];

export default function ServiceShowcaseSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
          delay: (i % 2) * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const left = services.filter((_, i) => i % 2 === 0);
  const right = services.filter((_, i) => i % 2 === 1);

  return (
    <section
      id="complex-solutions"
      ref={sectionRef}
      className="section-band-accent relative px-5 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto mb-12 max-w-6xl md:mb-16">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          Services
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
          Complex solutions, crafted{' '}
          <span className="text-accent">end to end</span>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Whether you need a full-scale partner or a specialist for one piece —
          we design, ship, and refine with the same care.
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:hidden">
        {services.map((service, index) => (
          <div
            key={service.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-x-6 lg:gap-x-8 md:grid">
        <div className="flex flex-col gap-6 lg:gap-8">
          {left.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[i * 2] = el;
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:mt-24 lg:gap-8">
          {right.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[i * 2 + 1] = el;
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <SpotlightCard
      className={`custom-spotlight-card flex w-full flex-col rounded-[1.75rem] border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-white/20 sm:rounded-[2rem] sm:p-8 md:rounded-[2.5rem] md:p-10 ${
        service.tall
          ? 'min-h-0 md:min-h-[520px]'
          : 'min-h-0 md:min-h-[440px]'
      }`}
      spotlightColor={service.spotlight}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${service.wash} to-transparent`}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="text-center">
          <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            {service.title}
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted sm:mt-4 md:text-base">
            {service.blurb}
          </p>
        </div>

        <div
          className={`mt-6 flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black/20 sm:mt-8 ${
            service.tall
              ? 'min-h-[160px] sm:min-h-[200px] md:min-h-[240px]'
              : 'min-h-[140px] sm:min-h-[160px] md:min-h-[180px]'
          }`}
        >
          <LottieVisual src={service.animation} />
        </div>
      </div>
    </SpotlightCard>
  );
}

function LottieVisual({ src }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (alive) setData(json);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [src]);

  if (!data) {
    return <div className="h-40 w-40 animate-pulse rounded-full bg-white/5" />;
  }

  return (
    <Lottie
      animationData={data}
      loop
      className="h-44 w-full max-w-[280px] md:h-52"
    />
  );
}
