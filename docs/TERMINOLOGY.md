# Terminology

## Syfte

Detta dokument fastställer vilka ord och uttryck Egenkontroll App ska använda.

Målet är ett konsekvent språk som känns naturligt för byggbranschen.

## Ansvar

Detta dokument ansvarar för:

- rekommenderade termer
- termer som ska undvikas
- skillnader mellan vardagsspråk och formellt språk
- språk som ska användas i UI, hjälptexter och export

## Hur dokumentet används

Använd detta dokument när:

- knappar, rubriker och fält ska namnges
- hjälptexter ska skrivas
- källmaterial ska översättas till appens språk
- dokumentation behöver konsekvent ordval

## Hur dokumentet ska uppdateras

Uppdatera när:

- en ny term introduceras
- en term byter rekommenderad formulering
- ett ord bedöms som för tekniskt, byråkratiskt eller otydligt
- sakkunnig granskning ger bättre språk

Varje ändring ska vara kort motiverad.

## Relation till övriga dokument

- `LANGUAGE_GUIDE.md` beskriver ton och skrivregler.
- `DEFINITIONS.md` beskriver vad orden betyder.
- `CONTENT_GUIDE.md` beskriver hur orden används i appens texter.
- `DOMAIN_MODEL.md` beskriver begreppens relationer.

| Rekommenderad term | Använd inte | Förklaring | Används i |
|---|---|---|---|
| Egenkontroll | Kontrollärende, dokument, blankett | Huvudobjektet användaren skapar och genomför | UI, dokumentation, export |
| Mall | Template, formulärmall | Startpunkt för en egenkontroll | Mallväljare, projektstart |
| Frågebank | Masterlista i UI, datatabell | Intern kunskapsstruktur bakom mallarnas frågor | Dokumentation, implementation |
| Kontrollfråga | Rad, punkt i UI | Digital fråga som användaren besvarar | Arbetsyta, hjälp, sammanfattning |
| Kontrollpunkt | Fråga när originalet avses | Ursprunglig kontrollpunkt från källmaterialet | Källanalys, dokumentmappning |
| Hjälptext | Tooltip som enda hjälp | Kort förklaring som hjälper användaren förstå frågan | Frågekort, sidopanel |
| Standardvärde | Default på engelska | Förvalt svar när det minskar onödigt skrivande | Frågekort |
| Följdfråga | Subfråga, extra fält | Fråga som visas på grund av ett tidigare svar | Villkorad logik |
| Lokal sammanfattning | Rapport, export | Sammanfattning på skärm i Sprint 1 | Klar-skärm |
| Godkänd | OK som enda term | Kontrollen är utförd och godkänd | Statusval |
| Ej godkänd | Fel som enda term | Kontrollen är utförd men avvikelse finns | Statusval |
| Ej kontrollerad | Ej relevant utan förklaring | Kontrollen kunde eller skulle inte utföras | Statusval |
| Ej bedömd | Tom, obesvarad | Frågan är ännu inte behandlad | Progress, sammanfattning |

## Termer att granska

- `Beställare/byggherre`: behöver testas i UI så det inte känns juridiskt tyngre än nödvändigt.
- `Kontrollansvarig`: ska användas försiktigt eftersom det kan vara PBL-roll eller praktisk granskare.
- `Kontrollpunkt` kontra `kontrollfråga`: UI bör prioritera `fråga`, medan dokumentmappning kan använda `kontrollpunkt`.

## Termer att undvika

- Formulär
- Blankettvy
- Ärendehantering
- Workflow engine
- Legal e-signering
- PBL-säkring
- AI-genererad kontrollpunkt som v1.0-löfte

