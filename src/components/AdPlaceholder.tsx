import { PropsWithChildren } from 'react';

export default function AdPlaceholder({ children }: PropsWithChildren) {
  return (
    <div className="w-full rounded-lg border-2 border-yellow-200 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-6 text-center shadow-lg">
      <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">{children ?? 'Ad Placeholder'}</p>
    </div>
  );
}