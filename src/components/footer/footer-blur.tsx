import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function FooterBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 -z-10 h-full w-full mask-t-from-90% bg-cover bg-center bg-no-repeat",
        "bg-[url('/footer-blur-mobile.png')] md:bg-[url('/footer-blur-desktop.png')]",
        className,
      )}
    />
  );
}
