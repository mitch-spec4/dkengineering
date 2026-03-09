import { Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="font-heading text-2xl font-bold">
              <span className="text-primary">DK</span> Engineering
            </span>
            <p className="text-primary-foreground/60 mt-4 text-sm leading-relaxed">
              Everything we do is driven by you. Established in 1986, providing quality food processing equipment across East Africa.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {["Bakery Equipment", "Restaurant Equipment", "Fruit Processing", "Juice Processing", "Spare Parts"].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-primary-foreground/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                +254 700 000 000
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                info@dkengineering.co.ke
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} DK Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
