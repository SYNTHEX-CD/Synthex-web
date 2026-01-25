import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function MobileNav({ items, className }: Props) {
  return (
    <nav className={cn("flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        {/* <Image src="/logo.svg" alt="logo" width={86} height={26} /> */}
        <span className="text-2xl font-semibold tracking-tight">
          <span className="text-foreground">Synthex</span>
        </span>
      </Link>
      <Drawer direction="top">
        <DrawerTrigger className="relative -m-2 cursor-pointer p-2">
          <span className="sr-only">Ouvrir le menu</span>
          <Menu className="h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-4 p-8">
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          {items.map((item, index) => (
            <Link key={`${item.label}-${index}`} href={item.href}>
              {item.label}
            </Link>
          ))}
          {/* <Link href="/#features" className="pt-2 text-sm font-medium">
            Se connecter
          </Link> */}
          <Link href="/pricing" className="text-sm font-semibold text-[#2718D8]">
            Commencer maintenant
          </Link>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
