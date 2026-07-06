# Egenkontroll App

Digital webbapplikation för egenkontroll i byggprojekt.

Appen ska vara en fristående kommersiell produkt. Den ska hjälpa användaren att skapa, genomföra, följa upp, signera och exportera egenkontroller utan att kännas som ett tungt verksamhetssystem.

## Projektstatus

Projektet är i sista planeringssteg inför Sprint 1.

Ingen applikationskod har skrivits i denna fas. Ingen databas ska skapas och inga paket ska installeras innan Sprint 1 uttryckligen godkänns.

Läs alltid [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md) i början av en arbetssession.

## Källa Till Sanning

Projektets dokumentation är den enda källan till sanning.

Primära dokument:

- [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md) – aktuell status, fas, blockerare och nästa steg
- [`docs/APP_BLUEPRINT.md`](docs/APP_BLUEPRINT.md) – produktens godkända blueprint
- [`docs/KNOWLEDGE_BASE.md`](docs/KNOWLEDGE_BASE.md) – kunskap från egenkontroller, kontrollpunkter och byggprocesser
- [`docs/DOMAIN_MODEL.md`](docs/DOMAIN_MODEL.md) – centrala begrepp och relationer
- [`docs/TERMINOLOGY.md`](docs/TERMINOLOGY.md) – rekommenderade ord och termer
- [`docs/DEFINITIONS.md`](docs/DEFINITIONS.md) – korta definitioner
- [`docs/LANGUAGE_GUIDE.md`](docs/LANGUAGE_GUIDE.md) – ton, språk och skrivregler
- [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) – hjälptexter, instruktioner och exporttexter
- [`docs/UX_GUIDELINES.md`](docs/UX_GUIDELINES.md) – UX-principer och vägledning
- [`docs/PRODUCT_STRUCTURE.md`](docs/PRODUCT_STRUCTURE.md) – produktstruktur, startsida och kontrollcenter-känsla
- [`docs/PRODUCT_EXPERIENCE.md`](docs/PRODUCT_EXPERIENCE.md) – produktpersonlighet, känslomål och upplevelseprinciper
- [`docs/DECISIONS.md`](docs/DECISIONS.md) – beslut och avgränsningar
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) – viktiga dokumentationsändringar
- [`docs/IMPLEMENTATION_PLAN_V1.md`](docs/IMPLEMENTATION_PLAN_V1.md) – plan för Sprint 1 till version 1.0

## Dokumentstruktur

```text
docs/
├── APP_BLUEPRINT.md
├── PROJECT_STATUS.md
├── KNOWLEDGE_BASE.md
├── DOMAIN_MODEL.md
├── TERMINOLOGY.md
├── DEFINITIONS.md
├── LANGUAGE_GUIDE.md
├── CONTENT_GUIDE.md
├── UX_GUIDELINES.md
├── PRODUCT_STRUCTURE.md
├── PRODUCT_EXPERIENCE.md
├── DECISIONS.md
├── CHANGELOG.md
├── IMPLEMENTATION_PLAN_V1.md
├── source-material/
│   └── README.md
└── analysis/
    └── README.md
```

## Källmaterial

Originaldokument från KvalitetsDokument.se är kunskapskälla, inte implementation.

Vi digitaliserar inte Word.

Vi digitaliserar kunskapen bakom Word-dokumenten.

Regler för källmaterial finns i [`docs/source-material/README.md`](docs/source-material/README.md).

## Referensprojekt

Onboarding App v1.0 används som referens för:

- design
- struktur
- arbetsprocess
- dokumentationsnivå
- arkitektoniskt arbetssätt

Egenkontroll App ska ändå vara en fristående produkt med eget scope.

## Utvecklingsprocess

Allt arbete följer denna ordning:

1. Analysera
2. Planera
3. Dokumentera
4. Implementera
5. QA
6. Commit endast efter godkännande

Nuvarande fas stannar vid dokumentation. Implementation kommer senare efter separat godkänd plan.

## Produktprinciper

- Appen ska fungera som en erfaren arbetsledare.
- Masterlistan ska behandlas som projektets frågebank.
- Appen ska vägleda användaren steg för steg.
- Språket ska vara byggbranschens vardagsspråk.
- Konsultspråk, myndighetsspråk och onödig ISO-jargong ska undvikas.
- Word-original ska aldrig kopieras sida för sida till appen.
- Originalmaterial ska bevaras oförändrat.
