import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectJuice from "@/assets/project-juice.jpg";
import projectPotato from "@/assets/project-potato.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";

const projects = [
  { image: projectBakery, cat: "Bakery", title: "NYS GILGIL INSTALLATION", size: "large" },
  { image: projectPotato, cat: "Processing", title: "SWEET POTATO PLANT — MERU", size: "small" },
  { image: projectJuice, cat: "Juice", title: "UON JUICE PROCESSING", size: "small" },
  { image: heroBakery, cat: "Bakery", title: "DPL FESTIVE EQUIPMENT", size: "large" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading text-5xl md:text-7xl text-foreground mb-20"
        >
          SELECTED<br />INSTALLATIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`group relative overflow-hidden cursor-pointer ${
                p.size === "large" ? "aspect-[4/3]" : "aspect-square"
              }`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/30 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-primary text-xs uppercase tracking-[0.3em]">{p.cat}</span>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mt-2 group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
              </div>
              {/* Red corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-primary border-l-[60px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
