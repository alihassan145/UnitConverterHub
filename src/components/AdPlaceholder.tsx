import { PropsWithChildren } from 'react';

export default function AdPlaceholder({ children }: PropsWithChildren) {
  return (
    <div className="w-full p-4 bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-800 dark:to-teal-900/20 rounded-lg shadow-md border border-teal-100 dark:border-teal-900/30 flex items-center justify-center">
      <p className="text-center font-medium text-teal-600 dark:text-teal-400">{children ?? 'Ad Placeholder'}</p>
    </div>
  );
}