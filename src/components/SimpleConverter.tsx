"use client";
import { useMemo, useState } from "react";

export default function SimpleConverter({
  fromLabel,
  toLabel,
  a = 1,
  b = 0,
  precision = 6,
  placeholder = "Enter a value",
}: {
  fromLabel: string;
  toLabel: string;
  a?: number; // multiplier
  b?: number; // offset
  precision?: number;
  placeholder?: string;
}) {
  const [input, setInput] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const value = useMemo(() => {
    const n = Number(input);
    if (!Number.isFinite(n)) return NaN;
    return n;
  }, [input]);

  const result = useMemo(() => {
    if (!Number.isFinite(value)) return "";
    const out = value * a + b;
    if (!Number.isFinite(out)) return "";
    const rounded = Number(parseFloat(out.toFixed(precision)));
    return String(rounded);
  }, [value, a, b, precision]);

  const copy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-400">{fromLabel}</span>
          <input
            type="number"
            inputMode="decimal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 border-2 border-emerald-200 dark:border-emerald-700 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 text-emerald-900 dark:text-emerald-100 placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-400">{toLabel}</span>
          <input
            value={result}
            readOnly
            className="w-full px-4 py-3 border-2 border-purple-200 dark:border-purple-700 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-900 dark:text-purple-100 placeholder-purple-500"
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={copy}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105"
        >
          {copied ? "✓ Copied!" : "📋 Copy result"}
        </button>
        {result && (
          <span className="text-sm text-neutral-500">
            {result} {toLabel}
          </span>
        )}
      </div>
    </div>
  );
}