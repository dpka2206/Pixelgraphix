const productionTools = [
  'Adobe Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Blender & Cinema 4D',
  'Photoshop & Illustrator',
  'Lightroom',
  'Adobe Audition',
  'Unreal Engine',
];

const techStack = [
  'React & Next.js',
  'Node.js',
  'Firebase & Supabase',
  'Figma & Framer',
  'Meta Ads Manager',
  'Google Analytics',
  'AI Automation Tools',
  'Custom CRM Frameworks',
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          Creative Stack
        </p>
        <h2 className="font-display max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Built with Industry-Leading{' '}
          <span className="text-accent">Tools</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Behind every great project is a powerful set of creative and technical
          tools, chosen for precision, speed, and reliability.
        </p>

        <div className="mt-14 space-y-10">
          <ToolRow label="Production Tools" items={productionTools} />
          <ToolRow label="Technology Stack" items={techStack} reverse />
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Great tools don&apos;t create great work — great people do. We use the
          best technology available to bring ideas to life with precision,
          creativity, and purpose.
        </p>
      </div>
    </section>
  );
}

function ToolRow({ label, items, reverse = false }) {
  const loop = [...items, ...items];

  return (
    <div>
      <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
        {label}
      </p>
      <div className="relative overflow-hidden">
        <div
          className={`flex w-max gap-3 ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
        >
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 rounded-full border border-white/10 bg-surface px-5 py-2.5 text-sm text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
