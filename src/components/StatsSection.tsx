import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { target: 35, suffix: "+", label: "YEARS IN BUSINESS", desc: "Established 1986" },
  { target: 500, suffix: "+", label: "INSTALLATIONS", desc: "Across East Africa" },
  { target: 100, suffix: "+", label: "HAPPY CLIENTS", desc: "Industries & institutions" },
  { target: 10, suffix: "+", label: "COUNTRIES SERVED", desc: "Regional presence" },
];

const AnimatedCounter = ({ target, suffix, active }: { target: number; suffix: string; active: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="font-heading text-6xl md:text-8xl text-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding border-t border-b border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} active={inView} />
              <div className="mt-3">
                <span className="block text-primary text-xs uppercase tracking-[0.3em] font-medium">{stat.label}</span>
                <span className="block text-muted-foreground text-xs mt-1">{stat.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
