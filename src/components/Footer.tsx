import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © 2025 Avenya RP — Tous droits réservés
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://discord.gg/wisefa"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
          >
            <MessageCircle size={16} />
            Discord
          </a>
          <a
            href="https://www.tiktok.com/@astrafr.rp?is_from_webapp=1&sender_device=pc"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
