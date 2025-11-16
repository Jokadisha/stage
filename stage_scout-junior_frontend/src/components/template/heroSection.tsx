"use client";
import Image from "next/image";
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
          <div className="md:w-1/2 flex flex-col justify-center items-center gap-6 md:p-12 sm:p-8 p-4">
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-medium">
              Trouvez un stage qui corresponde à vos intérêts et à vos
              compétences.
            </h1>
            <p className="md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <HeroSectionForm />
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
  return (
    <form className="md:flex items-center border rounded-md w-full p-2 mt-10 bg-white">
      <div className="flex items-center w-full">
        <div className="flex items-center w-1/2">
          <Search className="h-6 w-6 ml-2" color="#0A65CC" />
          <Input
            className="border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
            type="text"
            placeholder="Nom du poste, Entreprise......."
          />
        </div>
        <Separator orientation="vertical" className="h-9" />
        <div className="flex items-center w-1/2">
          <MapPin className="h-6 w-6 ml-2 text-primary" />
          <Input
            className="border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
            type="text"
            placeholder="Localisation"
          />
        </div>
      </div>

      <Separator orientation="horizontal" className="md:hidden" />
      <Button className="w-full md:w-auto mt-2 md:mt-0 h-9 py-6">
        Trouve un stage
      </Button>
    </form>
  );
}
