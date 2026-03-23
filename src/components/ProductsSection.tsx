import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChefHat, UtensilsCrossed, Apple, Soup, GlassWater, ArrowRight } from "lucide-react";
import productBakery from "@/assets/product-bakery.jpg";
import productRestaurant from "@/assets/product-restaurant.jpg";
import productFruit from "@/assets/product-fruit.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";
import productJuice from "@/assets/product-juice.jpg";

const items = [
  {
    icon: ChefHat,
    num: "01",
    title: "BAKING EQUIPMENT",
    desc: "Deck ovens, rack ovens, mixers, proofers and complete bakery lines for industrial production.",
    image: productBakery,
    equipment: ["Deck Ovens", "Rack Ovens", "Spiral Mixers", "Dough Dividers", "Proofers", "Bread Slicers"],
  },
  {
    icon: UtensilsCrossed,
    num: "02",
    title: "FAST FOODS & RESTAURANTS",
    desc: "Fryers, grills, refrigeration, display counters and full kitchen solutions.",
    image: productRestaurant,
    equipment: ["Deep Fryers", "Char Grills", "Display Counters", "Refrigerators", "Food Warmers", "Ice Machines"],
  },
  {
    icon: Apple,
    num: "03",
    title: "FRUIT & VEGETABLE PROCESSING",
    desc: "Washing, sorting, cutting, drying and packaging equipment.",
    image: productFruit,
    equipment: ["Washing Lines", "Sorting Machines", "Cutting Equipment", "Dryers", "Packaging Lines", "Cold Storage"],
  },
  {
    icon: Soup,
    num: "04",
    title: "COMMERCIAL KITCHEN",
    desc: "Full setups for hotels, hospitals and catering institutions.",
    image: productKitchen,
    equipment: ["Cooking Ranges", "Steam Tables", "Ventilation Hoods", "Prep Tables", "Dishwashers", "Storage Units"],
  },
  {
    icon: GlassWater,
    num: "05",
    title: "JUICE PROCESSING",
    desc: "Extraction, pasteurization, filling and complete production lines.",
    image: productJuice,
    equipment: ["Juice Extractors", "Pasteurizers", "Filling Machines", "Bottle Washers", "Labeling Machines", "Conveyors"],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
              className="group relative flex flex-col md:flex-row items-start gap-6 md:gap-10 py-8 border-t border-border cursor-pointer hover:pl-4 transition-all duration-500"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span className="font-heading text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                {item.num}
              </span>
              <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
                {/* Equipment tags */}
                <div className="flex flex-wrap gap-2 mt-3 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                  {item.equipment.map((eq) => (
                    <span
                      key={eq}
                      className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-heading text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center flex items-center gap-2">
                Explore <ArrowRight className="w-4 h-4" />
              </span>

              {/* Floating preview image on hover — desktop only */}
              <AnimatePresence>
                {hoveredIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 40 }}
                    transition={{ duration: 0.3 }}
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 h-48 overflow-hidden z-10 pointer-events-none"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-primary/30" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Product image grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-16">
          {items.map((item, i) => (
            <motion.div
              key={item.num + "-img"}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-primary text-[9px] uppercase tracking-[0.3em]">{item.num}</span>
                <p className="text-foreground text-xs font-heading mt-0.5">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
