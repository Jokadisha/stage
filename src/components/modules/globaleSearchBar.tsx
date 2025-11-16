"use client";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { Search } from "lucide-react";

function GlobalSearchBar() {
  return (
    <form className="flex items-center border rounded-md w-full md:w-[700px]">
      <Select defaultValue="cd">
        <SelectTrigger className="h-9 w-40 py-6 border-none border-l-1 border-muted-foreground shadow-none focus-visible:outline-none focus-visible:ring-0">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cd">🇨🇩 DR Congo</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-9" />
      <Search className="h-6 w-6 ml-2" color="#0A65CC" />

      <Input
        className="w-full pl-4 border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
        type="text"
        placeholder="Nom du poste, Entreprise, domaine, ......."
      />
    </form>
  );
}

export default GlobalSearchBar;
