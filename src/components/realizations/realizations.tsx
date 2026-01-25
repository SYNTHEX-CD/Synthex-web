import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Studio Atlas",
    tag: "Plateforme web",
    description: "Un site vitrine immersif et rapide pour une marque d'architecture.",
    imageClass:
      "bg-[linear-gradient(135deg,rgba(255,255,255,0.35),rgba(255,255,255,0.05)),radial-gradient(circle_at_20%_30%,#b4c7ff,transparent_55%),radial-gradient(circle_at_80%_70%,#6c5bff,transparent_45%)]",
  },
  {
    title: "Nexa",
    tag: "Application mobile",
    description: "Une app mobile fluide avec un design sculptural et premium.",
    imageClass:
      "bg-[radial-gradient(circle_at_20%_20%,#d9e2ff,transparent_55%),radial-gradient(circle_at_70%_80%,#a9b2ff,transparent_45%),linear-gradient(160deg,#f7f8ff,#e7ebff)]",
  },
  {
    title: "Approche",
    tag: "Expérience produit",
    description:
      "Des interfaces minimalistes, axées sur la clarté, la performance et l'élégance.",
    imageClass:
      "bg-[linear-gradient(180deg,#ffffff,#eef1ff)]",
  },
];

export function Realizations() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Réalisations
          </p>
          <h2 className="text-balance text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            Là où l'innovation
            <br />
            rencontre l'architecture
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.7fr_0.6fr]">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={[
                "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-foreground/10 bg-white shadow-[0_30px_80px_-60px_rgba(0,0,0,0.4)]",
                index === 0 ? "min-h-[320px]" : "min-h-[260px]",
              ].join(" ")}
            >
              <div className={`h-[60%] w-full ${project.imageClass}`} />
              <div className="flex flex-1 flex-col gap-2 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {project.tag}
                </p>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <Link
                  href="/pricing"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors group-hover:text-foreground"
                >
                  Voir le projet
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
