import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectJuice from "@/assets/project-juice.jpg";
import projectPotato from "@/assets/project-potato.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroFruit from "@/assets/hero-fruit.jpg";
import aboutImg from "@/assets/about-us.jpg";
import productBakery from "@/assets/product-bakery.jpg";
import productRestaurant from "@/assets/product-restaurant.jpg";
import productFruit from "@/assets/product-fruit.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";
import productJuice from "@/assets/product-juice.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceCalibration from "@/assets/service-calibration.jpg";

const gallery = [
  { src: projectBakery, caption: "NYS Gilgil Bakery Installation", cat: "Installation" },
  { src: productBakery, caption: "Industrial Deck & Rack Ovens", cat: "Bakery" },
  { src: heroRestaurant, caption: "Commercial Kitchen Setup — Nairobi", cat: "Kitchen" },
  { src: productRestaurant, caption: "Fast Food Kitchen Equipment", cat: "Kitchen" },
  { src: projectJuice, caption: "UoN Juice Processing Line", cat: "Processing" },
  { src: productFruit, caption: "Fruit Sorting & Washing Line", cat: "Processing" },
  { src: productKitchen, caption: "Hotel Catering Kitchen", cat: "Kitchen" },
  { src: productJuice, caption: "Juice Filling Production Line", cat: "Processing" },
  { src: serviceInstallation, caption: "Bakery Oven Installation", cat: "Installation" },
  { src: serviceMaintenance, caption: "Equipment Maintenance Service", cat: "Installation" },
  { src: serviceCalibration, caption: "Control Panel Calibration", cat: "Installation" },
  { src: heroBakery, caption: "Industrial Deck Oven — DPL Festive", cat: "Bakery" },
  { src: projectPotato, caption: "Sweet Potato Plant — Meru", cat: "Processing" },
  { src: heroFruit, caption: "Fruit Processing Facility Tour", cat: "Processing" },
  { src: aboutImg, caption: "DK Engineering Workshop", cat: "Workshop" },
];

const categories = ["All", "Installation", "Processing", "Kitchen", "Bakery", "Workshop"];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? gallery : gallery.filter(g => g.cat === filter);

  return (
    <>
      <section id="gallery" ref={ref} className="section-padding section-alt">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-5xl md:text-7xl text-foreground mb-10"
          >
            OUR <span className="text-primary red-glow">WORK</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2.5 border transition-all duration-300 ${
                  filter === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.caption}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em]">{img.cat}</span>
                  <p className="text-foreground text-xs mt-1">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 border border-border flex items-center justify-center hover:border-primary transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                className="w-full h-full object-contain"
              />
              <p className="text-center text-foreground font-heading text-lg mt-4">
                {filtered[lightbox].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
