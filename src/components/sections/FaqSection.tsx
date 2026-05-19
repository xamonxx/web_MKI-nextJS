import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqSection, faqs } from "@/constants/content";
import { SectionHeader } from "@/components/sections/SectionHeader";

/**
 * FAQ section with FAQPage JSON-LD schema for Google rich results.
 * Inline script is server-rendered so Googlebot reads it on first crawl.
 */
export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-white">
      {/* FAQPage schema — enables expandable FAQ in Google search results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container grid gap-10 lg:grid-cols-[0.82fr_1fr]">
        <SectionHeader eyebrow={faqSection.eyebrow} title={faqSection.title} description={faqSection.description} align="left" />
        <div className="rounded-3xl border border-border bg-white px-6 shadow-soft md:px-8">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

