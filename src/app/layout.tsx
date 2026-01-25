import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYNTHEX - Agence de développement web et mobile",
  description:
    "Transformez vos idées en expériences numériques avec SYNTHEX. Nous créons des applications web et mobiles sur mesure, avec un design élégant et des performances solides pour faire grandir votre entreprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
