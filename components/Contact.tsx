import SectionHeading from "./SectionHeading";

const links = [
  {
    label: "email",
    value: "renleyhutton@gmail.com",
    href: "mailto:renleyhutton@gmail.com",
  },
  {
    label: "github",
    value: "github.com/renhutton",
    href: "https://github.com/renhutton",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/renleyhutton/",
    href: "https://www.linkedin.com/in/renley-hutton/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading number="06" title="contact" />

      <div className="max-w-2xl">
        <p className="text-muted leading-relaxed mb-8">
          I'm currently open to graduate roles in software engineering or adjacent fields. Please reach out if you have an opportunity that you think would be a good fit.
        </p>

        <ul className="space-y-3 font-mono text-sm">
          {links.map((l) => (
            <li key={l.label} className="flex flex-wrap gap-3 items-baseline">
              <span className="text-accent w-20">{l.label}:</span>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-foreground hover:text-accent transition-colors underline-offset-4 hover:underline"
              >
                {l.value}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-6 border-t border-border font-mono text-xs text-muted">
          <span className="text-accent">&gt;</span> built with next.js + tailwind ·
          deployed on vercel
        </div>
      </div>
    </section>
  );
}
