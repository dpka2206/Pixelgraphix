'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do you handle both production and IT projects?',
    a: 'Yes. Our team specializes in both creative production and digital technology solutions, so your brand, video, and website all stay perfectly consistent.',
  },
  {
    q: 'Can you build a complete brand from scratch?',
    a: 'Absolutely. We take care of branding, content creation, websites, marketing, and ongoing support — everything a growing business needs to launch with confidence.',
  },
  {
    q: 'Do you work with startups and established businesses?',
    a: 'Yes. We collaborate with startups, small and medium businesses, and enterprise clients across a wide range of industries.',
  },
  {
    q: 'How long does a typical website or video project take?',
    a: 'Timelines depend on scope, but most website builds take 3–6 weeks and most video productions take 1–3 weeks from concept to final delivery. We\'ll give you an exact timeline during discovery.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
          FAQs
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Frequently Asked{' '}
          <span className="text-accent">Questions</span>
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 text-accent transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
