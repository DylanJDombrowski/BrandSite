import React from "react";
import {
  ArrowRight,
  Code,
  Server,
  Laptop,
  Users,
  Settings,
  Gauge,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Service } from "@/types";

const services: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Tailor-made websites built from the ground up with modern technologies.",
    icon: Code,
    features: [
      "React & Next.js Development",
      "Full-Stack Solutions",
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
    ],
    price: "Starting at $5,000",
  },
  {
    title: "CMS Website Solutions",
    description:
      "Professional websites using WordPress and other content management systems.",
    icon: Settings,
    features: [
      "WordPress Development",
      "E-commerce Solutions",
      "Content Management",
      "Plugin Integration",
      "Site Maintenance",
    ],
    price: "Starting at $2,500",
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance and implementation support.",
    icon: Server,
    features: [
      "System Integration",
      "Technical Advisory",
      "Infrastructure Planning",
      "Security Assessment",
      "Performance Optimization",
    ],
    price: "Custom Quote",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          Services & Solutions
        </h1>
        <p className="mb-12 max-w-2xl text-xl text-gray-400">
          Professional web development and IT consulting services tailored to
          your business needs. From custom websites to complete system
          solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-gray-800 bg-gray-900 text-white transition-all hover:border-white"
              >
                <CardHeader>
                  <Icon className="mb-4 h-12 w-12" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {service.features && (
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4 text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="border-t border-gray-800 pt-4">
                    {service.price && (
                      <p className="mb-4 text-lg font-semibold">
                        {service.price}
                      </p>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-bold">How We Work</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              icon: Users,
              title: "1. Consultation",
              description:
                "We discuss your needs and objectives to understand your vision.",
            },
            {
              icon: Laptop,
              title: "2. Planning",
              description:
                "Detailed project scope, timeline, and deliverables are defined.",
            },
            {
              icon: Code,
              title: "3. Development",
              description:
                "Your solution is built with regular updates and revisions.",
            },
            {
              icon: Gauge,
              title: "4. Launch",
              description:
                "Final testing, deployment, and ongoing support as needed.",
            },
          ].map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <Icon className="mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="border border-gray-800 bg-gray-900 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Book a free consultation to discuss your project and explore how we
            can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white px-8 py-4 font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
