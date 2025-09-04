import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata = { title: 'Contact Us' };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Get in touch with our team for support or feedback.</p>
      </section>
      
      <div className="max-w-3xl space-y-6">
        <p className="text-base leading-relaxed">
          Have feedback, questions, or suggestions? We&#39;d love to hear from you! 
          Reach out to us at <a href="mailto:support@unitconverterhub.com" className="text-blue-600 hover:text-blue-700 underline">support@unitconverterhub.com</a>.
        </p>
        
        <p className="text-base leading-relaxed">
          We typically respond within 24 hours and are always looking for ways to improve our conversion tools.
        </p>
      </div>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}