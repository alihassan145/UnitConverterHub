import ConverterCard from '@/components/ConverterCard';
import AdPlaceholder from '@/components/AdPlaceholder';

const converters = [
  { title: 'Centimeters to Meters', href: '/length/cm-to-m', keywords: ['length','cm','m'] },
  { title: 'Meters to Feet', href: '/length/m-to-feet', keywords: ['length','m','feet','ft'] },
  { title: 'Celsius to Fahrenheit', href: '/temperature/celsius-to-fahrenheit', keywords: ['temperature','c','f'] },
  { title: 'Kilograms to Pounds', href: '/weight/kg-to-lb', keywords: ['weight','kg','lb'] },
  { title: 'Gigabytes to Megabytes', href: '/digital/gb-to-mb', keywords: ['digital','gb','mb'] },
  { title: 'Liters to Gallons', href: '/volume/liters-to-gallons', keywords: ['volume','l','gallons'] },
  { title: 'KM/H to MPH', href: '/speed/kmh-to-mph', keywords: ['speed','kmh','mph'] },
];

export default async function Home({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const sp = (await searchParams) ?? {};
  const q = (sp.q ?? '').toLowerCase();
  const filtered = q
    ? converters.filter((c) => c.title.toLowerCase().includes(q) || c.keywords.some((k) => k.includes(q)))
    : converters;

  return (
    <div className="space-y-10">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-teal-300">Unit Converter Hub</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Fast, accurate, and easy-to-use unit conversion tools for all your daily needs.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {filtered.map((c) => (
            <ConverterCard key={c.href} title={c.title} href={c.href} />
          ))}
        </div>
      </section>
      <AdPlaceholder />
    </div>
  );
}
