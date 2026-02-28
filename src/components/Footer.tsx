import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Portfolio</p>
            <div className="space-y-2">
              {["Work", "Fun", "About me"].map((item) => (
                <a key={item} href="#" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Links</p>
            <div className="space-y-2">
              {[
                { label: "Linkedin", href: "https://www.linkedin.com/in/hbshih" },
                { label: "Bento", href: "https://bento.me/hbshih" },
                { label: "Read.CV", href: "https://read.cv/benshih" },
                { label: "Github", href: "https://github.com/hbshih" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="block text-sm text-foreground hover:text-muted-foreground transition-colors">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">Contact</p>
            <a href="mailto:hello@benshih.design"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              hello@benshih.design
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-muted-foreground text-xs">© 2025 Ben Shih. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
