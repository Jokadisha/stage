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
    <div className="group flex items-center gap-4 bg-white rounded-sm p-4 cursor-pointer shadow-none hover:shadow-xl transition-shadow">
      <div className="bg-blue-50 rounded-sm p-4 group-hover:bg-blue-500 transition-colors duration-300">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-medium">{value}</p>
        <p className="text-base text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}

export default HeroStatCard;
