import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Liters to Gallons Converter | Unit Converter Hub",
  description: "Convert liters to US gallons.",
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Liters to Gallons</h1>
      <SimpleConverter fromLabel="Liters" toLabel="Gallons (US)" a={0.26417205236} precision={6} placeholder="e.g. 5" />
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}