import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-4">
      {/* <BackgroundBlur className="-top-40 md:-top-0" /> */}
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Pill>
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="https://avatars.githubusercontent.com/u/146131402?v=4" />
            <PillAvatar src="https://avatars.githubusercontent.com/u/177726053?v=4" />
            <PillAvatar src="https://avatars.githubusercontent.com/u/143830400?v=4" />
            <PillAvatar src="https://avatars.githubusercontent.com/u/171247277?v=4" />
            <PillAvatar src="https://avatars.githubusercontent.com/u/215106244?v=4" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
            Faites partie des <span className="text-foreground">premiers</span> à nous faire confiance
          </p>
        </Pill>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Découvrez l’équipe <span className="text-muted-foreground block">qui code vos idées.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Transformons vos idées en expériences numériques efficaces, élégantes et durables.
        </p>
        <Button
          className="mb-10 w-fit rounded-full bg-[#2718D8] px-7 text-white shadow-[0_16px_40px_-20px_rgba(39,24,216,0.7)] hover:bg-[#1F13B5]"
          size="lg"
          asChild
        >
          <Link href="/pricing">
            Demander un devis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-rocket-icon lucide-rocket"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </Link>
        </Button>

        <Image src="/app-image-1.png" alt="Aperçu projet" width={304} height={445} className="sm:hidden block" />

        <div className="border rounded-4xl dark:dark mt-8 hidden sm:block">
          <div className="border rounded-4xl overflow-hidden">
            <Image src="/" alt="Réalisations SYNTHEX" width={900} height={500} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
