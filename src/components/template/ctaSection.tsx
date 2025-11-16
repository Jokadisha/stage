"use client";

import { Button } from "@/components/ui/button";

export function CallToActionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 px-8 py-14 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Passez à l’action
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Lancez votre recherche de stage aujourd’hui
              </h2>
              <p className="mt-2 text-base text-white/80">
                Créez votre profil, importez votre CV et activez les alertes personnalisées pour ne manquer aucune opportunité.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="bg-white text-blue-600 hover:bg-white/90">
                Créer mon profil
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Publier une offre
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
