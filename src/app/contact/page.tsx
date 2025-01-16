import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata = {
  title: "Contact | Dylan John",
  description:
    "Get in touch for web development, IT consulting, or training services.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Let's Connect</h1>
        <p className="text-xl text-gray-600">
          Whether you're interested in web development, IT consulting, or want
          to discuss training, I'm here to help turn your vision into reality.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {/* Contact Form Section */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Info Section */}
        <div className="space-y-8">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
            <ContactInfo />
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Office Hours</h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Mon-Fri:</span> 9:00 AM - 5:00
                PM ET
              </p>
              <p>
                <span className="font-semibold">Weekend:</span> By appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
