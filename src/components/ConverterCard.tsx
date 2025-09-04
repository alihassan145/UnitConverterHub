import Link from 'next/link';

export default function ConverterCard({ title, href, description }: { title: string; href: string; description?: string }) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-800 dark:to-teal-900/20 border border-teal-100 dark:border-teal-900/30 rounded-lg hover:shadow-md hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-200 hover:bg-teal-50/50 dark:hover:bg-teal-900/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors tracking-tight">{title}</h3>
        {description && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>}
    </Link>
  );
}