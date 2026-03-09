import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Calendar, Globe } from "lucide-react";
import aboutImg from "@/assets/about-us.jpg";

const stats = [
  { icon: Calendar, value: "1986", label: "Established" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Award, value: "35+", label: "Years Experience" },
  { icon: Globe, value: "10+", label: "Countries" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="DK Engineering team"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <span className="block text-4xl font-heading font-bold">35+</span>
              <span className="text-sm font-medium opacity-80">Years of Excellence</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground leading-tight">
            Everything we do is driven <span className="gradient-text">by you</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            DK Engineering is a reputable, well-established solution provider for food processing
            products and service support. Established in 1986, the company has a track record of
            successfully supplying machines to scores of industries within local and regional markets.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We partner with globally renowned manufacturers to deliver cutting-edge equipment
            that meets the highest standards of quality, reliability, and efficiency.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="block font-heading text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
