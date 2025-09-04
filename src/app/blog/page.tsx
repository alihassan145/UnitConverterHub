import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata = { title: 'Blog' };

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Insights, tips, and updates about unit conversions.</p>
      </section>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">No posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {posts.map((p) => (
            <BlogCard key={p.slug} title={p.title} excerpt={p.excerpt} slug={p.slug} date={p.date} />
          ))}
        </div>
      )}
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
      
      <div className="text-center pt-4">
        <p className="text-sm text-neutral-500">Want to contribute? <Link href="/contact-us" className="underline hover:no-underline">Contact us</Link>.</p>
      </div>
    </div>
  );
}