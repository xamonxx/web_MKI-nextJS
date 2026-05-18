import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqSection, faqs } from "@/constants/content";
import { SectionHeader } from "@/components/sections/SectionHeader";

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-white">
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
