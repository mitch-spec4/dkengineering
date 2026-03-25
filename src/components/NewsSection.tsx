import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectJuice from "@/assets/project-juice.jpg";
import projectPotato from "@/assets/project-potato.jpg";

const news = [
  { image: projectBakery, date: "NOV 2020", title: "DK PARTNERS WITH AMF BAKERY SYSTEMS", excerpt: "AMF announces strategic partnership to expand bakery solutions across East Africa — from Kenya to Uganda, Rwanda, and beyond." },
  { image: projectJuice, date: "NOV 2020", title: "INNOVATION FOR AFRICAN ENTREPRENEURS", excerpt: "Developing an enviable reputation for delivering innovative food processing solutions tailored for Africa's growing agribusiness sector." },
  { image: projectPotato, date: "NOV 2020", title: "MANGO PROCESSING PLANT — KITUI", excerpt: "A fully equipped mango processing plant delivered in Kitui County in partnership with NETFUND, creating jobs for local communities." },
];

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" ref={ref} className="section-padding section-alt">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">News</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading text-5xl md:text-7xl text-foreground mb-20"
        >
          FROM THE<br />INDUSTRY
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">{item.date}</span>
              <h3 className="font-heading text-xl md:text-2xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
              <span className="inline-block mt-4 text-primary text-xs uppercase tracking-[0.2em] border-b border-primary pb-1 group-hover:tracking-[0.3em] transition-all">
                Read More
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
