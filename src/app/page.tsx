import { ArrowRight, Github, Youtube } from 'lucide-react';
import Link from 'next/link';

// Navigation links configuration
const navLinks = [
  { href: '/human-of-earth', label: 'Human of Earth' },
  { href: '/journey', label: 'The Journey' },
  { href: '/movement', label: 'Movement & Growth' },
  { href: '/create', label: 'Create Together' },
];

// Social links configuration
const socialLinks = [
  { href: 'https://github.com/your-username', icon: Github, label: 'GitHub' },
  { href: 'https://youtube.com/@your-channel', icon: Youtube, label: 'YouTube' },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-xl font-bold">
                DYLAN JOHN
              </Link>
              <div className="flex space-x-6">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <section className="pt-24 pb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Human of Earth.<br />
            Creator of Things.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12">
            Pizza kitchen to tech journey. Problem solver. Life explorer.
          </p>
        </section>

        {/* Navigation cards */}
        <section className="grid md:grid-cols-2 gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="group block p-8 border border-gray-800 hover:border-white transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{label}</h2>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </div>
              <p className="text-gray-400">
                {/* Placeholder text - to be replaced with actual content */}
                Discover more about this aspect of the journey.
              </p>
            </Link>
          ))}
        </section>

        {/* Featured section - e.g., latest podcast or blog */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8">Latest Creation</h2>
          <div className="aspect-video bg-gray-900 rounded-lg">
            {/* Placeholder for featured content */}
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              Featured Content
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Dylan John. Human of Earth.
            </p>
            <div className="flex space-x-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
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