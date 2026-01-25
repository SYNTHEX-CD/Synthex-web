import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - SYNTHEX",
  description: "Mentions légales",
};

export default function TermsAndConditions() {
  return (
    <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">Mentions légales</h1>
  );
}
