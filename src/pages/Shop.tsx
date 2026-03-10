import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const spareParts = [
  { id: 1, name: "Mixer Blade Set", category: "Baking", price: "KES 4,500", image: "🔧" },
  { id: 2, name: "Oven Heating Element", category: "Baking", price: "KES 8,200", image: "🔥" },
  { id: 3, name: "Conveyor Belt (1m)", category: "Processing", price: "KES 12,000", image: "⚙️" },
  { id: 4, name: "Fryer Basket", category: "Restaurant", price: "KES 3,800", image: "🍳" },
  { id: 5, name: "Juice Extractor Filter", category: "Juice", price: "KES 2,500", image: "🧃" },
  { id: 6, name: "Proofer Thermostat", category: "Baking", price: "KES 6,700", image: "🌡️" },
  { id: 7, name: "Dough Cutter Blade", category: "Baking", price: "KES 1,800", image: "🔪" },
  { id: 8, name: "Refrigeration Compressor", category: "Kitchen", price: "KES 25,000", image: "❄️" },
  { id: 9, name: "Motor Pulley Set", category: "Processing", price: "KES 5,200", image: "⚡" },
  { id: 10, name: "Gasket Seal Kit", category: "General", price: "KES 1,200", image: "🔩" },
  { id: 11, name: "Control Panel PCB", category: "Electronics", price: "KES 15,000", image: "💡" },
  { id: 12, name: "Stainless Steel Tray", category: "Kitchen", price: "KES 3,500", image: "🍽️" },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
          <p className="text-muted-foreground text-sm max-w-lg mb-16">
            Browse our collection of genuine spare parts for all your food processing and bakery equipment needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {spareParts.map((part, i) => (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group border border-border p-6 hover:border-primary transition-all duration-500 cursor-pointer"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {part.image}
                </div>
                <span className="text-primary text-[10px] uppercase tracking-[0.3em]">{part.category}</span>
                <h3 className="font-heading text-xl text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                  {part.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg text-foreground">{part.price}</span>
                  <button className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/btn">
                    <ShoppingCart className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary-foreground" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

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
