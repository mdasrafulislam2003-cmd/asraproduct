import { motion } from "framer-motion";
import coverNotchflow from "@/assets/cover-notchflow.jpg";
import coverGrammarpaw from "@/assets/cover-grammarpaw.jpg";
import coverDatascience from "@/assets/cover-datascience.jpg";
import coverOrganai from "@/assets/cover-organai.jpg";

const sideProjects = [
{
  tag: "#MacOS",
  year: "2025",
  title: "Notchflow",
  description: "Dynamic island for your mac. A productivity app that blends Pomodoro focus and your favorite music streaming for smarter work and better concentration.",
  image: coverNotchflow,
  href: "https://notchflow.app/",
  badge: null
},
{
  tag: "#MacOS",
  year: "2025",
  title: "GrammarPaw",
  description: "If Grammarly and Spotlight had a baby. Meet GrammarPaw, your AI writing companion that lives in your Mac's menu bar.",
  image: coverGrammarpaw,
  href: "#",
  badge: "🏆 Product Hunt Top Post"
},
{
  tag: "#Airtable Plugin",
  year: "2024",
  title: "BenAI",
  description: "This is just for testing purpose nothing else.",
  image: coverDatascience,
  href: "#",
  badge: null
},
{
  tag: "#iOS App",
  year: "2023",
  title: "App for daily motivation",
  description: "A mobile app that delivers daily motivational quotes tailored to your mood.",
  image: coverOrganai,
  href: "#",
  badge: null
}];


export default function SideProjectsSection() {
  return (
    <section id="side-projects" className="bg-secondary/30 px-5 py-20">
      <div className="max-w-[940px] mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Fun</span>
          <h2 className="font-serif text-teal-dark text-3xl md:text-4xl mt-2 mb-3">Visual projects</h2>
          <p className="text-foreground max-w-lg font-normal not-italic">I don't always get to flex my visual creativity in real-world SaaS products — that's why I share my design explorations on Dribbble.

          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sideProjects.map((project, i) =>
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group block bg-card rounded-2xl border border-border overflow-hidden">
            
              <div className="h-44 overflow-hidden relative">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
                {project.badge &&
              <div className="absolute bottom-2 left-2 bg-background/90 text-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {project.badge}
                  </div>
              }
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{project.tag}</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="font-serif text-foreground text-lg mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          )}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          
          <a
            href="https://dribbble.com/asraful1234"
            className="inline-block border border-border text-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-800 hover:text-white hover:border-green-800 transition-colors">
            
            Find me on Dribbble →
          </a>
        </motion.div>
      </div>
    </section>);

}