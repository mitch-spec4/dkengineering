import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChefHat, UtensilsCrossed, Apple, Soup, GlassWater, ArrowUpRight } from "lucide-react";

const products = [
  { icon: ChefHat, title: "Baking Equipment", desc: "Deck ovens, rack ovens, mixers, proofers and complete bakery lines." },
  { icon: UtensilsCrossed, title: "Fast Foods & Restaurants", desc: "Fryers, grills, refrigeration, display counters and kitchen solutions." },
  { icon: Apple, title: "Fruit & Vegetable Processing", desc: "Washing, sorting, cutting, drying and packaging line equipment." },
  { icon: Soup, title: "Commercial Kitchen", desc: "Full commercial kitchen setups for hotels, hospitals and institutions." },
  { icon: GlassWater, title: "Juice Processing", desc: "Extraction, pasteurization, filling and complete juice production lines." },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Products</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A wide range of high-quality solutions in collaboration with our partners to ensure all-around customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-hover group bg-card rounded-2xl p-8 border border-border cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
