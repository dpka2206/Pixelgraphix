export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 py-20 text-foreground md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm tracking-[0.25em] text-accent uppercase">
            About Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Building Brands Through Creativity &{' '}
            <span className="text-accent">Innovation</span>
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
          <p>
            At Pixel Graphix, we believe every brand deserves both exceptional
            storytelling and cutting-edge technology. We are a full-service video
            production company and web design agency under one roof — which means
            no handoffs, no miscommunication between your creative team and your
            development team, and no compromise on quality.
          </p>
          <p>
            From high-end video production, motion graphics, and 3D animation to
            website development, CRM systems, Meta ads management, and AI-powered
            business automation, we help businesses create, launch, and scale with
            confidence. Whether you&apos;re a startup building your first brand
            identity or an established company ready for a digital transformation,
            we become your long-term creative and technology partner.
          </p>
        </div>
      </div>
    </section>
  );
}
