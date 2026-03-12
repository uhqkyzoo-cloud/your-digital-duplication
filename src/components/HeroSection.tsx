import { Play, MessageCircle, Users, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.webp";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.jpg";

const DISCORD_WIDGET_URL = "https://discord.com/api/guilds/1279431715516977215/widget.json";
const bgImages = [heroBg, gallery1, gallery2, gallery3];

const HeroSection = () => {
  const [discordMembers, setDiscordMembers] = useState<number | null>(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    fetch(DISCORD_WIDGET_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.presence_count !== undefined) {
          setDiscordMembers(data.presence_count);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "400 +", label: "joueurs le soir" },
    { icon: MessageCircle, value: discordMembers !== null ? `${discordMembers.toLocaleString("fr-FR")}` : "...", label: "membres en ligne" },
    { icon: Shield, value: "50 +", label: "staffs actifs" },
  ];
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            alt="Astra RP"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
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
          <span className="text-foreground">Astra </span>
          <span className="text-primary text-glow-strong">RP</span>
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
          <strong className="text-foreground">Astra RP</strong> est le{" "}
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
