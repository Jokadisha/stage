"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    message:
      "J’ai décroché mon stage en moins de trois semaines. Les alertes personnalisées m’ont permis d’être la première candidate sur plusieurs offres.",
    author: "Camille, Master Marketing",
    company: "Stage chez Alan",
  },
  {
    id: 2,
    message:
      "L’espace recruteur nous fait gagner un temps précieux. Nous pouvons inviter les étudiants présélectionnés et suivre l’avancée des entretiens en équipe.",
    author: "Hugo, Talent Partner",
    company: "BackMarket",
  },
  {
    id: 3,
    message:
      "La préparation d’entretien proposée dans l’app m’a donné les bons arguments pour valoriser mes expériences associatives.",
    author: "Sofia, Licence Informatique",
    company: "Stage chez Deezer",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Ils recommandent Stage Scout
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Des étudiants et recruteurs satisfaits
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="relative flex h-full flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-blue-200" />
              <blockquote className="text-base text-gray-700">
                {testimonial.message}
              </blockquote>
              <figcaption className="mt-auto text-sm font-semibold text-gray-900">
                {testimonial.author}
                <p className="font-normal text-gray-500">{testimonial.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
