import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-us.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-[1600px] mx-auto">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">About Us</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-6xl md:text-8xl text-foreground leading-[0.95] mb-10">
              EVERYTHING<br />
              WE DO IS<br />
              <span className="text-primary red-glow">DRIVEN</span><br />
              BY YOU
            </h2>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { val: "35+", label: "Years" },
                { val: "500+", label: "Clients" },
                { val: "10+", label: "Countries" },
                { val: "1986", label: "Founded" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="border-t border-border pt-4"
                >
                  <span className="font-heading text-4xl text-foreground">{s.val}</span>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img src={aboutImg} alt="DK Engineering" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mt-8">
              DK Engineering is a reputable, well-established solution provider for food processing
              products and service support. Established in 1986, the company has a track record of
              successfully supplying machines to scores of industries within local and regional markets.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              We partner with globally renowned manufacturers to deliver cutting-edge equipment
              that meets the highest standards of quality, reliability, and efficiency across East Africa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
