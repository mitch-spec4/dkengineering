import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChefHat, UtensilsCrossed, Apple, GlassWater, Wrench } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroFruit from "@/assets/hero-fruit.jpg";

const slides = [
  {
    image: heroBakery,
    subtitle: "Quality Reliable",
    title: "Baking Equipment",
    description: "Choose an oven that suits your demand needs. Whether it is a deck or rack oven, we have a selection that will suit your needs.",
  },
  {
    image: heroRestaurant,
    subtitle: "High Quality and Reliable",
    title: "Restaurant Equipment",
    description: "Durable and reliable fast food kitchen equipment for all types of commercial kitchens and catering purposes.",
  },
  {
    image: heroFruit,
    subtitle: "Industrial Grade",
    title: "Processing Lines",
    description: "Complete fruit, vegetable and juice processing lines designed for maximum efficiency and output.",
  },
];

const categories = [
  { icon: ChefHat, label: "Bakery Equipment" },
  { icon: UtensilsCrossed, label: "Restaurant Equipment" },
  { icon: Apple, label: "Fruit Processing" },
  { icon: GlassWater, label: "Juice Processing" },
  { icon: Wrench, label: "Spare Parts" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover animate-ken-burns"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              {slides[current].subtitle}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
              {slides[current].description}
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all duration-300 group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-32 left-6 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-12 bg-primary" : "w-6 bg-primary-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Category bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-background rounded-t-2xl shadow-2xl grid grid-cols-2 md:grid-cols-5">
            {categories.map((cat, i) => (
              <a
                key={cat.label}
                href="#products"
                className={`flex items-center gap-3 px-6 py-5 group hover:bg-section-alt transition-colors ${
                  i < categories.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <cat.icon className="w-6 h-6 text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
