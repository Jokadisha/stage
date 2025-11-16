"use client";

import { BriefcaseBusiness, Clock3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const internships = [
  {
    id: 1,
    title: "Product Designer Junior",
    company: "Nexa Studio",
    location: "Paris, France",
    duration: "6 mois",
    salary: "900 € / mois",
    spots: "2 postes",
    tags: ["Design", "Stage de fin d’études"],
  },
  {
    id: 2,
    title: "Développeur Front React",
    company: "DataFleet",
    location: "Lyon, France",
    duration: "4 mois",
    salary: "1 000 € / mois",
    spots: "1 poste",
    tags: ["Tech", "Remote friendly"],
  },
  {
    id: 3,
    title: "Business Developer",
    company: "Helios",
    location: "Nantes, France",
    duration: "5 mois",
    salary: "850 € / mois",
    spots: "3 postes",
    tags: ["Sales", "Indemnité + prime"],
  },
];

function InternshipCard({
  internship,
}: {
  internship: (typeof internships)[number];
}) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <p className="text-sm font-medium text-blue-600">{internship.company}</p>
        <h3 className="mt-1 text-xl font-semibold text-gray-900">
          {internship.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {internship.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {internship.duration}
        </span>
        <span className="inline-flex items-center gap-2">
          <BriefcaseBusiness className="h-4 w-4" />
          {internship.spots}
        </span>
      </div>
      <p className="text-base font-semibold text-gray-900">
        {internship.salary}
      </p>
      <div className="flex flex-wrap gap-2">
        {internship.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <Button className="w-full" variant="outline">
        Voir l’offre
      </Button>
    </article>
  );
}

export function FeaturedInternshipSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Sélection du moment
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
              Des stages vérifiés et prêts à l’emploi
            </h2>
            <p className="text-gray-600">
              Chaque offre est qualifiée par notre équipe afin de garantir des missions à forte valeur pédagogique.
            </p>
          </div>
          <Button>Voir toutes les opportunités</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </section>
  );
}
