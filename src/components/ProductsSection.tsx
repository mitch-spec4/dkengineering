import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChefHat, UtensilsCrossed, Apple, Soup, GlassWater } from "lucide-react";

const items = [
  { icon: ChefHat, num: "01", title: "BAKING EQUIPMENT", desc: "Deck ovens, rack ovens, mixers, proofers and complete bakery lines for industrial production." },
  { icon: UtensilsCrossed, num: "02", title: "FAST FOODS & RESTAURANTS", desc: "Fryers, grills, refrigeration, display counters and full kitchen solutions." },
  { icon: Apple, num: "03", title: "FRUIT & VEGETABLE PROCESSING", desc: "Washing, sorting, cutting, drying and packaging equipment." },
  { icon: Soup, num: "04", title: "COMMERCIAL KITCHEN", desc: "Full setups for hotels, hospitals and catering institutions." },
  { icon: GlassWater, num: "05", title: "JUICE PROCESSING", desc: "Extraction, pasteurization, filling and complete production lines." },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="section-padding section-alt">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Products</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-7xl text-foreground mb-20"
        >
          OUR PRODUCT<br />CATEGORIES
        </motion.h2>

        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-start gap-6 md:gap-10 py-8 border-t border-border cursor-pointer hover:pl-4 transition-all duration-500"
            >
              <span className="font-heading text-2xl text-muted-foreground group-hover:text-primary transition-colors">{item.num}</span>
              <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
              </div>
              <span className="font-heading text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
