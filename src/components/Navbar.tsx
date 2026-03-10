import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "#home", route: "/" },
  { label: "About", href: "#about", route: "/#about" },
  { label: "Products", href: "#products", route: "/#products" },
  { label: "Projects", href: "#projects", route: "/#projects" },
  { label: "News", href: "#news", route: "/#news" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="font-heading text-3xl tracking-wider text-foreground">
          <span className="text-primary red-glow">DK</span> ENGINEERING
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) =>
            isHome ? (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
                className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.route}
                className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <a href="#contact" className="text-xs uppercase tracking-[0.2em] border border-foreground/30 px-6 py-2.5 text-foreground hover:bg-foreground hover:text-background transition-all">
            Contact
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-heading text-4xl text-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <Link to="/shop" onClick={() => setOpen(false)} className="font-heading text-4xl text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
