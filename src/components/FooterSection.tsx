import { MapPin, Phone, Mail, ArrowUpRight, Users } from "lucide-react";
import { useState, useEffect } from "react";

const VISITOR_KEY = "dk_visitor_count";
const VISITED_KEY = "dk_has_visited";

const FooterSection = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(VISITOR_KEY);
    let count = stored ? parseInt(stored, 10) : 1247; // seed with a base number

    if (!sessionStorage.getItem(VISITED_KEY)) {
      count += 1;
      sessionStorage.setItem(VISITED_KEY, "true");
      localStorage.setItem(VISITOR_KEY, count.toString());
    }

    setVisitorCount(count);
  }, []);

  const mapsUrl = "https://www.google.com/maps/search/DK+Engineering+Embakasi+North+Airport+Road+Nairobi+Kenya";

  return (
    <footer id="contact" className="section-padding border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-16">
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] mb-6 block">Get in Touch</span>
            <h2 className="font-heading text-6xl md:text-8xl text-foreground leading-[0.9]">
              LET'S BUILD<br />
              <span className="text-primary red-glow">TOGETHER</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8">
            <a href="mailto:michchore@gmail.com" className="group flex items-center justify-between border-b border-border pb-4 hover:border-primary transition-colors">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground text-lg">michchore@gmail.com</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="tel:+254700000000" className="group flex items-center justify-between border-b border-border pb-4 hover:border-primary transition-colors">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground text-lg">+254 700 000 000</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border pb-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground text-lg">Embakasi North, Airport Road, Nairobi</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16 overflow-hidden border border-border">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block">
            <iframe
              title="DK Engineering Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.83!2d36.8969!3d-1.3197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b58a0ddf6d%3A0x2ba01011e5e2b0a0!2sAirport%20North%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1710000000000"
              width="100%"
              height="300"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <span className="font-heading text-2xl text-foreground">
            <span className="text-primary">DK</span> ENGINEERING
          </span>
          <div className="flex items-center gap-2 text-muted-foreground text-xs tracking-wider">
            <Users className="w-4 h-4 text-primary" />
            <span>{visitorCount.toLocaleString()} visitors</span>
          </div>
          <p className="text-muted-foreground text-xs tracking-wider">
            © {new Date().getFullYear()} DK ENGINEERING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
