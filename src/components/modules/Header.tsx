"use client";
import { SiteNavBar, GlobaleSearchBar, NavUser } from "@/components/modules";
import { Button } from "../ui/button";
// import { Bell, CreditCard } from "lucide-react";
import { AuthGuard } from "@/features/auth/components";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b">
      <SiteNavBar />
      <SiteSearchBar />
    </header>
  );
}

function SiteSearchBar() {
  return (
    <div className="container mx-auto flex items-center justify-between p-4 sm:p-2 md:p-0 h-20">
      <GlobaleSearchBar />
      <AuthGuard
        fallback={
          <div className="hidden md:flex">
            <Button variant="outline" className="ml-2 h-9 py-6">
              <Link href="/auth/sign-in">Se connecter</Link>
            </Button>
            <Button className="ml-2 h-9 py-6">
              Publier une offre de stage
            </Button>
          </div>
        }
      >
        <NavUser isSidebar={false} className="hidden" />
      </AuthGuard>
    </div>
  );
}
