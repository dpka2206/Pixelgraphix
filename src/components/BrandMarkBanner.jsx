'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Compact PIXELGRAPHIX stripe under the footer panel.
 * Panel overlays this mark; scroll opens it with light, reverse closes it first.
 */
export default function BrandMarkBanner() {
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const lightRef = useRef(null);
  const liftRef = useRef(null);
  const markRef = useRef(null);
  const accentsRef = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    const lift = liftRef.current;
    const mark = markRef.current;
    const line = lineRef.current;
    const light = lightRef.current;
    if (!stage || !track || !lift || !mark) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const accents = accentsRef.current.filter(Boolean);

    const fitMark = () => {
      // Reset scale, size large, then shrink to fit full word incl. X + ®
      mark.style.transform = 'scale(1)';
      mark.style.fontSize = '';

      const vw = window.innerWidth;
      const basePx = Math.min(Math.max(vw * 0.11, 40), 140);
      mark.style.fontSize = `${basePx}px`;

      const budget = track.clientWidth * 0.96;
      const width = mark.scrollWidth || 1;
      const scale = Math.min(1, budget / width);
      mark.style.transform = `scale(${scale})`;
      mark.style.transformOrigin = 'center bottom';
    };

    fitMark();

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.set(lift, { y: 28, opacity: 0.25 });
      gsap.set(line, { opacity: 0, scaleX: 0.35 });
      gsap.set(light, { opacity: 0 });
      gsap.set(accents, { opacity: 0.45 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stage,
          start: 'top 92%',
          end: 'bottom bottom',
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      });

      tl.to(line, { opacity: 1, scaleX: 1, duration: 0.35 }, 0)
        .to(light, { opacity: 1, duration: 0.45 }, 0.05)
        .to(lift, { y: 0, opacity: 1, duration: 0.7 }, 0.08)
        .to(accents, { opacity: 1, duration: 0.3 }, 0.25);

      accents.forEach((el, i) => {
        gsap.to(el, {
          textShadow:
            '0 0 24px rgba(232,255,71,0.55), 0 0 56px rgba(232,255,71,0.2)',
          duration: 2.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 0.35 + i * 0.15,
        });
      });
    }, stage);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        fitMark();
        ScrollTrigger.refresh();
      }, 60);
    };

    window.addEventListener('resize', onResize);
    document.fonts?.ready?.then(() => {
      fitMark();
      ScrollTrigger.refresh();
    });

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  const setAccent = (i) => (el) => {
    accentsRef.current[i] = el;
  };

  return (
    <div
      ref={stageRef}
      className="brand-mark sticky bottom-0 z-0 bg-background select-none"
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="relative mx-auto w-full overflow-x-clip px-4 pt-5 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-6 sm:pb-3 md:px-8 md:pt-7 md:pb-4"
      >
        <div
          ref={lineRef}
          className="pointer-events-none absolute top-0 left-1/2 h-px w-[min(90vw,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_20px_1px_rgba(232,255,71,0.35)]"
        />

        <div
          ref={lightRef}
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(232,255,71,0.18)_0%,transparent_70%)] sm:h-28"
        />

        <div ref={liftRef} className="relative z-[1] flex justify-center will-change-transform">
          <p
            ref={markRef}
            className="font-display w-max text-center text-[11vw] leading-none font-extrabold tracking-[-0.04em] text-[#cfcfc8] uppercase whitespace-nowrap sm:text-[9vw] md:text-[8.2vw]"
          >
            <span ref={setAccent(0)} className="inline-block text-accent">p</span>ixel<span ref={setAccent(1)} className="inline-block text-accent">g</span>raphix<sup className="ml-[0.04em] align-super text-[0.15em] font-semibold tracking-normal text-[#cfcfc8] normal-case">®</sup>
          </p>
        </div>
      </div>
    </div>
  );
}
