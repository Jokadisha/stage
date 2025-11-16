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
    <div className="group p-4 border rounded-md flex items-center gap-4 bg-white border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="flex items-center justify-center p-2 rounded-md bg-blue-100 text-blue-500 hover:bg-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
        {category.icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
        <p className="text-xs text-gray-500">{category.places} places disponibles</p>
      </div>
    </div>
  );
};

export default function PopularCategorySection() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold mb-2">Catégorie populaire</h2>
          <button className="flex items-center text-blue-500 border border-gray-100 px-4 py-2 rounded-lg group transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            Voir Plus
            <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
