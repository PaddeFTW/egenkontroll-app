"use client";

import { useMemo, useState } from "react";

import {
  AppHome,
  CompletionScreen,
  GuidedInspectionShell,
  StartInspectionCard,
  TemplatePicker,
} from "./sprint-one-components";
import {
  type AnswerValue,
  type AnswersByQuestionId,
  type InspectionStep,
  type ProjectStart,
  type Template,
  emptyProjectStart,
  sprintOneQuestions,
  templates,
} from "./sprint-one-data";
import { calculateProgress, createSummary } from "./sprint-one-logic";
import { downloadEgenkontroll } from "./sprint-one-export";

const STORAGE_KEY = "egenkontroll-app-v1";

export default function Home() {
  const [step, setStep] = useState<InspectionStep>("home");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();
  const [project, setProject] = useState<ProjectStart>(emptyProjectStart);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersByQuestionId>({});

  const progress = useMemo(
    () => calculateProgress(sprintOneQuestions, answers),
    [answers],
  );
  const summary = useMemo(() => createSummary(sprintOneQuestions, answers), [answers]);

  function handleSelectTemplate(template: Template) {
    setSelectedTemplate(template);
    setProject({
      ...emptyProjectStart,
      inspectionName: `${template.name} - ny egenkontroll`,
    });
  }

  function handleAnswer(questionId: string, answer: AnswerValue) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: {
        ...currentAnswers[questionId],
        answer,
        followUpAnswer:
          answer === "rejected" ? currentAnswers[questionId]?.followUpAnswer ?? "" : "",
      },
    }));
  }

  function handleFollowUpChange(questionId: string, followUpAnswer: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: {
        ...currentAnswers[questionId],
        followUpAnswer,
      },
    }));
  }

  function persistCompleted() {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      existing.unshift({
        savedAt: new Date().toISOString(),
        templateId: selectedTemplate?.id,
        project,
        answers,
        summary,
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 25)));
    } catch {
      // ignore storage errors in Sprint 1
    }
  }

  function handleComplete() {
    persistCompleted();
    setStep("complete");
  }

  function resetFlow() {
    setStep("home");
    setSelectedTemplate(undefined);
    setProject(emptyProjectStart);
    setActiveQuestionIndex(0);
    setAnswers({});
  }

  return (
    <main className="app-shell">
      {step === "home" ? (
        <AppHome templates={templates} onCreateInspection={() => setStep("templates")} />
      ) : null}

      {step === "templates" ? (
        <TemplatePicker
          templates={templates}
          selectedTemplate={selectedTemplate}
          onSelectTemplate={handleSelectTemplate}
          onContinue={() => setStep("start")}
          onBack={() => setStep("home")}
        />
      ) : null}

      {step === "start" && selectedTemplate ? (
        <StartInspectionCard
          template={selectedTemplate}
          project={project}
          onChangeProject={setProject}
          onStart={() => setStep("inspection")}
          onBack={() => setStep("templates")}
        />
      ) : null}

      {step === "inspection" && selectedTemplate ? (
        <GuidedInspectionShell
          template={selectedTemplate}
          project={project}
          questions={sprintOneQuestions}
          activeQuestionIndex={activeQuestionIndex}
          answers={answers}
          progress={progress}
          onAnswer={handleAnswer}
          onFollowUpChange={handleFollowUpChange}
          onPrevious={() => setActiveQuestionIndex((currentIndex) => Math.max(currentIndex - 1, 0))}
          onNext={() =>
            setActiveQuestionIndex((currentIndex) =>
              Math.min(currentIndex + 1, sprintOneQuestions.length - 1),
            )
          }
          onComplete={handleComplete}
        />
      ) : null}

      {step === "complete" && selectedTemplate ? (
        <>
          <CompletionScreen
            template={selectedTemplate}
            project={project}
            summary={summary}
            onRestart={resetFlow}
          />
          <div className="action-row" style={{ marginTop: 16 }}>
            <button
              className="ghost-button"
              type="button"
              onClick={() => downloadEgenkontroll(selectedTemplate, project, summary, "pdf")}
            >
              Exportera PDF
            </button>
            <button
              className="ghost-button"
              type="button"
              onClick={() => downloadEgenkontroll(selectedTemplate, project, summary, "word")}
            >
              Exportera Word
            </button>
            <button
              className="ghost-button"
              type="button"
              onClick={() => downloadEgenkontroll(selectedTemplate, project, summary, "txt")}
            >
              Ladda ner text
            </button>
          </div>
        </>
      ) : null}
    </main>
  );
}
