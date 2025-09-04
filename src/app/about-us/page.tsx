import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata = { title: 'About Us' };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About Unit Converter Hub</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Learn more about our mission and what we do.</p>
      </section>
      
      <div className="max-w-3xl space-y-6">
        <p className="text-base leading-relaxed">
          Unit Converter Hub provides fast, accurate, and user-friendly unit conversion tools covering length, weight, temperature, speed, volume, and digital storage.
        </p>
        
        <p className="text-base leading-relaxed">
          Our mission is to make everyday conversions simple and accessible for everyone. Whether you're a student, professional, or just need quick conversions, we've got you covered.
        </p>
      </div>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}