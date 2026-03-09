import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "VMI MIXING", "SVEBA DAHLEN", "RIELLO", "DYNASTY", "AMF BAKERY",
  "BONGARD", "VARIMIXER", "VITELLA", "Z.MATIK", "JEROS", "DANZI FORNI",
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
          {[...partners, ...partners].map((name, i) => (
            <div key={`${name}-${i}`} className="flex-shrink-0 flex items-center gap-16 mx-8">
              <span className="font-heading text-3xl md:text-4xl text-muted-foreground/30 hover:text-foreground transition-colors whitespace-nowrap cursor-default">
                {name}
              </span>
              <span className="text-primary text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
