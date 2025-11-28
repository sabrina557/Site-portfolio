import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    { title: "Projet 1", description: "Site vitrine", img: "/projects/project1.jpg", link: "#" },
    { title: "Projet 2", description: "Application web", img: "/projects/project2.png", link: "#" },
    { title: "Projet 3", description: "E-commerce", img: "/projects/project3.jpg", link: "#" },
    { title: "Projet 4", description: "Blog personnel", img: "/projects/project4.png", link: "#" },
  ];

  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Réalisations
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Mes projets
        </h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Une sélection de réalisations web pensées pour offrir des expériences rapides, accessibles et adaptables à chaque taille d'écran.
        </p>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
          Front-end • UI • Performance
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
