import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Check,
  CircleCheck,
  Clock,
  ExternalLink,
  GraduationCap,
  Leaf,
  LockKeyhole,
  Mail,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  AppShell,
  Chip,
  FlowLines,
  Logo,
  PageHeading,
  Panel,
  PanelTitle,
  photos,
  PreviewModal,
  Sample,
  Stages,
  Toast,
  TrendChart,
} from "./shared";

export function AnalyticsPage() {
  const [preview, setPreview] = useState(true);
  return (
    <AppShell>
      <PageHeading
        eyebrow="ANALISI DEL NEGOZIO"
        title={
          <>
            Guarda crescere <em>il tuo progetto.</em>
          </>
        }
        description="Una visione chiara dei tuoi progressi, senza perdere di vista ciò che conta."
        action={
          <Button variant="outline" onClick={() => setPreview(!preview)}>
            <ChartNoAxesCombined />
            {preview ? "Stato non collegato" : "Mostra anteprima"}
          </Button>
        }
      />
      {preview ? (
        <>
          <div className="flex items-center justify-between mb-5 gap-3">
            <Sample>Anteprima del pannello · dati dimostrativi, non collegati a Etsy</Sample>
            <Chip>Ultimi 30 giorni · demo</Chip>
          </div>
          <div className="stats-grid">
            {[
              { label: "Ricavi · demo", value: "€ 1.248", trend: "+18,6%" },
              { label: "Ordini · demo", value: "42", trend: "+12,4%" },
              { label: "Visite · demo", value: "2.860", trend: "+24,1%" },
              { label: "Conversione · demo", value: "1,47%", trend: "+0,2%" },
            ].map((s) => (
              <Panel key={s.label} className="stat-card">
                <small>{s.label}</small>
                <strong>{s.value}</strong>
                <Chip sage>
                  <TrendingUp className="size-3" />
                  {s.trend} · esempio
                </Chip>
              </Panel>
            ))}
          </div>
          <div className="two-col">
            <Panel>
              <PanelTitle icon={TrendingUp} title="Il tuo andamento" action={<Chip>Demo</Chip>} />
              <TrendChart />
              <Sample>Trend illustrativo · nessun dato reale del negozio</Sample>
            </Panel>
            <Panel>
              <PanelTitle icon={Store} title="Le tue creazioni più amate" />
              {[
                { name: "Planner Wedding Botanico", price: "€ 348" },
                { name: "Invito Digitale Salvia", price: "€ 276" },
                { name: "Journal Creativo", price: "€ 184" },
              ].map((p, i) => (
                <div key={p.name} className="setting-row">
                  <img
                    src={i === 2 ? photos.workspace : photos.stationery}
                    className="size-12 object-cover rounded-md"
                    alt={p.name}
                  />
                  <div className="min-w-0 flex-1">
                    <strong>{p.name}</strong>
                    <p>Performance dimostrativa</p>
                  </div>
                  <span className="text-xs">{p.price}</span>
                </div>
              ))}
            </Panel>
          </div>
        </>
      ) : (
        <Panel>
          <div className="empty-state">
            <ChartNoAxesCombined />
            <h3>Il tuo percorso, in prospettiva.</h3>
            <p>
              Il negozio non è collegato. Qui troveranno spazio ricavi, ordini e performance delle
              tue creazioni.
            </p>
            <Button asChild>
              <Link to="/negozio">
                Scopri il collegamento Etsy <ArrowRight />
              </Link>
            </Button>
          </div>
        </Panel>
      )}
      <div className="coach-note">
        <Leaf />
        <div>
          <strong>I numeri raccontano una parte della storia.</strong>La cura che metti nelle tue
          creazioni è ciò che dà significato a ogni progresso.
        </div>
      </div>
    </AppShell>
  );
}
export function ShopPage() {
  const [modal, setModal] = useState(false);
  const [connected, setConnected] = useState(false);
  return (
    <AppShell>
      <PageHeading
        eyebrow="IL TUO NEGOZIO ETSY"
        title={
          <>
            Il tuo negozio, <em>nel tuo spazio.</em>
          </>
        }
        description="Tutte le tue creazioni e i tuoi progressi, in un’unica visione."
      />
      <div className="two-col">
        <Panel>
          <PanelTitle
            icon={Store}
            title="Il tuo Etsy shop"
            action={
              <Chip sage={connected}>{connected ? "Collegamento demo" : "Non collegato"}</Chip>
            }
          />
          {connected ? (
            <>
              <div className="flex items-center gap-4 my-7">
                <div className="icon-box sage">
                  <Store />
                </div>
                <div>
                  <h3 className="font-display text-2xl">Patricia Creative Studio</h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    Negozio di esempio · collegamento simulato
                  </p>
                </div>
              </div>
              <div className="setting-row">
                <strong>Stato della connessione</strong>
                <Chip sage>
                  <CircleCheck />
                  Anteprima collegata
                </Chip>
              </div>
              <div className="setting-row">
                <strong>Ultima sincronizzazione</strong>
                <Sample>Non disponibile · demo</Sample>
              </div>
              <div className="setting-row">
                <strong>Ordini e prodotti</strong>
                <Sample>Nessun dato live</Sample>
              </div>
              <Button variant="outline" className="mt-6" onClick={() => setConnected(false)}>
                Torna allo stato non collegato
              </Button>
            </>
          ) : (
            <div className="empty-state">
              <Store />
              <h3>Unisci creatività e chiarezza.</h3>
              <p>
                Il futuro collegamento autorizzato a Etsy porterà qui i dati del tuo negozio. Per
                ora puoi esplorarne l’aspetto.
              </p>
              <Button onClick={() => setModal(true)}>
                <ExternalLink />
                Esplora il collegamento
              </Button>
              <Sample>Anteprima visiva · nessuna autorizzazione Etsy richiesta</Sample>
            </div>
          )}
        </Panel>
        <div className="space-y-5">
          <section className="quote-panel">
            <FlowLines />
            <div className="eyebrow">PENSATO PER IL TUO BUSINESS</div>
            <p className="quote">
              Più tempo per creare.
              <br />
              Più spazio <em>per crescere.</em>
            </p>
          </section>
          <Panel>
            <PanelTitle icon={ShieldCheck} title="Il controllo resta tuo" />
            {[
              {
                icon: LockKeyhole,
                title: "Collegamento autorizzato",
                desc: "Nell’app completa darai il tuo consenso direttamente su Etsy.",
              },
              {
                icon: RefreshCw,
                title: "Dati del negozio aggiornati",
                desc: "Prodotti, ordini e performance in una visione semplice.",
              },
              {
                icon: User,
                title: "Puoi cambiare idea",
                desc: "Il collegamento potrà essere rimosso in qualsiasi momento.",
              },
            ].map((r) => (
              <div className="setting-row" key={r.title}>
                <r.icon className="size-5 text-gold shrink-0" />
                <div>
                  <strong>{r.title}</strong>
                  <p className="leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </Panel>
        </div>
      </div>
      {modal && (
        <PreviewModal title="Collega il tuo negozio Etsy" onClose={() => setModal(false)}>
          <div className="empty-state p-5">
            <Store />
            <h3>Un piccolo passo verso una visione completa.</h3>
            <p>
              Questa schermata simula l’aspetto del collegamento. Non effettua accessi,
              autorizzazioni o sincronizzazioni con Etsy.
            </p>
            <Button
              onClick={() => {
                setConnected(true);
                setModal(false);
              }}
            >
              Mostra lo stato collegato · demo <ArrowRight />
            </Button>
          </div>
        </PreviewModal>
      )}
    </AppShell>
  );
}
export function SettingsPage() {
  const [tab, setTab] = useState("Profilo");
  const [toast, setToast] = useState(false);
  return (
    <AppShell>
      <PageHeading
        eyebrow="IMPOSTAZIONI & PROFILO"
        title={
          <>
            Uno spazio che <em>ti somiglia.</em>
          </>
        }
        description="I tuoi dettagli, le tue preferenze e il tuo modo di vivere iCoach."
      />
      <div className="tabs-row">
        {["Profilo", "Preferenze", "Notifiche"].map((t) => (
          <Button key={t} variant={tab === t ? "default" : "ghost"} onClick={() => setTab(t)}>
            {t}
          </Button>
        ))}
      </div>
      <div className="two-col">
        <Panel>
          <PanelTitle icon={Settings} title={tab} />
          {tab === "Profilo" ? (
            <>
              <div className="flex items-center gap-4 mb-7">
                <div className="avatar size-16 text-3xl">P</div>
                <div>
                  <strong className="font-display text-xl font-normal">Patricia Megyes</strong>
                  <p className="text-xs text-muted-foreground mt-1">
                    Creatrice, sognatrice, imprenditrice.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="first-name" className="form-label">
                    Nome
                  </label>
                  <Input id="first-name" defaultValue="Patricia" />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name" className="form-label">
                    Cognome
                  </label>
                  <Input id="last-name" defaultValue="Megyes" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="profile-email" className="form-label">
                  Email · esempio
                </label>
                <Input id="profile-email" type="email" defaultValue="patricia@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="shop-name" className="form-label">
                  Nome del tuo progetto
                </label>
                <Input id="shop-name" defaultValue="Patricia Creative Studio" />
              </div>
            </>
          ) : tab === "Preferenze" ? (
            <>
              <div className="form-group">
                <label className="form-label" htmlFor="language">
                  Lingua del tuo spazio
                </label>
                <select id="language" className="w-full rounded-md border border-input p-3">
                  <option>Italiano</option>
                  <option disabled>English · prossimamente</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="timezone">
                  Fuso orario
                </label>
                <select id="timezone" className="w-full rounded-md border border-input p-3">
                  <option>Europa / Roma</option>
                  <option>Europa / Londra</option>
                </select>
              </div>
              <div className="setting-row">
                <div>
                  <strong>Un benvenuto gentile</strong>
                  <p>Mostra il pensiero del giorno nel mio spazio.</p>
                </div>
                <Switch defaultChecked aria-label="Mostra il pensiero del giorno" />
              </div>
            </>
          ) : (
            <>
              {[
                "Novità del tuo percorso Academy",
                "Promemoria del piano settimanale",
                "Nuove ispirazioni stagionali",
              ].map((t) => (
                <div className="setting-row" key={t}>
                  <div>
                    <strong>{t}</strong>
                    <p>Una piccola notifica, al momento giusto.</p>
                  </div>
                  <Switch defaultChecked aria-label={t} />
                </div>
              ))}
            </>
          )}
          <div className="panel-foot">
            <Sample>Preferenze locali · non salvate online</Sample>
            <Button
              onClick={() => {
                setToast(true);
                setTimeout(() => setToast(false), 2500);
              }}
            >
              Aggiorna anteprima <Check />
            </Button>
          </div>
        </Panel>
        <div>
          <section className="quote-panel">
            <FlowLines />
            <div className="eyebrow">IL TUO SPAZIO CREATIVO</div>
            <p className="quote">
              Il tuo ritmo.
              <br />
              La tua visione.
              <br />
              <em>La tua storia.</em>
            </p>
            <small>iCoach cresce con te.</small>
          </section>
          <Panel className="mt-5">
            <PanelTitle icon={Store} title="Il tuo negozio" />
            <p className="text-xs text-muted-foreground leading-relaxed mb-5">
              Il collegamento Etsy non è ancora attivo.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/negozio">
                Gestisci collegamento <ArrowRight />
              </Link>
            </Button>
          </Panel>
        </div>
      </div>
      {toast && <Toast text="Preferenze aggiornate nell’anteprima · non salvate online" />}
    </AppShell>
  );
}

export function WelcomePage() {
  return (
    <>
      <header className="marketing-nav">
        <Logo />
        <nav className="secondary-nav flex items-center gap-8 text-xs">
          <Link to="/academy">Il tuo percorso</Link>
          <Link to="/idee">Il tuo spazio creativo</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost">
            <Link to="/accedi">Accedi</Link>
          </Button>
          <Button asChild>
            <Link to="/registrati">
              Inizia da qui <ArrowRight />
            </Link>
          </Button>
        </div>
      </header>
      <main>
        <section className="marketing-hero">
          <img
            src={photos.workspace}
            alt="Lo spazio creativo iCoach: una scrivania con laptop e stationery botanica"
          />
          <div className="marketing-copy">
            <div className="eyebrow">YOUR CREATIVE BUSINESS SPACE</div>
            <h1>
              iCoach.
              <br />
              Il tuo spazio
              <br />
              <em>per crescere.</em>
            </h1>
            <p>La tua creatività è un inizio. Insieme, trasformiamola nel tuo business su Etsy.</p>
            <Button size="lg" asChild>
              <Link to="/registrati">
                Dai spazio alla tua idea <ArrowRight />
              </Link>
            </Button>
            <span className="sample mt-5">
              <Leaf />
              Un piccolo passo, un nuovo inizio.
            </span>
          </div>
        </section>
        <section className="marketing-section">
          <div className="eyebrow">SCOPRI. CREA. CRESCI.</div>
          <h2>Una visione tutta tua. Un percorso insieme.</h2>
          <div className="card-grid">
            {[
              {
                icon: GraduationCap,
                title: "Impara con fiducia",
                desc: "Discover → Launch → Grow. Il tuo percorso per cominciare su Etsy.",
                to: "/academy",
              },
              {
                icon: Sparkles,
                title: "Non partire da sola",
                desc: "Uno spazio per mettere a fuoco idee, domande e prossimi passi.",
                to: "/coach",
              },
              {
                icon: Target,
                title: "Dai forma al tuo futuro",
                desc: "Ispirazioni, strumenti e piccoli obiettivi per il tuo business creativo.",
                to: "/",
              },
            ].map((c) => (
              <Panel key={c.title}>
                <c.icon className="size-7 text-gold mb-5" />
                <h3 className="font-display text-2xl mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-5">{c.desc}</p>
                <Link to={c.to} className="subtle-link">
                  Esplora <ArrowRight />
                </Link>
              </Panel>
            ))}
          </div>
        </section>
      </main>
      <footer className="marketing-section border-t border-border flex justify-between gap-4">
        <Logo />
        <Sample>Anteprima di design · creato con cura da iCoach</Sample>
      </footer>
    </>
  );
}
export function AuthPage({ register = false }: { register?: boolean }) {
  const [notice, setNotice] = useState(false);
  return (
    <div className="auth-layout">
      <div className="auth-photo">
        <img src={photos.workspace} alt="Un tranquillo spazio di lavoro creativo" />
        <div className="auth-quote">
          Ogni grande progetto
          <br />
          inizia da <em>un piccolo sì.</em>
          <div className="eyebrow mt-5">IL TUO SPAZIO CREATIVO TI ASPETTA</div>
        </div>
      </div>
      <main className="auth-form">
        <Logo />
        <h1>{register ? "Una nuova storia, la tua." : "Bentornata nel tuo spazio."}</h1>
        <p>
          {register
            ? "Dai alle tue idee un luogo in cui crescere. Cominciamo insieme."
            : "Le tue idee, i tuoi progressi, il tuo prossimo piccolo passo."}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNotice(true);
          }}
        >
          {register && (
            <div className="form-group">
              <label htmlFor="auth-name" className="form-label">
                Come ti chiami?
              </label>
              <Input id="auth-name" autoComplete="name" required placeholder="Il tuo nome" />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="auth-email" className="form-label">
              La tua email
            </label>
            <Input
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              placeholder="tu@esempio.it"
            />
          </div>
          <div className="form-group">
            <label htmlFor="auth-password" className="form-label">
              Password
            </label>
            <Input
              id="auth-password"
              type="password"
              autoComplete={register ? "new-password" : "current-password"}
              required
              placeholder="La tua password"
            />
          </div>
          {register ? (
            <label className="flex gap-2 text-[10px] text-muted-foreground mb-6">
              <input type="checkbox" required className="accent-primary" />
              Ho letto e accetto i termini dell’anteprima di design.
            </label>
          ) : (
            <Button
              type="button"
              variant="link"
              className="px-0 text-xs mb-4"
              onClick={() => setNotice(true)}
            >
              Hai dimenticato la password?
            </Button>
          )}
          <Button type="submit" className="w-full">
            {register ? "Crea il tuo spazio" : "Entra nel tuo spazio"}
            <ArrowRight />
          </Button>
        </form>
        <div className="text-xs text-muted-foreground text-center mt-6">
          {register ? "Hai già un account?" : "È il tuo primo passo?"}{" "}
          <Link to={register ? "/accedi" : "/registrati"} className="text-primary font-semibold">
            {register ? "Accedi" : "Crea il tuo spazio"}
          </Link>
        </div>
        <Sample>Anteprima visiva · registrazione e accesso non attivi</Sample>
        <Button asChild variant="ghost" className="mt-5">
          <Link to="/">
            Esplora il design senza accedere <ArrowRight />
          </Link>
        </Button>
        {notice && (
          <PreviewModal
            title={register ? "Il tuo nuovo inizio" : "Il tuo spazio ti aspetta"}
            onClose={() => setNotice(false)}
          >
            <p>
              Questa è un’anteprima di design: nessun account viene creato e nessuna password viene
              inviata o salvata.
            </p>
            <Button asChild>
              <Link to={register ? "/onboarding" : "/"}>
                Continua nell’anteprima <ArrowRight />
              </Link>
            </Button>
          </PreviewModal>
        )}
      </main>
    </div>
  );
}
export function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState("inizio");
  return (
    <main className="onboarding-wrap">
      <Logo />
      <Stages active={step} />
      <div className="eyebrow mt-10">UN NUOVO INIZIO · PASSO {step + 1} DI 3</div>
      <h1>
        {
          [
            "Ciao, creativa. Facciamo spazio alla tua idea.",
            "Cosa ti piacerebbe creare?",
            "Il tuo prossimo passo inizia qui.",
          ][step]
        }
      </h1>
      <p className="text-muted-foreground text-xs leading-relaxed mb-7">
        {
          [
            "Ogni percorso è diverso. Raccontaci dove ti trovi, senza fretta.",
            "Non serve avere tutto chiaro. Scegli la direzione che oggi ti ispira.",
            "Abbiamo preparato uno spazio per imparare, creare e crescere al tuo ritmo.",
          ][step]
        }
      </p>
      {step < 2 ? (
        (step === 0
          ? [
              {
                id: "inizio",
                title: "Ho un’idea e voglio iniziare",
                desc: "Il mio negozio Etsy deve ancora nascere.",
              },
              {
                id: "negozio",
                title: "Ho già un piccolo negozio",
                desc: "Vorrei ritrovare chiarezza e farlo crescere.",
              },
              {
                id: "esploro",
                title: "Sto ancora esplorando",
                desc: "Mi prendo il tempo per trovare la mia strada.",
              },
            ]
          : [
              {
                id: "digitali",
                title: "Prodotti digitali",
                desc: "Planner, template, inviti e nuove idee.",
              },
              {
                id: "artigianato",
                title: "Creazioni artigianali",
                desc: "Oggetti fatti con cura, dalle mie mani.",
              },
              {
                id: "scopro",
                title: "Voglio lasciarmi ispirare",
                desc: "Sono aperta a una nuova direzione.",
              },
            ]
        ).map((c) => (
          <label className="panel onboarding-choice" key={c.id}>
            <input
              type="radio"
              name="journey"
              checked={choice === c.id}
              onChange={() => setChoice(c.id)}
            />
            <div>
              <strong>{c.title}</strong>
              <small>{c.desc}</small>
            </div>
          </label>
        ))
      ) : (
        <Panel>
          <div className="icon-box mb-5">
            <GraduationCap />
          </div>
          <h2 className="font-display text-2xl mb-3">La tua prima scoperta ti aspetta.</h2>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Comincia dal percorso Discover della Beginner Academy. Un piccolo investimento nella tua
            creatività.
          </p>
        </Panel>
      )}
      <div className="flex items-center justify-between mt-8">
        {step > 0 ? (
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            Indietro
          </Button>
        ) : (
          <Link to="/" className="subtle-link">
            Esplora prima lo spazio
          </Link>
        )}
        {step < 2 ? (
          <Button
            onClick={() => {
              setStep(step + 1);
              setChoice("digitali");
            }}
          >
            Continua <ArrowRight />
          </Button>
        ) : (
          <Button asChild>
            <Link to="/">
              Entra nel tuo spazio <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
      <div className="mt-6">
        <Sample>Introduzione dimostrativa · le scelte non vengono salvate</Sample>
      </div>
    </main>
  );
}
