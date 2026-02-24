import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Activity, Apple, Clock, Heart, Sprout } from "lucide-react";

const heroImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/PZGzRbYB6e3pafpbvbI1Dy/sandbox/BWeYIqOoh3y4PTs2Hf3wHW-img-1_1771951425000_na1fn_aGVyby1ob21l.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFpHelJiWUI2ZTNwYWZwYnZiSTFEeS9zYW5kYm94L0JXZVlJcU9vaDN5NFBUczJIZjN3SFctaW1nLTFfMTc3MTk1MTQyNTAwMF9uYTFmbl9hR1Z5Ynkxb2IyMWwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m~poMO7jxG0m9tHIE9HyN~uStsieQ6wzI-CEb2mLrITXwr9B7CD-6iEDaIu0IwSZJDWQNoNZMLp9qHoZeQl1QzJNFQw2ALgvKC~9pDT0gflyIYIZPBZq6GXbNHvw2IKbXAtsHPkzIEpNjCnd39AfADXcg27RFG-cIB~oZZe8EGh6dlrj9-UdUCnFxamEPw7tTJylTY8yyE0KYKGaWp4VqpqfNM6YEEGnoQDIMPo7ldUIMybBCltR5-ykQouLuySyM19zqjWteKsyzaohM~4PyHiApLfBnqQjq1BQ7i0WCCN~Kd5hRaIn9SrdRnJ-3C4tZTJ2Tm1UIkmMdJY06d~3Bg__";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Root to Rise Coaching
              </h1>
              <p className="text-xl text-foreground/80">
                Helping teens and adults with special needs build healthy routines for life
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Gentle, structured online coaching focused on movement, nutrition, routine, and wellness—designed to support confidence, independence, and everyday wellbeing.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                <Link href="/contact">
                  Book a Free Intro Call
                </Link>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroImageUrl}
                alt="Diverse group in supportive movement activity"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            A calm, supportive approach to healthy living
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            Building a healthy lifestyle can feel overwhelming—especially for individuals who need structure, clarity, and encouragement. Root to Rise Coaching offers step-by-step guidance that meets each person where they are. This is not about perfection or pressure. It's about creating simple routines, celebrating small wins, and building habits that last.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Who this is for
          </h2>
          <div className="max-w-3xl mx-auto bg-white border-2 border-secondary rounded-lg p-8 shadow-sm">
            <p className="text-lg text-foreground/80 mb-6">
              Root to Rise Coaching supports:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground/80">Teens (13–18) with developmental, learning, or cognitive differences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground/80">Young adults building independence and daily structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground/80">Adults who benefit from clear routines and accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground/80">Parents and caregivers seeking safe, respectful coaching support</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground italic mt-6">
              Programs are adapted to individual needs, abilities, and sensory preferences.
            </p>
          </div>
        </div>
      </section>

      {/* What We Focus On - 5 Pillars */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What we focus on
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Movement */}
            <div className="bg-white border-2 border-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Activity className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Movement</h3>
              <p className="text-foreground/70">
                Adaptive, confidence-building fitness designed to feel safe, accessible, and achievable.
              </p>
            </div>

            {/* Nutrition */}
            <div className="bg-white border-2 border-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Apple className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Nutrition</h3>
              <p className="text-foreground/70">
                Simple, realistic nutrition habits that respect sensory needs and individual preferences.
              </p>
            </div>

            {/* Routine */}
            <div className="bg-white border-2 border-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Clock className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Routine</h3>
              <p className="text-foreground/70">
                Daily structure that reduces stress, builds consistency, and supports independence.
              </p>
            </div>

            {/* Wellness */}
            <div className="bg-white border-2 border-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Heart className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Wellness</h3>
              <p className="text-foreground/70">
                Emotional regulation tools, self-care practices, and stress-management strategies.
              </p>
            </div>

            {/* Growth */}
            <div className="bg-white border-2 border-secondary rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Sprout className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Growth</h3>
              <p className="text-foreground/70">
                Building self-esteem, confidence, and a sense of personal capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Coaching Helps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            How coaching helps
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl mt-1">✓</span>
              <p className="text-lg text-foreground/80">Encourages healthy habits without pressure or shame</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl mt-1">✓</span>
              <p className="text-lg text-foreground/80">Builds consistency through repetition and predictability</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl mt-1">✓</span>
              <p className="text-lg text-foreground/80">Supports confidence and self-trust</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl mt-1">✓</span>
              <p className="text-lg text-foreground/80">Adapts to different learning styles and abilities</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-bold text-xl mt-1">✓</span>
              <p className="text-lg text-foreground/80">Focuses on progress at a comfortable pace</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground italic mt-8 text-center">
            Coaching is supportive, non-clinical, and strength-based.
          </p>
        </div>
      </section>

      {/* How It Works - 3 Step Teaser */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Free Intro Call</h3>
              <p className="text-foreground/70">
                A relaxed conversation to understand needs, answer questions, and ensure the right fit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Personalized Plan</h3>
              <p className="text-foreground/70">
                A simple, individualized plan based on goals, preferences, and daily life.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ongoing Support</h3>
              <p className="text-foreground/70">
                Regular online coaching sessions, guidance, and encouragement—adjusted as needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Parents & Caregivers Callout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              For parents & caregivers
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              Your trust matters. Coaching is built around:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80">Clear communication and expectations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80">Safety, consent, and confidentiality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80">Optional parent or caregiver involvement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80">Respect for autonomy and individual dignity</span>
              </li>
            </ul>
            <p className="text-lg text-foreground/80 italic">
              You're not handing your loved one off—you're partnering in their growth.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A gentle path from where you are to where you want to be
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Root to Rise Coaching is about steady progress, not quick fixes. With patience, structure, and encouragement, healthy habits can grow—one step at a time.
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
