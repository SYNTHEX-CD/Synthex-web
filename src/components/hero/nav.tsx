import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

const navItems = [
  {
    label: "Produits",
    href: "/#features",
  },
  {
    label: "Services",
    href: "/#features",
  },
  {
    label: "Tarifs",
    href: "/pricing",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
