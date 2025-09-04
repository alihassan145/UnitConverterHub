import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata = { title: 'Terms of Service' };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Terms and conditions for using our conversion tools.</p>
      </section>
      
      <div className="max-w-3xl space-y-6">
        <p className="text-base leading-relaxed">
          By using Unit Converter Hub, you agree to these terms of service. Our conversion tools are provided &quot;as is&quot; for informational purposes.
        </p>
        
        <p className="text-base leading-relaxed">
          While we strive for accuracy, we recommend verifying critical calculations independently. We are not liable for any decisions made based on our conversion results.
        </p>
        
        <p className="text-base leading-relaxed">
          These terms may be updated periodically. Continued use of the site constitutes acceptance of any changes.
        </p>
      </div>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}