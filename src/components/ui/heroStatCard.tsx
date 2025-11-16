import React from "react";

function HeroStatCard({
  value,
  title,
  icon,
}: {
  value: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <article
      tabIndex={0}
      className="group flex items-center gap-4 rounded-2xl border border-blue-50 bg-white/90 p-4 shadow-sm outline-none transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg focus-visible:-translate-y-0.5 focus-visible:border-blue-400 focus-visible:shadow-xl"
    >
      <div className="rounded-2xl bg-blue-50 p-4 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white group-focus-visible:bg-blue-500 group-focus-visible:text-white">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="text-base text-gray-500">{title}</p>
      </div>
    </article>
  );
}

export default HeroStatCard;
