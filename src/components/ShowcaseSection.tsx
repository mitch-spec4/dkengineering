import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles } from "lucide-react";
import enjoyBakery from "@/assets/enjoy-bakery.jpg";
import enjoyRestaurant from "@/assets/enjoy-restaurant.jpg";
import enjoyJuice from "@/assets/enjoy-juice.jpg";
import enjoyFruits from "@/assets/enjoy-fruits.jpg";
import enjoyCatering from "@/assets/enjoy-catering.jpg";

const showcases = [
  {
    image: enjoyBakery,
    category: "Bakery Equipment",
    title: "THE JOY OF FRESH BREAD",
    desc: "From our ovens to your table — families across East Africa enjoy fresh pastries and bread baked on DK equipment every day.",
  },
  {
    image: enjoyRestaurant,
    category: "Restaurant Equipment",
    title: "MOMENTS SHARED OVER FOOD",
    desc: "Our fast food and restaurant equipment powers kitchens that bring people together over incredible meals.",
  },
  {
    image: enjoyFruits,
    category: "Fruit Processing",
    title: "FARM-FRESH TO MARKET",
    desc: "Processing equipment that preserves the natural goodness — delivering fresh produce to shelves nationwide.",
  },
  {
    image: enjoyCatering,
    category: "Commercial Kitchen",
    title: "ELEGANT HOSPITALITY",
    desc: "Hotels and institutions serve thousands daily with commercial kitchen setups designed and installed by DK Engineering.",
  },
  {
    image: enjoyJuice,
    category: "Juice Processing",
    title: "REFRESHMENT IN EVERY SIP",
    desc: "From orchard to bottle — our juice processing lines create the refreshing beverages that quench East Africa's thirst.",
  },
];

const ShowcaseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Impact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-5xl md:text-7xl text-foreground"
          >
            FROM <span className="text-primary red-glow">EQUIPMENT</span><br />
            TO EXPERIENCE
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="self-end flex items-start gap-4"
          >
            <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p className="text-muted-foreground text-base leading-relaxed">
              Every piece of equipment we deliver creates a ripple effect — enabling businesses to thrive, 
              communities to enjoy quality products, and families to share unforgettable moments.
            </p>
          </motion.div>
        </div>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {showcases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-3 h-3 text-primary" />
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em]">{item.category}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
              </div>

              {/* Red corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-primary border-l-[50px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
