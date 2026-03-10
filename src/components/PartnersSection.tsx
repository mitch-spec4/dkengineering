import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "VMI MIXING", url: "https://www.vmimixing.com" },
  { name: "SVEBA DAHLEN", url: "https://www.sveba-dahlen.com" },
  { name: "RIELLO", url: "https://www.riello.com" },
  { name: "DYNASTY", url: "https://www.dynastyind.com" },
  { name: "AMF BAKERY", url: "https://www.amfbakery.com" },
  { name: "BONGARD", url: "https://www.bongard.fr" },
  { name: "VARIMIXER", url: "https://www.varimixer.com" },
  { name: "VITELLA", url: "https://www.vitella.it" },
  { name: "Z.MATIK", url: "https://www.zmatik.com" },
  { name: "JEROS", url: "https://www.jeros.com" },
  { name: "DANZI FORNI", url: "https://www.danzi.it" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Partners</span>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track">
          {[...partners, ...partners].map((partner, i) => (
            <div key={`${partner.name}-${i}`} className="flex-shrink-0 flex items-center gap-16 mx-8">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-3xl md:text-4xl text-muted-foreground/30 hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              >
                {partner.name}
              </a>
              <span className="text-primary text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
