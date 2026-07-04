# Source Material

## Syfte

Denna mapp är avsedd för originalmaterial och andra källor som används för att förstå Egenkontroll App.

Materialet här är kunskapskälla, inte implementation.

## Grundregel

Vi digitaliserar inte Word.

Vi digitaliserar kunskapen bakom Word-dokumenten.

## Vad som kan ligga här

- Word-original från KvalitetsDokument.se.
- PDF-versioner av originaldokument.
- Masterlistor över egenkontroller och kontrollpunkter.
- Annat granskat källmaterial som beskriver byggprocesser, egenkontroller, roller eller arbetsflöden.

## Hur originalmaterial används

Originalmaterial används för att förstå:

- egenkontroller
- kontrollpunkter
- byggprocesser
- arbetsflöden
- roller
- språk och terminologi
- hjälptexter
- användarbehov

Kunskap som utvinns ur källmaterial dokumenteras i:

- `../KNOWLEDGE_BASE.md`
- `../DOMAIN_MODEL.md`
- `../TERMINOLOGY.md`
- `../DEFINITIONS.md`
- `../CONTENT_GUIDE.md`

## Word-original

Word-original är referensmaterial.

De ska:

- bevaras i originalskick
- aldrig ändras direkt
- aldrig behandlas som teknisk implementation
- aldrig kopieras sida för sida till appen
- analyseras för arbetsflöde, innehåll och begrepp

Om en ändring behövs ska den dokumenteras som en produkt- eller innehållsändring i projektets styrdokument, inte göras i originalfilen.

## PDF-material

PDF-filer används som visuell referens.

De kan hjälpa till att förstå:

- dokumentets struktur
- tabeller och blankettlogik
- exportbehov
- utskriftslayout
- vilken information användaren förväntar sig i slutrapporten

PDF är inte designfacit för appens gränssnitt.

## Förbjudet

Gör inte detta:

- ändra originalfiler
- bygga appens UI genom att kopiera Word-layouten
- skapa komponenter direkt från Word-rader
- behandla Word-fält som databasfält utan analys
- lägga juridiska eller regulatoriska tillägg i appen utan sakgranskning

## Analysprocess

När nytt källmaterial läggs till:

1. Lägg originalet i denna mapp.
2. Dokumentera vad materialet är och varifrån det kommer.
3. Analysera innehållet i `../analysis/`.
4. Flytta endast verifierad kunskap till projektets styrdokument.
5. Uppdatera `../PROJECT_STATUS.md` om materialet påverkar nästa steg.

