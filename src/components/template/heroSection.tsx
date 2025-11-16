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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="md:flex flex-wrap items-center justify-center">
          <div className="md:w-1/2 flex flex-col justify-center items-center gap-6 md:p-12 sm:p-8 p-4 text-center md:text-left">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              Une plateforme pensée pour les étudiants ambitieux
            </span>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-medium leading-tight">
              Trouvez un stage qui corresponde à vos intérêts et à vos
              compétences.
            </h1>
            <p className="md:text-lg text-gray-600">
              Parcourez des milliers d’offres vérifiées, postulez en un clic et
              suivez vos candidatures depuis un tableau de bord intuitif.
            </p>
            <HeroSectionForm />
            <ul className="grid w-full gap-3 text-sm text-gray-600 sm:grid-cols-2">
              <li className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
                Notifications instantanées pour chaque nouvelle offre
              </li>
              <li className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                Matching intelligent avec votre profil
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex items-center justify-between ">
            <div></div>
            <Image
              width={700}
              height={700}
              src="/hero-image.svg"
              alt="hero-image"
              className="flex items-end justify-end"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1">
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
      className="md:flex items-center border rounded-md w-full p-2 mt-10 bg-white shadow-lg"
    >
      <div className="flex items-center w-full">
        <div className="flex items-center w-1/2">
          <Search className="h-6 w-6 ml-2" color="#0A65CC" />
          <Input
            className="border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
            type="text"
            placeholder="Nom du poste, Entreprise..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Rechercher un stage par mot-clé"
          />
        </div>
        <Separator orientation="vertical" className="h-9" />
        <div className="flex items-center w-1/2">
          <MapPin className="h-6 w-6 ml-2 text-primary" />
          <Input
            className="border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
            type="text"
            placeholder="Localisation"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            aria-label="Ville ou région"
          />
        </div>
      </div>

      <Separator orientation="horizontal" className="md:hidden" />
      <Button type="submit" className="w-full md:w-auto mt-2 md:mt-0 h-9 py-6">
        Trouver un stage
      </Button>
    </form>
  );
}
