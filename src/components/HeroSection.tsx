import { Play, MessageCircle, Users, Shield, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "400 +", label: "joueurs le soir" },
  { icon: MessageCircle, value: "8 000 +", label: "membres Discord" },
  { icon: Shield, value: "50 +", label: "staffs actifs" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="GTA RP scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-heading font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">Wise</span>
          <span className="text-primary text-glow-strong">FA</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          Le Meilleur Free Access
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <a
            href="fivem://connect/cfx.re/join/zxz9q9"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all duration-300 box-glow-strong"
          >
            <Play size={18} />
            Jouer maintenant
          </a>
          <a
            href="https://discord.gg/wisefa"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-foreground font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            <MessageCircle size={18} />
            Discord
          </a>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-dot" />
          Connexion...
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-8 md:gap-16 justify-center mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <stat.icon size={18} className="text-primary" />
              <span className="text-foreground font-bold text-lg">{stat.value}</span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="max-w-xl text-sm text-muted-foreground leading-relaxed mb-12"
        >
          <strong className="text-foreground">WiseFA</strong> est le{" "}
          <strong className="text-foreground">meilleur Free Access GTA RP</strong> sur{" "}
          <strong className="text-foreground">FiveM</strong> en France. Rejoins notre serveur sans whitelist
          et découvre une expérience roleplay immersive avec plus de 8 000 joueurs actifs.
        </motion.p>

        {/* Discover */}
        <motion.a
          href="#features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          Découvrir
          <ChevronDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
