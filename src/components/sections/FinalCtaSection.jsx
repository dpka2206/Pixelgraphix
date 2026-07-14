export default function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-6 py-24 text-foreground md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-accent/25 bg-accent px-5 py-12 text-center text-background sm:rounded-[2rem] sm:px-8 sm:py-16 md:rounded-[2.5rem] md:px-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase opacity-70">
          Let&apos;s Talk
        </p>
        <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s Build Something Extraordinary
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
          Whether you&apos;re creating your next film, launching a new brand, or
          scaling your business with technology, Pixel Graphix is ready to bring
          your vision to life.
        </p>
        <p className="font-display mt-6 text-lg font-semibold tracking-tight md:text-xl">
          Let&apos;s Create. Let&apos;s Innovate. Let&apos;s Grow.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@pixelgraphix.com?subject=Start%20a%20Project"
            className="rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Start a Project
          </a>
          <a
            href="mailto:hello@pixelgraphix.com?subject=Book%20a%20Discovery%20Call"
            className="rounded-full border border-background/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
