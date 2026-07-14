'use client';

import BorderGlow from '@/components/BorderGlow';

const pillars = [
  {
    num: '01',
    title: 'Creative Excellence',
    blurb:
      'Every project is designed to capture attention and leave a lasting impression, crafted by an in-house team of directors, editors, and designers who treat your brand like our own.',
  },
  {
    num: '02',
    title: 'Technology-Driven',
    blurb:
      'Modern websites and systems engineered for scalability, speed, and automation — built on the same frameworks trusted by top digital product studios.',
  },
  {
    num: '03',
    title: 'End-to-End Execution',
    blurb:
      'From concept and strategy to production, development, launch, and optimization, we manage the entire journey so you deal with one team, not five vendors.',
  },
  {
    num: '04',
    title: 'Results That Matter',
    blurb:
      'We focus on outcomes that move your business forward — engagement, qualified leads, conversions, and long-term, compounding growth.',
  },
];

const GLOW_COLORS = ['#e8ff47', '#c4d63a', '#5ce1e6'];

export default function WhySection() {
  return (
    <section
      id="why"
      className="section-wash-lime relative scroll-mt-24 px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          Why Pixel Graphix
        </p>
        <h2 className="font-display max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          More Than a Service Provider —{' '}
          <span className="text-accent">A Growth Partner</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {pillars.map((pillar) => (
            <BorderGlow
              key={pillar.num}
              className="h-full"
              edgeSensitivity={28}
              glowColor="68 95 60"
              backgroundColor="#161616"
              borderRadius={24}
              glowRadius={32}
              glowIntensity={1.05}
              coneSpread={25}
              animated={false}
              colors={GLOW_COLORS}
              fillOpacity={0.4}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] p-7 md:p-9">
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 rounded-r-sm bg-accent"
                />
                <span className="font-display text-sm text-muted">{pillar.num}</span>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {pillar.blurb}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
