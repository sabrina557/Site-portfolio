import Image from 'next/image';

export default function Home() {
  return (
    <section className="card-surface grid gap-12 px-6 py-10 md:grid-cols-[minmax(0,1.15fr)_auto] md:items-center md:gap-20 md:px-12 md:py-16">
      <div className="space-y-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Portfolio
        </span>

        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Bienvenue dans mon univers de développement web
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Je suis développeuse web passionnée par React et Next.js. J'aime concevoir des interfaces accessibles, rapides et raffinées pour garantir une expérience fluide, quel que soit l'appareil.
        </p>

<div className="grid gap-4 sm:grid-cols-3 justify-items-center items-center">
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Expertise</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">React & Next.js</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Focus</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">UX soignée</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Profil</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">Front-end</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
          <Image
            src="/profile.jpg"
            alt="Photo de Sabrina"
            fill
            sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
            className="rounded-4xl object-cover shadow-xl shadow-sky-100"
          />
          <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl border border-white/80 bg-linear-to-br from-sky-100/80 to-white/70 shadow-lg sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
