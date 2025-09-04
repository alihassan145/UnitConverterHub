import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type PostMeta = {
  title: string;
  date?: string;
  excerpt: string;
  slug: string;
};

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');

export async function getAllPosts(): Promise<PostMeta[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(contentDir);
  } catch {
    return [];
  }
  const posts: PostMeta[] = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(contentDir, file);
    const raw = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(raw);
    posts.push({
      title: String(data.title ?? slug),
      date: data.date ? String(data.date) : undefined,
      excerpt: String(data.excerpt ?? content.slice(0, 140).replace(/\n+/g, ' ') + '...'),
      slug,
    });
  }
  posts.sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    return bd - ad;
  });
  return posts;
}

export async function getPostBySlug(slug: string): Promise<{ meta: PostMeta; contentHtml: string } | null> {
  const mdPath = path.join(contentDir, `${slug}.md`);
  try {
    const raw = await fs.readFile(mdPath, 'utf8');
    const { data, content } = matter(raw);
    const processed = await remark().use(html).process(content);
    const contentHtml = String(processed);
    const meta: PostMeta = {
      title: String(data.title ?? slug),
      date: data.date ? String(data.date) : undefined,
      excerpt: String(data.excerpt ?? content.slice(0, 140).replace(/\n+/g, ' ') + '...'),
      slug,
    };
    return { meta, contentHtml };
  } catch (e) {
    return null;
  }
}