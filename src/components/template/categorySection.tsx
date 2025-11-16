"use client";

import React from "react";
import {
  Brush,
  Code2,
  Megaphone,
  Video,
  Music,
  FileBarChart,
  HeartPulse,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

interface Category {
  id: number;
  title: string;
  places: string;
  icon: React.ReactElement;
}

const categories: Category[] = [
  { id: 1, title: "Graphisme et design", places: "367", icon: <Brush className="h-5 w-5" /> },
  { id: 2, title: "Code & Programmation", places: "327", icon: <Code2 className="h-5 w-5" /> },
  { id: 3, title: "Digital Marketing", places: "197", icon: <Megaphone className="h-5 w-5" /> },
  { id: 4, title: "Vidéo & Animation", places: "260", icon: <Video className="h-5 w-5" /> },
  { id: 5, title: "Musique & Audio", places: "207", icon: <Music className="h-5 w-5" /> },
  { id: 6, title: "Comptabilité et finances", places: "187", icon: <FileBarChart className="h-5 w-5" /> },
  { id: 7, title: "Santé et soins", places: "128", icon: <HeartPulse className="h-5 w-5" /> },
  { id: 8, title: "Data & Science", places: "57", icon: <FlaskConical className="h-5 w-5" /> },
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <article
      tabIndex={0}
      className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-sm outline-none transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg focus-visible:-translate-y-0.5 focus-visible:border-blue-400"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
        {category.icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
        <p className="text-xs text-gray-500">{category.places} places disponibles</p>
      </div>
    </article>
  );
};

export default function PopularCategorySection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Explorer
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">Catégories populaires</h2>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-full border border-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
          >
            Voir plus
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
