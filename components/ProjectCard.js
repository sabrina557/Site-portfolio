import Image from "next/image";

export default function ProjectCard({ title, description, img, link }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
      {/* Image en ratio 16:9 pour garder les aperçus harmonisés */}
      <div className="relative w-full aspect-video">
        <Image src={img} alt={title} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/15 via-transparent to-transparent opacity-0 transition group-hover:opacity-60" aria-hidden="true" />
      </div>

      {/* Texte */}
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5 items-center justify-center">

        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
          <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        </div>

        {link && (
          <a
            href={link}
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
          >
       Voir le projet
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
