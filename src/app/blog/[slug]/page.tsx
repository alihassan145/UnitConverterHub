import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import AdPlaceholder from '@/components/AdPlaceholder';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return { title: post.meta.title, description: post.meta.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{post.meta.title}</h1>
        {post.meta.date && (
          <p className="text-sm text-neutral-500">
            Published on {new Date(post.meta.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        )}
      </section>
      
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}