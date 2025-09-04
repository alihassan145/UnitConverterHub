import Link from 'next/link';

export default function BlogCard({ title, excerpt, slug, date }: { title: string; excerpt: string; slug: string; date?: string }) {
  return (
    <Link href={`/blog/${slug}`} className="block rounded-lg border p-4 hover:shadow-sm">
      <h3 className="text-base font-semibold">{title}</h3>
      {date && <p className="mt-1 text-xs text-neutral-500">{date}</p>}
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{excerpt}</p>
    </Link>
  );
}