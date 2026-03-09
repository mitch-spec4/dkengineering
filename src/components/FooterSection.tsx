import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="section-padding border-t border-border">
    <div className="max-w-[1600px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 mb-24">
        <div>
          <span className="text-primary text-xs uppercase tracking-[0.3em] mb-6 block">Get in Touch</span>
          <h2 className="font-heading text-6xl md:text-8xl text-foreground leading-[0.9]">
            LET'S BUILD<br />
            <span className="text-primary red-glow">TOGETHER</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <a href="mailto:info@dkengineering.co.ke" className="group flex items-center justify-between border-b border-border pb-4 hover:border-primary transition-colors">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground text-lg">info@dkengineering.co.ke</span>
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
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground text-lg">Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
        <span className="font-heading text-2xl text-foreground">
          <span className="text-primary">DK</span> ENGINEERING
        </span>
        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} DK ENGINEERING. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
