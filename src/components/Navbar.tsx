import { Play } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "À propos", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Discord", href: "https://discord.gg/wisefa" },
  { label: "Boutique", href: "https://wisefa.tebex.io/" },
  { label: "Règlement", href: "/reglement" },
  { label: "TikTok", href: "https://www.tiktok.com/@astrafr.rp?is_from_webapp=1&sender_device=pc" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 glass-card"
    >
      <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="Avenya RP logo" className="w-8 h-8 object-contain" />
        <span className="text-2xl font-heading font-bold text-foreground">
          Avenya <span className="text-primary text-glow">RP</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="fivem://connect/cfx.re/join/zxz9q9"
        className="flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 box-glow"
      >
        <Play size={14} />
        Jouer
      </a>
    </motion.nav>
  );
};

export default Navbar;
