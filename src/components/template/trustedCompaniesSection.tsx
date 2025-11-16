"use client";

const companies = [
  "Doctolib",
  "BackMarket",
  "BlaBlaCar",
  "Deezer",
  "Ledger",
  "Alan",
];

export function TrustedCompaniesSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          + 350 entreprises partenaires
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 text-center text-lg font-semibold text-gray-700 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((company) => (
            <span
              key={company}
              className="rounded-xl border border-transparent px-4 py-3 text-gray-500 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
