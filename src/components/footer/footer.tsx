import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "SYNTHEX",
    links: [
      {
        label: "Accueil",
        href: "/",
        title: "Revenir à l’accueil",
      },
      {
        label: "Services",
        href: "/#features",
        title: "Découvrir nos services",
      },
      {
        label: "Offres",
        href: "/pricing",
        title: "Voir nos offres",
      },
    ],
  },
  {
    title: "Prestations",
    links: [
      {
        label: "Sites web sur mesure",
        href: "/#features",
        title: "Sites web sur mesure",
      },
      {
        label: "Applications mobiles",
        href: "/#features",
        title: "Applications mobiles",
      },
      {
        label: "UX/UI Design",
        href: "/#features",
        title: "Design UX/UI",
      },
    ],
  },
  {
    title: "Entreprise",
    links: [
      {
        label: "Mentions légales",
        href: "/terms-and-conditions",
        title: "Mentions légales",
      },
      {
        label: "Politique de confidentialité",
        href: "/privacy-policy",
        title: "Politique de confidentialité",
      },
      {
        label: "Politique de remboursement",
        href: "/refund-policy",
        title: "Politique de remboursement",
      },
    ],
  },
  {
    title: "Suivez-nous",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>X (Twitter)</span>
          </div>
        ),
        href: "https://x.com/",
        title: "Suivre SYNTHEX sur X",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/",
        title: "Retrouver SYNTHEX sur LinkedIn",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </div>
        ),
        href: "https://github.com/",
        title: "Voir notre GitHub",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden border-t border-foreground/10 bg-[linear-gradient(180deg,rgba(243,246,255,0)_0%,rgba(243,246,255,0.7)_40%,rgba(243,246,255,1)_100%)] py-16 pt-40 md:py-24 md:pt-40">
      <FooterBlur />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] text-muted-foreground">SYNTHEX</p>
          <p className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
            Une agence produit pour transformer vos idées en expériences numériques.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-10 tracking-tight md:grid-cols-4">
          {links.map((link) => (
            <div key={link.title} className="text-center md:text-left">
              <h3 className="text-muted-foreground mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
                {link.title}
              </h3>
              <ul className="flex flex-col items-center gap-4 md:items-start">
                {link.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      title={link.title}
                      target={link.href.startsWith("https://") ? "_blank" : undefined}
                      className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground/60 transition-all group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-6 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <span>© {new Date().getFullYear()} SYNTHEX. Tous droits réservés.</span>
          <span>hello@synthex.studio</span>
        </div>
      </div>
    </footer>
  );
}
