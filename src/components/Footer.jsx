import BrandMarkBanner from '@/components/BrandMarkBanner';

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

/**
 * Footer links sit above the sticky PIXELGRAPHIX mark.
 * Scroll down → panel lifts off the wordmark (overlay opens).
 * Scroll up → panel covers the wordmark first, then continues up.
 */
export default function Footer() {
  return (
    <footer className="relative isolate w-full text-foreground">
      {/* Overlay panel on top of the brand mark */}
      <div className="footer-panel relative z-10 border-t border-white/10 bg-background shadow-[0_28px_80px_rgba(0,0,0,0.65)]">
        <div className="px-5 pt-12 pb-6 sm:px-6 sm:pt-14 sm:pb-7 md:px-10 md:pb-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 min-[480px]:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
            <div className="min-[480px]:col-span-2 lg:col-span-1">
              <a
                href="/"
                className="font-display text-xl font-extrabold tracking-tight uppercase sm:text-2xl"
              >
                Pixel Graphix
              </a>
              <p className="mt-3 text-sm tracking-wide text-muted">
                Creative Studio · Production · IT Solutions
              </p>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                Where Creativity Meets Technology — cinematic production and
                digital systems under one roof.
              </p>
            </div>

            <FooterCol title="Quick Links" links={quickLinks} />
            <FooterCol title="Services" links={serviceLinks} />
            <FooterCol title="Follow Us" links={socialLinks} />
          </div>

          <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-5 text-xs text-muted sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Pixel Graphix. All rights reserved.
            </p>
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
        </div>
      </div>

      {/* Sticky brand mark underneath the panel */}
      <BrandMarkBanner />
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
