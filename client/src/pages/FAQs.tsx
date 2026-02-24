import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

export default function FAQs() {
  const faqs = [
    {
      question: "Is this therapy or medical treatment?",
      answer:
        "No. Root to Rise Coaching provides educational and lifestyle coaching only. Coaching focuses on habit-building, routines, movement, nutrition education, and wellness support. It does not include diagnosis, therapy, or medical treatment and does not replace professional healthcare services.",
    },
    {
      question: "Who is this coaching for?",
      answer:
        "Coaching is designed for: Teens with developmental, learning, or cognitive differences • Young adults building independence and daily routines • Adults who benefit from structure, accountability, and support • Parents and caregivers seeking respectful, non-clinical guidance. Programs are adapted to individual needs, abilities, and sensory preferences.",
    },
    {
      question: "What ages do you work with?",
      answer:
        "Root to Rise Coaching typically works with teens (13+) and adults. Parent or caregiver consent and involvement is required for minors.",
    },
    {
      question: "What does a typical coaching session look like?",
      answer:
        "Sessions are calm, structured, and predictable. Each session may include: Gentle, adaptive movement • Simple nutrition habit guidance • Routine planning and review • Wellness or emotional regulation practices • Encouragement and reflection. Sessions follow a repeatable format to help participants feel comfortable and confident.",
    },
    {
      question: "Is coaching done online or in person?",
      answer:
        "All coaching sessions are held online. This allows participants to engage from a familiar, comfortable environment and supports consistency and accessibility. However, workshops, clubs, and events may be done in person.",
    },
    {
      question: "How involved do parents or caregivers need to be?",
      answer:
        "Involvement varies based on age and individual needs. Parents and caregivers may: Join the intro call • Support routines at home • Receive optional updates or check-ins. Whenever appropriate, coaching prioritizes the individual's autonomy and sense of ownership.",
    },
    {
      question: "Is this safe for my child or loved one?",
      answer:
        "Safety is a top priority. Coaching is: Non-clinical and educational • Adapted to individual comfort levels • Focused on low-risk, accessible movement • Guided by clear boundaries and expectations. An intake process helps ensure coaching is appropriate and supportive.",
    },
    {
      question: "Do you provide meal plans or diets?",
      answer:
        "No. Coaching focuses on simple nutrition habits and education, not meal plans or restrictive diets. Guidance respects sensory preferences, routines, and individual needs.",
    },
    {
      question: "What if we're not sure this is the right fit?",
      answer:
        "That's exactly why the free intro call exists. This call allows you to ask questions, share concerns, and decide whether coaching feels like the right next step—without pressure or obligation.",
    },
    {
      question: "How do we get started?",
      answer:
        "The first step is booking a free intro call. From there, we'll discuss needs, goals, and next steps.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Clear answers to help you feel confident and informed
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Choosing coaching for yourself or a loved one is an important decision. Below are answers to common questions from parents, caregivers, and participants. If you don't see your question here, you're always welcome to reach out.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none border-2 border-secondary rounded-lg px-6 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-lg font-bold text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            The best way to get answers is to schedule a free intro call. We'll discuss your specific situation and help you determine if Root to Rise Coaching is the right fit.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            <Link href="/contact">
              Book a Free Intro Call
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground italic mt-8">
            Root to Rise Coaching provides educational and lifestyle coaching only and does not replace medical, nutritional, or mental health care.
          </p>
        </div>
      </section>
    </div>
  );
}
