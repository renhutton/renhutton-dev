import SectionHeading from "./SectionHeading";

interface Qualification {
  degree: string;
  institution: string;
  year: string;
  location: string;
  details: string[];
}

const qualifications: Qualification[] = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "YOOBEE Colleges of Creative Innovation",
    location: "Te Whanganui-a-Tara, New Zealand",
    year: "2024 - 2026",
    details: [
      "GPA: 8.7/9.0",
      "Capstone project with WellOral: gesture-based surgical interface using MediaPipe, Python, and OpenCV",
      "Relevant work: Data Structures, Algorithms, Machine Learning, Computer Vision, Software Architecture",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading number="05" title="education" />

      <div className="space-y-8">
        {qualifications.map((q, i) => (
          <article
            key={i}
            className="border-l-2 border-border pl-6 hover:border-accent transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-mono text-foreground">
                {q.degree}{" "}
                <span className="text-accent">@ {q.institution}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{q.year}</span>
            </div>
            <div className="font-mono text-xs text-muted mb-3">
              {q.location}
            </div>
            <ul className="space-y-2 text-muted leading-relaxed">
              {q.details.map((d, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-accent font-mono shrink-0">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}