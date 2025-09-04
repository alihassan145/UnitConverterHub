import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Meters to Feet Converter | Unit Converter Hub",
  description: "Convert meters to feet quickly and accurately.",
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Meters to Feet</h1>
      <SimpleConverter fromLabel="Meters" toLabel="Feet" a={3.280839895} precision={6} placeholder="e.g. 3.5" />
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}