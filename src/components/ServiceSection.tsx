import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, ShieldCheck, Clock, Truck, HeadphonesIcon, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "EQUIPMENT INSTALLATION",
    desc: "Professional installation by certified engineers with full commissioning and testing.",
  },
  {
    icon: ShieldCheck,
    title: "WARRANTY & SUPPORT",
    desc: "Comprehensive warranty packages with dedicated technical support teams.",
  },
  {
    icon: Clock,
    title: "PREVENTIVE MAINTENANCE",
    desc: "Scheduled maintenance programs to maximize equipment lifespan and minimize downtime.",
  },
  {
    icon: Truck,
    title: "SPARE PARTS DELIVERY",
    desc: "Fast delivery of genuine spare parts from our extensive warehouse inventory.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 TECHNICAL SUPPORT",
    desc: "Round-the-clock helpline for emergency breakdowns and technical troubleshooting.",
  },
  {
    icon: Settings,
    title: "EQUIPMENT CALIBRATION",
    desc: "Precision calibration and optimization to ensure peak performance and energy efficiency.",
  },
];

const ServiceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Service & Maintenance</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-5xl md:text-7xl text-foreground"
          >
            AFTER-SALES<br />
            <span className="text-primary red-glow">EXCELLENCE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed self-end"
          >
            Our commitment doesn't end at delivery. DK Engineering provides comprehensive 
            after-sales service and maintenance programs to ensure your equipment operates at 
            peak performance throughout its entire lifecycle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-background p-10 hover:bg-card transition-colors duration-500 cursor-pointer"
            >
              <s.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-6" />
              <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <div className="h-px w-0 bg-primary mt-6 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
