import {
  type AnswerValue,
  type AnswersByQuestionId,
  type InspectionQuestion,
  answerStatusLabels,
} from "./sprint-one-data";

export type InspectionProgress = {
  answeredCount: number;
  totalCount: number;
  remainingCount: number;
  percent: number;
  isComplete: boolean;
  label: string;
};

export type InspectionSummaryItem = {
  questionId: string;
  question: string;
  section: string;
  status: string;
  answer?: AnswerValue;
  followUpAnswer?: string;
  needsAttention: boolean;
};

export type InspectionSummary = {
  approvedCount: number;
  rejectedCount: number;
  notApplicableCount: number;
  unansweredCount: number;
  attentionCount: number;
  items: InspectionSummaryItem[];
};

export function calculateProgress(
  questions: InspectionQuestion[],
  answers: AnswersByQuestionId,
): InspectionProgress {
  const answeredCount = questions.filter((question) => Boolean(answers[question.id]?.answer)).length;
  const totalCount = questions.length;
  const remainingCount = Math.max(totalCount - answeredCount, 0);
  const percent = totalCount === 0 ? 0 : Math.round((answeredCount / totalCount) * 100);

  return {
    answeredCount,
    totalCount,
    remainingCount,
    percent,
    isComplete: answeredCount === totalCount,
    label:
      remainingCount === 0
        ? "Alla frågor är besvarade"
        : `${answeredCount} av ${totalCount} frågor besvarade`,
  };
}

export function shouldShowFollowUp(
  question: InspectionQuestion,
  answer?: AnswerValue,
): boolean {
  return Boolean(question.followUp && answer === question.followUp.triggerAnswer);
}

export function createSummary(
  questions: InspectionQuestion[],
  answers: AnswersByQuestionId,
): InspectionSummary {
  const items = questions.map((question) => {
    const response = answers[question.id];
    const answer = response?.answer;
    const needsFollowUp = shouldShowFollowUp(question, answer);
    const hasFollowUpAnswer = Boolean(response?.followUpAnswer?.trim());

    return {
      questionId: question.id,
      question: question.question,
      section: question.section,
      status: answer ? answerStatusLabels[answer] : "Ej bedömd",
      answer,
      followUpAnswer: response?.followUpAnswer,
      needsAttention: !answer || (needsFollowUp && !hasFollowUpAnswer) || answer === "rejected",
    };
  });

  return {
    approvedCount: items.filter((item) => item.answer === "approved").length,
    rejectedCount: items.filter((item) => item.answer === "rejected").length,
    notApplicableCount: items.filter((item) => item.answer === "not_applicable").length,
    unansweredCount: items.filter((item) => !item.answer).length,
    attentionCount: items.filter((item) => item.needsAttention).length,
    items,
  };
}
