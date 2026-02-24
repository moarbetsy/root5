import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const parentsImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/PZGzRbYB6e3pafpbvbI1Dy/sandbox/BWeYIqOoh3y4PTs2Hf3wHW-img-5_1771951425000_na1fn_cGFyZW50cy1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFpHelJiWUI2ZTNwYWZwYnZiSTFEeS9zYW5kYm94L0JXZVlJcU9vaDN5NFBUczJIZjN3SFctaW1nLTVfMTc3MTk1MTQyNTAwMF9uYTFmbl9jR0Z5Wlc1MGN5MW9aWEp2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CQIHhgxyIo9abesgQGo~FO2AcabDCRb0FxKyxYJ2J7aeJOO0HWvNg-z4oKtgl8HkaN3ZG1~yPXDAiXql8eQvpjNEtH11oz9bqexYmyBeynb39KeuhnpI-SXk7c3h~3oRi~-fxgI78UKt6YavsuVk46LEz4y94PL-lpmWqopnEedhXHiMguu3xKwiTQgv3E1gs4bQUYGobYJGlx29pdrMeFQ48b0llBZL0SnHh9sfWo1LGw2Lx7b69K1o~L0jCyiUWLb7uv4HrQ13KHaHP5QbUOL-wj-K95vYw3-5xi-1MnYQ0ykdMErHQ3oeXwM4ZjG9BkY-MJH3IwxWZGvMTXG4iA__";

export default function ForParents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                A safe, respectful partnership—built on trust and communication
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                This work is collaborative. You are not handing your loved one off—you are partnering in their growth.
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
              <img
                src={parentsImageUrl}
                alt="Parent and young adult reviewing coaching plan together"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Role */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your role as a parent or caregiver
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Your involvement is welcomed and respected. Depending on the individual's needs and age, you may choose to:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Join the intro call</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Support routine follow-through at home</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Receive optional check-ins or updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Help reinforce consistency between sessions</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 leading-relaxed">
            At the same time, coaching prioritizes the individual's voice, autonomy, and sense of ownership whenever appropriate.
          </p>
        </div>
      </section>

      {/* Safety, Boundaries & Trust */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Safety, boundaries & trust
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Your trust is essential. Root to Rise Coaching is built on clear boundaries and ethical practices. This includes:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Coaching within a non-clinical scope</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Clear communication and expectations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Consent and confidentiality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Respectful, inclusive language</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Defined session structure</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Coaching does not include diagnosis, therapy, or medical treatment, and is designed to complement—not replace—professional care when needed.
          </p>
        </div>
      </section>

      {/* Communication & Transparency */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Communication & transparency
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            You can expect:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Clear explanations of the coaching process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Honest conversations about progress and challenges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Respect for privacy and confidentiality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Responsiveness within agreed-upon boundaries</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic">
            Open communication helps ensure a supportive and consistent experience for everyone involved.
          </p>
        </div>
      </section>

      {/* Supporting Long-Term Growth */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Supporting long-term growth
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The goal of coaching is not quick fixes. It's about helping individuals:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Build confidence and self-trust</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Develop realistic, sustainable routines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Feel more capable in daily life</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Experience progress without pressure</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic">
            Small, steady steps create meaningful change.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's talk
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            If you're considering coaching and want to learn more, a free intro call is the best place to start. We'll discuss your loved one's needs, answer your questions, and explore whether Root to Rise Coaching is the right fit.
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
