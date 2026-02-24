import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const programsImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/PZGzRbYB6e3pafpbvbI1Dy/sandbox/BWeYIqOoh3y4PTs2Hf3wHW-img-3_1771951430000_na1fn_cHJvZ3JhbXMtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFpHelJiWUI2ZTNwYWZwYnZiSTFEeS9zYW5kYm94L0JXZVlJcU9vaDN5NFBUczJIZjN3SFctaW1nLTNfMTc3MTk1MTQzMDAwMF9uYTFmbl9jSEp2WjNKaGJYTXRhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PKsIT-Om71LFMO9GAWyzgrx5Rwa512J5FWgc7JnqjqdMHraJY~nBK~27bIYfruo-zlf9ttUm1PmGJprAaVrPdQ5a8FjTJtfJMeuw9mrk1Pb0XLWooAcU6shspkCfjS6RSdGVbBPkiywDP78yJarBxzRH0sXpnNU5kdQsMB7cupaVZr-CXUSYL37qMuxYgLhMgpmgMpBNyqxPKrnXM3HsMNoLlYhijrfnbwA6j-9tN5EYb42YOHx7QDDhOViduS47c5Q9hI53fFmAT~wd3alNM9fdxiQvgBpkqxdSK0~Qw6rSw1FU36QLc2pGWcXdW-TLpe95I6ri1~E4fLaSObiFSA__";

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Supportive coaching designed to grow healthy habits—step by step
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Root to Rise Coaching offers structured, compassionate online programs for teens and adults with special needs. Each program is designed to build movement, nutrition, routine, and wellness habits at a pace that feels safe and achievable. Programs are non-clinical, strength-based, and adapted to individual abilities, preferences, and sensory needs.
              </p>
            </div>

            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={programsImageUrl}
                alt="Diverse group in online coaching session"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: 1:1 Online Coaching */}
            <div className="bg-white border-2 border-secondary rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-2">1:1 Online Coaching</h3>
              <p className="text-lg text-primary font-medium mb-6">
                Personalized support for meaningful, lasting change
              </p>
              <p className="text-foreground/80 mb-6">
                One-to-one coaching provides individualized guidance in a calm, focused environment. This option is ideal for participants who benefit from personal attention, flexibility, and tailored routines.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-3">What's included:</h4>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Weekly or bi-weekly live online sessions (30–60 minutes)</li>
                  <li>• Personalized fitness, nutrition, and routine planning</li>
                  <li>• Adaptive movement options (chair-based, low-impact, or functional)</li>
                  <li>• Simple habit-building tools and visual supports</li>
                  <li>• Ongoing encouragement and accountability</li>
                  <li>• Optional caregiver or parent check-ins</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-2">Best for:</h4>
                <p className="text-foreground/80 text-sm">
                  Teens who need individualized structure and support • Young adults building independence • Adults seeking routine, accountability, and confidence
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-foreground/70">
                  <strong>Format:</strong> Online (live sessions) | <strong>Investment:</strong> Shared during the intro call
                </p>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Book a Free Intro Call
                </Link>
              </Button>
            </div>

            {/* Card 2: Small Group Coaching */}
            <div className="bg-white border-2 border-secondary rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-2">Small Group Coaching</h3>
              <p className="text-lg text-primary font-medium mb-6">
                Community, routine, and shared growth
              </p>
              <p className="text-foreground/80 mb-6">
                Small group coaching brings together 3–6 participants with similar needs or age ranges. Sessions focus on shared routines, gentle movement, and supportive connection—while still honoring individual differences.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-3">What's included:</h4>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Weekly live group sessions</li>
                  <li>• Guided adaptive workouts and wellness practices</li>
                  <li>• Simple, repeatable routines</li>
                  <li>• Encouragement through shared progress</li>
                  <li>• Clear session structure and predictable flow</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-2">Best for:</h4>
                <p className="text-foreground/80 text-sm">
                  Participants who enjoy gentle social interaction • Building confidence in a group setting • Practicing routines with peer support
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-foreground/70">
                  <strong>Format:</strong> Online (live group sessions) | <strong>Investment:</strong> Shared during the intro call
                </p>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Book a Free Intro Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Coaching Matters */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why coaching matters
          </h2>

          <div className="space-y-8">
            {/* Point 1 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                1. Individualized Guidance
              </h3>
              <p className="text-foreground/80">
                Every person has unique needs, abilities, and preferences. A coach provides tailored support that respects these differences, rather than applying a one-size-fits-all approach. This personalization makes the experience feel relevant and achievable.
              </p>
            </div>

            {/* Point 2 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                2. Consistency and Routine
              </h3>
              <p className="text-foreground/80">
                Many special-needs individuals thrive on predictability. A coach helps establish daily routines (morning/evening, meals, wellness breaks), reinforce habits over time, and provide accountability in a supportive, non-pressuring way. Consistency is key to long-term wellness, and coaches help make habits stick.
              </p>
            </div>

            {/* Point 3 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                3. Safety and Adaptation
              </h3>
              <p className="text-foreground/80">
                Physical and nutritional guidance needs to be safe and appropriate. Coaches can modify exercises for mobility, sensory sensitivities, or medical considerations, recommend gentle, functional movement that reduces injury risk, and provide nutrition guidance that considers sensory preferences, food aversions, and routines. This reduces trial-and-error and ensures healthy progress without harm.
              </p>
            </div>

            {/* Point 4 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                4. Emotional Support and Motivation
              </h3>
              <p className="text-foreground/80">
                Special-needs teens and adults may face frustration, anxiety, or low self-confidence when trying to start new habits. A coach encourages effort rather than perfection, celebrates small wins to build self-esteem, and helps participants manage stress, sensory overload, and emotional regulation. This combination of emotional and practical support makes the process encouraging and sustainable.
              </p>
            </div>

            {/* Point 5 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                5. Building Independence and Life Skills
              </h3>
              <p className="text-foreground/80">
                Coaching is not just about fitness or nutrition—it's about building life skills. Coaches teach participants how to structure their day, make healthy choices independently, and develop confidence to take ownership of their routines. Over time, participants gain autonomy, which improves long-term wellbeing.
              </p>
            </div>

            {/* Point 6 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                6. Support for Families
              </h3>
              <p className="text-foreground/80">
                Coaches act as partners with parents or caregivers by providing guidance without taking over, offering reassurance and progress updates, and helping families reinforce routines at home. This reduces stress for caregivers while keeping the focus on the participant's growth and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Real examples of coaching in action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Case 1 */}
            <div className="bg-white rounded-lg p-8 border-2 border-secondary">
              <h3 className="text-xl font-bold text-foreground mb-4">Teen with Autism</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-foreground">Participant:</p>
                  <p className="text-foreground/80">Alex, 15 years old</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Focus:</p>
                  <p className="text-foreground/80">Building daily routines and independence</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Challenges:</p>
                  <p className="text-foreground/80">Difficulty transitioning between activities, inconsistent eating and sleep routines, anxiety about new experiences</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Coaching Approach:</p>
                  <p className="text-foreground/80">Introduced a visual morning and evening routine, guided short adaptive exercises, used sensory-friendly nutrition adjustments, provided check-ins with both Alex and parent</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Outcome:</p>
                  <p className="text-foreground/80">Alex consistently followed daily routines with fewer transition issues, increased confidence in self-care tasks, greater comfort in physical activity</p>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-lg p-8 border-2 border-secondary">
              <h3 className="text-xl font-bold text-foreground mb-4">Young Adult with ADHD</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-foreground">Participant:</p>
                  <p className="text-foreground/80">Jordan, 19 years old</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Focus:</p>
                  <p className="text-foreground/80">Consistency in wellness and self-care habits</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Challenges:</p>
                  <p className="text-foreground/80">Forgetting meals, skipping workouts, inconsistent sleep, feeling overwhelmed by planning</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Coaching Approach:</p>
                  <p className="text-foreground/80">Created simple weekly schedule with visual reminders, built short achievable routines, introduced step-by-step nutrition guidance, focused on small habit-building with positive reinforcement</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Outcome:</p>
                  <p className="text-foreground/80">Developed consistent morning and evening routine, regular participation in physical activity and balanced meals, reduced stress and increased confidence</p>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-lg p-8 border-2 border-secondary">
              <h3 className="text-xl font-bold text-foreground mb-4">Adult with Anxiety</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-foreground">Participant:</p>
                  <p className="text-foreground/80">Sam, 27 years old</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Focus:</p>
                  <p className="text-foreground/80">Emotional regulation and wellness</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Challenges:</p>
                  <p className="text-foreground/80">Overwhelm in noisy environments, difficulty initiating movement, irregular meal patterns, stress management</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Coaching Approach:</p>
                  <p className="text-foreground/80">Introduced calm sensory-friendly movement, guided gradual introduction of wellness practices, collaborated to create predictable daily schedule, used small achievable goals</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Outcome:</p>
                  <p className="text-foreground/80">Improved ability to manage stress through self-regulation, developed consistent meal and movement habits, increased self-confidence and independence</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic text-center mt-8">
            These examples are representative and do not guarantee individual results.
          </p>
        </div>
      </section>

      {/* Program Focus Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Program focus areas
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            All programs are built around five core pillars:
          </p>
          <ul className="space-y-4">
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
              <span className="text-foreground/80"><strong>Routine:</strong> Daily structure that reduces stress and supports consistency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Wellness:</strong> Emotional regulation, self-care, and stress management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80"><strong>Growth:</strong> Independence, self-esteem, and self-trust</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic mt-6">
            Progress is gradual, supportive, and celebrated every step of the way.
          </p>
        </div>
      </section>

      {/* For Parents & Caregivers */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            For parents & caregivers
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Your involvement and peace of mind matter. Programs include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Clear boundaries and expectations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Safety-first coaching practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Respect for autonomy and dignity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Optional communication and check-ins</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-foreground/80">Confidentiality and consent</span>
            </li>
          </ul>
          <p className="text-lg text-foreground/80 italic">
            Coaching is collaborative—you remain part of the journey.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not sure which program is the right fit?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            The best place to start is a free intro call. We'll talk through needs, goals, and preferences to ensure the right level of support.
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
