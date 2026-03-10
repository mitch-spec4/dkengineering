import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const InquirySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0A%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:michchore@gmail.com?subject=${encodeURIComponent(form.subject || "Inquiry from DK Engineering Website")}&body=${body}`;
  };

  return (
    <section id="inquiry" ref={ref} className="section-padding section-alt">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs uppercase tracking-[0.3em]">Inquiry</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-7xl text-foreground mb-16"
        >
          HAVE A<br /><span className="text-primary red-glow">QUESTION?</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl"
        >
          <input
            type="text"
            placeholder="Your Name *"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-transparent border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-transparent border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            maxLength={20}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-transparent border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Subject"
            maxLength={200}
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="bg-transparent border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Your Message *"
            required
            maxLength={1000}
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="md:col-span-2 bg-transparent border border-border px-5 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 border border-primary px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default InquirySection;
