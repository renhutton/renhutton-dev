import SectionHeading from "./SectionHeading";

const groups = [
  {
    name: "languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL"],
  },
  {
    name: "ml / computer vision",
    items: ["MediaPipe", "OpenCV", "scikit-learn", "NumPy", "Pandas"],
  },
  {
    name: "web",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    name: "tools",
    items: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading number="03" title="skills" />

      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div
            key={g.name}
            className="border border-border bg-surface/50 p-6"
          >
            <h3 className="font-mono text-accent text-sm mb-4">
              # {g.name}
            </h3>
            <ul className="flex flex-wrap gap-2 font-mono text-xs">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="px-2 py-1 border border-border text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
