import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowLeft, Search, Filter, X, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";
import shopMixerBlade from "@/assets/shop-mixer-blade.jpg";
import shopHeatingElement from "@/assets/shop-heating-element.jpg";
import shopConveyorBelt from "@/assets/shop-conveyor-belt.jpg";
import shopFryerBasket from "@/assets/shop-fryer-basket.jpg";
import shopJuiceFilter from "@/assets/shop-juice-filter.jpg";
import shopThermostat from "@/assets/shop-thermostat.jpg";
import shopDoughCutter from "@/assets/shop-dough-cutter.jpg";
import shopCompressor from "@/assets/shop-compressor.jpg";
import shopPulley from "@/assets/shop-pulley.jpg";
import shopGasket from "@/assets/shop-gasket.jpg";
import shopPcb from "@/assets/shop-pcb.jpg";
import shopTray from "@/assets/shop-tray.jpg";

const spareParts = [
  { id: 1, name: "Mixer Blade Set", category: "Baking", price: 4500, image: shopMixerBlade, desc: "Heavy-duty stainless steel blades for industrial mixers" },
  { id: 2, name: "Oven Heating Element", category: "Baking", price: 8200, image: shopHeatingElement, desc: "High-temperature resistant replacement heating element" },
  { id: 3, name: "Conveyor Belt (1m)", category: "Processing", price: 12000, image: shopConveyorBelt, desc: "Food-grade PVC conveyor belt, 1 meter section" },
  { id: 4, name: "Fryer Basket", category: "Restaurant", price: 3800, image: shopFryerBasket, desc: "Stainless steel deep fryer basket with handle" },
  { id: 5, name: "Juice Extractor Filter", category: "Juice", price: 2500, image: shopJuiceFilter, desc: "Fine mesh extraction filter for citrus juicers" },
  { id: 6, name: "Proofer Thermostat", category: "Baking", price: 6700, image: shopThermostat, desc: "Digital thermostat controller for proofing chambers" },
  { id: 7, name: "Dough Cutter Blade", category: "Baking", price: 1800, image: shopDoughCutter, desc: "Precision-ground dough divider cutting blade" },
  { id: 8, name: "Refrigeration Compressor", category: "Kitchen", price: 25000, image: shopCompressor, desc: "Commercial grade refrigeration compressor unit" },
  { id: 9, name: "Motor Pulley Set", category: "Processing", price: 5200, image: shopPulley, desc: "V-belt pulley set for processing line motors" },
  { id: 10, name: "Gasket Seal Kit", category: "General", price: 1200, image: shopGasket, desc: "Universal gasket seal kit for oven doors" },
  { id: 11, name: "Control Panel PCB", category: "Electronics", price: 15000, image: shopPcb, desc: "Replacement PCB board for digital control panels" },
  { id: 12, name: "Stainless Steel Tray", category: "Kitchen", price: 3500, image: shopTray, desc: "Commercial baking tray, 600x400mm" },
];

const categories = ["All", "Baking", "Processing", "Restaurant", "Juice", "Kitchen", "Electronics", "General"];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high">("name");
  const [selectedPart, setSelectedPart] = useState<typeof spareParts[0] | null>(null);

  const filtered = useMemo(() => {
    let result = spareParts;
    if (activeCategory !== "All") result = result.filter(p => p.category === activeCategory);
    if (search) result = result.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    );
    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    else result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingButtons />
      <div className="pt-28 section-padding">
        <div className="max-w-[1600px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm uppercase tracking-[0.2em]">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs uppercase tracking-[0.3em]">Shop</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">
            SPARE <span className="text-primary red-glow">PARTS</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mb-4">
            Browse our collection of genuine spare parts for all your food processing and bakery equipment needs.
          </p>
          <div className="african-border mb-10" />

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search spare parts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border border-border pl-11 pr-5 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-transparent border border-border px-4 py-3 text-foreground text-xs uppercase tracking-wider focus:border-primary focus:outline-none transition-colors"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-muted-foreground text-xs mb-6 tracking-wider">
            {filtered.length} {filtered.length === 1 ? "product" : "products"} found
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((part, i) => (
              <motion.div
                key={part.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="group border border-border hover:border-primary transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => setSelectedPart(part)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={part.image}
                    alt={part.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500" />
                  <span className="absolute top-3 left-3 text-primary text-[9px] uppercase tracking-[0.3em] bg-background/80 px-2 py-1">
                    {part.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                    {part.name}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{part.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="font-heading text-lg text-foreground">KES {part.price.toLocaleString()}</span>
                    <span className="text-primary text-[10px] uppercase tracking-wider flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-sm">No parts found matching your search.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              Need a specific part? <a href="mailto:michchore@gmail.com" className="text-primary hover:underline">Contact us</a> for custom orders.
            </p>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedPart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedPart(null)}
          >
            <button
              className="fixed top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all z-[110]"
              onClick={() => setSelectedPart(null)}
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="w-full max-w-3xl mx-auto px-4 py-16 md:py-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square overflow-hidden">
                  <img src={selectedPart.image} alt={selectedPart.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-2">{selectedPart.category}</span>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">{selectedPart.name}</h2>
                  <div className="african-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{selectedPart.desc}</p>
                  <span className="font-heading text-3xl text-primary mb-8">KES {selectedPart.price.toLocaleString()}</span>

                  <div className="flex flex-col gap-3">
                    <a
                      href={`https://wa.me/254722782627?text=${encodeURIComponent(`Hi DK Engineering, I'd like to order: ${selectedPart.name} (KES ${selectedPart.price.toLocaleString()})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-xs uppercase tracking-[0.2em] text-white hover:brightness-110 transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order via WhatsApp
                    </a>
                    <a
                      href={`mailto:michchore@gmail.com?subject=Order: ${selectedPart.name}&body=I would like to order: ${selectedPart.name} (KES ${selectedPart.price.toLocaleString()})`}
                      className="inline-flex items-center justify-center gap-3 border border-primary px-6 py-4 text-xs uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      Order via Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
};

export default Shop;
