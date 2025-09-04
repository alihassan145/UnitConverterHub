import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Centimeters to Meters Converter | Unit Converter Hub",
  description: "Convert centimeters to meters quickly and accurately.",
};

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Centimeters to Meters</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Convert centimeters to meters with precision and ease.</p>
      </section>
      
      <div className="max-w-2xl">
        <SimpleConverter fromLabel="Centimeters" toLabel="Meters" a={0.01} precision={6} placeholder="e.g. 123" />
      </div>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}