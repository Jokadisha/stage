"use client";
import React from "react";

const jobs = [
  { id: 1, title: "Développeur web", places: "45,294" },
  { id: 2, title: "Développeur mobile", places: "39,591" },
  { id: 3, title: "IT Support", places: "27,561" },
  { id: 4, title: "Agent du call center", places: "20,090" },
  { id: 5, title: "Marketeur Digital", places: "34,401" },
  { id: 6, title: "Ressources Humaines", places: "25,632" },
  { id: 7, title: "Comptabilité et Finance", places: "23,598" },
  { id: 8, title: "Data Scientist", places: "19,402" },
  { id: 9, title: "Assistant du Gestionnaire financier", places: "21,090" },
  { id: 10, title: "Intelligence Artificielle", places: "23,547" },
  { id: 11, title: "Communication", places: "20,958" },
  { id: 12, title: "Relations Publiques", places: "16,531" },
];

export default function PopularJobsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-3 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Tendances
          </p>
          <h2 className="text-3xl font-semibold text-gray-900">
            Stages les plus demandés
          </h2>
          <p className="text-base text-gray-600">
            Découvrez les spécialités sur lesquelles les recruteurs cherchent activement des talents.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job) => (
            <PopularJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularJobCard({
  job,
}: {
  job: { id: number; title: string; places: string };
}) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.places} places disponibles</p>
    </article>
  );
}
