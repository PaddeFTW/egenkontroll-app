# Implementation Plan V1

**Projekt:** Egenkontroll App  
**Datum:** 2026-07-06  
**Status:** Klar för godkännande inför Sprint 1  
**Scope:** Planering, ingen implementation

## 1. Projektets nuläge

Egenkontroll App har en stark dokumentationsgrund och ett tydligt produktmål: en fristående webbapp som digitaliserar kunskapen bakom egenkontroll, inte Word-dokumentets layout.

Projektet är nu redo att gå från dokumentation till en första begränsad implementation, men endast som Sprint 1 vertical slice. Sprint 1 ska inte försöka bygga hela appen eller hela v1.0.

Det viktigaste nya beslutet är att masterlistan inte längre ska förstås som en lista. Den är projektets frågebank. Varje kontrollpunkt ska på sikt kunna bli en intelligent kontrollfråga med hjälptext, standardvärde, villkorad logik, dokumentmappning och nästa steg.

Källmaterialet från KvalitetsDokument.se finns som Word- och PDF-original i `docs/source-material/`. Den separata masterlistan med 123 kontrollpunkter finns däremot inte som verifierbar originalfil i repositoryt. Därför får Sprint 1 använda 5 mockfrågor för att bevisa modellen, men full frågebank får inte påstås vara färdig.

## 2. Vad som är klart

- Produktens syfte, målgrupp och avgränsning är definierade.
- Grundfilosofin är tydlig: digitalisera kunskap, inte Word.
- Word-originalets arbetslogik är analyserad.
- Källmaterialets roller, statusar, signering och exportbehov är dokumenterade.
- Produktupplevelsen är definierad: lugn, snabb, modern, trygg och arbetsnära.
- Onboarding App v1.0 är vald som visuell referens.
- Beslut finns för enkel signering, kommentar vid negativt resultat och avgränsning från plattform, betalning och avancerad e-signering.
- Masterlistan är beslutad som frågebank.
- Sprint 1 är avgränsad till backendfri vertical slice.
- Domänmodell, terminologi, definitioner, språk, innehåll och UX har uppdaterats inför kodstart.

## 3. Vad som återstår

- Skapa faktisk frontend-implementation.
- Bygga en tydlig startsida och mallväljare.
- Skapa 5 välformade mockfrågor som visar frågebanksmodellen.
- Bevisa lokalt state, progress, hjälptext, standardsvar och villkorad följdfråga.
- Skapa klar-skärm och lokal sammanfattning.
- Senare konvertera masterlistans 123 kontrollpunkter till full frågebank.
- Senare besluta lagring, autentisering, Supabase och produktionsåtkomst.
- Senare bygga export, PDF, Word-export, AI, foto, delning och arkiv.
- Rensa eller markera äldre rotfil `EGENKONTROLL_APP_BLUEPRINT.md` som historiskt utkast för att undvika förväxling med `docs/APP_BLUEPRINT.md`.

## 4. Sprintplan

### Sprint 1

**Mål:** Bevisa kärnupplevelsen i en vertical slice utan backend.

Innehåll:

- startsida
- mallväljare
- projektstart
- 5 mockfrågor
- progress
- hjälptext
- standardsvar
- villkorad följdfråga
- klar-skärm
- lokal sammanfattning

Ingår inte:

- backend
- Supabase
- AI
- export
- PDF
- Word
- delning
- autentisering
- databas

Definition of Done för Sprint 1:

- Användaren kan öppna appen och förstå nästa steg.
- Användaren kan välja en mall.
- Användaren kan starta en enkel kontroll.
- Användaren kan besvara 5 mockfrågor.
- Progress uppdateras begripligt.
- Minst en fråga har hjälptext.
- Minst en fråga har standardsvar.
- Minst en fråga visar villkorad följdfråga.
- Klar-skärm visas när flödet är färdigt.
- Lokal sammanfattning visar svar och eventuella avvikelser.
- Inga backend- eller databaskopplingar finns.

### Sprint 2

**Mål:** Fördjupa frågemodellen och göra flödet mer produktlikt.

Fokus:

- fler frågetyper
- sektioner
- bättre frågekort
- editera projektinformation
- enklare anpassning av frågor före start
- bättre tomlägen och varningar
- lokal återupptagning kan utvärderas, men backend ska fortfarande kräva separat beslut

### Sprint 3

**Mål:** Bygga v1.0-kärnan runt verkligare innehåll och sammanställning.

Fokus:

- börja konvertera masterlistan till frågebank
- skapa fler mallar som data
- förbättra sammanställning
- signering som enkel bekräftelse
- intern QA mot Word-originalets informationskrav
- besluta om lagringsstrategi inför produktion

### Sprint 4

**Mål:** Förbereda v1.0-release.

Fokus:

- slutföra prioriterade mallar
- export/utskrift om beslutat
- produktionslagring om beslutat
- säkerhetsgranskning
- tillgänglighetsgranskning
- mobil QA
- releasekandidat

## 5. Prioriteringsordning

1. Kärnflöde och produktkänsla.
2. Frågekort, hjälp och progress.
3. Lokal sammanfattning.
4. Frågebanksmodell som data.
5. Fler mallar och verkligt innehåll.
6. Signering och granskning.
7. Export.
8. Lagring och autentisering.
9. AI, foto, bilagor, ljudstöd och delning.

## 6. Teknisk strategi

Bygg Sprint 1 som frontend-only med lokal state. Ingen databas, ingen Supabase och ingen backend ska introduceras.

Rekommenderad riktning när implementation godkänns:

- Next.js
- TypeScript strict
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide
- enkel modulstruktur
- mockdata i projektet
- frågebanksdata som tydlig TypeScript-modell

Affärslogik ska hållas separerad från presentationskomponenter. Frågemodell, progressberäkning och villkorad logik bör ligga i små rena funktioner så de senare kan flyttas från mockdata till verklig datakälla utan omskrivning av UI.

## 7. UX-strategi

Produkten ska kännas mer som Linear, Stripe, Typeform och Apple än som ett formulär.

Sprint 1 ska optimera för:

- snabb start
- minimalt skrivande
- ett tydligt beslut i taget
- synlig progress
- hjälp där användaren behöver den
- standardsvar när det sparar tid
- följdfråga först när den är relevant
- klar-skärm som känns tillfredsställande

Användarresan bör förenklas så här:

```text
Öppna app
-> Välj mall
-> Starta projekt
-> Svara på frågor
-> Se hjälp vid behov
-> Se klar-skärm
-> Se lokal sammanfattning
-> Starta ny kontroll
```

Foto, AI, export, arkiv och delning ska inte synas som aktiva funktioner i Sprint 1 eftersom de skapar förväntningar som inte uppfylls.

## 8. Komponentstrategi

Sprint 1 bör byggas med få, tydliga komponenter:

- startsidesyta
- mallkort
- projektstart
- frågekort
- svarsknappar
- hjälptext
- progressindikator
- följdfråga
- klar-skärm
- lokal sammanfattning

Komponenterna ska vara enkla och återanvändbara, men inte överabstraherade. För tidig design system-arkitektur ska undvikas.

## 9. State-strategi

Sprint 1 ska använda lokal state i frontend.

State behöver hantera:

- vald mall
- projektstartsinformation
- aktiv fråga
- svar per fråga
- följdfrågesvar
- progress
- klar-status
- lokal sammanfattning

State ska inte sparas till databas i Sprint 1. Om lokal lagring i browsern övervägs ska det vara ett uttryckligt beslut, inte smygas in som produktionslagring.

## 10. Risker

### Största produkt- och scope-risker

- Sprint 1 växer till hela v1.0.
- Frågebanken blir en tung metadata-tabell i UI.
- AI, foto, export eller Supabase byggs innan kärnflödet är bevisat.

### UX-risker

- Appen känns som ett formulär i stället för ett arbetsflöde.
- För många steg visas innan användaren får börja svara.
- Hjälptext blir för lång eller juridisk.

### Teknisk skuld

- Äldre rotfil `EGENKONTROLL_APP_BLUEPRINT.md` kan förväxlas med styrande blueprint.
- Masterlistan finns inte som verifierbar originalfil i `docs/source-material/`.
- Flera dokument har överlappning mellan v1.0 och Sprint 1; `IMPLEMENTATION_PLAN_V1.md` ska styra sprintordning.

### Sak- och KMA-risker

- Appen får inte påstå att den säkerställer PBL-uppfyllelse.
- Kontrollansvarig får inte blandas ihop med kontrollant.
- Enkel signering får inte presenteras som avancerad e-signering.

## 11. Definition of Done

### Sprint 1 DoD

- Endast planerat Sprint 1-scope är byggt.
- Ingen backend, Supabase, databas, autentisering, AI, export, PDF, Word eller delning finns.
- TypeScript används strikt.
- UI fungerar på mobil och desktop.
- Progress är begriplig utan att bara visa procent.
- Hjälptext och standardsvar minskar skrivande.
- Villkorad följdfråga fungerar.
- Lokal sammanfattning visar användarens svar.
- Linter och relevanta kvalitetskontroller är gröna.
- Ingen commit eller push görs utan godkännande.

### Version 1.0 DoD

- Användaren kan skapa egenkontroll från godkända mallar.
- Frågebanken är tillräckligt konverterad för beslutat v1.0-scope.
- Användaren kan anpassa frågor före start.
- Användaren kan genomföra kontrollen och se progress.
- Kommentar krävs vid `Ej godkänd` och `Ej kontrollerad`.
- Sammanställning är korrekt.
- Signering är enkel och korrekt beskriven.
- Export/utskrift finns om beslutat för v1.0.
- Lagring och åtkomst är beslutade och säkra.
- Produkten innehåller inga funktioner från en större plattform.

## 12. Releaseplan

### Intern Sprint 1-demo

Syfte: visa att kärnupplevelsen fungerar och känns rätt.

### Intern Alpha

Syfte: verkligare frågebanksdata, fler mallar och bättre sammanställning.

### Beta

Syfte: test med byggnära användare, särskilt mobilflöde, språk, hjälptext och avvikelsehantering.

### Version 1.0

Syfte: första säljbara versionen med beslutat mallinnehåll, trygg lagring, tydlig sammanställning och eventuell export.

## 13. Version 1.0

Version 1.0 ska vara en enkel, fristående och säljbar app för egenkontroll. Den ska kännas komplett genom ett tydligt arbetsflöde, inte genom många moduler.

Version 1.0 ska inte vara:

- en stor Quality WorX-plattform
- ett ISO-ledningssystem
- en dokumenthanteringsplattform
- en AI-produkt
- en Word-editor
- ett ärendehanteringssystem

Version 1.0 ska vara:

- snabb att förstå
- enkel att använda
- trygg i språk och status
- modern i känsla
- praktisk för byggvardag
- byggd runt frågebanken
- kommersiellt paketerbar som egen produkt

## Analys av dokumentation och beredskap

### Identifierade motsägelser

- `APP_BLUEPRINT.md` beskriver hela v1.0 medan Sprint 1 nu är mycket mindre. Detta är löst genom tydlig Sprint 1-avgränsning.
- Äldre rotfil `EGENKONTROLL_APP_BLUEPRINT.md` är ett utkast och kan krocka med `docs/APP_BLUEPRINT.md`.
- Vissa dokument använder `kontrollpunkt` medan ny modell kräver `kontrollfråga` i UI. Detta är nu förtydligat i terminologi och domänmodell.

### Identifierade dubbletter

- Arbetsflöde återkommer i blueprint, knowledge base, product structure, UX och implementation plan.
- Signering, export och statusmodell återkommer på flera ställen.
- Dubbletterna är delvis motiverade men bör hållas synkade genom att `APP_BLUEPRINT.md` styr scope och `IMPLEMENTATION_PLAN_V1.md` styr sprintordning.

### Saknade beslut

- När och hur den fulla masterlistan ska läggas in som verifierbar källa.
- Om v1.0 ska ha lokal lagring, molnlagring eller konto.
- Om export ingår i första kommersiella release eller senare.
- Om foto ska in i v1.0 eller senare.
- Om AI ska vara hjälp för formulering, avvikelsesammanfattning eller inte alls i v1.0.

### Dokument som kan förenklas senare

- Äldre rotfil `EGENKONTROLL_APP_BLUEPRINT.md` bör arkiveras, tas bort eller tydligt märkas som historiskt utkast efter godkännande.
- När implementation startar kan vissa mallavsnitt i språk-, innehålls- och UX-dokument ersättas med konkreta exempel från byggd UI.

## Mognadsbedömning

| Område | Betyg | Bedömning |
|---|---:|---|
| Produkt | 8 | Tydlig nisch, stark avgränsning och bra kommersiell riktning. |
| UX | 8 | Produktkänslan är ovanligt tydlig, men behöver valideras i faktisk Sprint 1-prototyp. |
| Arkitektur | 7 | Rätt principer finns, men ingen kodbas är ännu byggd. |
| Dokumentation | 8 | Stark dokumentationsgrund, men vissa överlapp och äldre utkast finns. |
| Kodberedskap | 7 | Sprint 1 är tydligt avgränsad, men teknisk projektstruktur saknas. |
| Kommersiell potential | 8 | Tydligt praktiskt problem, säljbar fristående produkt och bra differentiering om UX lyckas. |
| Underhållbarhet | 7 | Frågebank som data ger god riktning, men full innehållsmodell återstår. |
| Innovation | 8 | Styrkan är att omvandla kontrollpunkter till vägledande frågor, inte bara digitalisera blankett. |

Samlat mognadsbetyg: **7,6 av 10**.

## Tre största styrkor

1. Tydlig produktfilosofi: digitalisera kunskap, inte Word.
2. Stark UX-riktning med modern, lugn och framåtdrivande känsla.
3. Frågebanksbeslutet ger skalbar produktlogik utan att skapa elva separata appar.

## Tre största risker

1. Scope creep från Sprint 1 till v1.0, särskilt AI, export, foto och backend.
2. Saknat verifierbart masterlisteoriginal kan bromsa full frågebank.
3. Produkten kan tappa sin differentiering om UI blir ett formulär i stället för ett guidat arbetsflöde.

## Är projektet redo för Sprint 1?

Ja, projektet är redo för Sprint 1 under en tydlig förutsättning: Sprint 1 måste hållas strikt till den backendfria vertical slice som definieras här.

Projektet är inte redo att bygga hela v1.0, full frågebank, databas, export, AI eller kommersiell produktionsmiljö. Det är däremot redo att bygga den första kontrollerade upplevelsen som visar om produktfilosofin fungerar i praktiken.
