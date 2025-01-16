import {
  ArrowRight,
  Github,
  Youtube,
  Code,
  Server,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { Service } from "@/types";

// Navigation links configuration
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Services data
const services: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Tailor-made websites built from the ground up with modern technologies.",
    icon: Code,
  },
  {
    title: "CMS Solutions",
    description:
      "Professional websites using WordPress and other content management systems.",
    icon: Settings,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance and implementation support.",
    icon: Server,
  },
];

// Social links configuration
const socialLinks = [
  { href: "https://github.com/your-username", icon: Github, label: "GitHub" },
  {
    href: "https://youtube.com/@your-channel",
    icon: Youtube,
    label: "YouTube",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Film grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />

      {/* Main content */}
      <div className="container relative mx-auto px-4 py-16">
        {/* Navigation */}
        <nav className="fixed left-0 right-0 top-0 z-50 bg-black bg-opacity-90">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="text-xl font-bold">
                DYLAN J. DOMBROWSKI
              </Link>
              <div className="flex space-x-6">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gray-400"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <section className="pb-16 pt-24">
          <h1 className="mb-8 text-5xl font-bold md:text-7xl">
            Web Development.
            <br />
            IT Solutions.
          </h1>
          <p className="mb-12 max-w-2xl text-xl text-gray-400 md:text-2xl">
            Custom websites and IT consulting for businesses that want to grow.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-white px-8 py-3 font-bold text-black transition-colors hover:bg-gray-200"
            >
              Book Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border border-white px-8 py-3 font-bold transition-all hover:bg-white hover:text-black"
            >
              View Work
            </Link>
          </div>
        </section>

        {/* Featured section - e.g., latest podcast or blog */}
        <section className="grid gap-8 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="border border-gray-800 p-8 transition-colors hover:border-white"
            >
              <Icon className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="mb-4 text-gray-400">{description}</p>
              <Link
                href={`/services#${title.toLowerCase()}`}
                className="flex items-center text-white transition-transform hover:translate-x-2"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="relative mt-24 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-gray-400 md:mb-0">
              © {new Date().getFullYear()} Dylan John. Human of Earth.
            </p>
            <div className="flex space-x-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
