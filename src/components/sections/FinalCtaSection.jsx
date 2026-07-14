'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCtaSection() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const glowRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const bodyRef = useRef(null);
  const taglineRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const heading = headingRef.current;
    if (!section || !panel || !heading) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let split;

    const ctx = gsap.context(() => {
      const glow = glowRef.current;
      const label = labelRef.current;
      const body = bodyRef.current;
      const tagline = taglineRef.current;
      const actions = actionsRef.current;

      if (reduceMotion) {
        gsap.set(panel, { opacity: 1, clearProps: 'transform' });
        return;
      }

      split = new SplitType(heading, {
        types: 'words, chars',
        tagName: 'span',
      });

      gsap.set(panel, { scale: 0.92, y: 56, opacity: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.6 });
      gsap.set(label, { y: 16, opacity: 0 });
      gsap.set(split.chars, { y: '0.55em', opacity: 0 });
      gsap.set(body, { y: 20, opacity: 0 });
      gsap.set(tagline, { y: 16, opacity: 0 });
      gsap.set(actions?.children ?? [], { y: 18, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      });

      tl.to(panel, {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power4.out',
      })
        .to(
          glow,
          { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
          0.15
        )
        .to(label, { y: 0, opacity: 1, duration: 0.45 }, 0.35)
        .to(
          split.chars,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.012,
            ease: 'power3.out',
          },
          0.42
        )
        .to(body, { y: 0, opacity: 1, duration: 0.55 }, 0.7)
        .to(tagline, { y: 0, opacity: 1, duration: 0.5 }, 0.85)
        .to(
          actions?.children ?? [],
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
          },
          0.95
        );

      gsap.to(glow, {
        scale: 1.12,
        opacity: 0.55,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });

      gsap.to(panel, {
        boxShadow:
          '0 0 0 1px rgba(12,12,12,0.08), 0 28px 80px -28px rgba(232,255,71,0.45)',
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
    }, section);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative scroll-mt-24 px-6 py-24 text-foreground md:px-10 md:py-32"
    >
      <div
        ref={panelRef}
        style={{ opacity: 0 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-accent/25 bg-accent px-5 py-12 text-center text-background shadow-[0_0_0_1px_rgba(12,12,12,0.06),0_24px_60px_-30px_rgba(232,255,71,0.28)] will-change-transform sm:rounded-[2rem] sm:px-8 sm:py-16 md:rounded-[2.5rem] md:px-16 md:py-20"
      >
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute -top-1/3 left-1/2 h-[70%] w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35)_0%,transparent_68%)] opacity-70"
        />
        <div
          aria-hidden
          className="cta-sheen pointer-events-none absolute inset-0 opacity-40"
        />

        <div className="relative">
          <p
            ref={labelRef}
            className="text-xs font-semibold tracking-[0.28em] uppercase opacity-70"
          >
            Let&apos;s Talk
          </p>
          <h2
            ref={headingRef}
            className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Let&apos;s Build Something Extraordinary
          </h2>
          <p
            ref={bodyRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg"
          >
            Whether you&apos;re creating your next film, launching a new brand, or
            scaling your business with technology, Pixel Graphix is ready to bring
            your vision to life.
          </p>
          <p
            ref={taglineRef}
            className="font-display mt-6 text-lg font-semibold tracking-tight md:text-xl"
          >
            Let&apos;s Create. Let&apos;s Innovate. Let&apos;s Grow.
          </p>

          <div
            ref={actionsRef}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="mailto:hello@pixelgraphix.com?subject=Start%20a%20Project"
              className="rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-[transform,opacity] duration-300 ease-out will-change-transform hover:scale-[1.04] hover:opacity-90 active:scale-[0.98]"
            >
              Start a Project
            </a>
            <a
              href="mailto:hello@pixelgraphix.com?subject=Book%20a%20Discovery%20Call"
              className="rounded-full border border-background/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-background transition-[transform,background-color,border-color] duration-300 ease-out will-change-transform hover:scale-[1.04] hover:border-background/50 hover:bg-background/10 active:scale-[0.98]"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
