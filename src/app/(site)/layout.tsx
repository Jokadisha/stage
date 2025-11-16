import type { Metadata } from "next";
import { SiteHeader } from "@/components/modules";

export const metadata: Metadata = {
  title: "Stage Scout",
  description: "Gestion des stages de fin d'Etude",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SiteHeader />
      {children}
    </main>
  );
}
