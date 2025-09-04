import SimpleConverter from "@/components/SimpleConverter";
import { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Kilograms to Pounds Converter | Unit Converter Hub",
  description: "Convert kilograms to pounds fast and accurately.",
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Kilograms to Pounds</h1>
      <SimpleConverter fromLabel="Kilograms" toLabel="Pounds" a={2.20462262185} precision={6} placeholder="e.g. 70" />
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}