import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectJuice from "@/assets/project-juice.jpg";
import projectPotato from "@/assets/project-potato.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

const projects = [
  { image: projectBakery, category: "Bakery Equipment", title: "Bakery Equipment Installation — NYS Gilgil" },
  { image: projectPotato, category: "Vegetable Processing", title: "Sweet Potato Processing Plant — Meru" },
  { image: projectJuice, category: "Juice Processing", title: "Juice Processing Plant — University of Nairobi" },
  { image: heroBakery, category: "Bakery Equipment", title: "Kitui Mango Processing Plant" },
  { image: heroRestaurant, category: "Bakery Equipment", title: "Bakery Equipment for DPL Festive" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Projects</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Select Projects Installed
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A showcase of our successful installations across East Africa over the years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading text-lg font-bold text-primary-foreground mt-1">{project.title}</h3>
                <div className="flex items-center gap-1 text-primary-foreground/70 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.slice(3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[16/9]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading text-lg font-bold text-primary-foreground mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
