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
    <div className="group p-6 hover:bg-white rounded-xl hover:shadow-lg flex flex-col items-center text-center">
      {/* Icône avec fond bleu */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white group-hover:bg-blue-500">
        <span className="text-blue-500 group-hover:text-white">
          {step.icon}
        </span>
      </div>

      {/* Titre */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500">{step.description}</p>
    </div>
  );
};

export default function HowToFindInternship() {
  return (
    <section className="py-24 bg-gray-50 bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-12 font-semibold text-center">
          Comment trouvé un stage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
