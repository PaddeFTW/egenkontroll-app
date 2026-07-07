export type TemplateId = "bygg-generell" | "badrum" | "daglig-sakerhet";

export type AnswerValue = "approved" | "rejected" | "not_applicable";

export type InspectionStep = "home" | "templates" | "start" | "inspection" | "complete";

export type Template = {
  id: TemplateId;
  name: string;
  shortName: string;
  description: string;
  category: string;
  estimatedTime: string;
  questionCount: number;
};

export type FollowUpQuestion = {
  triggerAnswer: AnswerValue;
  question: string;
  placeholder: string;
};

export type InspectionQuestion = {
  id: string;
  section: string;
  question: string;
  helpText: string;
  whyItMatters: string;
  defaultAnswer: AnswerValue;
  suggestion: string;
  followUp?: FollowUpQuestion;
};

export type ProjectStart = {
  inspectionName: string;
  projectName: string;
  clientName: string;
  contractorName: string;
  reference: string;
};

export type QuestionAnswer = {
  answer?: AnswerValue;
  followUpAnswer?: string;
};

export type AnswersByQuestionId = Record<string, QuestionAnswer>;

export const templates: Template[] = [
  {
    id: "bygg-generell",
    name: "Bygg generell",
    shortName: "Bygg",
    description: "En enkel start för vanliga kontroller på byggarbetsplatsen.",
    category: "Allmänt bygg",
    estimatedTime: "ca 4 min",
    questionCount: 5,
  },
  {
    id: "badrum",
    name: "Badrum",
    shortName: "Badrum",
    description: "För kontroll av underlag, tätskikt och arbeten i våtrum.",
    category: "Våtrum",
    estimatedTime: "ca 4 min",
    questionCount: 5,
  },
  {
    id: "daglig-sakerhet",
    name: "Daglig säkerhet",
    shortName: "Säkerhet",
    description: "Snabb genomgång innan arbetet fortsätter under dagen.",
    category: "Arbetsmiljö",
    estimatedTime: "ca 3 min",
    questionCount: 5,
  },
];

export const sprintOneQuestions: InspectionQuestion[] = [
  {
    id: "underlag-rent",
    section: "Startkontroll",
    question: "Är underlaget rent och klart?",
    helpText: "Titta efter damm, löst material, fukt och sådant som kan störa nästa moment.",
    whyItMatters: "Ett rent underlag gör att arbetet fäster bättre och minskar risken för omjobb.",
    defaultAnswer: "approved",
    suggestion: "Oftast: Ja, om ytan är städad och redo.",
    followUp: {
      triggerAnswer: "rejected",
      question: "Vad behöver åtgärdas?",
      placeholder: "Exempel: Underlaget är dammigt vid dörröppningen.",
    },
  },
  {
    id: "ritning-stammer",
    section: "Kontroll mot handling",
    question: "Stämmer arbetet med ritningen?",
    helpText: "Jämför mot den ritning, beskrivning eller instruktion som gäller för arbetet.",
    whyItMatters: "Små avvikelser är lättare att rätta när de fångas direkt.",
    defaultAnswer: "approved",
    suggestion: "Välj Ja när utförandet följer aktuell handling.",
  },
  {
    id: "material-pa-plats",
    section: "Material",
    question: "Finns rätt material på plats?",
    helpText: "Kontrollera att materialet är rätt typ, helt och tillgängligt innan momentet fortsätter.",
    whyItMatters: "Rätt material sparar tid och gör kontrollen enklare att följa upp.",
    defaultAnswer: "approved",
    suggestion: "Välj Ej aktuellt om frågan inte passar dagens moment.",
  },
  {
    id: "risker-borttagna",
    section: "Säkerhet",
    question: "Är tydliga risker borttagna?",
    helpText: "Se över fallrisk, snubbelrisk, avspärrningar och sådant som påverkar arbetslaget direkt.",
    whyItMatters: "Kontrollen ska hjälpa arbetet fortsätta säkert, inte bara dokumentera i efterhand.",
    defaultAnswer: "approved",
    suggestion: "Välj Nej om något behöver fixas innan arbetet fortsätter.",
  },
  {
    id: "klart-for-nasta",
    section: "Avslut",
    question: "Är momentet klart för nästa steg?",
    helpText: "Svara utifrån om nästa person kan ta vid utan att behöva gissa eller rätta till något först.",
    whyItMatters: "Ett tydligt avslut gör överlämningen enklare och sammanfattningen mer användbar.",
    defaultAnswer: "approved",
    suggestion: "Oftast: Ja, när ytan, utförandet och nästa steg är tydliga.",
  },
];

export const emptyProjectStart: ProjectStart = {
  inspectionName: "",
  projectName: "",
  clientName: "",
  contractorName: "",
  reference: "",
};

export const answerLabels: Record<AnswerValue, string> = {
  approved: "Ja",
  rejected: "Nej",
  not_applicable: "Ej aktuellt",
};

export const answerStatusLabels: Record<AnswerValue, string> = {
  approved: "Godkänd",
  rejected: "Ej godkänd",
  not_applicable: "Ej kontrollerad",
};
