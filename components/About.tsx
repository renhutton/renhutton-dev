import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeading number="01" title="about" />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m a final-year software engineering student based in{" "}
            <span className="text-accent">Te Whanganui-a-Tara</span>, currently
            building tools that bridge machine learning research and real-world use.
          </p>
          <p>
            Through my current internship at{" "}
            <span className="text-foreground">WellOral</span>, I&apos;m designing a
            gesture-based system that lets surgeons access medical information in
            the operating theatre without physical contact. It&apos;s built on a
            Raspberry Pi 5 using MediaPipe, Python, OpenCV, and machine learning.
          </p>
          <p>
            Driven by interests in{" "}
            <span className="text-accent">computer vision</span> and{" "}
            <span className="text-accent">machine learning</span>, I&apos;m
            passionate about medical AI and its potential to make clinical tools
            safer, faster, and more intuitive. Well-designed software can save
            time in the operating room &mdash; and sometimes lives.
          </p>
          <p>
            Looking for graduate roles in software engineering, machine learning,
            or data analytics &mdash; Wellington region or remote.
          </p>
        </div>

        <div className="font-mono text-sm space-y-2">
          <div className="text-accent">{`// quick notes`}</div>
          <div>
            <span className="text-muted">location:</span> Wellington, NZ
          </div>
          <div>
            <span className="text-muted">status:</span> final year @ YOOBEE Colleges
          </div>
          <div>
            <span className="text-muted">currently:</span> @ WellOral
          </div>
          <div>
            <span className="text-muted">focus:</span> ML, AI, software engineering
          </div>
          <div>
            <span className="text-muted">open to:</span> grad roles, internships
          </div>
        </div>
      </div>
    </section>
  );
}
