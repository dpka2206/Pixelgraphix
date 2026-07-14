'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Graphix — Production cards with Buzzworthy-style focus scale:
 * cards shrink when off-center and grow + lift when they enter the middle.
 * https://buzzworthystudio.com/
 */
const cards = [
  {
    num: '01',
    title: '2D & 3D Animation',
    blurb:
      'From character work to product motion — we build animations that explain, entertain, and stick in memory.',
  },
  {
    num: '02',
    title: 'Video Editing & Post',
    blurb:
      'Tight cuts, clean pacing, and polish in post. We shape raw footage into stories that hold attention.',
  },
  {
    num: '03',
    title: 'Motion Graphics & VFX',
    blurb:
      'Titles, compositing, and visual effects that elevate the frame — seamless craft, never distraction.',
  },
  {
    num: '04',
    title: 'Color & Sound Design',
    blurb:
      'Grade and mix that set mood and clarity. Color that feels cinematic; sound that carries the story.',
  },
  {
    num: '05',
    title: 'Commercial & Brand Films',
    blurb:
      'Campaign films and brand pieces built to convert attention into affinity — sharp concept to final delivery.',
  },
  {
    num: '06',
    title: 'Short Film Production',
    blurb:
      'Narrative shorts with full production support — direction, shoot, and finish under one creative roof.',
  },
  {
    num: '07',
    title: 'Creative Direction',
    blurb:
      'A clear visual north star for every project. We align concept, look, and execution before cameras roll.',
  },
  {
    num: '08',
    title: 'Reels & Social Video',
    blurb:
      'Scroll-stopping content for social — formats tuned for reach, retention, and brand voice on every platform.',
  },
  {
    num: '09',
    title: 'Product & Food Photo',
    blurb:
      'Styled stills that make products and plates irresistible — lighting, composition, and appetite appeal.',
  },
  {
    num: '10',
    title: 'Drone & Cinematic',
    blurb:
      'Aerial and cinematic capture for scale and spectacle — sweeping moves that put your world on screen.',
  },
];

const SCALE_MIN = 0.78;
const SCALE_MAX = 1.08;
const Y_FAR = 48;
const Y_FOCUS = -36;

const SCALE_MIN_MOBILE = 0.88;
const SCALE_MAX_MOBILE = 1.02;
const Y_FAR_MOBILE = 20;
const Y_FOCUS_MOBILE = -12;

export default function GraphixWaySection() {
  const stageRef = useRef(null);
  const stickyRef = useRef(null);
  const fillMaskRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    const sticky = stickyRef.current;
    const fillMask = fillMaskRef.current;
    const track = trackRef.current;
    if (!stage || !sticky || !fillMask || !track) return;

    const cardEls = () => cardRefs.current.filter(Boolean);
    const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

    const ctx = gsap.context(() => {
      const getTravel = () =>
        Math.max(track.scrollWidth - window.innerWidth, 0);

      /** Scale + lift based on distance from viewport center (Buzzworthy focus) */
      const updateFocus = () => {
        const viewCenter = window.innerWidth / 2;
        const maxDist = window.innerWidth * 0.55;
        const mobile = isMobile();
        const sMin = mobile ? SCALE_MIN_MOBILE : SCALE_MIN;
        const sMax = mobile ? SCALE_MAX_MOBILE : SCALE_MAX;
        const yFar = mobile ? Y_FAR_MOBILE : Y_FAR;
        const yFocus = mobile ? Y_FOCUS_MOBILE : Y_FOCUS;

        cardEls().forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const dist = Math.abs(viewCenter - cardCenter);
          const t = 1 - Math.min(dist / maxDist, 1);
          const focus = t * t * (3 - 2 * t);

          gsap.set(card, {
            scale: sMin + (sMax - sMin) * focus,
            y: yFar + (yFocus - yFar) * focus,
            zIndex: Math.round(10 + focus * 20),
            transformOrigin: 'center center',
            force3D: true,
          });
        });
      };

      const mobile = isMobile();
      gsap.set(track, { x: 0 });
      gsap.set(fillMask, { width: '0%' });
      gsap.set(cardEls(), {
        scale: mobile ? SCALE_MIN_MOBILE : SCALE_MIN,
        y: mobile ? Y_FAR_MOBILE : Y_FAR,
        transformOrigin: 'center center',
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${Math.max(getTravel(), 1)}`,
          scrub: 1,
          pin: sticky,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: updateFocus,
          onRefresh: updateFocus,
        },
      });

      tl.to(fillMask, { width: '100%', duration: 1 }, 0);
      tl.to(
        track,
        {
          x: () => -getTravel(),
          duration: 1,
          onUpdate: updateFocus,
        },
        0
      );

      updateFocus();
    }, stage);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener('resize', refresh);
    document.fonts?.ready?.then(refresh);

    return () => {
      window.removeEventListener('resize', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="graphix"
      ref={stageRef}
      className="relative overflow-x-hidden scroll-mt-24 bg-background text-foreground"
    >
      <div
        ref={stickyRef}
        className="relative flex h-screen flex-col justify-center overflow-x-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none"
        >
          <div className="relative leading-none">
            <span
              className="font-display block text-[clamp(6rem,22vw,15rem)] font-extrabold tracking-[-0.05em] lowercase"
              style={{ color: '#1a1a1a' }}
            >
              graphix
            </span>
            <div
              ref={fillMaskRef}
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: '0%' }}
            >
              <span className="font-display block text-[clamp(6rem,22vw,15rem)] font-extrabold tracking-[-0.05em] text-accent lowercase whitespace-nowrap">
                graphix
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-20 mb-2 px-6 md:mb-4 md:px-12">
          <p className="text-sm tracking-[0.28em] text-accent uppercase">
            Production
          </p>
        </div>

        {/* Side padding lets first/last cards reach the focus center */}
        <div className="relative z-20 w-full overflow-x-hidden py-8 sm:py-10 md:py-14">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-6 will-change-transform px-[max(1.25rem,calc(50vw-140px))] sm:gap-10 sm:px-[max(1.5rem,calc(50vw-160px))] md:gap-14 md:px-[max(1.5rem,calc(50vw-190px))] lg:gap-16"
          >
            {cards.map((card, index) => (
              <article
                key={card.num}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex h-[300px] w-[min(280px,82vw)] shrink-0 flex-col justify-between rounded-2xl border border-white/10 p-6 sm:h-[360px] sm:w-[320px] sm:p-7 md:h-[400px] md:w-[380px] md:rounded-[1.25rem] md:p-8 lg:w-[400px]"
                style={{
                  backgroundColor: '#161616',
                  boxShadow: '0 28px 70px rgba(0,0,0,0.55)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: '#e8ff47' }}
                  />
                  <span className="text-[11px] font-medium tracking-[0.22em] text-white/90 uppercase md:text-xs">
                    Prod. No.{card.num}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-[1.2rem] leading-[1.15] font-extrabold tracking-[-0.03em] text-white uppercase sm:text-[1.35rem] md:text-[1.6rem]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a0a09a] sm:mt-4 md:text-[15px]">
                    {card.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
