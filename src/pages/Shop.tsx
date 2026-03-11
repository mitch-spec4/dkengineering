import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const spareParts = [
  { id: 1, name: "Mixer Blade Set", category: "Baking", price: 4500, image: "🔧", desc: "Heavy-duty stainless steel blades for industrial mixers" },
  { id: 2, name: "Oven Heating Element", category: "Baking", price: 8200, image: "🔥", desc: "High-temperature resistant replacement heating element" },
  { id: 3, name: "Conveyor Belt (1m)", category: "Processing", price: 12000, image: "⚙️", desc: "Food-grade PVC conveyor belt, 1 meter section" },
  { id: 4, name: "Fryer Basket", category: "Restaurant", price: 3800, image: "🍳", desc: "Stainless steel deep fryer basket with handle" },
  { id: 5, name: "Juice Extractor Filter", category: "Juice", price: 2500, image: "🧃", desc: "Fine mesh extraction filter for citrus juicers" },
  { id: 6, name: "Proofer Thermostat", category: "Baking", price: 6700, image: "🌡️", desc: "Digital thermostat controller for proofing chambers" },
  { id: 7, name: "Dough Cutter Blade", category: "Baking", price: 1800, image: "🔪", desc: "Precision-ground dough divider cutting blade" },
  { id: 8, name: "Refrigeration Compressor", category: "Kitchen", price: 25000, image: "❄️", desc: "Commercial grade refrigeration compressor unit" },
  { id: 9, name: "Motor Pulley Set", category: "Processing", price: 5200, image: "⚡", desc: "V-belt pulley set for processing line motors" },
  { id: 10, name: "Gasket Seal Kit", category: "General", price: 1200, image: "🔩", desc: "Universal gasket seal kit for oven doors" },
  { id: 11, name: "Control Panel PCB", category: "Electronics", price: 15000, image: "💡", desc: "Replacement PCB board for digital control panels" },
  { id: 12, name: "Stainless Steel Tray", category: "Kitchen", price: 3500, image: "🍽️", desc: "Commercial baking tray, 600x400mm" },
];

const categories = ["All", "Baking", "Processing", "Restaurant", "Juice", "Kitchen", "Electronics", "General"];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high">("name");

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
          <p className="text-muted-foreground text-sm max-w-lg mb-10">
            Browse our collection of genuine spare parts for all your food processing and bakery equipment needs.
          </p>

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

          {/* Results count */}
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
                className="group border border-border p-6 hover:border-primary transition-all duration-500 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {part.image}
                </div>
                <span className="text-primary text-[10px] uppercase tracking-[0.3em]">{part.category}</span>
                <h3 className="font-heading text-xl text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {part.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{part.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-heading text-lg text-foreground">KES {part.price.toLocaleString()}</span>
                  <a
                    href={`mailto:michchore@gmail.com?subject=Order: ${part.name}&body=I would like to order: ${part.name} (KES ${part.price.toLocaleString()})`}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/btn"
                  >
                    <ShoppingCart className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary-foreground" />
                  </a>
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
      <FooterSection />
    </div>
  );
};

export default Shop;
