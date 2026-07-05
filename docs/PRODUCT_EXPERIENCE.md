# Product Experience

## 1. Syfte

Detta dokument definierar hur Egenkontroll App ska kännas.

Det styr produktens personlighet, tempo, emotionella kvalitet, rörelse, mikrointeraktioner och känslan av framsteg. Dokumentet beskriver inte teknisk implementation, komponentkod, databas, paketval eller exakt visuell detaljdesign.

Egenkontroll App ska kännas som en lugn, erfaren arbetsledare i digital form: tydlig, trygg, praktisk och nära byggvardagen.

## 2. Vad Dokumentet Styr

Detta dokument ska användas vid all framtida UX, design och implementation när beslut påverkar produktens upplevelse.

Dokumentet styr:

- produktpersonlighet
- emotionella mål
- tempo och rytm
- rörelse och animation
- mikrointeraktioner
- ljud och haptik
- progress och bekräftelser
- färgpsykologi
- mikrocopy
- stressminimering
- framåtkänsla
- hur användaren ska känna efter varje steg

Om en framtida implementation gör appen mer stressig, mer komplicerad eller mer administrativ än detta dokument beskriver ska lösningen omarbetas.

## 3. Relation Till Övriga Dokument

`APP_BLUEPRINT.md` styr produktens scope och krav.

`PRODUCT_STRUCTURE.md` styr produktens övergripande ytor, flöden och återkommande mönster.

`UX_GUIDELINES.md` styr hur appen vägleder användaren genom flöden.

`LANGUAGE_GUIDE.md` styr språk, ton och ordval.

`CONTENT_GUIDE.md` styr texttyper, hjälptexter och innehållsstruktur.

`PRODUCT_EXPERIENCE.md` styr känslan i allt detta: hur appen upplevs när användaren arbetar.

## 4. Inspirationsnivå

Produkten får inspireras av moderna produkter som Linear, Stripe, Apple och Typeform, men ska aldrig kännas som en kopia av dem.

Inspirationen ska tolkas så här:

- Linear: tydlighet, fokus, snabbhet och låg friktion
- Stripe: förtroende, precision, polish och genomtänkt feedback
- Apple: lugn, enkelhet, självklarhet och respekt för användarens uppmärksamhet
- Typeform: stegvis framåtrörelse, mänsklig ton och minskad formulärkänsla

All inspiration ska anpassas till små och medelstora byggföretag. Appen ska kännas professionell utan att vara exklusiv, modern utan att vara trendig och enkel utan att vara förenklad på fel sätt.

## 5. Produktpersonlighet

Egenkontroll App ska vara:

- lugn
- tydlig
- praktisk
- pålitlig
- arbetsnära
- hjälpsam
- saklig
- modern
- respektfull

Appen ska inte vara:

- lekfull på ett sätt som förminskar kontrollarbetet
- överdesignad
- stressande
- myndighetslik
- konsultmässig
- säljig
- tekniskt självupptagen
- full av onödiga val

Den bästa mentala bilden är en erfaren arbetsledare som står bredvid användaren och säger: "Vi tar nästa sak i rätt ordning."

## 6. Känslomål

Användaren ska känna:

- kontroll över vad som är gjort och vad som återstår
- trygghet i att viktiga uppgifter inte missas
- lugn även när det finns avvikelser
- att appen hjälper arbetet framåt
- att dokumentationen blir professionell utan onödig administration
- att det går att pausa och fortsätta senare utan oro
- att slutförd egenkontroll känns färdig, tydlig och användbar

Appen ska minska känslan av:

- "Jag vet inte var jag ska börja"
- "Har jag missat något?"
- "Det här blir en massa pappersarbete"
- "Systemet kräver mer än jobbet kräver"
- "Jag vågar inte gå vidare för jag kanske gör fel"

## 7. Tempo

Tempot ska vara lugnt men framåtdrivande.

Användaren ska aldrig känna sig jagad, men appen ska hela tiden göra nästa steg synligt. Flöden ska kännas korta eftersom varje steg har ett tydligt syfte.

Principer:

- Visa ett huvudbeslut i taget när användaren skapar eller slutför en egenkontroll.
- Låt användaren göra snabba statusval i arbetsytan.
- Bekräfta viktiga steg direkt men diskret.
- Undvik onödiga mellanlägen.
- Undvik långa formulär som måste förstås innan arbetet kan börja.
- Gör det lätt att återuppta utan att läsa om allt.

Rytmen ska kännas som:

```text
Förstå läget -> gör nästa sak -> få bekräftelse -> fortsätt
```

## 8. Rörelse

Rörelse ska användas för orientering, inte dekoration.

Rörelse ska hjälpa användaren att förstå:

- att ett val har registrerats
- att appen går vidare till nästa steg
- att progress har ökat
- att något kräver uppmärksamhet
- att en yta öppnas, stängs eller uppdateras

Rörelse ska vara:

- kort
- mjuk
- förutsägbar
- återhållsam
- konsekvent

Rörelse ska inte vara:

- studsande
- teatralisk
- långsam
- överraskande
- beroende av att användaren väntar

## 9. Animationer

Animationer ska kännas subtila och funktionella.

Rekommenderade användningsområden:

- stegövergångar
- statusval på kontrollpunkt
- progress som fylls på
- bekräftelse efter sparning
- mjuk öppning av kommentar eller detaljer
- diskret varning när något saknas

Animationer ska inte användas för:

- marknadsföringskänsla
- belöningar som inte passar kontrollarbete
- effekter som drar bort fokus från kontrollpunkten
- långsamma sidövergångar

Om animationen inte gör appen tydligare ska den tas bort.

## 10. Mikrointeraktioner

Mikrointeraktioner ska göra appen trygg och lätt att läsa.

Exempel på önskad känsla:

- När användaren markerar `Godkänd` ska valet kännas direkt och säkert.
- När användaren markerar `Ej godkänd` ska kommentarsfältet komma nära beslutet och kännas som en naturlig fortsättning.
- När en kommentar krävs ska appen visa det sakligt, inte som ett felsteg.
- När allt obligatoriskt är klart ska nästa steg bli tydligt utan att användaren behöver leta.
- När en egenkontroll sparas ska användaren se att arbetet är tryggt sparat.

Mikrointeraktioner ska vara byggda kring arbetsro, inte underhållning.

## 11. Ljud

Appen ska som grund vara tyst.

Ljud får inte krävas för att förstå status, bekräftelser eller varningar. Byggmiljöer är ofta bullriga, delade eller mobila, och appen ska fungera utan ljud.

Om ljud någon gång införs i framtiden ska det vara:

- avstängt som standard
- kort
- diskret
- lätt att stänga av
- aldrig den enda bekräftelsen

Ljud ska inte användas för negativa resultat eller stressande varningar.

## 12. Progress

Progress ska skapa lugn och framåtkänsla.

Progress ska visa:

- hur många kontrollpunkter som är behandlade
- hur många som återstår
- om något stoppar slutförande
- vad nästa rimliga steg är

Progress ska inte bara vara procent. Den ska vara begriplig i arbetstermer.

Bra exempel:

- `12 av 17 punkter kontrollerade`
- `2 punkter behöver kommentar`
- `Redo för sammanställning`
- `3 punkter kvar innan signering`

Sämre exempel:

- `70 %`
- `Process pågår`
- `Ofullständig`
- `Status: 4`

Progress ska alltid svara på användarens tysta fråga: "Vad behöver jag göra nu?"

## 13. Bekräftelser

Bekräftelser ska vara tydliga, korta och proportionerliga.

Små handlingar ska få små bekräftelser:

- status ändrad
- kommentar sparad
- datum uppdaterat
- kontrollant angiven

Stora handlingar ska få tydligare bekräftelser:

- egenkontroll skapad
- kontroll startad
- sammanställning klar
- signering registrerad
- export skapad

Bekräftelser ska inte kännas festliga. De ska kännas professionella och trygga.

Exempel:

- `Sparat`
- `Punkten är markerad som godkänd`
- `Kommentaren är sparad`
- `Egenkontrollen är klar för signering`
- `Exporten är skapad`

## 14. Färgpsykologi

Färger ska stödja förståelse och lugn.

Den visuella basen ska vara neutral, ljus, luftig och professionell. Färg ska användas sparsamt så att statusar och viktiga handlingar blir tydliga.

Rekommenderad känsla:

- blå accent för trygg primär handling och modern SaaS-känsla
- grön för godkänd och färdigt
- röd för ej godkänd eller avvikelse
- amber eller neutral grå för ej kontrollerad
- neutral grå för ej bedömd, vilande eller sekundärt innehåll

Färg ska aldrig vara den enda informationsbäraren. Status ska alltid visas med text.

Rött ska användas med återhållsamhet. En avvikelse är viktig information, inte ett misslyckande. Färgen ska hjälpa användaren att agera, inte skapa oro.

## 15. Mikrocopy

Mikrocopy ska vara kort, konkret och arbetsnära.

Den ska:

- säga vad användaren kan göra nu
- bekräfta vad som hänt
- förklara varför något krävs
- undvika skuld
- undvika tekniska detaljer om de inte hjälper
- undvika juridisk tyngd där saklig enkelhet räcker

Bra mikrocopy:

- `Välj en mall som passar arbetet.`
- `Du kan ändra kontrollpunkterna innan du startar.`
- `Skriv en kommentar så att avvikelsen går att följa upp.`
- `Alla obligatoriska uppgifter är klara.`
- `Du kan fortsätta senare. Arbetet är sparat.`

Undvik:

- `Felaktig input`
- `Validering misslyckades`
- `Åtgärd krävs enligt process`
- `Du måste slutföra alla obligatoriska moment innan flödet kan fortsätta`

## 16. Haptik På Mobil

Haptik kan användas i mobilupplevelsen om tekniken senare stödjer det, men den ska vara återhållsam och aldrig nödvändig.

Haptik passar för:

- statusval
- slutförd kontrollpunkt
- signering registrerad
- export skapad

Haptik ska inte användas för:

- varningar som redan kan skapa stress
- varje tangenttryckning eller liten interaktion
- dekorativa effekter

Om haptik används ska den kännas som en diskret fysisk bekräftelse, inte som en belöning.

## 17. Hur Appen Minimerar Stress

Appen minimerar stress genom att:

- visa nästa steg tydligt
- begränsa antalet synliga val
- använda vardagligt språk
- göra sparstatus tydlig
- separera pågående arbete från slutfört arbete
- visa avvikelser sakligt
- kräva kommentarer bara när det ger spårbarhet
- göra det lätt att pausa
- undvika tunga dashboards
- undvika onödig statistik
- undvika tekniska felmeddelanden
- undvika att användaren måste förstå hela systemet för att göra en kontroll

Stress ska inte minskas genom att dölja viktig information. Appen ska visa rätt information vid rätt tidpunkt.

## 18. Hur Appen Skapar Framåtkänsla

Framåtkänsla skapas genom små tydliga steg.

Appen ska hela tiden hjälpa användaren att känna:

- "Jag vet vad jag ska göra nu."
- "Det här går framåt."
- "Det jag nyss gjorde sparades."
- "Jag kan komma tillbaka senare."
- "Det finns en tydlig väg till färdig kontroll."

Framåtkänsla ska inte skapas genom gamification, poäng, badges eller överdrivna effekter. Den ska skapas genom tydlig struktur, konkret progress och konsekventa bekräftelser.

## 19. Känsla Efter Varje Huvudsteg

### Startsida

Användaren ska känna överblick.

Efter att ha öppnat appen ska användaren förstå vad som är pågående, vad som är klart och vad som är rimligt att göra härnäst.

### Välj Mall

Användaren ska känna att valet är hanterbart.

Mallbiblioteket ska kännas som en praktisk hjälp, inte som en katalog, marketplace eller plattform.

### Projektinformation

Användaren ska känna att grunden blir ordnad.

Steget ska kännas som förberedelse inför arbete, inte som administration för systemets skull.

### Anpassa Kontrollpunkter

Användaren ska känna ägarskap.

Det ska vara tydligt att kontrollen kan anpassas till verkligt arbete utan att originalmallen förstörs.

### Starta Kontroll

Användaren ska känna fokus.

När kontrollen startar ska appen minska brus och hjälpa användaren att ta punkt för punkt.

### Bedöm Kontrollpunkt

Användaren ska känna snabbhet och precision.

Statusval ska vara tydliga, stora och nära kontrollpunktens text. Kommentar ska finnas där den behövs.

### Hantera Avvikelse

Användaren ska känna lugn ansvarskänsla.

Appen ska visa att avvikelsen behöver beskrivas, men inte få användaren att känna att något gått sönder i appen.

### Sammanställning

Användaren ska känna kontroll.

Sammanställningen ska visa vad som är klart, vad som återstår och om egenkontrollen är redo för signering.

### Signering

Användaren ska känna tydlighet och ansvar.

Det ska vara klart vem som signerar, vad som bekräftas och om något bör granskas först.

### Export

Användaren ska känna avslut.

Exporten ska kännas som ett professionellt dokument som kan delas, sparas eller skrivas ut utan extra bearbetning.

### Återuppta Arbete

Användaren ska känna trygg fortsättning.

Det ska vara lätt att se var arbetet pausades och vad nästa steg är.

## 20. Upplevelseprinciper För Framtida Implementation

Alla framtida UX- och implementationbeslut ska kontrolleras mot dessa principer:

1. Gör nästa steg tydligt.
2. Gör status begriplig med text, färg och placering.
3. Visa bara det som hjälper användaren just nu.
4. Bekräfta handlingar diskret och direkt.
5. Behandla avvikelser som information, inte som fel.
6. Gör progress konkret.
7. Håll rörelse kort och funktionell.
8. Låt appen vara tyst som standard.
9. Skriv som en erfaren arbetsledare.
10. Bygg för mobil arbetsvardag från början.
11. Undvik funktioner som skapar plattformskänsla.
12. Låt slutförande kännas professionellt och tryggt.

## 21. Definition Of Done För Produktupplevelse

Produktupplevelsen är redo att styra implementation när:

- appen har en tydlig personlighet
- emotionella mål är definierade
- tempo och rörelse är styrda
- animationer och mikrointeraktioner har principer
- ljud och haptik är avgränsade
- progress och bekräftelser är definierade
- färgpsykologi stödjer status och lugn
- mikrocopy stödjer framåtrörelse
- stressminimering är ett uttalat designkrav
- varje huvudsteg har en definierad känsla
- dokumentet kan användas som QA-underlag vid framtida UX- och implementationgranskning
