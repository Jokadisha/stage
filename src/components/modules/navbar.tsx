"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Logo from "@/components/ui/logo";
import { NavUser } from "@/components/modules";
import { AuthGuard } from "@/features/auth/components";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "#stages", label: "Stages" },
  { href: "#entreprises", label: "Entreprises" },
  { href: "#candidats", label: "Candidats" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="bg-gray-100">
      <div className="container flex h-16 items-center mx-auto">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Logo
              width={100}
              height={100}
              className="h-16 ml-2 flex items-baseline justify-start"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 h-full">
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium transition-colors h-full flex items-center hover:text-primary ${
                pathname === href
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <div className="flex items-center justify-center gap-2 text-sm">
            <PhoneCall className="h-4 w-4" /> +243 851 750 853
          </div>
          <div></div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] flex flex-col justify-between"
          >
            <SheetTitle className="hidden">
              Barre de navigation laterale
            </SheetTitle>
            <SheetDescription className="hidden">
              Barre de navigation laterale
            </SheetDescription>
            <nav className="flex flex-col space-y-4 mt-6">
              {navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center justify-start gap-2 text-sm">
                <PhoneCall className="h-4 w-4" /> +243 851 750 853
              </div>
              <div></div>
            </nav>
            <AuthGuard
              fallback={
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="ml-2 h-9 py-6 w-full">
                    <Link href="/auth/sign-in">Se connecter</Link>
                  </Button>
                  <Button className="ml-2 h-9 py-6 w-full">
                    Publier une offre de stage
                  </Button>
                </div>
              }
            >
              <NavUser isSidebar={true} />
            </AuthGuard>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
