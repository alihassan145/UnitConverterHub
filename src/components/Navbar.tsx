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
    <header className="sticky top-0 z-40 w-full border-b border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="font-semibold text-base sm:text-lg text-white hover:text-indigo-100 transition-colors">Unit Converter Hub</Link>
          <div className="flex items-center gap-2 sm:order-2 text-white">
            <DarkModeToggle />
          </div>
          <form onSubmit={onSubmit} className="order-3 w-full sm:order-1 sm:w-auto">
            <div className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-white/50 focus-within:border-white/50 transition-all duration-200">
              <Search size={16} className="text-white/70" />
              <input
                aria-label="Search converters"
                type="search"
                className="bg-transparent text-white placeholder-white/70 outline-none w-full sm:w-64"
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