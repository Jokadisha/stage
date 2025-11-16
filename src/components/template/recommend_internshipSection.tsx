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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">
            Stages les plus demandés
          </h2>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
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
    <div className="p-4 flex flex-col gap-1">
      <h3 className="text-base font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
        {job.title}
      </h3>
      <p className="text-sm text-gray-500">
        {job.places} places disponibles
      </p>
    </div>
  );
}
