# Content Guide

## Syfte

Detta dokument beskriver hur appens innehåll ska struktureras och skrivas.

Det gäller exempelvis hjälptexter, instruktioner, tomlägen, felmeddelanden och exporttexter.

## Ansvar

Detta dokument ansvarar för:

- texttyper i appen
- hur mycket hjälp användaren ska få
- hur instruktioner ska formuleras
- hur originalkunskap blir tydlig apptext
- hur exporttexter ska hållas sakliga och begripliga

## Hur dokumentet används

Använd detta dokument när:

- en sida eller ett steg behöver text
- en kontrollpunkt behöver hjälptext
- ett felmeddelande ska skrivas
- tomma lägen ska beskrivas
- exportens textstruktur ska planeras

## Hur dokumentet ska uppdateras

Uppdatera när:

- en ny texttyp införs
- ett återkommande textmönster upptäcks
- användartest visar att innehåll behöver förtydligas
- källmaterial ger bättre sätt att förklara arbetet

## Relation till övriga dokument

- `LANGUAGE_GUIDE.md` styr ton och språk.
- `TERMINOLOGY.md` styr ordval.
- `KNOWLEDGE_BASE.md` ger sakunderlag.
- `UX_GUIDELINES.md` styr när och var hjälp ska visas.
- `APP_BLUEPRINT.md` beskriver vilka funktioner innehållet stödjer.

## Mall för framtida innehåll

### Hjälptexter

Hjälptexter ska förklara varför frågan finns och vad användaren behöver veta för att svara tryggt.

Bra hjälptext:

- är kort
- ligger nära frågan
- använder vardagligt byggspråk
- ger exempel när frågan annars blir abstrakt
- undviker juridiska påståenden

Exempel:

> Kontrollera mot den ritning, beskrivning eller instruktion som gäller för arbetet.

### Instruktioner

Instruktioner ska beskriva nästa handling, inte hela processen.

Bra:

> Välj ett svar och gå vidare till nästa fråga.

Undvik:

> Fyll i formuläret enligt gällande process innan nästa fas kan initieras.

### Felmeddelanden

Fel och varningar ska hjälpa användaren framåt.

Exempel:

- `Skriv en kort kommentar innan du går vidare. Punkten är markerad som ej godkänd.`
- `Frågan är inte besvarad än. Du kan fortsätta, men den visas i sammanfattningen.`
- `Den här följdfrågan visas eftersom kontrollen inte blev godkänd.`

### Tomlägen

Tomlägen ska alltid föreslå en rimlig handling.

Exempel:

> Du har inga pågående egenkontroller än. Välj en mall och starta en enkel kontroll.

### Exporttexter

Export ingår inte i Sprint 1.

När export senare införs ska exporttexten vara mer formell än appens arbetsvy, men den ska fortfarande använda samma begrepp och statusar.

### Kontrollpunktstexter

Kontrollpunktstexter ska i appen omformas till kontrollfrågor.

En bra kontrollfråga ska kunna innehålla:

- frågetext
- kort hjälptext
- rekommenderat standardsvar om det är lämpligt
- exempel
- placeholder för kommentar
- varför frågan finns
- dokumentmappning
- villkor för följdfrågor
- nästa steg

Exempelstruktur:

```text
Fråga: Är momentet utfört enligt aktuell ritning?
Hjälp: Kontrollera mot den ritning eller handling som gäller för arbetet.
Standardvärde: Godkänd
Följdfråga vid Ej godkänd: Vad avviker från ritningen?
Placeholder: Beskriv avvikelsen kort.
Nästa steg: Gå vidare till nästa kontrollfråga.
```

Sprint 1 ska endast innehålla 5 mockfrågor som demonstrerar strukturen. Fullt innehåll från masterlistan tas fram senare.

