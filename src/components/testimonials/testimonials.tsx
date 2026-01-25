import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Camille Moreau",
    date: "12 janv.",
    title: "Lancement express",
    content:
      "“SYNTHEX nous a aidés à lancer notre MVP en un temps record, sans compromis sur la qualité.”",
    rating: 5,
  },
  {
    name: "Jules Bernard",
    date: "4 fév.",
    title: "Design au top",
    content: "“L’équipe a su traduire notre vision en une interface claire et élégante.”",
    rating: 5,
  },
  {
    name: "Nora Benali",
    date: "28 mars",
    title: "Accompagnement solide",
    content: "“On se sent vraiment accompagnés, du cadrage jusqu’aux itérations post-lancement.”",
    rating: 5,
  },
  {
    name: "Adrien Dupont",
    date: "9 avr.",
    title: "Tech fiable",
    content: "“Performance, stabilité, et une équipe réactive. On recommande sans hésiter.”",
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Témoignages
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Ils nous font confiance <div className="text-muted-foreground">pour leurs projets</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Des équipes ambitieuses choisissent SYNTHEX pour créer des produits numériques durables.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
