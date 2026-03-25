import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroFruit from "@/assets/hero-fruit.jpg";

const slides = [
  { image: heroBakery, label: "Baking", title: "INDUSTRIAL\nBAKING\nEQUIPMENT" },
  { image: heroRestaurant, label: "Restaurants", title: "COMMERCIAL\nKITCHEN\nSOLUTIONS" },
  { image: heroFruit, label: "Processing", title: "FRUIT &\nVEGETABLE\nLINES" },
];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={slides[idx].image}
          alt=""
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-[1600px] mx-auto px-6 md:px-12 pb-20">
        <div className="flex items-center gap-4 mb-8">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className="flex items-center gap-2 group">
              <span className={`font-body text-sm ${i === idx ? "text-primary" : "text-muted-foreground"}`}>
                0{i + 1}
              </span>
              <span className={`h-px transition-all duration-700 ${i === idx ? "w-16 bg-primary" : "w-8 bg-muted-foreground/30"}`} />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
              {slides[idx].label}
            </span>
            <h1 className="font-heading text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-foreground whitespace-pre-line">
              {slides[idx].title}
            </h1>
          </motion.div>
        </AnimatePresence>

        <motion.a
          href="#products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 inline-flex items-center gap-3 group w-fit"
        >
          <span className="w-14 h-14 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
            <ArrowDownRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </span>
          <span className="text-sm uppercase tracking-[0.2em] text-foreground/60 group-hover:text-foreground transition-colors">
            Explore
          </span>
        </motion.a>
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <span className="font-heading text-xs tracking-[0.5em] text-muted-foreground uppercase [writing-mode:vertical-rl]">
          Proudly African · Since 1986
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
