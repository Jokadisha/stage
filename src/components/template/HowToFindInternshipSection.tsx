"use client";

import React from "react";
import { User, Upload, Search, Send } from "lucide-react";

// Interface pour chaque étape
interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  highlight?: boolean;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Créer un compte",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <User className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Téléchargez votre CV",
    description: "Curabitur sit amet maximus ligula. Nam a nulla ante.",
    icon: <Upload className="h-6 w-6" />,
    highlight: true, // L’étape en surbrillance
  },
  {
    id: 3,
    title: "Trouver un stage approprié",
    description: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Postuler",
    description: "Curabitur ac diam remuis, ligula. Nam a nulla ante.",
    icon: <Send className="h-6 w-6" />,
  },
];

const StepCard: React.FC<{ step: Step }> = ({ step }) => {
  return (
    <article className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
          <div className="flex h-full w-full items-center justify-center text-lg">{step.icon}</div>
        </div>
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-blue-600 shadow">
          {step.id}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{step.description}</p>
    </article>
  );
};

export default function HowToFindInternship() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Votre parcours
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-gray-900">
            Comment trouver un stage en toute sérénité
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
