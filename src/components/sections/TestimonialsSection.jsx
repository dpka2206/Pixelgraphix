const quotes = [
  {
    text: 'Pixel Graphix completely transformed our brand identity and online presence.',
  },
  {
    text: 'The team handled everything — from video production to our website — with exceptional quality.',
  },
  {
    text: 'Their creative vision and technical expertise helped us achieve measurable business growth.',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-wash-lime relative scroll-mt-24 px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          Testimonials
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
          What Our Clients{' '}
          <span className="text-accent">Say</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {quotes.map((quote) => (
            <blockquote
              key={quote.text}
              className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-surface p-7 md:rounded-[1.75rem] md:p-8"
            >
              <p className="font-display text-xl leading-snug font-semibold tracking-tight text-foreground md:text-2xl">
                &ldquo;{quote.text}&rdquo;
              </p>
              <div className="mt-8 h-1 w-10 bg-accent" />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
