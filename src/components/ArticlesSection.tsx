import { motion } from "framer-motion";
import articleAi from "@/assets/article-ai.jpg";
import articleOnboarding from "@/assets/article-onboarding.jpg";

const articles = [
  {
    publication: "Published in UXCollective · Feb, 2025",
    title: "A guide to AI prototyping for product designers",
    description: "AI is more than a product; it's a platform that will change how and what we design.",
    tag: "#AI",
    meta: "8 mins read | 20k+ views",
    image: articleAi,
    href: "https://medium.com/p/f636e7bb9817",
  },
  {
    publication: "Published in UXCollective · Mar, 2024",
    title: "Designing user onboarding: lessons from Figma, Duolingo, and more",
    description: "Find out the common mistakes in designing onboarding and learn the secret sauce behind engaging onboarding from 20+ top tech companies.",
    tag: "#Growth",
    meta: "13 mins read | 50k+ reads",
    image: articleOnboarding,
    href: "https://uxdesign.cc/designing-user-onboarding-lessons-from-figma-duolingo-and-more-d446522e8a65",
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="bg-background px-5 py-20 max-w-[940px] mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Writing</span>
        <h2 className="font-serif text-teal-dark text-3xl md:text-4xl mt-2 mb-3">Popular articles</h2>
        <p className="text-muted-foreground max-w-lg">
          Lately, I've been writing a lot for Smashing Magazine and UXCollective to share my thoughts.
        </p>
      </motion.div>

      <div className="space-y-5">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col sm:flex-row bg-card rounded-2xl border border-border overflow-hidden"
          >
            <div className="sm:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <p className="text-xs text-muted-foreground mb-2">{article.publication}</p>
              <h3 className="font-serif text-foreground text-xl mb-2 group-hover:opacity-80 transition-opacity">{article.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{article.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-secondary text-foreground px-2 py-0.5 rounded-full">{article.tag}</span>
                <span className="text-xs text-muted-foreground">{article.meta}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://hbshih.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          More writings on Medium →
        </a>
      </motion.div>
    </section>
  );
}
