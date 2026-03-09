import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectJuice from "@/assets/project-juice.jpg";
import projectPotato from "@/assets/project-potato.jpg";

const news = [
  {
    image: projectBakery,
    date: "November 3, 2020",
    title: "DK Engineering Partners with AMF Bakery Systems",
    excerpt: "AMF announces partnership with DK Engineering to expand bakery solutions across East Africa.",
  },
  {
    image: projectJuice,
    date: "November 3, 2020",
    title: "Our Innovation to Clients",
    excerpt: "We are developing an enviable reputation for delivering innovative solutions to our clients.",
  },
  {
    image: projectPotato,
    date: "November 3, 2020",
    title: "Mango Processing Plant in Kitui",
    excerpt: "A fully equipped mango processing plant delivered in partnership with NETFUND.",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="section-padding section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">In the Now</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Industry News
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card-hover group bg-card rounded-2xl overflow-hidden border border-border"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
