# Domain Model

## Syfte

Detta dokument beskriver projektets centrala domänbegrepp och relationer.

Det är en produkt- och informationsmodell, inte ett databasschema.

## Ansvar

Detta dokument ansvarar för att definiera hur appens viktigaste saker hänger ihop, till exempel:

- egenkontroll
- mall
- kontrollpunkt
- projektinformation
- kontrollresultat
- kommentar
- signering
- granskning
- export

## Hur dokumentet används

Använd detta dokument när:

- användarflöden ska planeras
- datamodell ska diskuteras
- funktioner ska brytas ned
- begrepp behöver vara konsekventa mellan dokument
- implementation senare ska planeras

## Hur dokumentet ska uppdateras

Uppdatera dokumentet när ett domänbegrepp:

- läggs till
- byter namn
- får ny betydelse
- får ny relation till andra begrepp

Alla större ändringar ska också noteras i `DECISIONS.md` om de påverkar produktens beteende eller scope.

## Relation till övriga dokument

- `APP_BLUEPRINT.md` beskriver vad produkten ska göra.
- `DOMAIN_MODEL.md` beskriver vilka begrepp produkten bygger på.
- `DEFINITIONS.md` ger korta definitioner av begreppen.
- `TERMINOLOGY.md` styr vilka ord som ska användas i UI och dokumentation.
- `KNOWLEDGE_BASE.md` ger kunskapsbakgrunden.

## Centrala objekt

### Egenkontroll

En egenkontroll är en skapad kontroll som användaren arbetar med. Den utgår från en mall eller en tom startpunkt och innehåller projektinformation, frågor, svar, status, kommentarer och sammanfattning.

### Mall

En mall är en återanvändbar startpunkt för en egenkontroll. I version 1.0 ska mallarna komma från den godkända masterlistan, men implementationen ska behandla mallar som data och inte som separata kodflöden.

### Frågebank

Frågebanken är den strukturerade kunskapsbas som masterlistan ska omformas till. Den innehåller kontrollfrågor, metadata, hjälp och regler som hjälper användaren att genomföra kontrollen med minimalt skrivande.

### Kontrollfråga

En kontrollfråga är appens digitala representation av en kontrollpunkt. Den ska vara kontrollerbar, begriplig och möjlig att besvara i arbetsflödet.

En kontrollfråga kan innehålla:

- fråga
- kategori
- sektion
- svarstyp
- standardvärde
- hjälptext
- varför frågan finns
- exempel
- placeholder
- tooltip
- rekommenderad formulering
- dokumentmappning
- uppskattad tidsåtgång
- villkorad logik
- nästa steg

Framtida metadata kan omfatta AI-förslag, foto-regel, bilageregel och ljudstöd, men dessa ingår inte i Sprint 1.

### Svar

Ett svar är användarens registrerade bedömning av en kontrollfråga i en specifik egenkontroll.

### Följdfråga

En följdfråga visas när ett svar kräver mer information. I Sprint 1 ska detta demonstreras med en enkel villkorad följdfråga.

### Sammanfattning

Sammanfattningen visar lokalt vad användaren har svarat, vad som återstår och om någon fråga behöver extra uppmärksamhet. I Sprint 1 är sammanfattningen lokal och exporteras inte.

## Relationer mellan objekt

- En mall innehåller en eller flera sektioner.
- En sektion innehåller en eller flera kontrollfrågor.
- En egenkontroll skapas från en mall eller tom startpunkt.
- En egenkontroll får en egen kopia av valda kontrollfrågor.
- Ett svar hör till exakt en kontrollfråga i en egenkontroll.
- En följdfråga hör till en kontrollfråga och visas endast när villkoret uppfylls.
- En sammanfattning räknas fram från egenkontrollens lokala svar.

## Statusmodeller

### Kontrollfrågans svarsläge

| Status | Betydelse |
|---|---|
| Ej bedömd | Frågan är ännu inte behandlad |
| Godkänd | Kontrollen är utförd och godkänd |
| Ej godkänd | Kontrollen är utförd men avvikelse finns |
| Ej kontrollerad | Kontrollen kunde eller skulle inte utföras |

### Egenkontrollens arbetsläge

För Sprint 1 räcker följande arbetslägen:

```text
Startad -> Pågående -> Klar
```

Senare versioner kan återinföra `Utkast`, `Klar för granskning`, `Granskad`, `Slutförd` och `Arkiverad` enligt `APP_BLUEPRINT.md`.

## Arbetsflöden

### Sprint 1-flöde

```text
Öppna app
-> Välj mall
-> Starta projekt
-> Besvara 5 mockfrågor
-> Visa progress
-> Visa hjälp vid behov
-> Visa villkorad följdfråga
-> Visa klar-skärm
-> Visa lokal sammanfattning
```

### Version 1.0-flöde

```text
Skapa egenkontroll
-> Välj mall
-> Ange projektinformation
-> Anpassa frågor
-> Genomför kontroll
-> Sammanställ
-> Signera
-> Exportera
-> Arkivera
```

## Regler och begränsningar

- Masterlistan ska behandlas som frågebank, inte som UI-lista.
- Sprint 1 får endast använda 5 mockfrågor.
- Sprint 1 får inte skapa backend, databas, Supabase-koppling, AI, export, PDF, Word, delning eller autentisering.
- En kontrollfråga ska kunna bära mer kunskap än vad som visas samtidigt i UI.
- Metadata ska användas för att förenkla användarens nästa steg, inte för att skapa fler synliga fält.
- Full konvertering av 123 kontrollpunkter till frågebank kräver separat innehållsarbete och källgranskning.

