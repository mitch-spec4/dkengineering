import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/254700000000?text=Hello%20DK%20Engineering%2C%20I%20have%20an%20inquiry"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
