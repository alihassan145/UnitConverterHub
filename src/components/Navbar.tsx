"use client";
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { FormEvent, useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState('');
  useEffect(() => {
    setQ(params.get('q') ?? '');
  }, [params]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const usp = new URLSearchParams(Array.from(params.entries()));
    if (q) usp.set('q', q); else usp.delete('q');
    router.push(`/?${usp.toString()}`);
  };
  return (
    <header className="sticky top-0 z-40 w-full border-b border-teal-200 dark:border-teal-800 bg-gradient-to-r from-white to-teal-50 dark:from-gray-900 dark:to-teal-900/20 shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="font-semibold text-base sm:text-lg text-teal-700 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Unit Converter Hub</Link>
          <div className="flex items-center gap-2 sm:order-2">
            <DarkModeToggle />
          </div>
          <form onSubmit={onSubmit} className="order-3 w-full sm:order-1 sm:w-auto">
            <div className="flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500 transition-all duration-200">
              <Search size={16} className="text-gray-400 dark:text-gray-500" />
              <input
                aria-label="Search converters"
                type="search"
                className="bg-transparent text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none w-full sm:w-64"
                placeholder="Search converters..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}