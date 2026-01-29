type CharacterCardProps = {
  name: string;
  nickname: string;
  description: string;
  trait: string;
  accent: string;
  emoji: string;
};

export function CharacterCard({
  name,
  nickname,
  description,
  trait,
  accent,
  emoji,
}: CharacterCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-[0_40px_120px_rgba(15,23,42,0.45)] transition-transform duration-500 ease-out hover:-translate-y-3">
      <div
        className="pointer-events-none absolute inset-0 opacity-80 blur-3xl transition-transform duration-500 group-hover:scale-105"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(148,163,255,0.6), transparent 60%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.5), transparent 55%)",
        }}
      />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{emoji}</span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                {nickname}
              </p>
            </div>
          </div>
          <span
            className="rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: accent,
            }}
          >
            3D Hero
          </span>
        </div>
        <p className="text-base leading-relaxed text-white/80">{description}</p>
        <div className="mt-auto rounded-2xl bg-white/10 p-4 text-sm font-medium text-white/90">
          {trait}
        </div>
      </div>
    </article>
  );
}
