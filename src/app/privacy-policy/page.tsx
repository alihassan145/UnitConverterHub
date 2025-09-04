import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata = { title: 'Privacy Policy' };

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-neutral-600 dark:text-neutral-400">How we handle your data and protect your privacy.</p>
      </section>
      
      <div className="max-w-3xl space-y-6">
        <p className="text-base leading-relaxed">
          We respect your privacy and are committed to protecting your personal information. This site does not collect personal data beyond what is necessary to operate and improve the service.
        </p>
        
        <p className="text-base leading-relaxed">
          We may use cookies and similar technologies to enhance your browsing experience and analyze site usage. No personal information is shared with third parties without your consent.
        </p>
        
        <p className="text-base leading-relaxed">
          If you have any questions about our privacy practices, please contact us at the email provided on our contact page.
        </p>
      </div>
      
      <AdPlaceholder>Sponsored</AdPlaceholder>
    </div>
  );
}