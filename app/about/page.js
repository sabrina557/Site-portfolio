export default function About() {
  return (
    <section className="card-surface mx-auto max-w-3xl space-y-8 px-8 py-12 sm:px-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        À propos
      </span>

      <h2 className="text-3xl font-bold tracking-[-0.02em] text-slate-900 sm:text-4xl">
        À propos de moi
      </h2>

      <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
        Je suis une développeuse passionnée travaillant avec Next.js et React, avec un goût prononcé pour les interfaces accessibles et les architectures performantes.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-5 shadow-sm">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 text-center">
  Atouts
</p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-900 text-center">Conception UI et intégration</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-6 py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 text-center">Valeurs</p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-900 text-center">Accessibilité & performance</p>
        </div>
      </div>
    </section>
  );
}
