import SectionHeading from "./SectionHeading";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
}

const projects: Project[] = [
  {
    title: "'Hands On' - Gesture-Based Surgical Interface",
    description:
      "An in-progress capstone project with WellOral: a gesture-based computer system enabling surgeons to access medical information in the operating theatre without physical contact. The system interprets hand movements using machine learning and translates them into real-time computer commands. Built with Google's MediaPipe, integrated with Python and OpenCV. Designed to maintain sterility in clinical environments by removing the need for physical input devices.",
    tech: ["Python", "MediaPipe", "OpenCV", "Machine Learning", "Computer Vision", "Raspberry Pi"],
    githubUrl: "https://github.com/renhutton/CS301.3",
  },
  {
    title: "'PathShield' - Safer Urban Navigation",
    description:
      "A collaboratively built navigation system that is designed to help users plot safer, more informed routes through Auckland city. By integrating traffic data and crime statistics with geospatial mapping, PathShield provides real-time risk assessments for different routes. Built in Python with OSMnx, GeoPandas, and NetworkX.",
    tech: ["Python", "OSMnx", "GeoPandas", "NetworkX", "Data Analysis", "Geospatial Mapping"],
    githubUrl: "https://github.com/Yoshiaroo1/205.2-assessment",
  },
  {
    title: "...",
    description:
      "...",
    tech: ["..."],
    placeholder: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading number="02" title="projects" />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <article
            key={i}
            className={`group border border-border bg-surface/50 p-6 hover:border-accent transition-colors ${project.placeholder ? "opacity-60" : ""
              }`}
          >
            <div className="flex items-start justify-between mb-3 gap-4">
              <h3 className="font-mono text-lg text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 font-mono text-xs shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    [github]
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    [live]
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 border border-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
