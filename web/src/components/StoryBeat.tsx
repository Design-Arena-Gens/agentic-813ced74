type StoryBeatProps = {
  icon: string;
  title: string;
  description: string;
  highlight: string;
};

export function StoryBeat({
  icon,
  title,
  description,
  highlight,
}: StoryBeatProps) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.08] p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-sky-200/40 hover:bg-white/[0.12]">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
          {icon}
        </span>
        <h4 className="text-lg font-semibold leading-tight">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-white/80">{description}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sky-200/90">
        <span className="text-base">✨</span>
        {highlight}
      </div>
    </div>
  );
}
