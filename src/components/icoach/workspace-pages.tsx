import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Copy,
  GraduationCap,
  Image,
  Layers,
  Leaf,
  Lightbulb,
  ListChecks,
  Play,
  Plus,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AppShell,
  Chip,
  FlowLines,
  Gauge,
  PageHeading,
  Panel,
  PanelTitle,
  photos,
  PreviewModal,
  Progress,
  Sample,
  Stages,
  Toast,
  TrendChart,
} from "./shared";

export function HomePage() {
  const [tasks, setTasks] = useState([true, true, false]);
  const count = tasks.filter(Boolean).length;
  return (
    <AppShell>
      <PageHeading
        eyebrow="IL TUO SPAZIO DI BUSINESS CREATIVO"
        title={
          <>
            Bentornata, <em>Patricia.</em>
          </>
        }
        description="Le grandi idee crescono un piccolo passo alla volta. Partiamo da qui."
        action={
          <div className="date-pill">
            <CalendarDays className="size-3.5" />
            Lunedì, 23 novembre
          </div>
        }
      />
      <section className="welcome-banner">
        <img
          src={photos.workspace}
          alt="Una scrivania creativa con un invito botanico, un quaderno e una tazza di caffè"
        />
        <div className="banner-copy">
          <div className="eyebrow flex items-center gap-2">
            <Sparkles className="size-3.5" />
            IL TUO PERSONAL AI COACH
          </div>
          <h2>
            Un’idea, un dubbio,
            <br />
            un nuovo inizio.
          </h2>
          <p>Il tuo prossimo passo diventa più semplice quando non devi farlo da sola.</p>
          <Button asChild size="sm">
            <Link to="/coach">
              Parliamone insieme <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <div className="quick-grid">
        {[
          {
            to: "/academy",
            icon: GraduationCap,
            label: "Academy",
            sub: "Impara al tuo ritmo",
            tone: "",
          },
          {
            to: "/ricerca",
            icon: Search,
            label: "Ricerca & keyword",
            sub: "Trova nuove opportunità",
            tone: "sage",
          },
          {
            to: "/listing",
            icon: Image,
            label: "Listing Studio",
            sub: "Dai valore ai tuoi prodotti",
            tone: "rose",
          },
          {
            to: "/piano",
            icon: CalendarDays,
            label: "Il tuo piano",
            sub: "Un passo alla volta",
            tone: "",
          },
        ].map((n) => (
          <Link key={n.to} to={n.to} className="quick-link">
            <div className={`icon-box ${n.tone}`}>
              <n.icon />
            </div>
            <div className="min-w-0">
              <strong>{n.label}</strong>
              <small>{n.sub}</small>
            </div>
            <ArrowUpRight />
          </Link>
        ))}
      </div>
      <div className="dashboard-grid">
        <Panel>
          <PanelTitle
            icon={Target}
            title="Piccoli passi, grandi risultati"
            action={<Chip>Questa settimana</Chip>}
          />
          <div className="goal-summary">
            <span>{count} di 3 obiettivi completati</span>
            <strong className="text-primary">{Math.round((count / 3) * 100)}%</strong>
          </div>
          <Progress value={Math.round((count / tasks.length) * 100)} />
          {[
            "Dare forma a una nuova idea di prodotto",
            "Migliorare 2 inserzioni Etsy",
            "Pianificare i contenuti della prossima settimana",
          ].map((task, i) => (
            <label key={task} className={`task-row ${tasks[i] ? "done" : ""}`}>
              <input
                type="checkbox"
                checked={tasks[i] ?? false}
                onChange={() => setTasks(tasks.map((t, j) => (i === j ? !t : t)))}
              />
              <span>{task}</span>
              {i === 2 && <Chip>Da fare</Chip>}
            </label>
          ))}
          <div className="panel-foot">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3 text-gold" />
              Stai costruendo qualcosa di bello.
            </span>
            <Link to="/piano" className="subtle-link">
              Il mio piano <ArrowRight />
            </Link>
          </div>
        </Panel>
        <Panel>
          <PanelTitle
            icon={GraduationCap}
            title="Il tuo percorso, il tuo ritmo"
            action={<Chip>38%</Chip>}
          />
          <div className="course-preview">
            <img src={photos.workspace} alt="Laptop e caffè per la tua lezione Etsy" />
            <div>
              <Chip>BEGINNER ACADEMY</Chip>
              <h3>
                Il tuo negozio Etsy
                <br />
                inizia da qui.
              </h3>
              <p>3 di 8 lezioni completate</p>
              <Progress value={38} />
            </div>
          </div>
          <Stages />
          <Button asChild variant="warm" className="w-full" size="sm">
            <Link to="/academy">
              <Play className="size-3" />
              Riprendi da dove eri <ArrowRight className="ml-auto" />
            </Link>
          </Button>
        </Panel>
        <Panel>
          <PanelTitle
            icon={Lightbulb}
            title="La tua ultima scintilla"
            action={
              <Link to="/idee" className="subtle-link">
                Tutte le idee <ArrowRight />
              </Link>
            }
          />
          <Link to="/idee" className="idea-preview">
            <img
              src={photos.stationery}
              alt="Una collezione di inviti botanici e un planner verde salvia"
            />
            <div>
              <Chip sage>
                <Leaf />
                PRODOTTI DIGITALI
              </Chip>
              <h3>
                Una storia d’amore,
                <br />
                in verde salvia.
              </h3>
              <p>Una collezione wedding dal fascino naturale.</p>
              <span className="subtle-link mt-3">
                <Bookmark className="size-3" />
                Salvata nella tua libreria <ChevronRight />
              </span>
            </div>
          </Link>
        </Panel>
        <section className="quote-panel">
          <FlowLines />
          <div className="eyebrow flex items-center gap-2">
            <Leaf className="size-3.5" />
            UN PENSIERO PER TE
          </div>
          <p className="quote">
            “Non serve avere tutto chiaro.
            <br />
            Serve solo il coraggio di
            <br />
            <em>fare il prossimo passo.</em>”
          </p>
          <small>Il tuo business cresce insieme a te.</small>
          <Link to="/diario" className="subtle-link mt-4 text-primary">
            Prenditi un momento per scrivere <ArrowRight />
          </Link>
        </section>
      </div>
    </AppShell>
  );
}

const lessons = [
  {
    title: "Trova la tua nicchia",
    desc: "Trasforma ciò che ami in un’idea che ti somiglia.",
    label: "DISCOVER",
    duration: "12 min",
    done: true,
    image: "stationery",
  },
  {
    title: "Dai vita al tuo negozio Etsy",
    desc: "Nome, identità e primi passi: costruisci le tue basi.",
    label: "LAUNCH",
    duration: "18 min",
    done: false,
    image: "workspace",
  },
  {
    title: "Crea la tua prima inserzione",
    desc: "Racconta il tuo prodotto con immagini e parole giuste.",
    label: "LAUNCH",
    duration: "15 min",
    done: false,
    image: "stationery",
  },
] as const;
export function AcademyPage() {
  const [stage, setStage] = useState("Il mio percorso");
  const [lesson, setLesson] = useState<string | null>(null);
  return (
    <AppShell>
      <PageHeading
        eyebrow="BEGINNER ACADEMY"
        title={
          <>
            Il tuo viaggio su Etsy <em>inizia qui.</em>
          </>
        }
        description="Scopri, lancia e cresci. Un percorso pensato per te, un passo alla volta."
      />
      <section className="academy-intro">
        <div>
          <Chip>
            <GraduationCap className="size-3" />
            IL TUO PERCORSO
          </Chip>
          <h2>
            La tua creatività merita
            <br />
            un posto nel mondo.
          </h2>
          <p className="text-muted-foreground text-xs mb-5">
            Hai già completato 3 lezioni. Continuiamo insieme?
          </p>
          <Button onClick={() => setLesson("Dai vita al tuo negozio Etsy")}>
            <Play />
            Riprendi il percorso <ArrowRight />
          </Button>
        </div>
        <div className="progress-ring">
          <strong>3 di 8</strong>
          <small>lezioni completate</small>
        </div>
      </section>
      <div className="tabs-row">
        {["Il mio percorso", "Discover", "Launch", "Grow"].map((t) => (
          <Button key={t} variant={stage === t ? "default" : "ghost"} onClick={() => setStage(t)}>
            {t}
          </Button>
        ))}
      </div>
      <Stages active={1} />
      <h2 className="section-title">
        {stage === "Grow" ? "Pronta a fare un passo in più?" : "Le tue prossime scoperte"}
      </h2>
      <div className="card-grid">
        {lessons
          .filter(
            (l) =>
              stage === "Il mio percorso" || stage === "Grow" || l.label === stage.toUpperCase(),
          )
          .map((l, i) => (
            <Panel key={l.title} className="image-card">
              <img src={photos[l.image]} alt={l.title} />
              <div className="image-card-content">
                <div className="flex justify-between">
                  <Chip sage={l.done}>{l.label}</Chip>
                  <span className="sample">
                    <Clock />
                    {l.duration}
                  </span>
                </div>
                <h3>{stage === "Grow" && i === 0 ? "Cresci con la SEO" : l.title}</h3>
                <p>{l.desc}</p>
                <Progress value={l.done ? 100 : 33} />
                <Button
                  className="w-full mt-4"
                  variant={l.done ? "warm" : "outline"}
                  onClick={() => setLesson(l.title)}
                >
                  {l.done ? <Check /> : <Play />}
                  {l.done ? "Rivedi la lezione" : "Inizia la lezione"}
                  <ArrowRight className="ml-auto" />
                </Button>
              </div>
            </Panel>
          ))}
      </div>
      <div className="coach-note">
        <Sparkles />
        <div>
          <strong>Non c’è un ritmo giusto. C’è il tuo.</strong>Ogni lezione è un piccolo
          investimento nel tuo futuro creativo.
        </div>
      </div>
      {lesson && (
        <PreviewModal title={lesson} onClose={() => setLesson(null)}>
          <img src={photos.workspace} alt="Copertina della lezione" />
          <p>
            Anteprima della lezione · Il contenuto didattico e il video saranno disponibili nell’app
            completa.
          </p>
          <Button onClick={() => setLesson(null)}>
            Torna al percorso <ArrowRight />
          </Button>
        </PreviewModal>
      )}
    </AppShell>
  );
}

const keywords = [
  { name: "digital planner", volume: "74.200", competition: "Media", score: 87 },
  { name: "planner template", volume: "33.100", competition: "Media", score: 82 },
  { name: "productivity planner", volume: "18.700", competition: "Bassa", score: 80 },
  { name: "adhd planner", volume: "12.900", competition: "Bassa", score: 79 },
];
export function ResearchPage() {
  const [tab, setTab] = useState("Ricerca keyword");
  const [query, setQuery] = useState("Digital planner");
  const [result, setResult] = useState("Digital planner");
  const [saved, setSaved] = useState<string[]>([]);
  const [compare, setCompare] = useState(false);
  const [second, setSecond] = useState("wedding planner");
  return (
    <AppShell>
      <PageHeading
        eyebrow="RICERCA PRODOTTI & KEYWORD"
        title={
          <>
            Le buone idee incontrano <em>le opportunità.</em>
          </>
        }
        description="Esplora prodotti e parole chiave per dare una direzione alla tua creatività."
        action={
          <Chip>
            <ShieldDemo />
            ANTEPRIMA DEMO
          </Chip>
        }
      />
      <div className="tabs-row">
        {["Idee di prodotto", "Ricerca keyword", `Salvate (${saved.length})`].map((t) => (
          <Button key={t} variant={tab === t ? "default" : "ghost"} onClick={() => setTab(t)}>
            {t.startsWith("Salvate") ? (
              <Bookmark />
            ) : t === "Ricerca keyword" ? (
              <TrendingUp />
            ) : (
              <Layers />
            )}
            {t}
          </Button>
        ))}
      </div>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) setResult(query.trim());
        }}
      >
        <div className="search-field">
          <Search />
          <input
            aria-label="Cerca una keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca una parola chiave o un’idea…"
          />
          {query && (
            <Button
              size="icon"
              variant="ghost"
              type="button"
              onClick={() => setQuery("")}
              aria-label="Cancella ricerca"
            >
              <X />
            </Button>
          )}
        </div>
        <Button type="submit">
          Esplora <ArrowRight />
        </Button>
      </form>
      {tab === "Idee di prodotto" ? (
        <>
          <h2 className="section-title">Ispirazioni da esplorare</h2>
          <IdeaCards onSave={(name) => setSaved([...saved, name])} />
          <Sample>Idee editoriali dimostrative · non sono opportunità di mercato verificate</Sample>
        </>
      ) : tab.startsWith("Salvate") ? (
        <Panel>
          <PanelTitle icon={Bookmark} title="Le tue ricerche salvate" />
          {saved.length ? (
            saved.map((k) => (
              <div key={k} className="setting-row">
                <strong>{k}</strong>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Rimuovi ${k}`}
                  onClick={() => setSaved(saved.filter((s) => s !== k))}
                >
                  <X />
                </Button>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <Bookmark />
              <h3>Un posto per le tue scoperte.</h3>
              <p>Le keyword che scegli di salvare compariranno qui.</p>
              <Button onClick={() => setTab("Ricerca keyword")}>
                Esplora le keyword <ArrowRight />
              </Button>
            </div>
          )}
        </Panel>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="text-xs">
              Risultati per <strong>“{result}”</strong>
            </span>
            <Sample>Statistiche illustrative · fonte: demo iCoach</Sample>
          </div>
          <div className="research-grid">
            <Panel>
              <PanelTitle
                title="Opportunity score"
                action={
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Punteggio illustrativo, non calcolato da dati Etsy"
                    aria-label="Informazioni sul punteggio"
                  >
                    <Lightbulb />
                  </Button>
                }
              />
              <div className="opportunity-grid">
                <div>
                  <Gauge />
                  <div className="text-center">
                    <Chip sage>
                      <Sparkles />
                      Alta opportunità · demo
                    </Chip>
                  </div>
                </div>
                <div className="border-l border-border pl-5">
                  <div className="metric">
                    <small>Volume di ricerca · esempio</small>
                    <strong>74.200</strong>
                    <span className="sample">Stima illustrativa / mese</span>
                  </div>
                  <div className="metric">
                    <small>Competizione · esempio</small>
                    <strong>Media</strong>
                  </div>
                  <div className="metric mb-0">
                    <small>Trend · esempio su 6 mesi</small>
                    <strong className="text-sage">
                      +42% <ArrowUpRight className="inline size-5" />
                    </strong>
                  </div>
                </div>
              </div>
            </Panel>
            <Panel>
              <PanelTitle
                icon={TrendingUp}
                title="Una tendenza da esplorare"
                action={
                  <select
                    aria-label="Periodo del trend"
                    className="bg-muted text-muted-foreground rounded-md p-2 text-[10px]"
                  >
                    <option>Ultimi 6 mesi</option>
                    <option>Ultimi 12 mesi</option>
                  </select>
                }
              />
              <TrendChart />
              <Sample>Andamento dimostrativo, non basato su ricerche Etsy reali</Sample>
            </Panel>
          </div>
          <Panel>
            <PanelTitle
              icon={Target}
              title="Parole chiave correlate"
              action={
                <Button variant="outline" size="sm" onClick={() => setCompare(!compare)}>
                  <Layers />
                  Confronta
                </Button>
              }
            />
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Ricerche / mese · demo</th>
                    <th>Competizione · demo</th>
                    <th>Opportunità · demo</th>
                    <th>Salva</th>
                  </tr>
                </thead>
                <tbody>
                  {keywords.map((k) => (
                    <tr key={k.name}>
                      <td className="font-semibold">{k.name}</td>
                      <td>{k.volume}</td>
                      <td>{k.competition}</td>
                      <td>
                        <Chip sage>{k.score}</Chip>
                      </td>
                      <td>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Salva ${k.name}`}
                          onClick={() =>
                            setSaved(
                              saved.includes(k.name)
                                ? saved.filter((s) => s !== k.name)
                                : [...saved, k.name],
                            )
                          }
                        >
                          <Bookmark
                            className={saved.includes(k.name) ? "fill-primary text-primary" : ""}
                          />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="panel-foot">
              <Sample>Fonte: demo iCoach · valori non verificati</Sample>
              <span>4 keyword correlate</span>
            </div>
          </Panel>
          <div className="coach-note">
            <Sparkles />
            <div>
              <strong>Il punto di vista del tuo Coach</strong>In questo esempio, “digital planner”
              combina interesse e una competizione moderata. Una nicchia più specifica potrebbe
              aiutarti a distinguerti.
              <br />
              <span className="sample mt-1">
                Spiegazione dimostrativa · nessuna analisi AI o di mercato eseguita
              </span>
            </div>
          </div>
        </>
      )}
      {compare && (
        <PreviewModal title="Confronta due keyword" onClose={() => setCompare(false)}>
          <div className="form-group">
            <label className="form-label" htmlFor="comparison">
              Seconda keyword
            </label>
            <Input id="comparison" value={second} onChange={(e) => setSecond(e.target.value)} />
          </div>
          <div className="stats-grid grid-cols-2">
            <Panel>
              <strong>{result}</strong>
              <Gauge />
              <Chip>Demo</Chip>
            </Panel>
            <Panel>
              <strong>{second}</strong>
              <Gauge score={82} />
              <Chip>Demo</Chip>
            </Panel>
          </div>
          <Sample>Il confronto mostra valori fissi dimostrativi, non calcolati.</Sample>
        </PreviewModal>
      )}
    </AppShell>
  );
}
function ShieldDemo() {
  return <Sparkles className="size-3" />;
}

export function ListingPage() {
  const [title, setTitle] = useState("Wedding Planner Botanico | Organizer Matrimonio Digitale");
  const [description, setDescription] = useState(
    "Ogni grande storia d’amore inizia con un piccolo sogno. Organizza il tuo giorno speciale con un planner botanico elegante, personalizzabile e semplice da usare.",
  );
  const [image, setImage] = useState(photos.stationery);
  const [tab, setTab] = useState("Ottimizza un’inserzione");
  const [toast, setToast] = useState("");
  const [preview, setPreview] = useState(false);
  function notify(text: string) {
    setToast(text);
    setTimeout(() => setToast(""), 3000);
  }
  return (
    <AppShell>
      <PageHeading
        eyebrow="LISTING & SEO STUDIO"
        title={
          <>
            Dai alle tue creazioni <em>le parole giuste.</em>
          </>
        }
        description="Uno spazio per raccontare, valorizzare e perfezionare il tuo prossimo prodotto."
        action={
          <Button variant="outline" onClick={() => setPreview(true)}>
            <Image />
            Anteprima
          </Button>
        }
      />
      <div className="tabs-row">
        {["Ottimizza un’inserzione", "Parti da un’idea", "Migliora una bozza"].map((t) => (
          <Button key={t} variant={tab === t ? "default" : "ghost"} onClick={() => setTab(t)}>
            {t}
          </Button>
        ))}
      </div>
      <div className="two-col">
        <Panel>
          <PanelTitle
            icon={Image}
            title={tab === "Parti da un’idea" ? "La tua idea di prodotto" : "Il tuo prodotto"}
          />
          {tab === "Parti da un’idea" ? (
            <Textarea
              className="mb-5"
              rows={5}
              placeholder="Racconta la tua idea: cosa vorresti creare e per chi?"
              aria-label="La tua idea"
            />
          ) : (
            <img className="studio-image" src={image} alt="Anteprima del planner botanico" />
          )}
          <label className="upload-zone">
            <Upload />
            <strong className="text-xs">Aggiungi il tuo mockup</strong>
            <p>JPG, PNG o WebP</p>
            <Input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="max-w-[240px] text-xs"
              aria-label="Carica immagine prodotto"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImage(URL.createObjectURL(file));
              }}
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label" htmlFor="type">
                Tipo di prodotto
              </label>
              <select id="type" className="w-full border border-input rounded-md p-2.5">
                <option>Planner digitale</option>
                <option>Invito wedding</option>
                <option>Template Canva</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="style">
                Stile / tema
              </label>
              <select id="style" className="w-full border border-input rounded-md p-2.5">
                <option>Botanico · verde salvia</option>
                <option>Minimal · naturale</option>
                <option>Romantico · floreale</option>
              </select>
            </div>
          </div>
          <Sample>Caricamento locale per anteprima · nessun file inviato</Sample>
        </Panel>
        <div className="space-y-5">
          <Panel>
            <PanelTitle
              icon={Sparkles}
              title="La tua bozza, con cura"
              action={<Chip>ANTEPRIMA</Chip>}
            />
            <div className="form-group">
              <label className="form-label" htmlFor="listing-title">
                Titolo dell’inserzione
              </label>
              <Textarea
                id="listing-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                rows={2}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="listing-description">
                Descrizione
              </label>
              <Textarea
                id="listing-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
              />
            </div>
            <label className="form-label">Tag suggeriti · esempio</label>
            <div className="tag-list">
              {[
                "wedding planner",
                "planner botanico",
                "digital planner",
                "matrimonio",
                "verde salvia",
              ].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <Button
              variant="warm"
              className="w-full"
              onClick={() =>
                notify(
                  "Anteprima del suggerimento: aggiungi formato, misure e contenuto del planner.",
                )
              }
            >
              <Sparkles />
              Esplora i suggerimenti
            </Button>
          </Panel>
          <div className="coach-note mt-0">
            <Leaf />
            <div>
              <strong>Un racconto autentico fa la differenza.</strong>Metti in luce ciò che rende
              speciale il tuo prodotto: i dettagli, la cura, la tua visione.
              <Sample>Testo e suggerimenti editoriali di esempio · AI non collegata</Sample>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => notify("Bozza aggiornata nell’anteprima · non salvata online")}
            >
              <Bookmark />
              Salva bozza
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                navigator.clipboard
                  ?.writeText(`${title}\n\n${description}`)
                  .then(() => notify("Titolo e descrizione copiati"))
                  .catch(() => notify("Copia non disponibile in questo browser"));
              }}
            >
              <Copy />
              Copia il testo
            </Button>
          </div>
        </div>
      </div>
      {toast && <Toast text={toast} />}{" "}
      {preview && (
        <PreviewModal title="Anteprima della tua inserzione" onClose={() => setPreview(false)}>
          <img src={image} alt={title} />
          <h3 className="font-display text-2xl mt-4">{title}</h3>
          <p>{description}</p>
          <Sample>Anteprima locale · nessuna pubblicazione su Etsy</Sample>
        </PreviewModal>
      )}
    </AppShell>
  );
}

export function CoachPage() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  function send() {
    if (input.trim()) {
      setMessage(input.trim());
      setInput("");
    }
  }
  return (
    <AppShell>
      <PageHeading
        eyebrow="IL TUO PERSONAL AI COACH"
        title={
          <>
            C’è spazio per <em>ogni tua domanda.</em>
          </>
        }
        description="Un compagno di viaggio per i tuoi dubbi, le tue idee e i tuoi prossimi passi."
        action={
          <Button variant="outline" onClick={() => setMessage("")}>
            <Plus />
            Nuova conversazione
          </Button>
        }
      />
      <Panel>
        <div className="chat-space">
          {message ? (
            <>
              <div className="chat-bubble">{message}</div>
              <div className="coach-note w-full mb-8">
                <Sparkles />
                <div>
                  <strong>La tua conversazione inizia qui.</strong>Questa è un’anteprima visiva.
                  Nell’app completa il tuo Coach ti aiuterà a esplorare questa domanda: nessuna
                  risposta AI è stata generata.
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="coach-avatar">
                <Sparkles className="size-7" />
              </div>
              <Chip>IL TUO SPAZIO, SENZA GIUDIZIO</Chip>
              <h2 className="mt-4">Ciao Patricia, da dove iniziamo?</h2>
              <p>
                Un’idea ancora da mettere a fuoco, un negozio da far crescere o semplicemente un po’
                di chiarezza.
              </p>
              <div className="prompt-grid">
                {[
                  "Vorrei trovare la mia nicchia su Etsy",
                  "Come posso migliorare la mia inserzione?",
                  "Ho un’idea per un prodotto digitale",
                  "Aiutami a organizzare questa settimana",
                ].map((p, i) => (
                  <Button key={p} variant="outline" onClick={() => setInput(p)}>
                    {i % 2 ? <Target className="text-gold" /> : <Lightbulb className="text-gold" />}
                    {p}
                    <ArrowUpRight className="ml-auto" />
                  </Button>
                ))}
              </div>
            </>
          )}
          <form
            className="chat-composer"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Scrivi al tuo Coach"
              placeholder="Raccontami cosa hai in mente…"
            />
            <Button type="submit" size="icon" aria-label="Invia messaggio" disabled={!input.trim()}>
              <Send />
            </Button>
          </form>
          <span className="sample mt-3">Anteprima della conversazione · AI non collegata</span>
        </div>
      </Panel>
    </AppShell>
  );
}

function IdeaCards({ onSave }: { onSave: (name: string) => void }) {
  return (
    <div className="card-grid">
      {[
        {
          title: "Una storia d’amore, in verde salvia.",
          tag: "WEDDING COLLECTION",
          image: photos.stationery,
          desc: "Inviti, planner e piccoli dettagli per un matrimonio naturale.",
        },
        {
          title: "Piccoli rituali, grandi progetti.",
          tag: "PLANNER & JOURNAL",
          image: photos.workspace,
          desc: "Un planner digitale per dare spazio alle idee di ogni giorno.",
        },
        {
          title: "La bellezza delle cose semplici.",
          tag: "TEMPLATE CREATIVI",
          image: photos.stationery,
          desc: "Una collezione di template botanici, essenziali e personali.",
        },
      ].map((idea) => (
        <Panel key={idea.title} className="image-card">
          <img src={idea.image} alt={idea.title} />
          <div className="image-card-content">
            <Chip sage>{idea.tag}</Chip>
            <h3>{idea.title}</h3>
            <p>{idea.desc}</p>
            <Button variant="outline" className="w-full" onClick={() => onSave(idea.title)}>
              <Bookmark />
              Salva nella mia libreria
            </Button>
          </div>
        </Panel>
      ))}
    </div>
  );
}
export function IdeasPage() {
  const [tab, setTab] = useState("Esplora le idee");
  const [saved, setSaved] = useState<string[]>([]);
  const [toast, setToast] = useState("");
  const [collection, setCollection] = useState(false);
  const [name, setName] = useState("La mia prossima collezione");
  return (
    <AppShell>
      <PageHeading
        eyebrow="DIGITAL PRODUCT LAB"
        title={
          <>
            Le tue idee meritano <em>spazio.</em>
          </>
        }
        description="Un laboratorio creativo dove raccogliere ispirazioni e dare forma a qualcosa di tuo."
        action={
          <Button onClick={() => setCollection(true)}>
            <Plus />
            Nuova collezione
          </Button>
        }
      />
      <div className="tabs-row">
        {["Esplora le idee", "La mia libreria", "Le mie collezioni"].map((t) => (
          <Button key={t} variant={tab === t ? "default" : "ghost"} onClick={() => setTab(t)}>
            {t}
          </Button>
        ))}
      </div>
      {tab === "Esplora le idee" ? (
        <>
          <section className="quote-panel mb-6">
            <FlowLines />
            <div className="eyebrow">IL TUO PROSSIMO PROGETTO</div>
            <p className="quote max-w-none">
              Lasciati ispirare. Poi rendilo <em>davvero tuo.</em>
            </p>
            <small>Idee editoriali selezionate per la tua creatività · non dati di mercato</small>
          </section>
          <IdeaCards
            onSave={(n) => {
              if (!saved.includes(n)) setSaved([...saved, n]);
              setToast("Idea aggiunta alla libreria dell’anteprima");
              setTimeout(() => setToast(""), 2500);
            }}
          />
        </>
      ) : (
        <Panel>
          <PanelTitle title={tab} />
          {saved.length ? (
            saved.map((n) => (
              <div key={n} className="entry-item">
                <Chip sage>
                  <Bookmark />
                  Salvata
                </Chip>
                <h3 className="font-display text-2xl mt-2">{n}</h3>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <Layers />
              <h3>Ogni collezione parte da un’idea.</h3>
              <p>Raccogli qui le ispirazioni che senti più vicine alla tua visione.</p>
              <Button onClick={() => setTab("Esplora le idee")}>
                Trova la tua prima scintilla <ArrowRight />
              </Button>
            </div>
          )}
        </Panel>
      )}
      {toast && <Toast text={toast} />}{" "}
      {collection && (
        <PreviewModal title="Una nuova collezione" onClose={() => setCollection(false)}>
          <label htmlFor="collection-name" className="form-label">
            Nome della collezione
          </label>
          <Input
            id="collection-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5"
          />
          <Button
            onClick={() => {
              setSaved([...saved, name]);
              setTab("Le mie collezioni");
              setCollection(false);
            }}
          >
            Crea nell’anteprima <ArrowRight />
          </Button>
          <p>Le collezioni sono dimostrative e non vengono salvate online.</p>
        </PreviewModal>
      )}
    </AppShell>
  );
}

export function PlanPage() {
  const [tasks, setTasks] = useState([true, true, false, false]);
  const [newTask, setNewTask] = useState("");
  const [extra, setExtra] = useState<string[]>([]);
  return (
    <AppShell>
      <PageHeading
        eyebrow="PIANO DI CRESCITA SETTIMANALE"
        title={
          <>
            Un passo alla volta. <em>Verso il tuo sogno.</em>
          </>
        }
        description="Non una lista infinita. Solo le cose che contano, questa settimana."
        action={<Chip>23 – 29 novembre · esempio</Chip>}
      />
      <div className="two-col">
        <Panel>
          <PanelTitle
            icon={ListChecks}
            title="I tuoi obiettivi della settimana"
            action={
              <Chip sage>
                {tasks.filter(Boolean).length} / {tasks.length}
              </Chip>
            }
          />
          <Progress value={Math.round((tasks.filter(Boolean).length / tasks.length) * 100)} />
          {[
            "Dare forma a una nuova idea di prodotto",
            "Migliorare 2 inserzioni Etsy",
            "Pianificare i contenuti della settimana",
            "Completare una lezione Academy",
            ...extra,
          ].map((t, i) => (
            <label key={t} className={`task-row ${tasks[i] ? "done" : ""}`}>
              <input
                type="checkbox"
                checked={tasks[i] ?? false}
                onChange={() => setTasks(tasks.map((v, j) => (j === i ? !v : v)))}
              />
              <span>{t}</span>
            </label>
          ))}
          <form
            className="flex gap-2 mt-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (newTask.trim()) {
                setExtra([...extra, newTask]);
                setTasks([...tasks, false]);
                setNewTask("");
              }
            }}
          >
            <Input
              aria-label="Un nuovo piccolo obiettivo"
              placeholder="Un nuovo piccolo obiettivo…"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button size="icon" aria-label="Aggiungi obiettivo">
              <Plus />
            </Button>
          </form>
          <Sample>Attività locali dell’anteprima · non salvate online</Sample>
        </Panel>
        <div className="space-y-5">
          <section className="quote-panel">
            <FlowLines />
            <div className="eyebrow">IL FOCUS DELLA SETTIMANA</div>
            <p className="quote">
              Meno perfezione.
              <br />
              Più <em>piccoli progressi.</em>
            </p>
            <small>Dedica 20 minuti al giorno al tuo negozio.</small>
          </section>
          <Panel>
            <PanelTitle icon={CalendarDays} title="Il tuo ritmo" />
            {[
              "Lunedì · Crea e sperimenta",
              "Martedì · Cura le tue inserzioni",
              "Mercoledì · Impara qualcosa di nuovo",
              "Giovedì · Racconta il tuo prodotto",
              "Venerdì · Guarda quanto sei cresciuta",
            ].map((d, i) => (
              <div className="setting-row" key={d}>
                <span className="text-xs">{d}</span>
                <Chip>{i === 0 ? "Oggi" : "20 min"}</Chip>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}

export function JournalPage() {
  const [title, setTitle] = useState("Le idee hanno bisogno di tempo.");
  const [text, setText] = useState(
    "Oggi mi prendo un momento per guardare il percorso fatto.\n\nCosa mi ha fatto sentire orgogliosa questa settimana?\nQuale idea continua a tornarmi in mente?\nQual è il piccolo passo che posso fare domani?",
  );
  const [toast, setToast] = useState(false);
  return (
    <AppShell>
      <PageHeading
        eyebrow="BUSINESS JOURNAL"
        title={
          <>
            Anche i pensieri fanno <em>parte del viaggio.</em>
          </>
        }
        description="Un angolo tranquillo per riflettere, mettere a fuoco e ritrovare la tua direzione."
        action={
          <Button
            variant="outline"
            onClick={() => {
              setTitle("Una nuova pagina");
              setText("");
            }}
          >
            <Plus />
            Nuova pagina
          </Button>
        }
      />
      <div className="two-col">
        <Panel>
          <div className="flex justify-between mb-6">
            <Chip>23 NOVEMBRE · DEMO</Chip>
            <Leaf className="size-4 text-gold" />
          </div>
          <Input
            aria-label="Titolo della pagina"
            className="font-display text-2xl border-0 shadow-none px-0 mb-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            aria-label="Il tuo diario"
            className="journal-paper px-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="panel-foot">
            <Sample>Scrittura locale · non salvata online</Sample>
            <Button
              size="sm"
              onClick={() => {
                setToast(true);
                setTimeout(() => setToast(false), 2500);
              }}
            >
              <Bookmark />
              Conserva il pensiero
            </Button>
          </div>
        </Panel>
        <div className="space-y-5">
          <section className="quote-panel">
            <FlowLines />
            <div className="eyebrow">UNO SPUNTO PER TE</div>
            <p className="quote">
              “Cosa farei oggi se mi fidassi un po’ di più <em>della mia creatività?</em>”
            </p>
          </section>
          <Panel>
            <PanelTitle title="Le pagine del tuo viaggio" />
            {[
              "Il mio primo piccolo traguardo",
              "Un’idea da non dimenticare",
              "Perché ho iniziato",
            ].map((t, i) => (
              <Button
                key={t}
                variant="ghost"
                className="w-full justify-start h-auto py-4 border-b border-border whitespace-normal"
                onClick={() => {
                  setTitle(t);
                  setText("Uno spazio per ritrovare e scrivere i tuoi pensieri.");
                }}
              >
                <BookIcon />
                <span className="text-left">
                  <strong className="font-display text-lg font-normal">{t}</strong>
                  <small className="block text-muted-foreground text-[10px] mt-1">
                    {20 - i * 2} novembre · pagina di esempio
                  </small>
                </span>
              </Button>
            ))}
          </Panel>
        </div>
      </div>
      {toast && <Toast text="Pensiero aggiornato nell’anteprima · non salvato online" />}
    </AppShell>
  );
}
function BookIcon() {
  return <Bookmark className="text-gold" />;
}

export function CalendarPage() {
  const [month, setMonth] = useState(10);
  const months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  const offset = (new Date(2026, month, 1).getDay() + 6) % 7;
  const days = new Date(2026, month + 1, 0).getDate();
  return (
    <AppShell>
      <PageHeading
        eyebrow="CALENDARIO DELLE OPPORTUNITÀ"
        title={
          <>
            La stagione giusta per <em>la tua prossima idea.</em>
          </>
        }
        description="Guarda avanti, raccogli ispirazioni e prepara le tue collezioni con calma."
      />
      <div className="two-col">
        <Panel>
          <PanelTitle
            icon={CalendarDays}
            title={`${months[month]} 2026`}
            action={
              <div className="flex">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Mese precedente"
                  onClick={() => setMonth((month + 11) % 12)}
                >
                  <ChevronRight className="rotate-180" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Mese successivo"
                  onClick={() => setMonth((month + 1) % 12)}
                >
                  <ChevronRight />
                </Button>
              </div>
            }
          />
          <div className="calendar-grid">
            {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
              <div key={d} className="calendar-day head">
                {d}
              </div>
            ))}
            {Array.from({ length: offset }, (_, i) => (
              <div className="calendar-day" key={`empty${i}`} />
            ))}
            {Array.from({ length: days }, (_, i) => (
              <div key={i} className={`calendar-day ${i === 22 && month === 10 ? "today" : ""}`}>
                <span>{i + 1}</span>
                {month === 10 && i === 26 && <span className="event">Black Friday</span>}
                {month === 11 && i === 24 && <span className="event">Natale</span>}
                {month === 1 && i === 13 && <span className="event">San Valentino</span>}
              </div>
            ))}
          </div>
        </Panel>
        <div className="space-y-5">
          <section className="quote-panel">
            <FlowLines />
            <div className="eyebrow">ISPIRAZIONE STAGIONALE</div>
            <p className="quote">
              Le feste arrivano.
              <br />
              La tua creatività <em>le anticipa.</em>
            </p>
            <small>Calendario editoriale dimostrativo, non previsioni di mercato.</small>
          </section>
          <Panel>
            <PanelTitle icon={Lightbulb} title="Uno sguardo avanti" />
            {[
              {
                name: "Natale",
                date: "25 dicembre",
                idea: "Biglietti, gift planner e piccoli pensieri digitali.",
              },
              {
                name: "Un nuovo inizio",
                date: "Gennaio 2027",
                idea: "Planner, vision board e journal per nuovi progetti.",
              },
              {
                name: "San Valentino",
                date: "14 febbraio",
                idea: "Inviti, biglietti e dettagli che raccontano l’amore.",
              },
            ].map((e) => (
              <div className="entry-item" key={e.name}>
                <Chip>{e.date}</Chip>
                <h3 className="font-display text-xl mt-2">{e.name}</h3>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{e.idea}</p>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
