import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - SYNTHEX",
  description: "Politique de confidentialité",
};

export default function PrivacyPolicy() {
  return (
    <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">
      Politique de confidentialité
    </h1>
  );
}
