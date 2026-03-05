import { Play, ShoppingBag, BookOpen, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { icon: Play, label: "Jouer", href: "fivem://connect/cfx.re/join/zxz9q9" },
  { icon: ShoppingBag, label: "Boutique", href: "https://wisefa.tebex.io/" },
  { icon: BookOpen, label: "Règlement", href: "https://wise-fa.gitbook.io/wisefa" },
  { icon: UserPlus, label: "Staff", href: "https://docs.google.com/forms/d/1TT5kijhjVQmScza6LxUztNze5hbIhF2yxzYQlck73sk/edit" },
];

const LinksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12 text-foreground"
        >
          Liens utiles
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <link.icon
                size={28}
                className="text-primary group-hover:scale-110 transition-transform"
              />
              <span className="text-foreground font-heading font-semibold">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
