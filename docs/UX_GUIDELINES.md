# UX Guidelines

## Syfte

Detta dokument beskriver hur Egenkontroll App ska vägleda användaren.

Appen ska fungera som en erfaren arbetsledare: tydlig, lugn, praktisk och hjälpsam.

## Ansvar

Detta dokument ansvarar för:

- användarupplevelse
- flöden
- interaktionsprinciper
- mobilanpassning
- vägledning och progress
- hur appen skiljer sig från en digital blankett

## Hur dokumentet används

Använd detta dokument när:

- skärmar ska planeras
- flöden ska utvärderas
- användaren behöver vägledning
- designbeslut ska motiveras
- implementation senare ska QA-granskas

## Hur dokumentet ska uppdateras

Uppdatera när:

- nya UX-principer beslutas
- användartest visar problem
- Onboarding App-referensen ger ett återanvändbart mönster
- appens flöde ändras

## Relation till övriga dokument

- `APP_BLUEPRINT.md` beskriver vilket produktflöde som ska finnas.
- `UX_GUIDELINES.md` beskriver hur flödet ska kännas och fungera.
- `LANGUAGE_GUIDE.md` beskriver hur appen ska tala till användaren.
- `CONTENT_GUIDE.md` beskriver innehållets form.
- `DECISIONS.md` loggar större UX-beslut.

## Grundprinciper

- Gör nästa steg tydligt.
- Visa inte mer än användaren behöver just nu.
- Använd stora klickytor.
- Gör status tydlig med både text och färg.
- Var mobilvänlig från början.
- Undvik tunga dashboards.
- Undvik att appen känns som ett Word-dokument på skärm.
- Hjälp användaren att göra rätt utan att skälla.

## Mall för framtida innehåll

### Referens: Onboarding App v1.0

Onboarding App v1.0 är visuell och arbetsmässig referens för lugn SaaS-känsla, tydliga kort, mycket luft, enkel progress och få beslut per steg.

Egenkontroll App ska däremot kännas mer som ett arbetsverktyg än onboarding. Den ska hjälpa användaren att göra kontrollen, inte bara komma igång.

### Huvudflöde

Rekommenderat förenklat huvudflöde:

```text
Öppna app
-> Välj mall
-> Starta projekt
-> Svara på frågor
-> Få hjälp vid behov
-> Hantera foto/AI/export i senare sprintar
-> Se sammanfattning
-> Starta ny kontroll
```

Onödiga steg ska undvikas:

- Visa inte arkiv före användaren har något klart.
- Visa inte export före kontrollen är klar.
- Visa inte AI innan AI faktiskt finns.
- Kräv inte konto, backend eller databas i Sprint 1.
- Kräv inte full projektadministration innan användaren kan testa kontrollflödet.

Sprint 1-flödet ska vara:

```text
Startsida
-> Mallväljare
-> Projektstart
-> 5 mockfrågor
-> Klar-skärm
-> Lokal sammanfattning
```

### Skärmprinciper

- En primär handling per skärm.
- Frågan ska vara huvudobjektet i arbetsytan.
- Hjälp ska finnas nära frågan men inte dominera.
- Standardvärden ska minska skrivande.
- Följdfrågor ska visas först när de behövs.
- Progress ska vara konkret: `3 av 5 frågor besvarade`.
- Sammanfattningen ska visa vad som är klart och vad som kräver uppmärksamhet.

### Mobilprinciper

- Stora svarsknappar.
- Korta frågor.
- Kommentar nära frågan.
- Nästa fråga ska vara lätt att nå.
- Inga breda tabeller.
- Inga tunga dashboards.
- Frågekort ska fungera med tumme på mobil.

### Status och progress

Progress ska skapa framåtrörelse och trygghet.

Visa:

- antal besvarade frågor
- antal kvar
- om en följdfråga behöver svar
- om sammanfattningen är klar

Undvik att bara visa procent.

### Tillgänglighet

- Status ska alltid visas med text och inte bara färg.
- Hjälptext ska gå att läsa utan hover.
- Svarsknappar ska kunna nås med tangentbord.
- Kontrast ska vara tillräcklig.
- Ljudstöd får finnas som framtida stöd men får aldrig vara nödvändigt.

