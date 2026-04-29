import { MapPin, Phone, Mail } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Nairobi, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+254 721 150 988"],
    hrefs: ["tel:+254721150988"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["transnamic@gmail.com"],
    hrefs: ["mailto:transnamic@gmail.com"],
  },
];

const ContactDetails = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center mb-6">
                  <Icon className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <div className="flex flex-col gap-1.5">
                  {item.lines.map((line, i) =>
                    item.hrefs?.[i] ? (
                      <a
                        key={line}
                        href={item.hrefs[i]}
                        className="text-muted-foreground hover:text-amber-600 transition-colors text-sm"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
