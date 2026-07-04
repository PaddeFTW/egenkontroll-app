# Project Status

## Syfte

Detta dokument ska läsas i början av varje arbetssession.

Det ger en snabb och gemensam bild av:

- projektets aktuella status
- vilken fas projektet befinner sig i
- vad som är färdigt
- vad som pågår
- vad som blockerar nästa steg
- vilka beslut som redan gäller

## Projektstatus

**Projekt:** Egenkontroll App  
**Produkttyp:** Fristående kommersiell webbapplikation  
**Aktuell fas:** Dokumentationsgrund och kunskapsstruktur  
**Kodstatus:** Ingen implementation ska göras i denna fas  
**Databasstatus:** Ingen databas ska skapas i denna fas  
**Paketstatus:** Inga paket ska installeras i denna fas

## Aktuell fas

Projektet etablerar sin dokumentationsgrund.

Målet är att skapa en tydlig och professionell källa till sanning innan implementation planeras eller påbörjas.

## Färdigt

- `README.md` finns.
- `docs/APP_BLUEPRINT.md` finns och beskriver produktens grundkrav.
- `docs/PRODUCT_STRUCTURE.md` finns och beskriver appens produktstruktur, startsida och kontrollcenter-känsla för v1.0.
- Projektregler finns i `.cursor/rules/project-rules.mdc`.
- Appen är avgränsad som fristående produkt.
- Onboarding App v1.0 är beslutad som referens för design, struktur, arbetsprocess, dokumentation och arkitektur.

## Pågående

- Etablering av dokumentationsstruktur.
- Skapande av styrdokument och dokumentmallar.
- Förberedelse för systematisk kunskapsutvinning från originalmaterial.

## Blockerare

- Originalmaterialet behöver vara tydligt placerat eller länkat i `docs/source-material/`.
- Kunskap från originaldokumenten är ännu inte strukturerad i `KNOWLEDGE_BASE.md`.
- Domänmodell, terminologi, språkguide och UX-riktlinjer är ännu mallar och inte färdigt innehåll.

## Nästa steg

1. Placera eller dokumentera källmaterial i `docs/source-material/`.
2. Analysera originalmaterial utan att ändra det.
3. Fyll `KNOWLEDGE_BASE.md` med verifierad kunskap från källmaterialet.
4. Fyll `DOMAIN_MODEL.md` med centrala objekt och arbetsflöden.
5. Fyll `TERMINOLOGY.md` och `LANGUAGE_GUIDE.md` med byggbranschens vardagsspråk.
6. Granska om `APP_BLUEPRINT.md` behöver justeras efter kunskapsanalys.
7. Skapa därefter en separat implementationsplan.

## Referensprojekt

### Onboarding App v1.0

Används som referens för:

- designkvalitet
- struktur
- arbetsprocess
- dokumentationsnivå
- arkitektoniskt arbetssätt

Referensen ska inspirera arbetssättet och produktkänslan, men Egenkontroll App ska vara en fristående produkt.

## Viktiga beslut

- Appen gäller endast digital egenkontroll.
- Appen ska vara fristående och kommersiell.
- Word-original är källmaterial, inte implementation.
- Vi digitaliserar kunskap, inte Word-layout.
- Appen ska fungera som en erfaren arbetsledare.
- Språket ska vara byggbranschens vardagsspråk.
- Konsultspråk, myndighetsspråk och onödig ISO-jargong ska undvikas.
- Ingen kod, databas, paketinstallation eller React-komponent ska skapas i dokumentationsfasen.
- Commit görs endast efter uttryckligt godkännande.

## Dokument som ska läsas vid sessionsstart

1. `docs/PROJECT_STATUS.md`
2. `docs/APP_BLUEPRINT.md`
3. `README.md`
4. Relevant dokument i `docs/` beroende på uppgift

