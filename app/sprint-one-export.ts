import type { ProjectStart, Template } from "./sprint-one-data";
import type { InspectionSummary } from "./sprint-one-logic";

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', """)
    .replaceAll("'", "&#39;");
}

export function buildEgenkontrollExport(
  template: Template,
  project: ProjectStart,
  summary: InspectionSummary,
) {
  const title = `Egenkontroll – ${project.inspectionName || template.name}`;
  const baseFileName = `egenkontroll-${(project.inspectionName || template.name)
    .replaceAll(" ", "-")
    .toLowerCase()}`;

  const lines = [
    title,
    "",
    `Mall: ${template.name}`,
    `Projekt: ${project.projectName || "-"}`,
    `Beställare: ${project.clientName || "-"}`,
    `Entreprenör: ${project.contractorName || "-"}`,
    `Referens: ${project.reference || "-"}`,
    "",
    `Godkända: ${summary.approvedCount}`,
    `Avvikelser: ${summary.rejectedCount}`,
    `Ej aktuella: ${summary.notApplicableCount}`,
    "",
    "Kontrollpunkter",
    ...summary.items.map((item) => {
      const follow = item.followUpAnswer ? ` | Not: ${item.followUpAnswer}` : "";
      return `- ${item.question}: ${item.status}${follow}`;
    }),
  ];

  const text = lines.join("\n");
  const html = `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(title)}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; color: #18181b; line-height: 1.5; }
    h1 { font-size: 24px; margin-bottom: 24px; }
    pre { white-space: pre-wrap; font-family: inherit; }
  </style>
</head>
<body>
  <h1>${escapeHtml(title)}</h1>
  <pre>${escapeHtml(text)}</pre>
</body>
</html>`;

  return { title, baseFileName, text, html };
}

export function downloadEgenkontroll(
  template: Template,
  project: ProjectStart,
  summary: InspectionSummary,
  format: "pdf" | "word" | "txt",
) {
  const doc = buildEgenkontrollExport(template, project, summary);
  if (format === "txt") {
    const blob = new Blob([doc.text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.baseFileName}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  if (format === "word") {
    const blob = new Blob([doc.html], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.baseFileName}.doc`;
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (!w) return;
  w.document.write(doc.html);
  w.document.close();
  w.focus();
  w.print();
}
