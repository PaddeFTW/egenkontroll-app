# Egenkontroll App – Produktanalys och App Blueprint

**Version:** 1.0  
**Datum:** 2026-07-03  
**Status:** Godkänd  
**Projekt:** Egenkontroll App  
**Produktfamilj:** Quality WorX Apps  
**Kodstatus:** Redo för implementationsplan

## Dokumentrelationer

Detta dokument beskriver produkten och dess godkända blueprint.

Detaljerad kunskap, terminologi, språk, innehåll, UX-riktlinjer, beslut och arbetsstatus ska dokumenteras i separata styrdokument:

- `PROJECT_STATUS.md` – aktuell status och nästa steg
- `KNOWLEDGE_BASE.md` – kunskap från källmaterial och byggprocesser
- `DOMAIN_MODEL.md` – centrala begrepp och relationer
- `TERMINOLOGY.md` – rekommenderade ord och termer
- `DEFINITIONS.md` – korta definitioner
- `LANGUAGE_GUIDE.md` – ton, språk och skrivregler
- `CONTENT_GUIDE.md` – hjälptexter, instruktioner och exporttexter
- `UX_GUIDELINES.md` – vägledning, flöden och interaktionsprinciper
- `PRODUCT_STRUCTURE.md` – produktstruktur, startsida och kontrollcenter-känsla för v1.0
- `DECISIONS.md` – viktiga beslut och avgränsningar

Blueprinten ska inte innehålla all kunskap. Den ska hänvisa vidare när informationen hör hemma i ett annat dokument.

---

## 1. Syfte

Detta dokument omvandlar den befintliga Word-produkten **Egenkontroll för bygg** och den tillhörande masterlistan över egenkontroller till en enkel, fristående webbapplikation.

Målet är inte att kopiera Word-dokumentet sida för sida.

Målet är att bevara produktens professionella innehåll och arbetslogik, men göra egenkontrollen:

- enklare att skapa
- enklare att fylla i
- enklare att följa upp
- enklare att signera
- enklare att exportera
- möjlig att sälja som en fristående app

Appen ska inte vara en del av en stor plattform.

---

## 2. Granskade källor

### 2.1 Egenkontroll för bygg (mall).docx

Dokumentet innehåller:

- instruktion för att anpassa en egenkontroll
- instruktion för att fylla i en egenkontroll
- information om ansvar och utförande
- en praktisk blankett för egenkontroll
- beställare/byggherre
- entreprenör
- referens till krav, ritningar och andra handlingar
- kontrollmoment
- tre kontrollresultat
- datum
- signering
- övriga anteckningar
- utfört av
- kontrollansvarig
- förklaring av kontrollresultaten

Dokumentets tre ursprungliga resultat är:

1. Kontrollerat och godkänt
2. Kontrollerat och ej godkänt
3. Ej kontrollerat

### 2.2 Masterlista_Egenkontroller_2026.md

Masterlistan innehåller:

- 11 färdiga huvudmallar
- 123 definierade kontrollpunkter
- 26 framtida momentspecifika egenkontroller
- rekommenderad standardstruktur för alla egenkontroller

De 11 huvudmallarna är:

| Nr | Mall | Antal kontrollpunkter |
|---:|---|---:|
| 1 | Bygg – generell | 17 |
| 2 | Elinstallation | 14 |
| 3 | VVS | 11 |
| 4 | Badrum | 11 |
| 5 | Kök | 9 |
| 6 | Betong | 11 |
| 7 | Rivning | 9 |
| 8 | Tak | 10 |
| 9 | Målning | 9 |
| 10 | Slutbesiktning | 9 |
| 11 | Daglig säkerhet | 13 |
|  | **Totalt** | **123** |

### 2.3 Källornas roll

Word-mallen styr:

- dokumentets arbetsflöde
- obligatorisk grundinformation
- kontrollresultat
- signerings- och granskningslogik
- exportens innehåll

Masterlistan styr:

- mallbiblioteket
- kategorier
- grupperingar
- fördefinierade kontrollpunkter
- framtida produktutbyggnad

---

## 3. Produktbeslut

### 3.1 Produkt

Appens arbetsnamn är:

> **Egenkontroll**

Appen är en fristående produkt inom Quality WorX Apps, men ska kunna säljas och visas under sitt eget produktnamn.

### 3.2 Grundprincip

En gemensam app ska hantera flera typer av egenkontroller genom ett mallbibliotek.

Det ska inte skapas en separat teknisk app för varje yrkesområde.

### 3.3 Första innehållsversion

Version 1.0 rekommenderas innehålla:

- samtliga 11 huvudmallar från masterlistan
- en tom anpassningsbar mall
- möjlighet att lägga till, ta bort och ändra kontrollpunkter före start
- samma arbetsflöde för alla mallar

Eftersom samma datastruktur används för alla mallar ger detta ett större produktvärde utan att skapa elva olika tekniska lösningar.

### 3.4 Avgränsning

Appen ska inte innehålla:

- gemensam kundplattform
- marketplace
- abonnemangshantering
- betalningssystem
- avancerad organisationshantering
- dokumenthanteringssystem
- ISO-ledningssystem
- Syncfusion som standard
- Figma-baserad utvecklingsprocess

Betalning, distribution och åtkomst hanteras separat från appens kärnfunktion.

---

## 4. Målgrupp

Primära användare:

- byggföretag
- entreprenörer
- underentreprenörer
- platschefer
- arbetsledare
- kvalitetsansvariga
- kontrollansvariga
- yrkesarbetare som utför eller kontrollerar arbete

Appen ska kunna användas av personer utan vana av avancerade verksamhetssystem.

---

## 5. Huvudsakliga användarbehov

Användaren ska kunna:

1. Välja rätt typ av egenkontroll.
2. Anpassa egenkontrollen till projektet.
3. Ange beställare eller byggherre.
4. Ange entreprenör.
5. Ange vilka krav, ritningar eller handlingar kontrollen avser.
6. Granska och anpassa kontrollpunkterna.
7. Kontrollera varje moment.
8. Markera resultat.
9. Dokumentera fel eller ej genomförda moment.
10. Ange vem som kontrollerat och när.
11. Slutföra och signera egenkontrollen.
12. Låta ansvarig granska och godkänna den.
13. Exportera en tydlig rapport.

---

## 6. Digital omvandling av Word-mallen

| Word-mallen | Webbappen |
|---|---|
| Dokumentets namn | Redigerbart namn på egenkontrollen |
| Beställare | Fält med valbar etikett: Beställare eller Byggherre |
| Entreprenör | Företags-/entreprenörsfält |
| Referens till | En eller flera referenser |
| Kontrollmoment | Digital lista med kontrollpunkter |
| Ruta 1 | Godkänd |
| Ruta 2 | Ej godkänd |
| Ruta 3 | Ej kontrollerad |
| Tom ruta | Ej bedömd |
| Datum per rad | Automatisk eller manuellt vald kontrolldag |
| Signera per rad | Kontrollerad av + tidsstämpel |
| Övriga anteckningar | Sammanfattande anteckningar |
| Utfört av | Slutlig utförarsignering |
| Kontrollansvarig | Slutlig granskningssignering |
| Blankett | PDF-/utskriftsvänlig slutrapport |
| Instruktioner | Inbyggd hjälp och korta förklaringar |

---

## 7. Rekommenderat användarflöde

```text
Startsida
→ Ny egenkontroll
→ Välj mall
→ Fyll i projektinformation
→ Anpassa kontrollpunkter
→ Starta kontroll
→ Bedöm kontrollpunkterna
→ Granska sammanställning
→ Signera som utförare
→ Granska/signera som kontrollansvarig
→ Exportera
```

### 7.1 Återuppta arbete

En påbörjad egenkontroll ska kunna sparas och öppnas igen utan att information försvinner.

---

## 8. Informationsarkitektur

### 8.1 Startsida

Visar:

- knapp: **Skapa ny egenkontroll**
- pågående egenkontroller
- slutförda egenkontroller
- mallbibliotek
- enkel sökning eller filtrering vid behov

Startsidan ska vara enkel och inte fungera som en tung dashboard.

### 8.2 Ny egenkontroll

Steg:

1. Välj mall.
2. Ange namn och projektuppgifter.
3. Ange beställare/byggherre.
4. Ange entreprenör.
5. Lägg till referenser.
6. Granska kontrollpunkter.
7. Starta egenkontrollen.

### 8.3 Genomför egenkontroll

Visar:

- egenkontrollens namn
- projektinformation
- framsteg
- grupperade kontrollpunkter
- resultatknappar
- kontrollant
- datum
- kommentar
- tydlig nästa kontrollpunkt

### 8.4 Sammanställning

Visar:

- antal godkända
- antal ej godkända
- antal ej kontrollerade
- antal ej bedömda
- avvikelser och kommentarer
- övriga anteckningar
- utförarsignering
- granskningssignering

### 8.5 Export

Exporten ska innehålla:

- dokumentnamn
- projektuppgifter
- beställare/byggherre
- entreprenör
- referenser
- samtliga kontrollpunkter
- resultat
- datum och kontrollant
- kommentarer
- övriga anteckningar
- utfört av
- kontrollansvarig
- förklaring av status

Primär export i version 1.0:

- PDF
- utskrift

Word-export kan utvärderas senare.

---

## 9. Mallbibliotek

### 9.1 Mallar i version 1.0

- Bygg – generell
- Elinstallation
- VVS
- Badrum
- Kök
- Betong
- Rivning
- Tak
- Målning
- Slutbesiktning
- Daglig säkerhet
- Tom egenkontroll

### 9.2 Mallregler

En mall ska innehålla:

- mallnamn
- kort beskrivning
- kategori
- valfria undergrupper
- ordnade kontrollpunkter
- versionsnummer
- aktiv/inaktiv-status

### 9.3 Anpassning

Innan kontrollen startas ska användaren kunna:

- ändra dokumentnamn
- ändra formulering av kontrollpunkt
- lägga till kontrollpunkt
- ta bort kontrollpunkt
- ändra ordning
- skapa en ny grupp
- välja bort irrelevanta kontrollpunkter

Originalmallen ska inte ändras när en användare anpassar en enskild egenkontroll.

---

## 10. Kontrollpunktens statusmodell

Varje kontrollpunkt ska ha exakt en status:

| Status | Betydelse |
|---|---|
| Ej bedömd | Kontrollpunkten har ännu inte behandlats |
| Godkänd | Kontrollerad och godkänd |
| Ej godkänd | Kontrollerad och inte godkänd |
| Ej kontrollerad | Punkten kunde eller skulle inte kontrolleras |

Status ska visas med både text och färg.

Färg får aldrig vara den enda informationsbäraren.

### 10.1 Rekommenderad digital förbättring

När status är:

- **Ej godkänd**
- **Ej kontrollerad**

ska en kommentar krävas.

Detta förbättrar spårbarheten jämfört med ett gemensamt anteckningsfält.

Beslutet är godkänt för version 1.0.

---

## 11. Signering

### 11.1 Kontrollpunkt

Varje bedömd kontrollpunkt ska kunna registrera:

- kontrollerad av
- datum
- tid

En enkel namnregistrering eller val av aktuell användare ersätter den manuella signaturen per rad.

### 11.2 Utfört av

Slutlig signering ska innehålla:

- namn
- datum och tid
- bekräftelse att uppgifterna är korrekta

### 11.3 Kontrollansvarig

Granskning ska innehålla:

- namn
- datum och tid
- status: granskad/godkänd
- valfri kommentar

### 11.4 Avgränsning

Version 1.0 ska inte påstå att detta är en kvalificerad elektronisk signatur.

Avancerad e-signering eller BankID ingår inte i MVP.

---

## 12. Konceptuell datamodell

Detta är en produktmodell, inte ett färdigt databasschema.

### Template

- id
- name
- description
- category
- version
- active

### TemplateSection

- id
- templateId
- name
- order

### TemplatePoint

- id
- templateId
- sectionId
- text
- order
- active

### Inspection

- id
- templateId
- name
- projectName
- clientLabel
- clientName
- contractorName
- references
- overallNotes
- status
- createdAt
- updatedAt
- completedAt

### InspectionPoint

- id
- inspectionId
- sourceTemplatePointId
- sectionName
- text
- order
- result
- comment
- checkedBy
- checkedAt

### SignOff

- id
- inspectionId
- type
- name
- confirmed
- signedAt
- comment

---

## 13. Egenkontrollens livscykel

| Status | Betydelse |
|---|---|
| Utkast | Projektinformation eller kontrollpunkter förbereds |
| Pågående | Kontrollen har startats |
| Klar för granskning | Alla obligatoriska moment är behandlade |
| Granskad | Kontrollansvarig har granskat |
| Slutförd | Slutlig version är låst för normal redigering |
| Arkiverad | Kontroll sparad men inte aktiv |

I första versionen kan flödet förenklas till:

```text
Utkast → Pågående → Slutförd
```

Granskningsstatus kan aktiveras när behovet är bekräftat.

---

## 14. Affärsregler

1. En egenkontroll skapas från en mall eller som tom kontroll.
2. En skapad egenkontroll får en egen kopia av kontrollpunkterna.
3. Ändringar i en egenkontroll får inte ändra originalmallen.
4. Kontrollpunkter ska visas i bestämd ordning.
5. Varje kontrollpunkt kan endast ha ett resultat åt gången.
6. Resultat ska kunna ändras innan egenkontrollen slutförs.
7. Ej godkända och ej kontrollerade punkter ska kräva förklaring.
8. Slutförande ska varna om punkter fortfarande är ej bedömda.
9. Slutförd kontroll ska kunna exporteras.
10. Slutförd kontroll ska inte ändras utan att återöppnas eller skapa en ny version.
11. Systemet ska registrera när information ändrades.
12. Betalningsstatus ska inte påverka produktens interna datamodell.

---

## 15. MVP – måste ingå

### Produktinnehåll

- 11 färdiga mallar
- tom mall
- 123 kontrollpunkter som startinnehåll
- grupperingar från masterlistan

### Funktion

- skapa egenkontroll
- välja mall
- ange projektinformation
- anpassa kontrollpunkter
- spara utkast
- genomföra kontroll
- ange resultat
- ange kontrollant och datum
- skriva kommentarer
- övriga anteckningar
- slutlig signering
- enkel granskning
- sammanställning
- PDF/utskrift
- pågående och slutförda kontroller

### UX

- mobilanpassad
- tydlig framstegsvisning
- stora klickytor
- tydliga statusar
- enkel svenska
- Onboarding App v1.0 som visuell referens

---

## 16. Ska inte ingå i MVP

- Figma-arbete
- stor gemensam plattform
- gemensamt konto för alla framtida appar
- abonnemangssystem
- betalningsintegration
- marketplace
- BankID
- avancerad e-signering
- AI-genererade kontrollpunkter
- avancerad dokumenteditor
- Syncfusion
- chatt
- meddelandesystem
- realtidssamarbete
- kundportal
- statistikplattform
- integration med ekonomisystem
- integration med ärendehantering
- automatisk kontroll mot PBL eller andra regelverk
- fotouppladdning om den inte uttryckligen godkänns för v1.0

---

## 17. Designprinciper

Appen ska använda samma visuella kvalitet som Onboarding App v1.0:

- lugn och modern SaaS-design
- mycket luft
- tydlig visuell hierarki
- begränsad färganvändning
- enkla kort och listor
- tydliga primära knappar
- responsiv mobilupplevelse
- Lucide-ikoner
- shadcn/ui-komponenter
- Tailwind CSS
- inga externa designmallar
- inget krav på Figma

Appens rekommenderade accentfärg är blå.

Statusfärger:

- Godkänd: grön
- Ej godkänd: röd
- Ej kontrollerad: amber/grå
- Ej bedömd: neutral

---

## 18. Tekniska principer

Teknik fastställs först efter godkänd blueprint.

Rekommenderad gemensam grund:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide
- Supabase endast om autentisering och molnlagring behövs
- Vercel för publicering

Kärnan ska vara oberoende av:

- betalningsleverantör
- abonnemangsmodell
- gemensam Quality WorX-plattform

---

## 19. Lagring och åtkomst

Appen behöver kunna spara egenkontroller så att arbetet kan återupptas.

Blueprinten bestämmer inte ännu exakt åtkomstmodell.

Före produktionslansering måste ett separat beslut tas mellan:

1. lokal lagring för demo/prototyp
2. enkel inloggning och molnlagring
3. kundspecifik installation

Rekommendation för kommersiell version:

- enkel inloggning
- privat lagring per användare eller företag
- ingen abonnemangshantering i appen

Detta beslut tas efter att kärnflödet är godkänt.

---

## 20. Kvalitetskrav

Appen ska:

- fungera på mobil, surfplatta och dator
- inte förlora sparad information vid normal användning
- visa tydliga felmeddelanden
- kunna användas med tangentbord
- ha tillräcklig färgkontrast
- använda svenska datumformat
- ha tydlig utskriftslayout
- inte exponera en kunds information för en annan
- inte lagra lösenord eller hemligheter i frontend
- inte göra juridiska påståenden utöver källmaterialet

Information om PBL i Word-källan ska behandlas som produktinnehåll. Ändringar eller utökningar av juridiska formuleringar kräver separat sakgranskning.

---

## 21. Acceptanskriterier för version 1.0

Version 1.0 är godkänd när användaren kan:

1. Öppna appen på mobil och dator.
2. Se de 11 färdiga mallarna.
3. Skapa en kontroll från valfri mall.
4. Skapa en tom egenkontroll.
5. Fylla i beställare/byggherre, entreprenör och referenser.
6. Ändra, lägga till och ta bort kontrollpunkter.
7. Markera varje punkt som godkänd, ej godkänd eller ej kontrollerad.
8. Lämna en punkt som ej bedömd under pågående arbete.
9. Ange kontrollant och datum.
10. Skriva kommentarer.
11. Spara och återuppta egenkontrollen.
12. Se en korrekt sammanställning.
13. Signera som utförare.
14. Registrera kontrollansvarigs granskning.
15. Slutföra kontrollen.
16. Exportera eller skriva ut en tydlig rapport.
17. Se pågående och slutförda egenkontroller.
18. Använda appen utan funktioner från andra Quality WorX-produkter.

---

## 22. Identifierade risker

### För stor första version

Risk:

- foton, avancerad signering, avvikelser, användarroller och betalning byggs samtidigt

Åtgärd:

- håll MVP till Word-mallens kärnflöde

### Word kopieras för bokstavligt

Risk:

- webbappen blir en digital blankett istället för ett enkelt arbetsverktyg

Åtgärd:

- använd stegvis flöde och tydliga kort, men behåll exportens dokumentstruktur

### Oklara signaturkrav

Risk:

- användaren tror att enkel namnregistrering är juridiskt avancerad e-signering

Åtgärd:

- kalla funktionen bekräftelse/signering och dokumentera begränsningen

### Juridiskt innehåll blir inaktuellt

Risk:

- lagreferenser i produkttexten ändras över tid

Åtgärd:

- separera vägledning från appfunktion och sakgranska juridisk text vid varje produktversion

### Mallbiblioteket växer okontrollerat

Risk:

- nya yrkesmallar skapar duplicerad kod

Åtgärd:

- alla mallar lagras som data i samma generiska struktur

---

## 23. Godkända produktbeslut före kodstart

### Beslut 1 – Första innehållsversion

**Godkänt:** Alla 11 huvudmallar samt en tom mall ingår i v1.0.

### Beslut 2 – Kommentar vid negativt resultat

**Godkänt:** Kommentar krävs vid Ej godkänd och Ej kontrollerad.

### Beslut 3 – Signering

**Godkänt:** Signering sker med namn, bekräftelse och tidsstämpel. Ingen avancerad e-signering ingår.

### Beslut 4 – Bilder

**Godkänt:** Fotouppladdning väntar. Kontrollpunkten “Fotodokumentation utförd” finns kvar som vanlig punkt.

### Beslut 5 – Granskning

**Godkänt:** Enkel kontrollansvarig-granskning ingår, men inget avancerat godkännandeflöde.

### Beslut 6 – Betalning och abonnemang

**Godkänt:** Betalning och abonnemang ligger utanför appens kärna. Produktionsinloggning beslutas separat före lansering.

---

## 24. Föreslagen implementationsordning efter godkännande

### Milstolpe 1 – Projektgrund

- skapa teknisk projektstruktur
- installera endast godkända grundberoenden
- konfigurera designgrund
- ingen affärslogik

### Milstolpe 2 – Mallbibliotek

- modell för mallar
- importera 11 mallar och 123 kontrollpunkter
- mallväljare

### Milstolpe 3 – Skapa egenkontroll

- projektinformation
- referenser
- anpassning av kontrollpunkter

### Milstolpe 4 – Genomföra kontroll

- kontrollresultat
- datum
- kontrollant
- kommentarer
- framsteg

### Milstolpe 5 – Slutförande

- sammanställning
- signering
- granskning
- låsning

### Milstolpe 6 – Export

- utskriftsvy
- PDF
- kvalitetskontroll mot Word-källan

### Milstolpe 7 – Produktion

- lagring
- åtkomst
- säkerhet
- Vercel
- sluttest

Efter varje milstolpe:

```text
Implementera → QA → granska diff → commit → push → nästa steg
```

---

## 25. Definition of Done för blueprint

Blueprinten är klar när:

- Word-mallen är korrekt kartlagd
- masterlistan är korrekt kartlagd
- produktens kärnflöde är fastställt
- MVP och senare funktioner är separerade
- kontrollstatusarna är definierade
- signeringsprincipen är godkänd
- mallomfattningen är godkänd
- exportkraven är godkända
- öppna beslut är besvarade
- användaren uttryckligen godkänt dokumentet

---

## 26. Nästa steg

1. Granska beslut 1–6.
2. Justera blueprinten vid behov.
3. Godkänn blueprint version 1.0.
4. Lägg filen i repositoryt som:

```text
docs/APP_BLUEPRINT.md
```

5. Lägg källmaterialet i `docs/source-material/` eller dokumentera dess plats där.
6. Skapa implementationsplan.
7. Först därefter startar kodningen.

---

## 27. Rekommenderad Cursor-prompt efter godkännande

```text
Du är Senior Software Architect för Egenkontroll App.

Läs hela repositoryt och särskilt:

- docs/APP_BLUEPRINT.md
- den godkända masterlistan för egenkontroller
- projektets design- och utvecklingsregler

APP_BLUEPRINT.md är projektets styrande produktkrav.

Skapa ingen kod ännu.

Ta fram en konkret implementationsplan för version 1.0, uppdelad i små milstolpar.

För varje milstolpe ska du ange:

- mål
- filer som sannolikt påverkas
- datamodell
- användarflöde
- QA-kriterier
- tydlig Definition of Done

Lägg inte till funktioner som inte finns i blueprinten.

Avsluta med rekommenderad första koduppgift.

Ändra ingenting och gör ingen commit.
```

