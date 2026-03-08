import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import avatarImg from "@/assets/avatar.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { label: "Work", href: "/#case-study-section", active: true },
  { label: "About Me", href: "/about-me" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/asra2003/", external: true },
  { label: "Dribbble", href: "https://dribbble.com/asraful1234", external: true },
  { label: "Read.CV ↗", href: "https://drive.google.com/file/d/1L921LziVJllUhESb7p149CcbZb-vKPbG/view", external: true },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isAboutMe = location.pathname === "/about-me";
  const [activeSection, setActiveSection] = useState(isAboutMe ? "About Me" : "Work");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileOpen) {
      const onScroll = () => setMobileOpen(false);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[940px] mx-auto px-5 py-3 flex items-center justify-between">
        {/* Avatar */}
        <a href="/" className="flex-shrink-0">
          <motion.div
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-border"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <img alt="Asra" className="w-full h-full object-cover" src={avatarImg} />
          </motion.div>
        </a>

        {/* Desktop nav pills */}
        {!isMobile && (
          <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border rounded-full px-2 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => !link.external && setActiveSection(link.label)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeSection === link.label
                    ? "nav-pill-active"
                    : "nav-pill text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mx-5 mt-1 bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => {
                  if (!link.external) setActiveSection(link.label);
                  setMobileOpen(false);
                }}
                className={`px-5 py-3 text-sm font-medium transition-all duration-200 ${
                  activeSection === link.label
                    ? "nav-pill-active rounded-none mx-2"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}