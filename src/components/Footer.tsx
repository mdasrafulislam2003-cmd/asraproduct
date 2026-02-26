import { motion } from "framer-motion";

const musicTracks = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { title: "As It Was", artist: "Harry Styles", duration: "2:37" },
  { title: "Heat Waves", artist: "Glass Animals", duration: "3:59" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* On repeat section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">On-repeat</p>
          <div className="space-y-3">
            {musicTracks.map((track, i) => (
              <motion.div
                key={track.title}
                className="flex items-center justify-between py-3 border-b border-border group"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-teal group-hover:text-primary-foreground transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <polygon points="2,1 11,6 2,11"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{track.title}</p>
                    <p className="text-xs text-muted-foreground">{track.artist}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{track.duration}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
