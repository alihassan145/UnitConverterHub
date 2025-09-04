import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-indigo-200">
            © 2024 Unit Converter Hub. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about-us" className="text-indigo-300 hover:text-white transition-colors duration-200 hover:underline">
              About
            </Link>
            <Link href="/contact-us" className="text-indigo-300 hover:text-white transition-colors duration-200 hover:underline">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-indigo-300 hover:text-white transition-colors duration-200 hover:underline">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-indigo-300 hover:text-white transition-colors duration-200 hover:underline">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}