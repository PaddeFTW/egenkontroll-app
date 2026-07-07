import {
  type AnswerValue,
  type AnswersByQuestionId,
  type InspectionQuestion,
  type ProjectStart,
  type Template,
  answerLabels,
  answerStatusLabels,
} from "./sprint-one-data";
import {
  type InspectionProgress,
  type InspectionSummary,
  shouldShowFollowUp,
} from "./sprint-one-logic";

type AppHomeProps = {
  templates: Template[];
  onCreateInspection: () => void;
};

export function AppHome({ templates, onCreateInspection }: AppHomeProps) {
  return (
    <section className="home-view" aria-labelledby="home-title">
      <div className="hero-card">
        <div className="eyebrow">Egenkontroll App</div>
        <div className="hero-content">
          <div>
            <h1 id="home-title">Svara på enkla frågor. Appen bygger egenkontrollen åt dig.</h1>
            <p>
              En snabb, guidad start för egenkontroller i byggprojekt. Inga konton, inga
              dokumentmallar och ingen tung administration i Sprint 1.
            </p>
          </div>
          <button className="primary-button" type="button" onClick={onCreateInspection}>
            Skapa ny egenkontroll
          </button>
        </div>
      </div>

      <div className="home-grid" aria-label="Sprint 1 översikt">
        <article className="metric-card">
          <strong>3</strong>
          <span>mallar i Sprint 1</span>
        </article>
        <article className="metric-card">
          <strong>5</strong>
          <span>mockfrågor i kontrollen</span>
        </article>
        <article className="metric-card metric-card-accent">
          <strong>0</strong>
          <span>backendkopplingar</span>
        </article>
      </div>

      <section className="panel split-panel" aria-labelledby="next-step-title">
        <div>
          <span className="section-kicker">Nästa steg</span>
          <h2 id="next-step-title">Välj en mall och starta en enkel kontroll</h2>
          <p>
            Flödet visar en fråga i taget, med stora svarsknappar, hjälptext och en lokal
            sammanfattning när du är klar.
          </p>
        </div>
        <div className="template-mini-list" aria-label="Tillgängliga mallar">
          {templates.map((template) => (
            <span key={template.id}>{template.name}</span>
          ))}
        </div>
      </section>
    </section>
  );
}

type TemplatePickerProps = {
  templates: Template[];
  selectedTemplate?: Template;
  onSelectTemplate: (template: Template) => void;
  onContinue: () => void;
  onBack: () => void;
};

export function TemplatePicker({
  templates,
  selectedTemplate,
  onSelectTemplate,
  onContinue,
  onBack,
}: TemplatePickerProps) {
  return (
    <section className="panel stage-panel" aria-labelledby="template-title">
      <StepHeader
        eyebrow="Välj mall"
        title="Vilken egenkontroll passar arbetet?"
        description="Mallarna är mockdata i Sprint 1. Själva kontrollflödet använder fem gemensamma frågor."
      />

      <div className="template-grid">
        {templates.map((template) => {
          const isSelected = selectedTemplate?.id === template.id;

          return (
            <button
              className={`template-card ${isSelected ? "is-selected" : ""}`}
              key={template.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelectTemplate(template)}
            >
              <span className="soft-badge">{template.category}</span>
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <small>
                {template.questionCount} frågor · {template.estimatedTime}
              </small>
            </button>
          );
        })}
      </div>

      <div className="action-row">
        <button className="ghost-button" type="button" onClick={onBack}>
          Tillbaka
        </button>
        <button
          className="primary-button"
          type="button"
          disabled={!selectedTemplate}
          onClick={onContinue}
        >
          Fortsätt
        </button>
      </div>
    </section>
  );
}

type StartInspectionCardProps = {
  template: Template;
  project: ProjectStart;
  onChangeProject: (project: ProjectStart) => void;
  onStart: () => void;
  onBack: () => void;
};

export function StartInspectionCard({
  template,
  project,
  onChangeProject,
  onStart,
  onBack,
}: StartInspectionCardProps) {
  const canStart = project.inspectionName.trim().length > 0;

  function updateField(field: keyof ProjectStart, value: string) {
    onChangeProject({ ...project, [field]: value });
  }

  return (
    <section className="panel stage-panel" aria-labelledby="start-title">
      <StepHeader
        eyebrow="Projektstart"
        title="Ge kontrollen ett namn"
        description="Håll starten lätt. Bara namnet krävs i Sprint 1, resten hjälper sammanfattningen."
      />

      <div className="start-layout">
        <div className="start-form" aria-label="Projektuppgifter">
          <label>
            Namn på egenkontrollen
            <input
              value={project.inspectionName}
              onChange={(event) => updateField("inspectionName", event.target.value)}
              placeholder={`${template.name} - projektnamn`}
            />
          </label>
          <label>
            Projekt
            <input
              value={project.projectName}
              onChange={(event) => updateField("projectName", event.target.value)}
              placeholder="Exempel: Renovering hus B"
            />
          </label>
          <label>
            Beställare eller byggherre
            <input
              value={project.clientName}
              onChange={(event) => updateField("clientName", event.target.value)}
              placeholder="Exempel: Brf Eken"
            />
          </label>
          <label>
            Entreprenör
            <input
              value={project.contractorName}
              onChange={(event) => updateField("contractorName", event.target.value)}
              placeholder="Exempel: Svenssons Bygg AB"
            />
          </label>
          <label>
            Ritning eller annan referens
            <input
              value={project.reference}
              onChange={(event) => updateField("reference", event.target.value)}
              placeholder="Exempel: A-40.1 eller arbetsbeskrivning"
            />
          </label>
        </div>

        <aside className="start-card">
          <span className="soft-badge">{template.category}</span>
          <h3>{template.name}</h3>
          <p>{template.description}</p>
          <div className="next-step">
            <span>Nästa steg</span>
            <strong>Svara på 5 korta frågor</strong>
          </div>
        </aside>
      </div>

      <div className="action-row">
        <button className="ghost-button" type="button" onClick={onBack}>
          Byt mall
        </button>
        <button className="primary-button" type="button" disabled={!canStart} onClick={onStart}>
          Starta kontroll
        </button>
      </div>
    </section>
  );
}

type GuidedInspectionShellProps = {
  template: Template;
  project: ProjectStart;
  questions: InspectionQuestion[];
  activeQuestionIndex: number;
  answers: AnswersByQuestionId;
  progress: InspectionProgress;
  onAnswer: (questionId: string, answer: AnswerValue) => void;
  onFollowUpChange: (questionId: string, value: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;
};

export function GuidedInspectionShell({
  template,
  project,
  questions,
  activeQuestionIndex,
  answers,
  progress,
  onAnswer,
  onFollowUpChange,
  onPrevious,
  onNext,
  onComplete,
}: GuidedInspectionShellProps) {
  const question = questions[activeQuestionIndex];
  const response = answers[question.id];
  const showFollowUp = shouldShowFollowUp(question, response?.answer);
  const hasRequiredFollowUp = !showFollowUp || Boolean(response?.followUpAnswer?.trim());
  const canContinue = Boolean(response?.answer) && hasRequiredFollowUp;
  const isLastQuestion = activeQuestionIndex === questions.length - 1;

  return (
    <section className="inspection-shell" aria-labelledby="inspection-title">
      <ProgressHeader
        title={project.inspectionName}
        templateName={template.name}
        activeQuestionIndex={activeQuestionIndex}
        progress={progress}
      />

      <div className="inspection-grid">
        <QuestionCard
          question={question}
          questionNumber={activeQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={response?.answer}
          followUpAnswer={response?.followUpAnswer ?? ""}
          onAnswer={(answer) => onAnswer(question.id, answer)}
          onFollowUpChange={(value) => onFollowUpChange(question.id, value)}
        />

        <HelpPanel question={question} />
      </div>

      <div className="action-row sticky-actions">
        <button
          className="ghost-button"
          type="button"
          disabled={activeQuestionIndex === 0}
          onClick={onPrevious}
        >
          Föregående
        </button>
        <button
          className="primary-button"
          type="button"
          disabled={!canContinue}
          onClick={isLastQuestion ? onComplete : onNext}
        >
          {isLastQuestion ? "Visa klar-skärm" : "Nästa fråga"}
        </button>
      </div>
    </section>
  );
}

type ProgressHeaderProps = {
  title: string;
  templateName: string;
  activeQuestionIndex: number;
  progress: InspectionProgress;
};

export function ProgressHeader({
  title,
  templateName,
  activeQuestionIndex,
  progress,
}: ProgressHeaderProps) {
  return (
    <header className="progress-header">
      <div>
        <span className="section-kicker">{templateName}</span>
        <h1 id="inspection-title">{title}</h1>
        <p>
          Fråga {activeQuestionIndex + 1} av {progress.totalCount}. {progress.remainingCount} kvar.
        </p>
      </div>
      <div className="progress-card" aria-label={progress.label}>
        <span>{progress.label}</span>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progress.percent}%` }} />
        </div>
      </div>
    </header>
  );
}

type QuestionCardProps = {
  question: InspectionQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: AnswerValue;
  followUpAnswer: string;
  onAnswer: (answer: AnswerValue) => void;
  onFollowUpChange: (value: string) => void;
};

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  followUpAnswer,
  onAnswer,
  onFollowUpChange,
}: QuestionCardProps) {
  const showFollowUp = shouldShowFollowUp(question, selectedAnswer);

  return (
    <article className="question-card">
      <span className="question-count">
        Fråga {questionNumber} av {totalQuestions} · {question.section}
      </span>
      <h2>{question.question}</h2>
      <p>{question.helpText}</p>

      <SmartSuggestionBar suggestion={question.suggestion} onUse={() => onAnswer(question.defaultAnswer)} />

      <AnswerOptionGroup selectedAnswer={selectedAnswer} onAnswer={onAnswer} />

      {showFollowUp && question.followUp ? (
        <label className="follow-up">
          {question.followUp.question}
          <textarea
            value={followUpAnswer}
            onChange={(event) => onFollowUpChange(event.target.value)}
            placeholder={question.followUp.placeholder}
            rows={4}
          />
          <span>Skriv kort så avvikelsen går att följa upp.</span>
        </label>
      ) : null}
    </article>
  );
}

type AnswerOptionGroupProps = {
  selectedAnswer?: AnswerValue;
  onAnswer: (answer: AnswerValue) => void;
};

export function AnswerOptionGroup({ selectedAnswer, onAnswer }: AnswerOptionGroupProps) {
  const options: AnswerValue[] = ["approved", "rejected", "not_applicable"];

  return (
    <div className="answer-grid" aria-label="Svarsalternativ">
      {options.map((option) => (
        <button
          className={`answer-option answer-${option} ${selectedAnswer === option ? "is-selected" : ""}`}
          key={option}
          type="button"
          aria-pressed={selectedAnswer === option}
          onClick={() => onAnswer(option)}
        >
          <strong>{answerLabels[option]}</strong>
          <span>{answerStatusLabels[option]}</span>
        </button>
      ))}
    </div>
  );
}

type HelpPanelProps = {
  question: InspectionQuestion;
};

export function HelpPanel({ question }: HelpPanelProps) {
  return (
    <aside className="help-panel" aria-labelledby="help-title">
      <details open>
        <summary id="help-title">Visa hjälp</summary>
        <div>
          <h3>Varför frågar vi?</h3>
          <p>{question.whyItMatters}</p>
          <h3>Så kan du tänka</h3>
          <p>{question.helpText}</p>
        </div>
      </details>
    </aside>
  );
}

type SmartSuggestionBarProps = {
  suggestion: string;
  onUse: () => void;
};

export function SmartSuggestionBar({ suggestion, onUse }: SmartSuggestionBarProps) {
  return (
    <div className="suggestion-bar">
      <span>{suggestion}</span>
      <button type="button" onClick={onUse}>
        Använd standardsvar
      </button>
    </div>
  );
}

type CompletionScreenProps = {
  template: Template;
  project: ProjectStart;
  summary: InspectionSummary;
  onRestart: () => void;
};

export function CompletionScreen({ template, project, summary, onRestart }: CompletionScreenProps) {
  return (
    <section className="completion-view" aria-labelledby="complete-title">
      <div className="completion-card">
        <span className="complete-mark" aria-hidden="true">
          OK
        </span>
        <span className="section-kicker">{template.name}</span>
        <h1 id="complete-title">Kontrollen är klar</h1>
        <p>
          Du har svarat på alla fem frågorna. Sammanfattningen finns lokalt på skärmen och
          exporteras inte i Sprint 1.
        </p>
        <div className="completion-stats" aria-label="Resultat">
          <span>
            <strong>{summary.approvedCount}</strong> godkända
          </span>
          <span>
            <strong>{summary.rejectedCount}</strong> avvikelser
          </span>
          <span>
            <strong>{summary.notApplicableCount}</strong> ej aktuella
          </span>
        </div>
      </div>

      <InspectionSummary project={project} summary={summary} />

      <div className="action-row">
        <button className="primary-button" type="button" onClick={onRestart}>
          Starta ny kontroll
        </button>
      </div>
    </section>
  );
}

type InspectionSummaryProps = {
  project: ProjectStart;
  summary: InspectionSummary;
};

export function InspectionSummary({ project, summary }: InspectionSummaryProps) {
  return (
    <section className="panel summary-panel" aria-labelledby="summary-title">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Lokal sammanfattning</span>
          <h2 id="summary-title">{project.inspectionName}</h2>
        </div>
        <span className="soft-badge">
          {summary.attentionCount > 0
            ? `${summary.attentionCount} behöver koll`
            : "Redo att gå vidare"}
        </span>
      </div>

      <dl className="project-summary">
        <div>
          <dt>Projekt</dt>
          <dd>{project.projectName || "Ej angivet"}</dd>
        </div>
        <div>
          <dt>Beställare/byggherre</dt>
          <dd>{project.clientName || "Ej angivet"}</dd>
        </div>
        <div>
          <dt>Entreprenör</dt>
          <dd>{project.contractorName || "Ej angivet"}</dd>
        </div>
        <div>
          <dt>Referens</dt>
          <dd>{project.reference || "Ej angivet"}</dd>
        </div>
      </dl>

      <div className="summary-list">
        {summary.items.map((item) => (
          <article className="summary-item" key={item.questionId}>
            <div>
              <span>{item.section}</span>
              <h3>{item.question}</h3>
              {item.followUpAnswer ? <p>{item.followUpAnswer}</p> : null}
            </div>
            <strong className={`summary-status ${item.answer ? `answer-${item.answer}` : ""}`}>
              {item.status}
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}

type StepHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function StepHeader({ eyebrow, title, description }: StepHeaderProps) {
  return (
    <div className="step-header">
      <span className="section-kicker">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
