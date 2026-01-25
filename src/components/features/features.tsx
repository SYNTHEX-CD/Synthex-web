import { Button } from "@/components/ui/button";
import { ActivityIcon, ChartNoAxesColumnIcon, SlidersIcon, ZapIcon } from "lucide-react";
import Link from "next/link";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <SlidersIcon size={20} />,
    title: "Design UX/UI",
    description: "Des interfaces élégantes et efficaces, centrées sur vos utilisateurs.",
    image: "/app-image-1.png",
  },
  {
    icon: <ZapIcon size={20} />,
    title: "Développement web",
    description: "Sites et applications web rapides, solides et évolutifs.",
    image: "/app-image-1.png",
  },
  {
    icon: <ActivityIcon size={20} />,
    title: "Applications mobiles",
    description: "iOS et Android natifs ou cross-platform selon vos besoins.",
    image: "/app-image-1.png",
  },
  {
    icon: <ChartNoAxesColumnIcon size={20} />,
    title: "Maintenance & data",
    description: "Suivi, optimisation et pilotage avec des KPI utiles.",
    image: "/app-image-1.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <section id="features" className="bg-[#F4F6FF] py-14 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.05fr_1.6fr] md:gap-12">
        <div className="flex flex-col items-start gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Services</p>
          <h2 className="text-balance text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
            Des services pensés pour faire grandir votre produit
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm leading-6 sm:text-base">
            De la stratégie au lancement, SYNTHEX vous accompagne à chaque étape pour livrer des produits numériques
            fiables, élégants et performants.
          </p>
          <Button className="mt-2" size="lg" asChild>
            <Link href="/pricing">Parlons de votre projet</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => {
            const isFeatured = index === 1;
            return (
              <div
                key={feature.title}
                className={[
                  "rounded-2xl border px-6 py-6 shadow-sm transition-transform",
                  "hover:-translate-y-1 hover:shadow-md",
                  isFeatured
                    ? "border-transparent bg-[#0E0E16] text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]"
                    : "bg-white/90",
                ].join(" ")}
              >
                <div
                  className={[
                    "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full",
                    isFeatured ? "bg-white/10 text-white" : "bg-[#E8EBFF] text-foreground",
                  ].join(" ")}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className={isFeatured ? "text-white/80 text-sm leading-6" : "text-muted-foreground text-sm leading-6"}>
                  {feature.description}
                </p>
                <button
                  type="button"
                  className={[
                    "mt-4 text-sm font-semibold",
                    isFeatured ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground",
                  ].join(" ")}
                >
                  En savoir plus
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
