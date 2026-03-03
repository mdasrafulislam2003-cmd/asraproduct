import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "@/assets/avatar.jpg";

const navLinks = [
{ label: "Work", href: "#case-study-section", active: true },
{ label: "Fun", href: "#side-projects" },
{ label: "About me", href: "#about" },
{ label: "Medium ↗", href: "https://hbshih.medium.com/", external: true }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`
      }
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full max-w-[940px] mx-auto px-5 py-3 flex items-center justify-between">

      {/* Avatar */}
      <a href="#" className="flex-shrink-0">
        <motion.div
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-border"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}>

          <img alt="Asra" className="w-full h-full object-cover" src={avatarImg} />
        </motion.div>
      </a>

      {/* Nav pills */}
      <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border rounded-full px-2 py-1.5 shadow-sm">
        {navLinks.map((link) =>
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          onClick={() => !link.external && setActiveSection(link.label)}
          className={`text-sm font-medium transition-all duration-200 ${
          activeSection === link.label ?
          "nav-pill-active" :
          "nav-pill text-foreground/70 hover:text-foreground"}`
          }>

            {link.label}
          </a>
        )}
      </div>
      </div>
    </motion.nav>);

}