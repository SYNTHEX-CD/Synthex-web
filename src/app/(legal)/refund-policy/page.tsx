import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de remboursement - SYNTHEX",
  description: "Politique de remboursement",
};

export default function RefundPolicy() {
  return (
    <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">
      Politique de remboursement
    </h1>
  );
}
