import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to take the first step?
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Booking a free intro call is a relaxed, no-obligation way to see if we are a good fit.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white border-2 border-secondary rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Send us a message
            </h2>

            {submitted ? (
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Thank you for reaching out!
                </h3>
                <p className="text-foreground/80">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-foreground font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-foreground font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    placeholder="Tell us a bit about your situation and what you're looking for..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                >
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            )}
          </div>

          {/* Alternative Note */}
          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              Prefer to schedule directly? Look for our booking calendar below or reach out via email.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Integration Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Schedule your free intro call
          </h2>
          <div className="bg-white border-2 border-secondary rounded-lg p-12 text-center">
            <p className="text-foreground/80 mb-6">
              Calendly or other scheduling tool would be embedded here. This allows you to book a time that works for you directly.
            </p>
            <p className="text-sm text-muted-foreground italic">
              [Booking integration placeholder - connect your preferred scheduling tool]
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What to expect
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            During your free intro call, we'll get to know each other, discuss your needs and goals, answer any questions you have, and determine if Root to Rise Coaching is the right fit. There's no pressure—this is simply a chance to connect and explore.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Root to Rise Coaching provides educational and lifestyle coaching only and does not replace medical, nutritional, or mental health care.
          </p>
        </div>
      </section>
    </div>
  );
}
