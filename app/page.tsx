"use client";

import { useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { CircleCheckBig } from "lucide-react";

export default function Home() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 z-20">
        <div className="text-lg sm:text-2xl font-bold tracking-wider">
          <h1>SYNTHEX</h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden md:block text-sm text-gray-600">
            +243 837 449 954 / julesmukadi.dev@gmail.com
          </span>
          <button className="flex flex-col gap-1" aria-label="Menu">
            <span className="w-5 sm:w-6 h-0.5 bg-black"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-black"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex min-h-screen items-center justify-center px-4 sm:px-8 py-20">
        <div className="relative flex flex-col items-center justify-center text-center w-full">
          {isCompleted ? (
            /* Contenu après le compte à rebours */
            <div className="animate-fadeIn space-y-6">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center justify-center">
                  <CircleCheckBig size={'60'} className="text-muted-foreground" />
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
                  Nous sommes en ligne ! 🥳🎊
                </h1>
                <p className="text-xl sm:text-xl text-muted-foreground max-w-2xl">
                  Bienvenue sur le site officiel de Synthex. Découvrez nos
                  services et solutions innovantes.
                </p>

                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                  <a
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[148px]"
                    href="https://agency-rho-blush.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Découvrir
                  </a>
                  <a
                    className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                    href="https://mukadi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Contenu du compte à rebours */
            <>
              {/* Countdown Timer */}
              <div className="mb-8 sm:mb-12 scale-75 sm:scale-90 lg:scale-100 relative z-10">
                <FlipClockCountdown
                  to={new Date("2026-01-26T00:15:00").getTime()}
                  labels={["DAYS", "HOUR", "MIN", "SECONDS"]}
                  labelStyle={{
                    fontSize: 11,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    letterSpacing: "0.1em",
                  }}
                  digitBlockStyle={{
                    width: 60,
                    height: 80,
                    fontSize: 48,
                    background: "#000000",
                    color: "#ffffff",
                    borderRadius: "4px",
                  }}
                  separatorStyle={{
                    color: "#000000",
                    size: "6px",
                  }}
                  dividerStyle={{
                    color: "transparent",
                    height: 0,
                  }}
                  duration={0.5}
                  onComplete={handleComplete}
                />
              </div>

              {/* Coming Soon Text */}
              <div className="max-w-xl space-y-3 sm:space-y-4 px-4 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  Bientôt disponible...
                </h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Nous travaillons actuellement sur le site web de notre équipe de <a href="http://mukadi.vercel.app" className="text-muted-foreground font-semibold" target="_blank">développeurs</a>, un espace dédié au partage de nos projets, de nos idées et de nos compétences. L'accès au public arrive très prochainement.
                </p>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Background Text "COMING SOON" at bottom */}
      {!isCompleted && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <h1 className="text-[4rem] sm:text-[8rem] lg:text-[8rem] font-black text-zinc-200 tracking-tighter whitespace-nowrap select-none">
            COMING SOON
          </h1>
        </div>
      )}
    </div>
  );
}
