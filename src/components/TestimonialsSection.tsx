import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "DK Engineering transformed our entire bakery operation. The equipment quality and after-sales service are unmatched in the region.",
    author: "James Mwangi",
    role: "Operations Director",
    company: "Nairobi Bakeries Ltd",
  },
  {
    quote: "From installation to maintenance, DK Engineering has been a reliable partner for over 10 years. Their juice processing line doubled our output.",
    author: "Grace Wanjiku",
    role: "Plant Manager",
    company: "Fresh Valley Juices",
  },
  {
    quote: "The NYS Gilgil installation was delivered on time and within budget. The team's professionalism and technical expertise is world-class.",
    author: "Col. Peter Odhiambo",
    role: "Project Coordinator",
    company: "National Youth Service",
  },
  {
    quote: "We needed a complete kitchen overhaul for our hotel chain. DK Engineering delivered beyond our expectations across all five locations.",
    author: "Sarah Kimani",
    role: "CEO",
    company: "Highland Hotels Group",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding section-alt">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Testimonials</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading text-5xl md:text-7xl text-foreground mb-20"
        >
          WHAT OUR<br /><span className="text-primary red-glow">CLIENTS</span> SAY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl"
        >
          <Quote className="w-12 h-12 text-primary/30 mb-8" />
          
          <div className="relative min-h-[200px]">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-foreground text-xl md:text-3xl font-heading leading-snug mb-10">
                "{testimonials[active].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="font-heading text-primary text-lg">
                    {testimonials[active].author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <span className="text-foreground text-sm font-medium block">{testimonials[active].author}</span>
                  <span className="text-muted-foreground text-xs">
                    {testimonials[active].role} — {testimonials[active].company}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <span className="text-muted-foreground text-xs tracking-wider ml-4">
              {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
