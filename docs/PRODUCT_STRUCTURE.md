# Product Structure

## 1. Syfte

Detta dokument beskriver hur Egenkontroll App ska kännas och fungera som en komplett fristående produkt i version 1.0.

Syftet är att säkerställa att appen inte reduceras till ett formulär, en tabell eller en digital checklistesida. Den ska kännas som ett digitalt kontrollcenter för egenkontroller: lugn, tydlig, arbetsnära och tillräckligt komplett för att användaren ska förstå var arbetet står, vad som är klart och vad som behöver göras härnäst.

Appen ska vägleda användaren som en erfaren arbetsledare. Den ska hjälpa användaren att göra rätt sak i rätt ordning utan att bli ett tungt verksamhetssystem.

## 2. Vad Dokumentet Styr

Detta dokument styr produktens övergripande struktur:

- vilka huvudytor appen ska ha i version 1.0
- hur startsidan ska fungera som användarens arbetsyta
- hur pågående, slutförda och nya egenkontroller ska presenteras
- hur mallbiblioteket ska vara tillgängligt utan att dominera
- hur nästa steg, aktivitet och status ska visas
- vilka återkommande UI-mönster som ska användas
- hur produktkänslan ska hållas komplett men avgränsad

Dokumentet styr inte teknisk implementation, databasdesign, komponentkod, paketval eller exakt visuell detaljdesign.

## 3. Relation Till APP_BLUEPRINT.md

`APP_BLUEPRINT.md` är produktens godkända kravbild och källa för scope.

`PRODUCT_STRUCTURE.md` bryter ned hur den kravbilden ska organiseras som en sammanhängande produktupplevelse. Om dokumenten verkar krocka gäller blueprinten för scope och detta dokument för struktur och produktkänsla.

Detta dokument får inte lägga till funktioner utanför beslutad MVP. När strukturförslag kräver framtida funktioner ska de beskrivas som utanför v1.0 eller lämnas bort.

## 4. Relation Till Onboarding App v1.0

Onboarding App v1.0 är referens för visuell kvalitet, struktur, dokumentationsnivå och arbetssätt.

Egenkontroll App ska ärva samma känsla av:

- lugn SaaS-design
- tydlig hierarki
- luftiga ytor
- enkla kort
- stark primär handling
- korta texter
- stegvis vägledning

Egenkontroll App ska samtidigt kännas mer komplett än Onboarding App genom att ha en tydligare startsida och en mer produktlik arbetsyta. Onboarding App kan vara mer linjär. Egenkontroll App behöver stödja återkommande arbete: skapa, pausa, öppna igen, slutföra och exportera egenkontroller.

## 5. Produktstruktur För v1.0

Version 1.0 ska bestå av följande huvudytor:

- Startsida / Hemvy
- Projektöversikt
- Pågående egenkontroller
- Slutförda egenkontroller
- Mallbibliotek
- Skapa ny egenkontroll
- Egenkontrollens arbetsyta
- Sammanställning
- Signering
- Export

Startsidan är navet. Den ska visa aktuellt arbete, tydliga genvägar och nästa rimliga steg. Användaren ska kunna öppna en egenkontroll direkt från startsidan.

Produktstrukturen ska fungera även om användaren bara har en enda egenkontroll. Appen ska inte kräva organisation, team, kundportal eller avancerad behörighetsmodell för att kännas komplett.

## 6. Startsida / Hemvy

Startsidan ska vara användarens arbetsyta, inte en marknadsföringssida.

Den ska svara på tre frågor direkt:

- Vad är pågående?
- Vad är klart?
- Vad bör jag göra härnäst?

Startsidan ska innehålla:

- primär handling: `Skapa ny egenkontroll`
- kort sammanfattning av pågående egenkontroller
- kort sammanfattning av slutförda egenkontroller
- tydligt nästa steg
- senaste aktivitet
- diskret åtkomst till mallbiblioteket

Startsidan ska inte vara en tung dashboard. Den ska inte visa statistik för statistikens skull, diagram, organisationsdata eller försäljningsinnehåll.

Prioritering på startsidan:

1. Skapa ny egenkontroll.
2. Fortsätt där arbete finns.
3. Visa vad som är klart.
4. Ge snabb åtkomst till mallar.

## 7. Projektöversikt

Projektöversikten ska ge användaren en enkel bild av egenkontrollarbetet utan att införa ett separat projekthanteringssystem.

I v1.0 betyder projektöversikt:

- namn på projekt eller egenkontrollsammanhang
- antal pågående egenkontroller
- antal slutförda egenkontroller
- vilka kontroller som behöver nästa steg
- enkel åtkomst till relevanta egenkontrollkort

Projektöversikten ska inte bli en full projektmodul. Den ska vara en orienteringsyta som hjälper användaren att förstå läget.

Om appen i v1.0 inte har flera projekt som separat objekt ska startsidan ändå kunna visa samma typ av översikt för användarens egenkontroller.

## 8. Pågående Egenkontroller

Pågående egenkontroller ska visas som tydliga kort eller listposter.

Varje pågående egenkontroll bör visa:

- namn
- mall eller typ
- beställare/byggherre eller projekt om det finns
- status, till exempel `Utkast` eller `Pågående`
- antal behandlade kontrollpunkter
- antal punkter med avvikelse eller ej kontrollerad status
- senast ändrad
- nästa rekommenderade handling

Primär handling på ett pågående kort ska vara att öppna eller fortsätta egenkontrollen.

Pågående arbete ska aldrig gömmas bakom mallbiblioteket. Om det finns pågående egenkontroller ska de synas före eller i direkt anslutning till mallar.

## 9. Slutförda Egenkontroller

Slutförda egenkontroller ska vara lätta att hitta men inte konkurrera med pågående arbete.

Varje slutförd egenkontroll bör visa:

- namn
- mall eller typ
- slutförd datum
- utfört av
- granskningsstatus om den finns
- exportmöjlighet

Primära handlingar:

- öppna sammanställning
- exportera eller skriv ut

Slutförda egenkontroller ska kännas arkiverade och trygga, men inte som ett dokumenthanteringssystem.

## 10. Mallbibliotek Och Frågebank

Mallbiblioteket ska finnas tillgängligt men inte dominera startsidan.

Syftet med mallbiblioteket är att hjälpa användaren välja rätt startpunkt för en ny egenkontroll.

Masterlistan ska behandlas som frågebank. Det betyder att mallbiblioteket inte bara väljer en lista med punkter, utan väljer ett färdigt frågeflöde som kan guida användaren genom kontrollen.

Mallbiblioteket ska visa:

- mallnamn
- kort beskrivning
- kategori eller område
- antal frågor eller kontrollpunkter om det är känt
- tydlig handling för att skapa egenkontroll från mallen
- tom egenkontroll som alternativ

Mallbiblioteket ska vara lugnt och överskådligt. Det ska inte kännas som en marketplace eller en stor plattform.

Frågebanken ska inte visas som intern metadata. Användaren ska möta den som korta, tydliga frågor med hjälptext, standardval och nästa steg.

## 11. Att Göra / Nästa Steg

Appen ska visa nästa rimliga steg utan att användaren behöver leta.

Nästa steg kan vara:

- fyll i projektinformation
- granska kontrollpunkter
- fortsätt kontrollera punkter
- kommentera ej godkända punkter
- hantera ej kontrollerade punkter
- granska sammanställning
- signera som utförare
- låt kontrollansvarig granska
- exportera rapport

Nästa steg ska vara konkret och handlingsinriktat. Skriv inte abstrakta statusmeddelanden om användaren behöver en tydlig handling.

Bra exempel:

- `Fortsätt kontrollera 6 punkter`
- `Lägg till kommentar på 2 avvikelser`
- `Granska sammanställningen`
- `Signera egenkontrollen`

Sämre exempel:

- `Status uppdaterad`
- `Process pågår`
- `Åtgärd krävs`

## 12. Senaste Aktivitet

Senaste aktivitet ska hjälpa användaren förstå vad som hänt senast och var det är rimligt att fortsätta.

Aktivitet kan visa:

- egenkontroll skapad
- kontrollpunkt uppdaterad
- kommentar tillagd
- egenkontroll signerad
- granskning registrerad
- export skapad

Aktiviteten ska vara kort och praktisk. Den ska inte bli en full revisionslogg i v1.0.

Exempel:

- `Badrum - Brf Eken uppdaterades idag`
- `3 kontrollpunkter markerades som godkända`
- `Sammanställning klar för signering`

## 13. Skapa Ny Egenkontroll

`Skapa ny egenkontroll` ska vara appens primära handling.

Flödet ska hjälpa användaren att:

1. välja mall eller tom egenkontroll
2. namnge egenkontrollen
3. ange projektinformation
4. ange beställare/byggherre
5. ange entreprenör
6. lägga till referenser
7. granska och anpassa kontrollfrågor
8. starta kontrollen

Användaren ska förstå att en vald mall kopieras till den nya egenkontrollen. Anpassningar ska gälla den aktuella egenkontrollen, inte originalmallen.

Flödet ska kännas som en förberedelse inför arbete, inte som kontoregistrering eller administrativ onboarding.

## 14. Egenkontrollens Arbetsyta

Egenkontrollens arbetsyta är där användaren genomför kontrollen.

Arbetsytan ska visa:

- egenkontrollens namn
- relevant projektinformation
- referenser
- progress
- grupperade kontrollfrågor
- statusval: Godkänd, Ej godkänd, Ej kontrollerad
- ej bedömd status för obehandlade punkter
- kontrollant
- datum
- kommentar
- nästa kontrollpunkt eller nästa steg

Arbetsytan ska vara fokuserad. Den ska inte visa startsidans alla sektioner eller mallbiblioteket samtidigt.

Kontrollfrågans kort eller rad ska göra det tydligt:

- vad som ska kontrolleras
- vad användaren rekommenderas att svara om allt är normalt
- vilket resultat som är valt
- om kommentar krävs
- vem som kontrollerat
- när kontrollen gjordes
- varför frågan finns om användaren behöver hjälp

## 15. Sammanställning

Sammanställningen ska hjälpa användaren förstå om egenkontrollen är redo att signeras, granskas och exporteras.

Den ska visa:

- antal godkända punkter
- antal ej godkända punkter
- antal ej kontrollerade punkter
- antal ej bedömda punkter
- avvikelser och kommentarer
- övriga anteckningar
- saknade uppgifter
- status för signering och granskning

Sammanställningen ska prioritera det som kräver uppmärksamhet. Om allt är klart ska det kännas tydligt och lugnt.

## 16. Signering

Signering i v1.0 är en enkel bekräftelse med namn och tidsstämpel.

Signering ska finnas för:

- utfört av
- kontrollansvarig eller ansvarig granskare

Signeringen ska inte presenteras som BankID, avancerad e-signering eller kvalificerad elektronisk signatur.

Signeringsytan ska vara tydlig:

- vem signerar?
- vad bekräftas?
- när sker signeringen?
- finns punkter som bör granskas först?

Om punkter är ej bedömda ska appen varna innan slutförande.

## 17. Export

Exporten ska göra egenkontrollen användbar utanför appen.

Version 1.0 ska prioritera:

- PDF
- utskrift

Exporten ska innehålla:

- dokumentnamn
- projektuppgifter
- beställare/byggherre
- entreprenör
- referenser
- kontrollpunkter
- resultat
- datum och kontrollant
- kommentarer
- övriga anteckningar
- utfört av
- kontrollansvarig eller ansvarig granskare
- förklaring av status

Exporten ska vara mer formell än arbetsytan, men fortfarande lätt att läsa. Den ska inte kopiera Word-layouten sida för sida.

## 18. Tomma Lägen

Tomma lägen ska vara hjälpsamma och handlingsinriktade.

Startsidan ska fungera även när användaren bara har en enda egenkontroll eller ingen egenkontroll alls.

Exempel på tomlägen:

### Ingen Egenkontroll Finns

Budskap:

> Skapa din första egenkontroll och välj en mall som passar arbetet.

Primär handling:

> Skapa ny egenkontroll

### Inga Pågående Egenkontroller

Budskap:

> Det finns inga pågående egenkontroller just nu.

Primär handling:

> Skapa ny egenkontroll

Sekundär handling:

> Visa mallbibliotek

### Inga Slutförda Egenkontroller

Budskap:

> Slutförda egenkontroller visas här när de är signerade och klara.

### Mallbibliotek Saknar Matchning

Budskap:

> Ingen mall matchar din sökning. Du kan skapa en tom egenkontroll och lägga till egna kontrollpunkter.

## 19. Fel- Och Varningslägen

Fel- och varningslägen ska hjälpa användaren att rätta till problemet.

Varningar bör visas när:

- obligatorisk projektinformation saknas
- referenser saknas inför start om det krävs i flödet
- en punkt är `Ej godkänd` utan kommentar
- en punkt är `Ej kontrollerad` utan kommentar
- användaren försöker slutföra med `Ej bedömd` punkter
- export inte kan skapas
- sparning misslyckas

Språket ska vara konkret och lugnt.

Bra exempel:

- `Skriv en kommentar innan du går vidare. Punkten är markerad som ej godkänd.`
- `3 punkter är fortfarande ej bedömda. Kontrollera dem eller fortsätt medvetet.`
- `Exporten kunde inte skapas. Försök igen.`

Undvik:

- tekniska felkoder utan förklaring
- skuldbeläggande språk
- långa juridiska varningar

## 20. Mobilstruktur

Appen ska vara mobilvänlig från början.

På mobil ska strukturen prioritera:

- primär handling
- pågående egenkontroller
- nästa steg
- enkel åtkomst till slutförda kontroller
- diskret åtkomst till mallbibliotek

Egenkontrollens arbetsyta på mobil ska bygga på tydliga kontrollpunktskort med stora statusknappar.

Mobilprinciper:

- en huvudhandling per vy
- korta rubriker
- tydlig progress
- status med både text och färg
- kommentarer nära den kontrollpunkt de gäller
- undvik breda tabeller
- export kan vara sekundär tills kontrollen är klar

## 21. Återanvändbara UI-Mönster

Projektkort och egenkontrollkort ska bli återkommande UI-mönster.

### Egenkontrollkort

Används för pågående och slutförda egenkontroller.

Bör innehålla:

- namn
- mall eller typ
- status
- progress eller slutförd datum
- viktig varning om avvikelse finns
- nästa handling

### Projektkort

Används när flera egenkontroller behöver grupperas under samma projekt eller sammanhang.

Bör innehålla:

- projektnamn
- antal pågående egenkontroller
- antal slutförda egenkontroller
- senaste aktivitet
- genväg till projektöversikt

Projektkort får inte kräva avancerad projektmodul i v1.0.

### Statusbricka

Används för:

- Utkast
- Pågående
- Klar för granskning
- Granskad
- Slutförd
- Godkänd
- Ej godkänd
- Ej kontrollerad
- Ej bedömd

Status ska alltid visas med text. Färg är stöd, inte enda informationsbärare.

### Nästa Steg-Kort

Används på startsida, projektöversikt och sammanställning.

Bör innehålla:

- kort rubrik
- konkret instruktion
- primär handling
- eventuell varning eller antal punkter

### Mallkort

Används i mallbibliotek och vid skapande av ny egenkontroll.

Bör innehålla:

- mallnamn
- kort beskrivning
- område
- antal frågor eller kontrollpunkter om känt
- handling: skapa från mall

### Frågekort

Används i egenkontrollens arbetsyta.

Bör innehålla:

- fråga
- kort hjälptext eller länk till hjälp
- statusval eller svarskontroll
- standardval när det är lämpligt
- kommentar nära svaret
- villkorad följdfråga när svaret kräver mer information
- tydligt nästa steg

## 22. Vad Som INTE Ingår

Version 1.0 ska inte innehålla:

- stor gemensam plattform
- organisationshantering
- teamadministration
- behörighetsmatris
- kundportal
- marketplace
- abonnemangshantering
- betalningssystem
- BankID
- avancerad e-signering
- avancerat dokumenthanteringssystem
- ärendehantering
- meddelandesystem
- chatt
- realtidssamarbete
- statistikplattform
- AI-genererade kontrollpunkter
- automatisk juridisk kontroll mot PBL
- fotouppladdning om den inte uttryckligen godkänns för v1.0

Appen ska kännas komplett genom tydlig struktur, inte genom fler moduler.

## 23. Definition Of Done För Produktstruktur

Produktstrukturen är redo för implementation när:

- startsidan är definierad som användarens arbetsyta
- `Skapa ny egenkontroll` är primär handling
- användaren alltid kan se pågående arbete
- användaren alltid kan se vad som är klart
- användaren alltid kan se nästa rimliga steg
- en egenkontroll kan öppnas från startsidan
- mallbiblioteket är tillgängligt men inte dominerande
- projektkort och egenkontrollkort är definierade som återkommande mönster
- frågekort är definierat som återkommande mönster
- tomma lägen är hjälpsamma
- fel- och varningslägen hjälper användaren framåt
- mobilstrukturen fungerar utan breda tabeller
- signering och export följer beslutad MVP
- inga funktioner utanför `APP_BLUEPRINT.md` har lagts till
- appen känns som ett digitalt kontrollcenter, inte som en Word-blankett på skärm
