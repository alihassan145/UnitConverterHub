import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Gigabytes to Megabytes Converter | Unit Converter Hub",
  description: "Convert gigabytes to megabytes using decimal SI units.",
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Gigabytes to Megabytes</h1>
      <SimpleConverter fromLabel="Gigabytes" toLabel="Megabytes" a={1000} precision={6} placeholder="e.g. 2.5" />
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}