const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Production', href: '#graphix' },
  { label: 'IT Solutions', href: '#pixel' },
  { label: 'Animation', href: '#graphix' },
  { label: 'Video Editing', href: '#graphix' },
  { label: 'Websites', href: '#pixel' },
  { label: 'CRM', href: '#pixel' },
  { label: 'Meta Ads', href: '#pixel' },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-6 pt-16 pb-10 text-foreground md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="/" className="font-display text-2xl font-extrabold tracking-tight uppercase">
            Pixel Graphix
          </a>
          <p className="mt-3 text-sm tracking-wide text-muted">
            Creative Studio · Production · IT Solutions
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Where Creativity Meets Technology — cinematic production and digital
            systems under one roof.
          </p>
        </div>

        <FooterCol title="Quick Links" links={quickLinks} />
        <FooterCol title="Services" links={serviceLinks} />
        <FooterCol title="Follow Us" links={socialLinks} />
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pixel Graphix. All rights reserved.</p>
        <p>
          Powered by{' '}
          <a
            href="https://editcomedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-accent"
          >
            Editco Media
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
