const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  return (
    <nav className="pointer-events-none fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 sm:top-6">
      <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5">
        <a href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-[10px] font-bold tracking-tight text-accent"
          >
            PG
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-foreground sm:text-base">
            Pixel Graphix
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-all hover:bg-accent-soft hover:shadow-[0_0_20px_rgba(232,255,71,0.3)]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
