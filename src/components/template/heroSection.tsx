"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Separator } from "../ui/separator";
import { Grid2x2Plus, MapPin, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { HeroStatCard } from "@/components/ui";
import { Building2, BriefcaseBusiness, UsersRound } from "lucide-react";

const stats = [
  {
    value: "175,324",
    title: "Stages disponibles",
    icon: (
      <BriefcaseBusiness
        strokeWidth={1.5}
        className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-300"
      />
    ),
  },
  {
    value: "97,354",
    title: "Entreprises",
    icon: (
      <Building2
        strokeWidth={1.5}
        className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-300"
      />
    ),
  },
  {
    value: "384,234",
    title: "Candidats",
    icon: (
      <UsersRound
        strokeWidth={1.5}
        className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-300"
      />
    ),
  },
  {
    value: "7,532",
    title: "Nouveaux stages",
    icon: (
      <Grid2x2Plus
        strokeWidth={1.5}
        className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-300"
      />
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)] lg:block" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_480px]">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              Une plateforme pensée pour les étudiants ambitieux
            </span>
            <h1 className="text-3xl font-medium leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Trouvez un stage qui corresponde à vos intérêts et à vos compétences.
            </h1>
            <p className="text-base text-gray-600 sm:text-lg">
              Parcourez des milliers d’offres vérifiées, postulez en un clic et suivez vos candidatures depuis un tableau de bord intuitif.
            </p>
            <HeroSectionForm />
            <ul className="grid w-full gap-3 text-left text-sm text-gray-600 sm:grid-cols-2">
              <li className="flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
                Notifications instantanées pour chaque nouvelle offre
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                Matching intelligent avec votre profil
              </li>
            </ul>
          </div>
          <div className="relative mx-auto flex max-w-md items-center justify-center lg:max-w-none">
            <div className="relative w-full overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-2xl">
              <Image
                width={640}
                height={640}
                priority
                src="/hero-image.svg"
                alt="Illustration d’étudiantes et étudiants recherchant un stage"
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  En confiance
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  +180K étudiantes et étudiants utilisent Stage Scout chaque mois
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <HeroStatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSectionForm() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set("q", query.trim());
    }
    if (location.trim()) {
      params.set("ville", location.trim());
    }
    const url = params.toString()
      ? `/internships?${params.toString()}`
      : "/internships";
    router.push(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-xl backdrop-blur"
    >
      <fieldset className="flex flex-col gap-3" aria-label="Rechercher un stage">
        <legend className="sr-only">Formulaire de recherche</legend>
        <div className="flex flex-col gap-3 md:flex-row">
          <label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 shadow-inner focus-within:border-blue-500 focus-within:bg-white">
            <Search className="h-5 w-5 text-blue-500" aria-hidden />
            <Input
              className="border-none bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              type="text"
              placeholder="Nom du poste, entreprise…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Rechercher un stage par mot-clé"
            />
          </label>
          <label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 shadow-inner focus-within:border-blue-500 focus-within:bg-white">
            <MapPin className="h-5 w-5 text-blue-500" aria-hidden />
            <Input
              className="border-none bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
              type="text"
              placeholder="Localisation"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              aria-label="Ville ou région"
            />
          </label>
        </div>
        <Separator className="hidden md:block" />
        <Button type="submit" className="h-12 w-full text-base font-semibold">
          Trouver un stage
        </Button>
      </fieldset>
    </form>
  );
}
