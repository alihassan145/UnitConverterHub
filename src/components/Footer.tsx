import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-teal-200 dark:border-teal-800/50 bg-gradient-to-r from-white to-teal-50/30 dark:from-gray-900 dark:to-teal-900/20 py-8">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-teal-700 dark:text-teal-400">
            © {new Date().getFullYear()} Unit Converter Hub. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about-us" className="text-teal-600 dark:text-teal-500 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
              About
            </Link>
            <Link href="/contact-us" className="text-teal-600 dark:text-teal-500 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-teal-600 dark:text-teal-500 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-teal-600 dark:text-teal-500 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}