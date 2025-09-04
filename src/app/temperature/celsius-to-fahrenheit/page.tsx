import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Celsius to Fahrenheit Converter | Unit Converter Hub",
  description: "Convert Celsius to Fahrenheit instantly.",
};

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Celsius to Fahrenheit</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Convert temperature from Celsius to Fahrenheit instantly.</p>
      </section>
      
      <div className="max-w-2xl">
        <SimpleConverter fromLabel="Celsius" toLabel="Fahrenheit" a={9 / 5} b={32} precision={4} placeholder="e.g. 22" />
      </div>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}