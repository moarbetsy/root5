import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Use the same brand hero image as the homepage for consistency.
const processImageUrl =
  "https://private-us-east-1.manuscdn.com/sessionFile/PZGzRbYB6e3pafpbvbI1Dy/sandbox/BWeYIqOoh3y4PTs2Hf3wHW-img-1_1771951425000_na1fn_aGVyby1ob21l.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFpHelJiWUI2ZTNwYWZwYnZiSTFEeS9zYW5kYm94L0JXZVlJcU9vaDN5NFBUczJIZjN3SFctaW1nLTFfMTc3MTk1MTQyNTAwMF9uYTFmbl9hR1Z5Ynkxb2IyMWwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m~poMO7jxG0m9tHIE9HyN~uStsieQ6wzI-CEb2mLrITXwr9B7CD-6iEDaIu0IwSZJDWQNoNZMLp9qHoZeQl1QzJNFQw2ALgvKC~9pDT0gflyIYIZPBZq6GXbNHvw2IKbXAtsHPkzIEpNjCnd39AfADXcg27RFG-cIB~oZZe8EGh6dlrj9-UdUCnFxamEPw7tTJylTY8yyE0KYKGaWp4VqpqfNM6YEEGnoQDIMPo7ldUIMybBCltR5-ykQouLuySyM19zqjWteKsyzaohM~4PyHiApLfBnqQjq1BQ7i0WCCN~Kd5hRaIn9SrdRnJ-3C4tZTJ2Tm1UIkmMdJY06d~3Bg__";

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                A clear, supportive process—designed to feel safe and manageable
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Root to Rise Coaching follows a simple, predictable structure so participants and families know exactly what to expect. The process is calm, flexible, and adapted to individual needs—without pressure or overwhelm.
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={processImageUrl}
                alt="Visual representation of coaching journey"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Steps */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            The process
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="bg-white border-2 border-secondary rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Free Intro Call</h3>
                  <p className="text-foreground/80 mb-4">
                    We begin with a relaxed, no-obligation introductory call. During this conversation, we:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Get to know each other</li>
                    <li>• Talk about needs, goals, and daily challenges</li>
                    <li>• Discuss preferences, abilities, and sensory considerations</li>
                    <li>• Answer questions from participants and/or caregivers</li>
                    <li>• Make sure the program is the right fit</li>
                  </ul>
                  <p className="text-foreground/80 italic mt-4">
                    This call is about connection and clarity, not commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-2 border-secondary rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Personalized Intake & Planning</h3>
                  <p className="text-foreground/80 mb-4">
                    After the intro call, a simple intake form helps gather important information to support safe and effective coaching. This includes:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Daily routines and current habits</li>
                    <li>• Movement experience and comfort level</li>
                    <li>• Nutrition preferences and sensitivities</li>
                    <li>• Wellness needs and stressors</li>
                    <li>• Support needs and communication preferences</li>
                  </ul>
                  <p className="text-foreground/80 italic mt-4">
                    Using this information, a personalized coaching plan is created—focused on realistic goals and gradual progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-2 border-secondary rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Coaching Sessions</h3>
                  <p className="text-foreground/80 mb-4">
                    Coaching sessions take place online in a calm, structured environment. Sessions may include:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Gentle, adaptive movement</li>
                    <li>• Simple nutrition habit guidance</li>
                    <li>• Routine building and scheduling support</li>
                    <li>• Emotional regulation and wellness practices</li>
                    <li>• Encouragement, reflection, and confidence-building</li>
                  </ul>
                  <p className="text-foreground/80 italic mt-4">
                    Sessions follow a clear, repeatable format to support comfort and consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border-2 border-secondary rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ongoing Support & Adjustments</h3>
                  <p className="text-foreground/80 mb-4">
                    Progress is never rushed. Coaching evolves as needs change. Ongoing support includes:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Regular check-ins</li>
                    <li>• Adjustments to routines and goals</li>
                    <li>• Reinforcement of positive habits</li>
                    <li>• Celebration of effort and small wins</li>
                  </ul>
                  <p className="text-foreground/80 italic mt-4">
                    When appropriate, caregivers may be included in check-ins to support consistency at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A pace that respects the individual
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Root to Rise Coaching is built on the belief that meaningful change happens when people feel:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Safe</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Supported</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Understood</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Respected</p>
              </div>
            </div>
            <p className="text-lg text-foreground/80 italic">
              There are no deadlines to "catch up" and no pressure to perform. Growth happens step by step, at a pace that feels right.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to begin?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            If you're looking for a calm, structured, and compassionate approach to building healthy routines, the first step is a free intro call.
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
