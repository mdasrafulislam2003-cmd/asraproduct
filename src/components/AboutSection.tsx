import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-teal-dark px-5 py-24">
      <div className="max-w-[940px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="font-serif text-primary-foreground text-4xl md:text-5xl leading-tight mb-6">I love designing for AI-driven products or any that make the world a bit better.

          </h2>
          <p className="text-primary-foreground text-lg mb-4 leading-relaxed font-normal not-italic">Great products don't happen by accident. They're built by people who care deeply about solving the right problems. For me, I always care about building systems that genuinely improve how people work and think.  

If you're building something meaningful, I'd love to be part of it. ❤️
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.a href="https://www.linkedin.com/in/hbshih/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary px-7 py-3 rounded-full font-medium hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
              
              Find me on Linkedin
            </motion.a>
            <motion.a
              href="mailto:Asrauxdesign@gmail.com"
              className="border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>👀 Curious? Let's Connect


            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>);

}
