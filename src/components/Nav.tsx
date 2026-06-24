import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-4 rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass" : "border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
            <span className="lowercase">icha.ng</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="story-link transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Work with me
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
