import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  CircleHelp,
  GraduationCap,
  House,
  Layers,
  Leaf,
  Lightbulb,
  Menu,
  MessageCircle,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Store,
  X,
  PencilLine,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import workspace from "@/assets/workspace.png.asset.json";
import stationery from "@/assets/stationery.png.asset.json";

export const photos = { workspace: workspace.url, stationery: stationery.url };
export const navigation = [
  { to: "/", label: "Il mio spazio", icon: House },
  { to: "/academy", label: "Beginner Academy", icon: GraduationCap },
  { to: "/ricerca", label: "Ricerca prodotti e keyword", icon: Search },
  { to: "/listing", label: "Listing & SEO Studio", icon: PencilLine },
  { to: "/coach", label: "Il mio AI Coach", icon: Sparkles },
  { to: "/idee", label: "Digital Product Lab", icon: Layers },
  { to: "/piano", label: "Piano di crescita", icon: CalendarDays },
  { to: "/diario", label: "Business Journal", icon: BookOpen },
  { to: "/calendario", label: "Calendario opportunità", icon: Lightbulb },
  { to: "/analisi", label: "Analisi del negozio", icon: ChartNoAxesCombined },
] as const;
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — iCoach` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — iCoach` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="iCoach, il mio spazio">
      <Leaf />
      <span>iCoach</span>
    </Link>
  );
}
export function FlowLines() {
  return (
    <svg className="flow-lines" viewBox="0 0 180 230" fill="none" aria-hidden="true">
      {Array.from({ length: 15 }, (_, i) => (
        <path
          key={i}
          d={`M ${i * 7} -20 C ${50 + i * 5} 60, ${-55 + i * 6} 80, ${35 + i * 7} 140 S ${150 + i * 5} 175, ${110 + i * 7} 260`}
          stroke="currentColor"
          strokeWidth=".7"
        />
      ))}
    </svg>
  );
}
export function Sample({
  children = "Dati dimostrativi · nessun dato Etsy live",
}: {
  children?: ReactNode;
}) {
  return (
    <span className="sample">
      <ShieldCheck />
      {children}
    </span>
  );
}
export function Chip({ children, sage = false }: { children: ReactNode; sage?: boolean }) {
  return <span className={`chip ${sage ? "sage" : ""}`}>{children}</span>;
}
export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`panel ${className}`}>{children}</section>;
}
export function PanelTitle({
  icon: Icon,
  title,
  action,
}: {
  icon?: typeof Sparkles;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="panel-title">
      <h2>
        {Icon && <Icon />}
        {title}
      </h2>
      {action}
    </div>
  );
}
export function PageHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="page-heading">
      <div className="min-w-0">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}
export function Progress({ value = 33 }: { value?: number }) {
  return <progress className="native-progress" max={100} value={value} aria-label="Avanzamento" />;
}
export function Stages({ active = 1 }: { active?: number }) {
  return (
    <div className="stage-steps">
      {["Discover", "Launch", "Grow"].map((s, i) => (
        <div key={s} className={`stage ${i < active ? "complete" : i === active ? "current" : ""}`}>
          <span>{i < active ? <Check /> : i + 1}</span>
          {s}
        </div>
      ))}
    </div>
  );
}
export function TrendChart() {
  return (
    <svg
      className="chart"
      viewBox="0 0 500 190"
      role="img"
      aria-label="Grafico dimostrativo: trend in crescita da gennaio a giugno"
    >
      <path
        className="chart-area"
        d="M35 145 C75 110 100 90 135 107 S200 110 235 85 S300 93 335 60 S400 80 475 25 L475 160 L35 160Z"
      />
      {[25, 70, 115, 160].map((y, i) => (
        <g key={y}>
          <line className="chart-grid" x1="35" y1={y} x2="475" y2={y} />
          <text className="chart-label" x="0" y={y + 4}>
            {[80, 60, 40, 20][i]}k
          </text>
        </g>
      ))}
      <path
        className="chart-line"
        d="M35 145 C75 110 100 90 135 107 S200 110 235 85 S300 93 335 60 S400 80 475 25"
      />
      {["Gen", "Feb", "Mar", "Apr", "Mag", "Giu"].map((m, i) => (
        <text key={m} className="chart-label" x={35 + i * 86} y="184">
          {m}
        </text>
      ))}
    </svg>
  );
}
export function Gauge({ score = 87 }: { score?: number }) {
  return (
    <svg
      viewBox="0 0 220 140"
      className="gauge"
      role="img"
      aria-label={`Punteggio dimostrativo ${score} su 100`}
    >
      <path className="gauge-track" d="M20 110 A90 90 0 0 1 200 110" />
      <path className="gauge-value" d="M20 110 A90 90 0 0 1 190 68" />
      <text className="gauge-text" x="86" y="108">
        {score}
      </text>
      <text className="gauge-small" x="130" y="108">
        /100
      </text>
    </svg>
  );
}
export function Toast({ text }: { text: string }) {
  return (
    <div className="toast-preview" role="status">
      {text}
    </div>
  );
}
export function PreviewModal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="preview-modal" onClick={onClose}>
      <section
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <PanelTitle
          title={title}
          action={
            <Button variant="ghost" size="icon" aria-label="Chiudi" onClick={onClose}>
              <X />
            </Button>
          }
        />
        {children}
      </section>
    </div>
  );
}
export function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = search
    ? navigation.filter((n) => n.label.toLowerCase().includes(search.toLowerCase()))
    : [];
  return (
    <>
      <aside className={`app-sidebar ${open ? "is-open" : ""}`}>
        <div className="flex items-center justify-between">
          <Logo />
          <Button
            className="mobile-close"
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Chiudi menu"
          >
            <X />
          </Button>
        </div>
        <div className="logo-caption">YOUR CREATIVE BUSINESS SPACE</div>
        <div className="nav-label">Il tuo business creativo</div>
        <nav aria-label="Navigazione principale">
          {navigation.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={`nav-item ${pathname === n.to ? "active" : ""}`}
            >
              <n.icon />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <Link to="/negozio" className={`nav-item ${pathname === "/negozio" ? "active" : ""}`}>
            <Store />
            Collega il tuo Etsy shop
          </Link>
          <Link
            to="/impostazioni"
            className={`nav-item ${pathname === "/impostazioni" ? "active" : ""}`}
          >
            <Settings />
            Impostazioni
          </Link>
          <Link to="/benvenuta" className="nav-item">
            <CircleHelp />
            Scopri iCoach
            <ArrowRight className="ml-auto" />
          </Link>
          <Link to="/impostazioni" className="shop-widget">
            <div className="avatar">P</div>
            <div className="min-w-0">
              <strong>Patricia Megyes</strong>
              <small>Il tuo spazio creativo</small>
            </div>
            <ChevronDown className="ml-auto size-3" />
          </Link>
        </div>
      </aside>
      <div className="app-main">
        <header className="app-topbar">
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label="Apri menu"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </Button>
          <div className="mobile-logo">
            <Logo />
          </div>
          <div className="top-search">
            <Search />
            <input
              aria-label="Cerca uno strumento"
              placeholder="Cerca strumenti, idee e ispirazioni…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <kbd>⌘ K</kbd>
          </div>
          <div className="top-actions">
            <span className="sample user-name">
              <span className="size-1.5 rounded-full bg-sage" />
              Il tuo spazio, il tuo ritmo
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifiche"
              onClick={() => setNotifications(!notifications)}
            >
              <Bell />
            </Button>
            <div className="separator" />
            <Link to="/impostazioni" className="avatar" aria-label="Il tuo profilo">
              P
            </Link>
          </div>
          {notifications && (
            <div className="panel notification-panel">
              <PanelTitle title="Le tue novità" />
              <p>
                <strong>Un piccolo passo, ogni giorno.</strong>
                <br />
                Il tuo percorso Academy ti aspetta.
              </p>
              <Link to="/academy" className="subtle-link" onClick={() => setNotifications(false)}>
                Riprendi il percorso <ArrowRight />
              </Link>
            </div>
          )}
          {search && (
            <div className="panel notification-panel">
              {filtered.length ? (
                filtered.map((n) => (
                  <Link key={n.to} to={n.to} className="nav-item" onClick={() => setSearch("")}>
                    <n.icon />
                    {n.label}
                  </Link>
                ))
              ) : (
                <p>Nessuno strumento trovato.</p>
              )}
            </div>
          )}
        </header>
        <main className="page-content">
          {children}
          <footer className="bottom-note">
            <span>
              <Leaf />
              Creato con cura, per chi crea. © iCoach 2026
            </span>
            <Sample>Anteprima di design · il tuo futuro spazio creativo</Sample>
          </footer>
        </main>
      </div>
      <nav className="mobile-nav" aria-label="Navigazione mobile">
        {[
          { to: "/", label: "Home", icon: House },
          { to: "/idee", label: "Le mie idee", icon: Bookmark },
          { to: "/coach", label: "AI Coach", icon: MessageCircle },
          { to: "/piano", label: "Crescita", icon: ChartNoAxesCombined },
          { to: "/academy", label: "Academy", icon: BookOpen },
        ].map((n) => (
          <Link key={n.to} to={n.to} className={pathname === n.to ? "active" : ""}>
            <n.icon />
            {n.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
