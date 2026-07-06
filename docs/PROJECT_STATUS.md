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
**Aktuell fas:** Sprint 1-förberedelse klar för kodstart efter godkännande  
**Kodstatus:** Ingen implementation gjord. Sprint 1 får starta först efter uttryckligt godkännande.  
**Databasstatus:** Ingen databas ska skapas i denna fas  
**Paketstatus:** Inga paket ska installeras i denna fas

## Aktuell fas

Projektet har gått från dokumentationsgrund till sista planeringssteg inför implementation.

Målet är att Sprint 1 ska vara en liten vertical slice som bevisar kärnupplevelsen utan backend, databas, Supabase, AI, export, PDF, Word, delning eller autentisering.

## Färdigt

- `README.md` finns.
- `docs/APP_BLUEPRINT.md` finns och beskriver produktens grundkrav.
- `docs/PRODUCT_STRUCTURE.md` finns och beskriver appens produktstruktur, startsida och kontrollcenter-känsla för v1.0.
- `docs/PRODUCT_EXPERIENCE.md` finns och beskriver produktpersonlighet, känslomål, tempo, mikrointeraktioner och upplevelseprinciper.
- Projektregler finns i `.cursor/rules/project-rules.mdc`.
- Appen är avgränsad som fristående produkt.
- Onboarding App v1.0 är beslutad som referens för design, struktur, arbetsprocess, dokumentation och arkitektur.
- Masterlistan är beslutad som projektets frågebank, inte bara en lista.
- `docs/IMPLEMENTATION_PLAN_V1.md` finns som styrande plan inför Sprint 1.

## Pågående

- Väntar på godkännande att starta Sprint 1-implementation.
- Ingen kod, databas, backend eller paketinstallation har gjorts i denna planeringsfas.

## Blockerare

- Den separata masterlistan med 123 kontrollpunkter finns inte som verifierbar originalfil i `docs/source-material/`.
- Full konvertering från 123 kontrollpunkter till komplett frågebank återstår.
- Produktionsbeslut om lagring, autentisering och molnåtkomst återstår och ska inte lösas i Sprint 1.

## Nästa steg

1. Granska och godkänn `docs/IMPLEMENTATION_PLAN_V1.md`.
2. Starta Sprint 1 med endast frontend, lokal state och 5 mockfrågor.
3. Bygg startsida, mallväljare, projektstart, frågeflöde, progress, hjälptext, standardsvar, villkorad följdfråga, klar-skärm och lokal sammanfattning.
4. Kör relevant QA för Sprint 1.
5. Först efter Sprint 1: besluta Sprint 2-innehåll och när full frågebank ska byggas.

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
- Sprint 1 ska vara backendfri vertical slice.
- Masterlistan ska omformas till frågebank.
- Commit görs endast efter uttryckligt godkännande.

## Dokument som ska läsas vid sessionsstart

1. `docs/PROJECT_STATUS.md`
2. `docs/APP_BLUEPRINT.md`
3. `README.md`
4. Relevant dokument i `docs/` beroende på uppgift, till exempel `docs/PRODUCT_EXPERIENCE.md` vid UX- och upplevelsebeslut

