import { Unlock, Users, Headphones, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Unlock,
    title: "Free Access",
    description: "Pas de whitelist, pas d'attente. Connecte-toi et joue immédiatement.",
  },
  {
    icon: Users,
    title: "Communauté sérieuse",
    description: "Des joueurs passionnés qui respectent le RP. Ambiance mature et immersive.",
  },
  {
    icon: Headphones,
    title: "Staff réactif",
    description: "Une équipe de modération active 24/7 pour une expérience de qualité.",
  },
  {
    icon: Cpu,
    title: "Serveur optimisé",
    description: "Performances stables et régulièrement mises à jour pour le meilleur gameplay.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-3 text-foreground"
        >
          Pourquoi choisir <span className="text-primary text-glow">Vinity RP</span> ?
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground mb-16"
        >
          Vinity RP, l'expérience GTA RP sans compromis sur FiveM
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 text-left hover:border-primary/40 transition-all duration-300 group"
            >
              <feature.icon
                size={32}
                className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(190,100%,50%)] transition-all"
              />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
