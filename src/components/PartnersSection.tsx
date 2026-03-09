import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "VMI Mixing", "Sveba Dahlen", "Riello", "Dynasty",
  "AMF Bakery", "Bongard", "Varimixer", "Vitella",
  "Z.Matik", "Jackfinal", "Jeros", "Danzi Forni",
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Trusted By</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Our Partners</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Authorized distributor for globally renowned manufacturers.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-12">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 w-40 h-20 rounded-xl border border-border bg-card flex items-center justify-center px-4 hover:border-primary/30 transition-colors"
              >
                <span className="font-heading text-sm font-semibold text-muted-foreground text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
