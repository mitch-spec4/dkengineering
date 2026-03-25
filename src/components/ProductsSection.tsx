import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChefHat, UtensilsCrossed, Apple, Soup, GlassWater, ArrowRight, X } from "lucide-react";
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
    fullDesc: "Our baking equipment range covers everything from small artisan bakeries to large-scale industrial bread production. We supply and install deck ovens for crusty breads, rack ovens for high-volume baking, spiral mixers for consistent dough preparation, dough dividers for uniform portioning, proofers for optimal fermentation, and bread slicers for retail-ready packaging. All equipment is sourced from trusted European and Asian manufacturers with full after-sales support.",
    equipment: ["Deck Ovens", "Rack Ovens", "Spiral Mixers", "Dough Dividers", "Proofers", "Bread Slicers"],
  },
  {
    icon: UtensilsCrossed,
    num: "02",
    title: "FAST FOODS & RESTAURANTS",
    desc: "Fryers, grills, refrigeration, display counters and full kitchen solutions.",
    image: productRestaurant,
    fullDesc: "We equip fast food outlets, restaurants, and cafeterias with commercial-grade cooking and serving equipment. Our range includes pressure and open fryers for crispy perfection, char grills for flame-grilled flavour, heated display counters to keep food fresh and appealing, commercial refrigerators and freezers, food warmers for buffet service, and ice machines for beverages. We handle complete kitchen fit-outs from design to installation.",
    equipment: ["Deep Fryers", "Char Grills", "Display Counters", "Refrigerators", "Food Warmers", "Ice Machines"],
  },
  {
    icon: Apple,
    num: "03",
    title: "FRUIT & VEGETABLE PROCESSING",
    desc: "Washing, sorting, cutting, drying and packaging equipment.",
    image: productFruit,
    fullDesc: "Our fruit and vegetable processing lines transform raw produce into market-ready products. We provide bubble washing machines for thorough cleaning, optical and mechanical sorting systems, precision cutting and dicing equipment, hot air and freeze dryers for preservation, semi-automatic and fully automatic packaging lines, and cold storage solutions to maintain freshness throughout the supply chain.",
    equipment: ["Washing Lines", "Sorting Machines", "Cutting Equipment", "Dryers", "Packaging Lines", "Cold Storage"],
  },
  {
    icon: Soup,
    num: "04",
    title: "COMMERCIAL KITCHEN",
    desc: "Full setups for hotels, hospitals and catering institutions.",
    image: productKitchen,
    fullDesc: "We design and install complete commercial kitchens for hotels, hospitals, schools, and large catering institutions. Our solutions include gas and electric cooking ranges, steam tables for bulk food service, stainless steel ventilation hoods with fire suppression, prep tables and work stations, industrial dishwashers, and modular storage units. Every kitchen is custom-designed for optimal workflow and hygiene compliance.",
    equipment: ["Cooking Ranges", "Steam Tables", "Ventilation Hoods", "Prep Tables", "Dishwashers", "Storage Units"],
  },
  {
    icon: GlassWater,
    num: "05",
    title: "JUICE PROCESSING",
    desc: "Extraction, pasteurization, filling and complete production lines.",
    image: productJuice,
    fullDesc: "Our juice processing lines handle everything from fruit reception to packaged product. We supply citrus and multi-fruit extractors, plate and tubular pasteurizers for safe shelf-stable juice, gravity and pressure filling machines for bottles and pouches, automatic bottle washers and rinsers, high-speed labeling machines, and conveyor systems that tie the entire line together for continuous production.",
    equipment: ["Juice Extractors", "Pasteurizers", "Filling Machines", "Bottle Washers", "Labeling Machines", "Conveyors"],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <>
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
                onClick={() => setSelectedIdx(i)}
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

                <AnimatePresence>
                  {hoveredIdx === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 40 }}
                      transition={{ duration: 0.3 }}
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 h-48 overflow-hidden z-10 pointer-events-none"
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
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
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedIdx(i)}
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all z-10"
              onClick={() => setSelectedIdx(null)}
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hero Image */}
              <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden mb-8">
                <img
                  src={items[selectedIdx].image}
                  alt={items[selectedIdx].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="text-primary text-xs uppercase tracking-[0.3em]">{items[selectedIdx].num}</span>
                  <h3 className="font-heading text-3xl md:text-5xl text-foreground mt-1">
                    {items[selectedIdx].title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="px-2 md:px-0">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                  {items[selectedIdx].fullDesc}
                </p>

                {/* Equipment Grid */}
                <div className="mb-8">
                  <h4 className="font-heading text-lg text-foreground mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-primary" />
                    Equipment We Supply
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {items[selectedIdx].equipment.map((eq) => (
                      <div
                        key={eq}
                        className="border border-border p-4 hover:border-primary transition-colors group/eq"
                      >
                        <items[selectedIdx].icon className="w-5 h-5 text-muted-foreground group-hover/eq:text-primary transition-colors mb-2" />
                        <span className="text-xs uppercase tracking-wider text-foreground">{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`mailto:michchore@gmail.com?subject=Inquiry: ${items[selectedIdx].title}&body=I would like to inquire about your ${items[selectedIdx].title.toLowerCase()} range.`}
                  className="inline-flex items-center gap-3 border border-primary text-primary px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all duration-300 mb-4"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsSection;
