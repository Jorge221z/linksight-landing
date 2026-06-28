import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes! You get 5 free calculations every single day, for life. No credit card required. Perfect for hobbyists, drone pilots, and casual planning.",
  },
  {
    question: "What is included in LinkSight Pro?",
    answer:
      "LinkSight Pro includes unlimited daily calculations, the ability to generate and export professional PDF feasibility reports with your company logo, and priority support.",
  },
  {
    question: "Where does the elevation data come from?",
    answer:
      "We use the SRTM90m (Shuttle Radar Topography Mission) global database, which provides reliable and consistent 90-meter resolution topographic data for almost anywhere on Earth.",
  },
  {
    question: "Do I need an internet connection?",
    answer:
      "Yes. The app downloads the specific elevation profile for your selected path in milliseconds from our high-speed servers, meaning you don't need to store gigabytes of maps on your phone.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-32 px-6 pb-[30vw]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about LinkSight. Have a question not listed? Contact our support.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
