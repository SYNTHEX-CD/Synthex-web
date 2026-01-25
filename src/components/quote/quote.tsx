import React from "react";

export function Quote() {
  return (
    <figure className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-14 text-center md:py-20">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_0%,#7a6bff33,transparent_55%),radial-gradient(circle_at_80%_20%,#3f2bd82b,transparent_45%)]" />
      <div className="w-full rounded-[2.5rem] border bg-card/60 px-6 py-10 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.35)] backdrop-blur sm:px-10 sm:py-12">
        <blockquote className="text-balance text-2xl leading-[1.15] font-semibold tracking-tight md:text-4xl lg:text-5xl">
          <span className="text-muted-foreground/70">«</span>
          <span> Dès le premier atelier avec </span>
          <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            SYNTHEX
          </span>
          <span>, nous avons compris que nous avions trouvé le bon partenaire. </span>
          <span className="text-muted-foreground/70">»</span>
        </blockquote>
        <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
        <figcaption className="mt-6">
          <span className="block text-base font-semibold tracking-tight md:text-lg">Laurent Vidal</span>
          <span className="text-muted-foreground mt-1 block text-xs tracking-tight md:text-sm">
            Directeur produit · Studio Novae
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
