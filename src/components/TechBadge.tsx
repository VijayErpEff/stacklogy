interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#6EE714]/20 bg-[#6EE714]/10 px-3 py-1 font-mono text-xs text-[#6EE714]">
      {name}
    </span>
  );
}
