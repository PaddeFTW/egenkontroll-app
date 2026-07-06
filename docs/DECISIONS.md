# Decisions

## Syfte

Detta dokument loggar viktiga beslut för Egenkontroll App.

Syftet är att undvika att samma frågor öppnas om och om igen.

## Ansvar

Detta dokument ansvarar för:

- produktbeslut
- dokumentationsbeslut
- UX-beslut
- innehållsbeslut
- avgränsningar
- beslut som påverkar framtida implementation

## Hur dokumentet används

Använd detta dokument när:

- ett större beslut tas
- en tidigare fråga behöver kontrolleras
- scope riskerar att växa
- en ändring påverkar flera dokument
- en framtida utvecklare behöver förstå varför något är valt eller bortvalt

## Hur dokumentet ska uppdateras

Varje beslut ska dokumenteras med:

- datum
- beslut
- motivering
- konsekvens
- berörda dokument
- status

Beslut ska vara korta och tydliga.

## Relation till övriga dokument

- `APP_BLUEPRINT.md` innehåller godkända produktkrav.
- `DECISIONS.md` förklarar varför viktiga val gjorts.
- `PROJECT_STATUS.md` visar de viktigaste aktiva besluten vid sessionsstart.
- `CHANGELOG.md` visar när dokument ändrats.

## Beslutsmall

### YYYY-MM-DD – Beslutets namn

**Status:** Föreslaget / Godkänt / Ersatt  
**Beslut:** _Fylls senare._  
**Motivering:** _Fylls senare._  
**Konsekvens:** _Fylls senare._  
**Berörda dokument:** _Fylls senare._

## Beslut

### 2026-07-06 – Masterlistan är projektets frågebank

**Status:** Godkänt  
**Beslut:** Masterlistan ska inte behandlas som en enkel lista i appen. Den ska behandlas som projektets frågebank där varje kontrollpunkt kan omformas till en intelligent kontrollfråga.  
**Motivering:** Produkten ska digitalisera kunskap, inte Word-rader. Frågebanken gör det möjligt att ge hjälptext, standardvärden, villkorad logik och nästa steg utan att skapa ett tungt formulär.  
**Konsekvens:** `APP_BLUEPRINT.md`, `DOMAIN_MODEL.md`, `CONTENT_GUIDE.md`, `UX_GUIDELINES.md`, `TERMINOLOGY.md` och `DEFINITIONS.md` ska använda kontrollfråga/frågebank som digital huvudmodell. Full konvertering av 123 kontrollpunkter är ett separat innehållsarbete.  
**Berörda dokument:** `docs/APP_BLUEPRINT.md`, `docs/DOMAIN_MODEL.md`, `docs/CONTENT_GUIDE.md`, `docs/UX_GUIDELINES.md`, `docs/TERMINOLOGY.md`, `docs/DEFINITIONS.md`, `docs/IMPLEMENTATION_PLAN_V1.md`.

### 2026-07-06 – Sprint 1 är en backendfri vertical slice

**Status:** Godkänt  
**Beslut:** Sprint 1 ska endast innehålla startsida, mallväljare, projektstart, 5 mockfrågor, progress, hjälptext, standardsvar, villkorad följdfråga, klar-skärm och lokal sammanfattning.  
**Motivering:** Projektet behöver bevisa kärnupplevelsen innan backend, export, AI, databas eller full frågebank byggs.  
**Konsekvens:** Ingen Supabase, ingen backend, ingen autentisering, ingen databas, ingen AI, ingen export, ingen PDF, ingen Word-export, ingen delning och ingen implementation av hela appen i Sprint 1.  
**Berörda dokument:** `docs/APP_BLUEPRINT.md`, `docs/PROJECT_STATUS.md`, `docs/UX_GUIDELINES.md`, `docs/DOMAIN_MODEL.md`, `docs/IMPLEMENTATION_PLAN_V1.md`.

