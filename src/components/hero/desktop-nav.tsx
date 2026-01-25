import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: Props) {
  return (
    <nav
      className={cn(
        "mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full border border-foreground/10 bg-white/90 px-6 py-3 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)] backdrop-blur",
        className,
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        {/* <Image src="/logo.svg" alt="logo" width={86} height={26} /> */}
        <span className="text-2xl font-semibold tracking-tight">
          <span className="text-foreground">Synthex</span>
        </span>
      </Link>
      <div className="flex items-center gap-8 text-sm font-medium text-foreground/70">
        {items.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href}
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        {/* <Link href="/#features" className="text-sm font-medium text-foreground/70 hover:text-foreground">
          Se connecter
        </Link> */}
        <Button
          asChild
          className="rounded-full bg-[#2718D8] px-6 text-sm font-semibold text-white hover:bg-[#1F13B5]"
        >
          <Link href="/pricing">Commencer maintenant</Link>
        </Button>
      </div>
    </nav>
  );
}
