interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="font-mono text-accent text-sm">{number}.</span>
      <h2 className="font-mono text-2xl sm:text-3xl text-foreground">
        <span className="text-accent">&gt;</span> {title}
      </h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
  );
}
