import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const aboutImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/PZGzRbYB6e3pafpbvbI1Dy/sandbox/BWeYIqOoh3y4PTs2Hf3wHW-img-2_1771951427000_na1fn_YWJvdXQtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFpHelJiWUI2ZTNwYWZwYnZiSTFEeS9zYW5kYm94L0JXZVlJcU9vaDN5NFBUczJIZjN3SFctaW1nLTJfMTc3MTk1MTQyNzAwMF9uYTFmbl9ZV0p2ZFhRdGFHVnlidy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OUuixCkDauafsJO6Ss3WkovpbLVohBLvbCZQjpn3tPXO6n2c30QdUNwktbKWXGTevJHaX7eg1ZciS1~OvLR8iHZIhDsH2waBoH6PoENwpCINSRZwmN9d0uH21iM4aVqhdbuikbjFHSRZwD8q3V9B1VqzH-snhMvd5pFGnl4vq3WdgBI7bjNbVR1UEFg0nov1oh8tGoPsgbwfMxY2VdZUzKITXKqQRUe7VtjUJP79Nz-4noPxsPnZzWMaXt1BWngGzpee78g2684b6RYFvvivQpPr9UzhoZdiDkYvLYtPL-AlZaiGtkICPiNyMmAX7yNIKYEESC0vru9VkGFD0et9Xg__";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                A gentle, structured approach to growth—rooted in respect and care
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe that everyone deserves the opportunity to feel strong, capable, and supported in their daily life. Root to Rise Coaching was created to offer calm, consistent, and compassionate guidance for teens and adults with special needs—without pressure, judgment, or unrealistic expectations. This work is about meeting people where they are and helping them grow, one steady step at a time.
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img
                src={aboutImageUrl}
                alt="Professional coach in welcoming office space"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why I Do This Work */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why I do this work
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            I've seen how overwhelming "healthy living" can feel—especially for individuals who benefit from routine, predictability, and clear support. Too often, fitness and nutrition spaces move too fast, expect too much, or fail to adapt to different needs. I started Root to Rise Coaching to create something different.
          </p>
          <p className="text-lg text-foreground/80 font-medium mb-4">A space where:</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Progress is gentle and achievable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Effort is celebrated</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Routines are clear and supportive</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Growth happens at a comfortable pace</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic">
            My goal is not to push people to change who they are, but to help them build habits that make everyday life feel more manageable and empowering.
          </p>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            My approach
          </h2>
          <div className="bg-white border-2 border-secondary rounded-lg p-8 mb-8">
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80 font-medium">Supportive, not clinical</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80 font-medium">Structured, not rigid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80 font-medium">Encouraging, not pressuring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/80 font-medium">Individualized, not one-size-fits-all</span>
              </li>
            </ul>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Each program is adapted to the person in front of me—their abilities, preferences, sensory needs, and goals. We focus on simple routines, repetition, and consistency, because that's where real confidence grows. There is no rushing. There is no perfection. There is steady progress.
          </p>
        </div>
      </section>

      {/* What I Focus On */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What I focus on
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            My coaching centers around five core areas:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Movement:</strong> Accessible, confidence-building physical activity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Nutrition:</strong> Simple, realistic habits that respect sensory preferences</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Routine:</strong> Daily structure that reduces stress and supports independence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Wellness:</strong> Emotional regulation, self-care, and stress awareness</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Growth:</strong> Self-esteem, autonomy, and trust in one's abilities</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic">
            These pillars work together to support both physical and emotional wellbeing.
          </p>
        </div>
      </section>

      {/* Working with Teens, Adults, and Families */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Working with teens, adults, and families
          </h2>
          <p className="text-lg text-foreground/80 font-medium mb-4">I work with:</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Teens who benefit from gentle structure and encouragement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Young adults building independence and life skills</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Adults seeking routine, accountability, and confidence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Parents and caregivers looking for safe, respectful support</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I value collaboration and clear communication. When appropriate, parents and caregivers are welcomed as partners in the process, while always respecting the autonomy and dignity of the individual.
          </p>
        </div>
      </section>

      {/* A Safe and Respectful Space */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A safe and respectful space
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Trust is essential in this work. Root to Rise Coaching is built on:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Clear boundaries and expectations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Consent and confidentiality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Strength-based, respectful language</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">A non-judgmental environment</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic">
            Coaching is educational and lifestyle-focused, and always stays within a non-clinical scope.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's take the first step together
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            If you're looking for a calm, supportive approach to building healthy routines—for yourself or someone you care for—I'd love to connect.
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
