interface SectionHeadingProps {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  tag,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-brand-orange">
        {tag}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}
