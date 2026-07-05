type OngoingInspection = {
  title: string;
  template: string;
  project: string;
  status: "Utkast" | "Pågående";
  progress: string;
  nextStep: string;
  updatedAt: string;
};

type CompletedInspection = {
  title: string;
  template: string;
  completedAt: string;
  signedBy: string;
};

type TemplatePreview = {
  name: string;
  description: string;
  points: number | "Valfritt";
};

const ongoingInspections: OngoingInspection[] = [
  {
    title: "Badrum - Brf Eken",
    template: "Badrum",
    project: "Stambyte, hus B",
    status: "Pågående",
    progress: "8 av 11 punkter behandlade",
    nextStep: "Fortsätt kontrollera 3 punkter",
    updatedAt: "Uppdaterad idag",
  },
  {
    title: "Tak - Villa Granit",
    template: "Tak",
    project: "Takbyte",
    status: "Utkast",
    progress: "Projektuppgifter saknas",
    nextStep: "Fyll i projektinformation",
    updatedAt: "Uppdaterad igår",
  },
];

const completedInspections: CompletedInspection[] = [
  {
    title: "Kök - Radhus Lunden",
    template: "Kök",
    completedAt: "Slutförd 2026-07-02",
    signedBy: "Utfört av Sara Nilsson",
  },
  {
    title: "Daglig säkerhet - Etapp 1",
    template: "Daglig säkerhet",
    completedAt: "Slutförd 2026-06-28",
    signedBy: "Utfört av Johan Berg",
  },
];

const templatePreviews: TemplatePreview[] = [
  {
    name: "Bygg - generell",
    description: "En bred mall för vanliga kontroller i byggprojekt.",
    points: 17,
  },
  {
    name: "Badrum",
    description: "För våtrum, tätskikt, installationer och egenkontroll före avslut.",
    points: 11,
  },
  {
    name: "Tom egenkontroll",
    description: "Börja från tom mall när arbetet inte passar en färdig kontroll.",
    points: "Valfritt",
  },
];

const statusClassNames: Record<OngoingInspection["status"], string> = {
  Pågående: "status-pagaende",
  Utkast: "status-utkast",
};

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero-card" aria-labelledby="product-title">
        <div className="eyebrow">Egenkontroll App</div>
        <div className="hero-content">
          <div>
            <h1 id="product-title">Håll ordning på egenkontrollerna från start till klart.</h1>
            <p>
              Skapa, följ upp och slutför egenkontroller i byggprojekt utan tunga system
              eller krångliga dokument.
            </p>
          </div>
          <button className="primary-button" type="button">
            Skapa ny egenkontroll
          </button>
        </div>
      </section>

      <section className="overview-grid" aria-label="Kort lägesbild">
        <article className="summary-card">
          <span className="summary-number">{ongoingInspections.length}</span>
          <span className="summary-label">pågående egenkontroller</span>
        </article>
        <article className="summary-card">
          <span className="summary-number">{completedInspections.length}</span>
          <span className="summary-label">slutförda egenkontroller</span>
        </article>
        <article className="summary-card summary-card-accent">
          <span className="summary-number">{templatePreviews.length}</span>
          <span className="summary-label">mallar att börja med</span>
        </article>
      </section>

      <div className="content-grid">
        <section className="panel panel-large" aria-labelledby="ongoing-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Fortsätt där du var</span>
              <h2 id="ongoing-title">Pågående egenkontroller</h2>
            </div>
            <span className="soft-badge">Mockdata</span>
          </div>

          <div className="inspection-list">
            {ongoingInspections.map((inspection) => (
              <article className="inspection-card" key={inspection.title}>
                <div className="inspection-card-header">
                  <div>
                    <h3>{inspection.title}</h3>
                    <p>
                      {inspection.template} · {inspection.project}
                    </p>
                  </div>
                  <span className={`status-badge ${statusClassNames[inspection.status]}`}>
                    {inspection.status}
                  </span>
                </div>
                <div className="inspection-meta">
                  <span>{inspection.progress}</span>
                  <span>{inspection.updatedAt}</span>
                </div>
                <div className="next-step">
                  <span>Nästa steg</span>
                  <strong>{inspection.nextStep}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="panel next-panel" aria-labelledby="next-title">
          <span className="section-kicker">Rekommenderat</span>
          <h2 id="next-title">Börja med rätt mall</h2>
          <p>
            Välj en färdig mall när arbetet passar. Använd tom egenkontroll när du
            behöver bygga upp kontrollen själv.
          </p>
          <button className="secondary-button" type="button">
            Visa mallbibliotek
          </button>
        </aside>
      </div>

      <section className="panel" aria-labelledby="completed-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Klart arbete</span>
            <h2 id="completed-title">Slutförda egenkontroller</h2>
          </div>
        </div>

        <div className="completed-grid">
          {completedInspections.map((inspection) => (
            <article className="compact-card" key={inspection.title}>
              <span className="soft-badge">Slutförd</span>
              <h3>{inspection.title}</h3>
              <p>{inspection.template}</p>
              <small>
                {inspection.completedAt} · {inspection.signedBy}
              </small>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" aria-labelledby="templates-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Startpunkter</span>
            <h2 id="templates-title">Mallbibliotek</h2>
          </div>
          <p>Diskret åtkomst till mallar utan att startsidan blir en tung dashboard.</p>
        </div>

        <div className="template-grid">
          {templatePreviews.map((template) => (
            <article className="template-card" key={template.name}>
              <div>
                <h3>{template.name}</h3>
                <p>{template.description}</p>
              </div>
              <span>{template.points} kontrollpunkter</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
