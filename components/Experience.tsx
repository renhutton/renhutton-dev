import SectionHeading from "./SectionHeading";

interface Role {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    role: "Software Engineering Intern",
    company: "WellOral",
    location: "Wellington, NZ",
    period: "Current",
    bullets: [
      "Designed and developed a gesture-based control system enabling contact-free interaction with computers, built for surgeons in the operating theatre.",
      "Applied machine learning to interpret hand movements and translate them into real-time computer commands.",
      "Built on Google's MediaPipe framework, integrated with Python and OpenCV for gesture detection and processing.",
      "Designed to maintain sterility in clinical environments by removing the need for physical contact with input devices.",
      "Combined a customized 3D-printed rig using AutoDesk Maya to create a user-friendly and practical solution for surgeons.",
    ],
  },
  {
    role: "Barista & Sales Assistant",
    company: "Coffee Supreme",
    location: "Wellington, NZ",
    period: "Current",
    bullets: [
      "Currently at Coffee Supreme, capping off nine years of hospitality experience while completing my software engineering degree.",
      "Balancing full-time study, an internship, and part-time work, demonstrates strong time management and the ability to perform well under pressure.",
      "Communicate clearly and adapt quickly in fast-paced, customer-facing environments.",
      "Built transferable skills in communication, teamwork, and operations that complement my growth as an engineer.",
    ],
  },
  {
    role: "Head Barista",
    company: "Arcimboldi",
    location: "Wellington, NZ",
    period: "2023 - 2025",
    bullets: [
      "Led, trained, and supported team members in developing their barista and service skills.",
      "Managed ordering, stock takes, and floor rotations to ensure everything ran smoothly.",
      "Implemented workflow improvements at the coffee station that increased efficiency for myself and my team.",
      "Developed leadership, communication, and organizational skills during my time in this role.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading number="04" title="experience" />

      <div className="space-y-8">
        {roles.map((r, i) => (
          <article
            key={i}
            className="border-l-2 border-border pl-6 hover:border-accent transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-mono text-foreground">
                {r.role}{" "}
                <span className="text-accent">@ {r.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{r.period}</span>
            </div>
            <div className="font-mono text-xs text-muted mb-3">
              {r.location}
            </div>
            <ul className="space-y-2 text-muted leading-relaxed">
              {r.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-accent font-mono shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
