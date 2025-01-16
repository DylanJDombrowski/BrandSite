import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Mail className="h-5 w-5 text-blue-600" />
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-gray-600">dyland601@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <MapPin className="h-5 w-5 text-blue-600" />
        <div>
          <h3 className="font-medium">Location</h3>
          <p className="text-gray-600">Louisville, KY</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Phone className="h-5 w-5 text-blue-600" />
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-gray-600">Available upon request</p>
        </div>
      </div>
    </div>
  );
}
