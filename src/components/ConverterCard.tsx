import Link from 'next/link';

export default function ConverterCard({ title, href, description }: { title: string; href: string; description?: string }) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-lg hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors tracking-tight">{title}</h3>
      {description && <p className="mt-2 text-sm text-blue-700 dark:text-blue-300 leading-relaxed">{description}</p>}
    </Link>
  );
}