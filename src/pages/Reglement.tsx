import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rulesData from "@/data/rules.json";

type Page = { slug: string; title: string; depth: number; content: string };
type Section = { id: string; title: string; pages: Page[] };

const data = rulesData as Section[];

const Reglement = () => {
  const [activeSlug, setActiveSlug] = useState<string>(data[0]?.pages[0]?.slug ?? "");
  const [query, setQuery] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    data.forEach((s, i) => (initial[s.id] = i === 0));
    return initial;
  });

  const toggleSection = (id: string) =>
    setOpenSections((o) => ({ ...o, [id]: !o[id] }));

  const expandAll = (open: boolean) => {
    const next: Record<string, boolean> = {};
    data.forEach((s) => (next[s.id] = open));
    setOpenSections(next);
  };

  const allPages = useMemo(
    () => data.flatMap((s) => s.pages.map((p) => ({ ...p, sectionTitle: s.title }))),
    []
  );

  const active = allPages.find((p) => p.slug === activeSlug) ?? allPages[0];

  const filteredSections = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.toLowerCase();
    return data
      .map((s) => ({ ...s, pages: s.pages.filter((p) => p.title.toLowerCase().includes(q)) }))
      .filter((s) => s.pages.length > 0);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        <aside className="md:sticky md:top-24 md:h-[calc(100vh-7rem)] md:overflow-y-auto glass-card rounded-xl p-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft size={14} /> Retour
          </Link>
          <div className="relative mb-4">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher..."
              className="w-full pl-9 pr-3 py-2 bg-background/50 border border-border rounded-lg text-sm focus:border-primary outline-none"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mb-2 px-1">
            <button onClick={() => expandAll(true)} className="hover:text-primary">Tout ouvrir</button>
            <button onClick={() => expandAll(false)} className="hover:text-primary">Tout fermer</button>
          </div>
          <nav className="space-y-2">
            {filteredSections.map((sec) => {
              const isOpen = query.trim() ? true : openSections[sec.id] ?? false;
              return (
                <div key={sec.id}>
                  <button
                    onClick={() => toggleSection(sec.id)}
                    className="w-full flex items-center justify-between font-heading font-bold text-primary text-sm uppercase tracking-wide py-2 px-2 rounded hover:bg-primary/5"
                  >
                    <span>{sec.title}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="space-y-1 mt-1">
                      {sec.pages.map((p) => (
                        <li key={p.slug} style={{ paddingLeft: `${p.depth * 12}px` }}>
                          <button
                            onClick={() => setActiveSlug(p.slug)}
                            className={`text-left w-full text-sm py-1.5 px-2 rounded transition-colors ${
                              activeSlug === p.slug
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                            }`}
                          >
                            {p.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        <main className="pb-16 min-w-0">
          {active && (
            <article className="glass-card rounded-xl p-6 md:p-10">
              <div className="text-xs uppercase tracking-wider text-primary mb-2">
                {active.sectionTitle}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                {active.title}
              </h1>
              <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{active.content}</ReactMarkdown>
              </div>
            </article>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Reglement;
