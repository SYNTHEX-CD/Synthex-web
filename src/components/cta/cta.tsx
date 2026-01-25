import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = ["Web sur mesure", "Apps mobiles", "UX/UI Design", "Maintenance"];

export function Cta() {
  return (
    <section className="bg-[#F4F6FF] px-6 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-[#0B0B12] text-white shadow-[0_40px_120px_-60px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 bg-[url('/app-image-1.png')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

          <div className="relative grid gap-10 p-10 md:grid-cols-[1.4fr_0.6fr] md:p-16">
            <div>
              <h2 className="text-balance text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
                Un produit qui s’adapte
                <br />
                à votre vision
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/80 md:text-base">
                Nous cadrons, concevons et développons des expériences digitales solides pour accélérer votre croissance.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-xs uppercase tracking-[0.18em] text-white/70 md:items-end">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-[#2718D8] p-4 md:p-5">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white md:text-base">
                Prêt à lancer votre projet ?
              </p>
              <Button
                asChild
                className="h-10 rounded-full bg-black px-6 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#0F0F18]"
              >
                <Link href="/pricing">Planifier un appel</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
