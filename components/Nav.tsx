"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-accent text-sm tracking-tight hover:opacity-80 transition-opacity"
        >
          ~/renhutton
        </a>
        <ul className="hidden sm:flex items-center gap-6 font-mono text-xs">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
