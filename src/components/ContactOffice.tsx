import { Phone, MapPin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ContactOfficeCards() {
  const contactMethods = [
    {
      icon: Phone,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      isDark: false,
    },
    {
      icon: MapPin,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      isDark: true,
    },
    {
      icon: Mail,
      emails: ["georgia.young@example.com", "georgia.young@ple.com"],
      isDark: false,
    },
  ];

  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-sm font-bold text-[#252B42] uppercase tracking-wider mb-2">
            VISIT OUR OFFICE
          </h3>
          <h2 className="text-4xl font-bold text-[#252B42] max-w-xl mx-auto leading-tight">
            We help small businesses with big ideas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 gap-4 w-[329px] h-[403px] ${
                method.isDark ? "bg-[#252B42]" : "bg-white"
              }`}
            >
              <method.icon
                size={72}
                className="text-[#23A6F0]"
                strokeWidth={0.5}
              />
              <div className="text-center space-y-2">
                <p
                  className={`text-sm font-bold [58px] ${
                    method.isDark ? "text-white" : "text-[#252B42]"
                  }`}
                >
                  {method.emails[0]}
                </p>
                <p
                  className={`text-sm font-bold ${
                    method.isDark ? "text-white" : "text-[#252B42]"
                  }`}
                >
                  {method.emails[1]}
                </p>
              </div>
              <h5
                className={`text-base font-bold ${
                  method.isDark ? "text-white" : "text-[#252B42]"
                }`}
              >
                Get Support
              </h5>
              <Button
                variant="outline"
                className="rounded-full border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors px-9"
              >
                Submit Request
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
