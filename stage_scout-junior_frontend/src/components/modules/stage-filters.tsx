"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function StageFilters() {
  const [open, setOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedContractTypes, setSelectedContractTypes] = useState<string[]>([]);
  const [selectedSalary, setSelectedSalary] = useState<string>("");

  const regions = [
    "Île-de-France",
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Bretagne",
    "Centre-Val de Loire",
    "Corse",
    "Grand Est",
    "Hauts-de-France",
    "Normandie",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d'Azur"
  ];

  const durations = [
    "3 mois",
    "4 mois",
    "5 mois",
    "6 mois",
    "7 mois",
    "8 mois",
    "9 mois",
    "10 mois",
    "11 mois",
    "12 mois"
  ];

  const contractTypes = [
    "Alternance",
    "Stage",
    "CDD",
    "CDI"
  ];

  const salaryRanges = [
    "1000€ - 1500€",
    "1500€ - 2000€",
    "2000€ - 2500€",
    "2500€ - 3000€",
    "3000€ +"
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Filtrer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filtres</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium leading-none">Région</h4>
            <div className="space-y-1">
              {regions.map((region) => (
                <label key={region} className="flex items-center space-x-2">
                  <Checkbox
                    id={region}
                    checked={selectedRegions.includes(region)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRegions([...selectedRegions, region]);
                      } else {
                        setSelectedRegions(selectedRegions.filter((r) => r !== region));
                      }
                    }}
                  />
                  <span className="text-sm">{region}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium leading-none">Durée</h4>
            <div className="space-y-1">
              {durations.map((duration) => (
                <label key={duration} className="flex items-center space-x-2">
                  <Checkbox
                    id={duration}
                    checked={selectedDurations.includes(duration)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedDurations([...selectedDurations, duration]);
                      } else {
                        setSelectedDurations(selectedDurations.filter((d) => d !== duration));
                      }
                    }}
                  />
                  <span className="text-sm">{duration}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium leading-none">Type de contrat</h4>
            <div className="space-y-1">
              {contractTypes.map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={selectedContractTypes.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedContractTypes([...selectedContractTypes, type]);
                      } else {
                        setSelectedContractTypes(selectedContractTypes.filter((t) => t !== type));
                      }
                    }}
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium leading-none">Salaire minimum</h4>
            <Select
              value={selectedSalary}
              onValueChange={setSelectedSalary}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une fourchette" />
              </SelectTrigger>
              <SelectContent>
                {salaryRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setOpen(false)}>Appliquer</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
