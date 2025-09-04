'use client';
import { DefaultSeo } from 'next-seo';
import SEO from '@/seo.config';

export default function ClientSEO() {
  return <DefaultSeo {...SEO} />;
}