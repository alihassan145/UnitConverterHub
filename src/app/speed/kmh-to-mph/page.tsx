import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "km/h to mph Converter | Unit Converter Hub",
  description: "Convert kilometers per hour to miles per hour.",
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">km/h to mph</h1>
      <SimpleConverter fromLabel="km/h" toLabel="mph" a={0.62137119223733} precision={6} placeholder="e.g. 120" />
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}