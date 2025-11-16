import Image from "next/image";

const gridStats = [
  { title: "Stage disponible ", value: "175,324", icon: "/briefcase.svg" },
  { title: "Entreprises", value: "97,354", icon: "/buildings.svg" },
  { title: "Embauché après stage", value: "7,532", icon: "/briefcase.svg" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen mx-auto flex">
      <div className="md:w-1/2 flex flex-col items-center w-full h-screen py-8">
        <Image
          width={500}
          height={500}
          src="/logo.svg"
          alt="logo"
          className="h-16 flex items-baseline justify-start"
        />
        {children}
      </div>
      <div className="w-1/2 hidden h-screen md:flex flex-col gap-8 items-baseline justify-end bg-[url(/auth-bg.svg)] p-10">
        <p className="text-5xl font-medium text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full justify-items-center items-center">
          {gridStats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center justify-center w-48 h-48 rounded"
            >
              <Image
                width={50}
                height={50}
                src={stat.icon}
                alt={stat.title}
                className="w-16 h-16 bg-slate-50/10 p-2 rounded mb-6"
              />
              <p className="text-2xl font-semibold text-white py-2">{stat.value}</p>
              <p className="text-base text-muted-foreground">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
