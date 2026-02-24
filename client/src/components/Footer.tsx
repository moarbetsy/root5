import { Link } from "wouter";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/for-parents", label: "For Parents" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Tagline */}
        <div className="mb-8 text-center">
          <p className="text-foreground text-lg font-medium">
            Helping teens and adults with special needs build healthy routines for life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm italic">
            Root to Rise Coaching provides educational and lifestyle coaching only and does not replace medical, nutritional, or mental health care.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-muted-foreground text-xs">
          <p>&copy; {new Date().getFullYear()} Root to Rise Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
