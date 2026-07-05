# Knowledge Base

## Syfte

Detta dokument samlar verifierad domänkunskap för Egenkontroll App. Det beskriver vad en egenkontroll är i praktiken, vilka arbetsflöden och roller som behöver stöd, hur kontrollpunkter bör förstås och vilka UX-, språk- och innehållsinsikter som ska styra senare produktdokument.

Kunskapsbasen extraherar kunskap ur källmaterialet. Den kopierar inte Word-layout, tabellstruktur eller grafisk form.

## Innehåll

1. [Syfte](#syfte)
2. [Innehåll](#innehåll)
3. [Källhierarki](#källhierarki)
4. [Hur Dokumentet Ska Användas](#hur-dokumentet-ska-användas)
5. [Grundförståelse](#grundförståelse)
6. [Egenkontroll Och Kontrollplan Enligt PBL](#egenkontroll-och-kontrollplan-enligt-pbl)
7. [Standardflöde För En Egenkontroll](#standardflöde-för-en-egenkontroll)
8. [Kontrollresultat](#kontrollresultat)
9. [Kontrollpunktens Kunskapsmodell](#kontrollpunktens-kunskapsmodell)
10. [Mallbibliotek Och Kontrollområden](#mallbibliotek-och-kontrollområden)
11. [Roller Och Ansvar](#roller-och-ansvar)
12. [Vanliga Användarbehov](#vanliga-användarbehov)
13. [Vanliga Misstag Appen Ska Förebygga](#vanliga-misstag-appen-ska-förebygga)
14. [UX-Insikter](#ux-insikter)
15. [Hjälptexter Och Mikrocopy](#hjälptexter-och-mikrocopy)
16. [Språkprinciper](#språkprinciper)
17. [Bästa Praxis För Innehåll Och Produkt](#bästa-praxis-för-innehåll-och-produkt)
18. [Intern Kvalitetsgranskning](#intern-kvalitetsgranskning)
19. [Spårbarhetsmatris](#spårbarhetsmatris)
20. [Krav På Framtida Härledda Dokument](#krav-på-framtida-härledda-dokument)
21. [Öppna Källluckor](#öppna-källluckor)

## Källhierarki

Primära källor:

- `[K1]` `docs/source-material/orignals/Word/Egenkontroll för bygg (mall).docx`
- `[K2]` `docs/source-material/orignals/PDF/Egenkontroll för bygg (mall).pdf`

Styrande projektkälla:

- `[K3]` `docs/APP_BLUEPRINT.md`

Verifierade externa kompletteringskällor:

- `[K4]` Boverket, PBL kunskapsbanken: Kontrollplan
  `https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/`
- `[K5]` Boverket, PBL kunskapsbanken: Kontrollplanens innehåll
  `https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/kontrollplanens-innehall/`
- `[K6]` Boverket, PBL kunskapsbanken: Kontrollplanens utformning
  `https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/kontrollplanens-utformning/`
- `[K7]` Boverket: Börja bygga
  `https://www.boverket.se/sv/byggande/forebygg-fel-brister-skador/stod-forandring/korrekt-tillampning/borjabygga/`

Källstatus:

- Word- och PDF-originalet från KvalitetsDokument.se innehåller samma kärnkunskap: instruktion, ansvar, utförande, blankettfält, kontrollresultat och signeringslogik.
- PDF-originalet används främst för att förstå export- och blankettförväntan.
- Word-originalet används främst för textinnehåll och arbetslogik.
- Den masterlista som nämns i `APP_BLUEPRINT.md` finns inte som separat originalfil i `docs/source-material/` vid denna uppdatering. Blueprintens uppgifter om 11 huvudmallar och 123 kontrollpunkter betraktas därför som godkänd projektanalys, inte som primär originalkälla i denna kunskapsbas.

Källmarkeringar används så här:

- `[K1]` och `[K2]` markerar kunskap direkt från originalprodukten från KvalitetsDokument.se.
- `[K3]` markerar godkänd produktanalys och beslut från blueprinten.
- `[K4]` till `[K7]` markerar verifierande eller kompletterande sakstöd från Boverket.
- `[Härledning]` markerar slutsats som följer av källorna men inte är ordagrant hämtad från en enskild källa.
- `[Granskningsnotering]` markerar intern kvalitetsbedömning, lucka eller rekommendation.

## Hur Dokumentet Ska Användas

Använd detta dokument när:

- nya funktioner ska planeras
- datamodell och begrepp ska härledas
- kontrollpunkter ska struktureras
- mallar ska skapas eller kvalitetssäkras
- hjälptexter, etiketter och felmeddelanden ska skrivas
- exportinnehåll ska kontrolleras mot användarens verkliga behov
- UX-flöden ska bedömas mot praktiskt byggarbete

Skapa inte separata produktbeslut, språkregler eller domänmodeller direkt från antaganden. Härledd kunskap ska först landa här och därefter föras vidare till rätt styrdokument.

## Grundförståelse

### Vad Egenkontroll Betyder

Källmarkering: `[K1]`, `[K2]`, `[Härledning]`

En egenkontroll är en dokumenterad kontroll av att ett utfört arbetsmoment uppfyller de krav som arbetet ska kontrolleras mot. I originalmallen uttrycks syftet som att säkerställa att arbetet har skett enligt fastställda regler, minska behovet av extern kontroll senare i processen och kunna bevisa för en utomstående part att kontrollen har utförts.

I appen ska egenkontroll därför förstås som tre saker samtidigt:

- ett arbetsverktyg under projektets gång
- en kvalitetssäkring av utfört arbete
- ett dokumentationsunderlag som kan granskas, sparas och exporteras

Egenkontrollen är inte bara en checklista. Den behöver fånga vad som kontrollerats, vilket resultat kontrollen fick, när den gjordes, vem som gjorde den och vilka avvikelser eller obesvarade punkter som kräver uppföljning.

### Praktiskt Syfte

Källmarkering: `[K1]`, `[K2]`, `[Härledning]`

Egenkontrollens praktiska värde är att:

- skapa tydlighet om vad som ska kontrolleras innan arbetet avslutas
- minska risken att fel upptäcks för sent
- visa att rätt person eller roll har kontrollerat rätt moment
- ge platschef, ansvarig eller kontrollansvarig ett samlat underlag
- göra det lättare att spåra fel, ej kontrollerade moment och beslut om åtgärd
- skapa en export som kan lämnas vidare utan muntliga förklaringar

### Vad Appen Inte Ska Påstå

Källmarkering: `[K3]`, `[K4]`, `[K5]`, `[K6]`, `[K7]`, `[Härledning]`

Appen ska inte ge juridisk rådgivning, tolka PBL automatiskt eller påstå att en enkel digital signering är en kvalificerad elektronisk signatur.

Appen kan hjälpa användaren att dokumentera egenkontroll, men ansvar enligt lag, avtal och kontrollplan ligger fortfarande hos berörda parter.

## Egenkontroll Och Kontrollplan Enligt PBL

Källmarkering: `[K1]`, `[K4]`, `[K5]`, `[K6]`, `[K7]`, `[Härledning]`

Originalmallen nämner PBL, byggherre, kontrollplan, underentreprenörer, sakkunniga och kontrollansvarig. Boverkets vägledning behövs för att tydliggöra gränserna.

### Kontrollplan Enligt PBL

En kontrollplan enligt PBL är ett dokument för bygg-, rivnings- eller markåtgärder där det ska framgå vilka kontroller som ska göras och vilka krav kontrollerna avser. Kontrollplanen ska också visa vem som ska göra kontrollerna och hur de ska utföras.

Boverket anger att kontrollplanen bör vara enkel att överblicka och att kontrollpunkterna är det centrala innehållet. För varje kontrollpunkt bör det framgå:

- vilken kontroll som ska göras
- vilka krav kontrollen ska avse
- vem som ska göra kontrollen
- hur kontrollen ska utföras
- mot vad kontrollen ska göras
- om kontrollen görs inom byggherrens dokumenterade egenkontroll eller av sakkunnig
- hur kontrollen dokumenteras
- när kontrollen ska ske

### Entreprenörens Egenkontroll

Entreprenörens egenkontroll är ofta mer praktisk och arbetsnära än kontrollplanen enligt PBL. Den kan ingå i företagets kvalitetsarbete och avtal mellan byggherre och entreprenör.

Appens kärnflöde ligger närmast entreprenörens eller projektets arbetsnära egenkontroll, men den behöver kunna bära information som också är relevant för kontrollplan och slutdokumentation: referenser, ansvarig kontrollant, datum, resultat, kommentar och signering.

### Viktig Gränsdragning

Det är viktigt att inte blanda ihop:

- kontrollplan enligt PBL
- byggherrens dokumenterade egenkontroll
- entreprenörens egenkontroll
- sakkunnigkontroll
- kontrollansvarigs uppföljning

Samma kontrollpunkt kan förekomma i flera sammanhang, men appen ska uttrycka sig neutralt: den dokumenterar egenkontroller och kan användas som underlag. Den ersätter inte kommunens kontrollplan, sakkunnigintyg eller kontrollansvarigs lagstadgade uppgifter.

## Standardflöde För En Egenkontroll

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

### 1. Förbered Egenkontrollen

Användaren behöver först skapa eller välja en egenkontroll och ge den ett begripligt namn. Originalmallen rekommenderar att namnet anger yrkesområde och byggprojektets namn.

Viktig information i förberedelsen:

- egenkontrollens namn
- projekt eller objekt
- beställare eller byggherre
- entreprenör
- vilka krav, ritningar eller handlingar kontrollen ska jämföras mot
- vilka kontrollmoment som ska ingå

UX-insikt:

- Användaren ska inte behöva förstå dokumentstruktur först. Flödet bör fråga efter de uppgifter som behövs och visa varför de behövs.

### 2. Ange Beställare Eller Byggherre

Originalmallen använder fältet `Beställare` men anger att man i stället kan skriva `Byggherre`.

Kunskap:

- `Beställare` är ett kommersiellt eller praktiskt projektrelaterat ord.
- `Byggherre` är ett PBL-nära ansvarsbegrepp.
- Appen bör stödja båda utan att tvinga användaren att välja juridisk nivå om det inte behövs.

UX-insikt:

- Fältetiketten bör kunna vara `Beställare/byggherre`.
- Hjälptexten bör förklara att användaren anger den part kontrollen utförs för eller den byggherre som ansvarar för projektet.

### 3. Ange Entreprenör

Originalmallen säger att entreprenören ska ange namnet på sin firma, men att fältet kan lämnas tomt om användaren agerar som byggherre.

Kunskap:

- Entreprenörsfältet identifierar den aktör som utför eller ansvarar för arbetet som kontrolleras.
- Det kan vara samma organisation som byggherren i små projekt.
- Det kan vara en underentreprenör i större projekt.

UX-insikt:

- Fältet bör vara tydligt men inte juridiskt överlastat.
- Tomt fält kan tillåtas i vissa fall, men exporten bör visa om uppgiften saknas.

### 4. Ange Referenser

Originalmallen anger `Referens till` och exemplifierar med kundkrav, ritning, egna krav och PBL.

Referenser kan vara:

- ritningar
- tekniska beskrivningar
- kundkrav
- kontrollplan
- branschregler
- egna kvalitetskrav
- avtalade handlingar
- PBL eller andra myndighetskrav när detta är relevant och sakgranskat

Kunskap:

- En kontrollpunkt blir svag om det inte framgår vad den kontrolleras mot.
- Referenser hjälper både utförare och granskare att förstå kontrollens grund.
- Flera referenser kan behövas för samma egenkontroll.

UX-insikt:

- Referenser bör kunna läggas till som en lista, inte bara som ett långt fritextfält.
- Hjälptext bör ge exempel utan att antyda att appen gör juridisk bedömning.

### 5. Anpassa Kontrollmoment

Originalmallen instruerar användaren att ange alla kontrollmoment som ska utföras i egenkontrollen.

Kunskap:

- Kontrollmomenten ska vara projektrelevanta.
- En standardmall är en startpunkt, inte ett facit för alla projekt.
- Irrelevanta punkter bör kunna tas bort eller markeras bort före start.
- Saknade projektkritiska punkter bör kunna läggas till.

UX-insikt:

- Anpassning bör ske innan genomförandet startar.
- Användaren bör se att ändringar bara påverkar den aktuella egenkontrollen, inte originalmallen.
- Det bör vara lätt att ändra ordning och gruppera punkter.

### 6. Utför Kontroll

Originalmallen anger följande arbetslogik:

- kontrollera momentet
- markera resultat 1, 2 eller 3
- ange datum och signera raden
- upprepa för varje kontrollmoment

Digitalt motsvaras detta av:

- läs kontrollpunkten
- välj status
- ange eller bekräfta kontrolldatum
- ange kontrollant
- skriv kommentar när resultatet kräver förklaring
- gå vidare till nästa punkt

UX-insikt:

- Kontrollmomentet ska vara huvudfokus.
- Statusval ska vara stora, tydliga och lätta att använda på mobil.
- Datum och kontrollant bör kunna fyllas i snabbt, gärna med rimliga förval.

### 7. Hantera Fel Och Ej Kontrollerade Moment

Originalmallen säger att övriga anteckningar kan användas för att kommentera varför vissa moment inte kontrollerats och vilka fel som upptäckts. Den säger också att ansvarig ska tillkallas när fel upptäckts för beslut om åtgärd.

Digital förbättring:

- Kommentar bör krävas direkt på varje punkt som är `Ej godkänd`.
- Kommentar bör krävas direkt på varje punkt som är `Ej kontrollerad`.
- En sammanställning bör lyfta alla sådana punkter så att de inte göms i allmänna anteckningar.

Kunskap:

- Ett fel är inte färdighanterat bara för att det dokumenterats.
- Appen bör visa att åtgärdsbeslut ligger utanför själva statusmarkeringen.
- Språk bör vara praktiskt: `Beskriv vad som avviker eller vad som behöver åtgärdas`.

### 8. Signera Utfört Arbete

Originalmallen har en slutrad `Utfört av` med namn, datum och signatur.

Kunskap:

- Detta är en sammanfattande bekräftelse av vem som utfört arbetet eller egenkontrollen.
- Den är skild från radvisa kontrollsigneringar.
- Den bör inte beskrivas som avancerad e-signering.

UX-insikt:

- Signering bör innehålla namn, datum och en tydlig bekräftelsetext.
- Användaren bör förstå att signeringen låser eller markerar egenkontrollen som färdig för granskning/export.

### 9. Lämna Till Platschef, Ansvarig Eller Kontrollansvarig

Originalmallen anger att egenkontrollen ska lämnas till platschef/ansvarig och senare överlämnas till kontrollansvarig, som ska kontrollera egenkontrollen och ange datum och signera blanketten.

Kunskap:

- Det finns minst två nivåer: den som utför/kontrollerar arbetet och den som granskar att egenkontrollen är komplett.
- `Platschef/ansvarig` är en praktisk projektroll.
- `Kontrollansvarig` är en särskild roll i PBL-sammanhang och ska inte blandas ihop med den person som utför varje kontroll.

UX-insikt:

- Appen bör stödja enkel granskningssignering.
- Granskaren behöver se avvikelser, ej kontrollerade punkter och ej bedömda punkter först.
- Granskaren bör kunna lägga en kommentar utan att ändra utförarens kontrollresultat.

### 10. Exportera Och Spara

Originalblanketten visar vilken information en slutrapport förväntas innehålla:

- egenkontrollens namn
- beställare eller byggherre
- entreprenör
- referenser
- kontrollmoment
- resultat
- datum
- signatur eller kontrollant
- övriga anteckningar
- utfört av
- kontrollansvarig
- förklaring av resultat

Kunskap:

- Exporten ska vara tydlig även för en person som inte använt appen.
- Exporten behöver bära spårbarhet, inte appens interna UI.
- PDF/utskrift bör vara dokumentnära, medan appens arbetsvy kan vara mer stegvis och mobilanpassad.

## Kontrollresultat

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

Originalmallen har tre resultat:

- `1` = Kontrollerat och godkänt
- `2` = Kontrollerat och ej godkänt
- `3` = Ej kontrollerat

Digitalt bör detta uttryckas som:

- `Godkänd`: kontrollen är utförd och resultatet är godkänt
- `Ej godkänd`: kontrollen är utförd men kravet uppfylls inte eller fel har upptäckts
- `Ej kontrollerad`: kontrollen har inte utförts, kunde inte utföras eller skulle inte utföras
- `Ej bedömd`: digital arbetsstatus för punkter som ännu inte behandlats

`Ej bedömd` finns inte som ruta i originalblanketten, men behövs digitalt för att skilja på pågående arbete och aktivt val av `Ej kontrollerad`.

Regler:

- Varje kontrollpunkt ska ha högst ett aktivt resultat.
- `Ej godkänd` ska kräva kommentar.
- `Ej kontrollerad` ska kräva kommentar.
- Slutförande ska varna om punkter är `Ej bedömd`.
- Färg får stödja status men får aldrig vara enda informationsbärare.

## Kontrollpunktens Kunskapsmodell

Källmarkering: `[K1]`, `[K3]`, `[K5]`, `[K6]`, `[Härledning]`

En kontrollpunkt är inte bara en textrad. Den bör förstås som en kontrollerbar fråga eller instruktion kopplad till ett krav, ett arbetsmoment och en ansvarig kontroll.

En välformad kontrollpunkt bör kunna svara på:

- vad ska kontrolleras?
- varför är kontrollen viktig?
- vad ska kontrollen jämföras mot?
- när bör den kontrolleras?
- vem eller vilken roll kan kontrollera?
- hur dokumenteras resultatet?
- kräver kontrollen särskild sakkunskap?
- vad ska hända om kontrollen inte godkänns?

I MVP kan alla dessa delar inte behöva vara separata fält, men kunskapen ska styra mallar, hjälptexter och framtida struktur.

### Egenskaper Som Bör Finnas I Data Eller Innehåll

- kontrollpunktens text
- grupp eller område
- ordning
- status
- kommentar
- kontrolldatum
- kontrollant
- eventuell referens eller kontrollgrund
- eventuell instruktion eller hjälptext
- källa eller mallversion

### Bra Kontrollpunkter

Bra kontrollpunkter är:

- konkreta
- kontrollerbara
- formulerade med vardagligt byggspråk
- möjliga att besvara med godkänd/ej godkänd/ej kontrollerad
- kopplade till ett faktiskt arbetsmoment
- tillräckligt tydliga för export och granskning

Exempel på bra formuleringstyp:

- `Kontrollera att arbetet är utfört enligt aktuell ritning.`
- `Kontrollera att infästningar är utförda enligt anvisning.`
- `Kontrollera att synliga skador eller brister är dokumenterade.`

### Svaga Kontrollpunkter

Svaga kontrollpunkter är:

- för breda
- juridiskt otydliga
- skrivna som instruktioner utan kontrollbar slutsats
- beroende av muntlig kunskap
- formulerade så att användaren inte vet vad som ska jämföras

Exempel på svag formuleringstyp:

- `Allt ska vara korrekt.`
- `Kontrollera bygg.`
- `PBL uppfyllt.`

## Mallbibliotek Och Kontrollområden

Källmarkering: `[K3]`, `[Granskningsnotering]`

Enligt den godkända blueprinten ska appens första innehållsversion omfatta 11 huvudmallar och en tom mall. Dessa utgör projektets planerade startbibliotek:

- Bygg - generell
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

Kunskap:

- Alla mallar ska använda samma grundflöde.
- Mallar ska vara data, inte separata appar eller separata kodflöden.
- En mall ska kunna anpassas till projektet innan kontrollen startar.
- Originalmallen ska inte ändras när användaren ändrar en enskild egenkontroll.

### Tom Egenkontroll

En tom egenkontroll behövs när användaren har egna kontrollpunkter eller ett projekt som inte passar någon färdig mall.

Den tomma egenkontrollen ska fortfarande följa samma kunskapsmodell:

- namn
- beställare/byggherre
- entreprenör
- referenser
- kontrollpunkter
- resultat
- kommentar
- signering
- granskning
- export

## Roller Och Ansvar

Källmarkering: `[K1]`, `[K4]`, `[K5]`, `[K6]`, `[K7]`, `[Härledning]`

### Byggherre

Byggherren är enligt Boverket den som för egen räkning utför eller låter utföra byggnads-, rivnings- eller markarbeten. Byggherren har ansvar för att kraven i PBL uppfylls och att kontroller görs i tillräcklig omfattning.

I originalmallen framgår att byggherren bör ställa krav på egenkontroller hos underentreprenörer och leverantörer, men att byggherren har det övergripande ansvaret.

Apprelevans:

- Byggherre kan vara angiven som motpart eller ansvarig part.
- Appen ska inte flytta ansvar från byggherre till entreprenör genom språkval.
- Hjälptexter ska vara neutrala och inte ge juridiska råd.

### Beställare

Beställaren är den part som arbetet utförs för i praktisk eller kommersiell mening. I många projekt kan beställaren också vara byggherre, men orden är inte alltid synonyma.

Apprelevans:

- Appen bör stödja etiketten `Beställare/byggherre`.
- Användaren ska kunna ange det namn som passar projektets dokumentation.

### Entreprenör

Entreprenören är den firma eller aktör som utför arbetet eller ansvarar för det kontrollerade momentet. Originalmallen instruerar användaren att ange firmanamnet här.

Apprelevans:

- Entreprenör bör synas i export.
- Underentreprenörer kan i praktiken utföra egna egenkontroller.
- Appen behöver i MVP inte ha avancerad organisationshantering för entreprenörskedjor.

### Underentreprenör

Originalmallen anger att underentreprenörer ofta genomför egenkontroll på det arbete de utfört och att krav på detta bör förmedlas till underentreprenören.

Apprelevans:

- Mallar och export ska fungera även när utföraren är underentreprenör.
- Språket bör inte förutsätta att användaren är huvudentreprenör.

### Utförare

Utförare är den person eller organisation som har utfört arbetet. I originalblanketten finns slutlig signering `Utfört av`.

Apprelevans:

- Utförare kan vara samma person som kontrollanten, men behöver inte vara det.
- `Utfört av` bör finnas som slutlig bekräftelse.

### Kontrollant

Kontrollanten är den person som faktiskt kontrollerar ett moment. Originalmallen säger att den som utfört arbetet ofta kontrollerar det, men att det bästa är om en annan medarbetare kan genomföra egenkontrollen.

Apprelevans:

- Varje kontrollerad punkt bör ha kontrollant och datum.
- Appen bör inte kräva att kontrollant alltid är en separat användare i MVP.

### Platschef Eller Ansvarig

Platschef eller ansvarig är den praktiska mottagaren när egenkontrollen ska lämnas vidare för uppföljning.

Apprelevans:

- Rollen behöver se en sammanställning, inte bara rad för rad.
- Avvikelser och ej kontrollerade punkter ska vara lätta att hitta.

### Kontrollansvarig

Kontrollansvarig enligt PBL hjälper byggherren med kontrollplanen och ska se till att kontrollplanen följs och att kontroller blir utförda. Boverket är tydligt med att det normalt inte ingår i kontrollansvarigs roll att utföra kontrollerna själv.

Apprelevans:

- Granskningssignering bör kunna kallas `Kontrollansvarig` när projektet använder den rollen.
- Appen ska inte antyda att kontrollansvarig har utfört varje kontrollpunkt.
- Kontrollansvarigs kommentar bör vara skild från kontrollantens punktkommentarer.

### Sakkunnig Eller Certifierad Kontrollant

Originalmallen anger att moment som kräver kvalificerad expertis ska kontrolleras av certifierad kontrollant eller annan sakkunnig. Boverket beskriver att kontroll enligt kontrollplan kan utföras inom byggherrens dokumenterade egenkontroll eller av sakkunnig.

Apprelevans:

- Vissa kontrollpunkter kan behöva hjälptext om att särskild kompetens kan krävas.
- Appen ska inte själv avgöra när sakkunnig krävs.
- Formulering bör vara försiktig: `Kontrollera om projektet kräver sakkunnig kontroll.`

## Vanliga Användarbehov

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

Användaren behöver kunna:

- komma igång utan att läsa ett långt dokument
- välja en relevant mall
- förstå skillnaden mellan att anpassa mallen och att utföra kontrollen
- ange rätt parter och referenser
- ta bort irrelevanta kontrollpunkter
- lägga till projektspecifika kontrollpunkter
- kontrollera punkt för punkt på mobil eller surfplatta
- snabbt markera godkänd, ej godkänd eller ej kontrollerad
- dokumentera varför något inte är godkänt eller inte kontrollerat
- se vad som återstår
- lämna vidare till ansvarig
- signera utan krånglig juridisk e-signering
- exportera en rapport som ser professionell ut
- återuppta pågående arbete utan informationsförlust

## Vanliga Misstag Appen Ska Förebygga

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

### Otydliga Referenser

Risk:

- Användaren kontrollerar ett moment utan att det framgår vilket krav, ritning eller handling kontrollen avser.

Förebygg:

- Ge tydlig hjälptext vid referenser.
- Visa referenser i både arbetsvy och export.

### Alla Anteckningar Samlas Sist

Risk:

- Fel och ej kontrollerade moment göms i ett allmänt anteckningsfält.

Förebygg:

- Kräv punktkommentar vid `Ej godkänd` och `Ej kontrollerad`.
- Sammanställ avvikelser separat.

### Ej Kontrollerad Blandas Ihop Med Ej Bedömd

Risk:

- Användaren lämnar en punkt tom och det tolkas som aktivt vald `Ej kontrollerad`.

Förebygg:

- Använd `Ej bedömd` som digital arbetsstatus.
- Varna vid slutförande om punkter fortfarande är ej bedömda.

### Kontrollansvarig Förväxlas Med Kontrollant

Risk:

- Appen får det att låta som att kontrollansvarig utfört alla kontroller.

Förebygg:

- Skilj på `Kontrollerad av` per punkt och `Granskad av kontrollansvarig`.

### Word-Blanketten Kopieras För Bokstavligt

Risk:

- Appen blir svår att använda på mobil och bevarar Word-dokumentets begränsningar.

Förebygg:

- Använd stegvis flöde i appen.
- Bevara dokumentstruktur först i export.

### Signering Övertolkas

Risk:

- Användaren tror att namn och tidsstämpel är kvalificerad elektronisk signatur.

Förebygg:

- Använd ord som `bekräfta`, `signera med namn` och `tidsstämpel`.
- Undvik juridiska påståenden om e-signering.

### För Många Funktioner I Första Versionen

Risk:

- Foton, ärendehantering, avancerad avvikelseprocess, BankID och organisationsroller gör appen tung.

Förebygg:

- Håll MVP nära egenkontrollens kärnflöde.
- Dokumentera framtida idéer separat, inte som krav här.

## UX-Insikter

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

### Appen Ska Vara Ett Arbetsflöde, Inte Ett Dokument

Word-originalet är en blankett. Appen ska hjälpa användaren genom arbetet:

- först välja eller skapa kontroll
- sedan fylla i projektinformation
- sedan anpassa punkter
- sedan kontrollera
- sedan sammanställa och signera
- sedan exportera

### Mobil Användning Är Central

Egenkontroller görs ofta nära arbetsmomentet. UI bör därför fungera bra på mobil och surfplatta:

- stora klickytor
- korta kontrollpunktstexter
- tydliga statusknappar
- minimalt skrivande när allt är godkänt
- krav på skrivande när något avviker
- snabb förflyttning mellan punkter

### Progress Ska Vara Synlig

Användaren behöver veta:

- hur många punkter som är klara
- hur många som återstår
- om något är ej godkänt
- om något är ej kontrollerat
- om något saknar bedömning

### Exporten Ska Vara Mer Formell Än Arbetsvyn

Arbetsvyn kan vara kort, stegvis och handlingsorienterad. Exporten ska vara samlad, tydlig och möjlig att lämna vidare.

Exporten bör ha:

- tydlig rubrik
- projekt- och partsinformation
- referenser
- tabell eller strukturerad lista över kontrollpunkter
- statusförklaring
- datum och kontrollant per punkt
- kommentarer per punkt
- övriga anteckningar
- signeringar

## Hjälptexter Och Mikrocopy

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

Följande texter är kunskapsunderlag för senare `CONTENT_GUIDE.md`. De är inte slutligt låsta UI-texter.

### Ny Egenkontroll

Hjälptext:

> Välj en mall som passar arbetet. Du kan anpassa kontrollpunkterna innan du startar egenkontrollen.

### Namn

Hjälptext:

> Ge egenkontrollen ett tydligt namn, gärna med yrkesområde och projekt.

Exempel:

> Bygg - Villa Solängen

### Beställare/Byggherre

Hjälptext:

> Ange den part som arbetet utförs för eller den byggherre som ansvarar för projektet.

### Entreprenör

Hjälptext:

> Ange den firma eller aktör som utför arbetet. Om byggherren själv utför arbetet kan fältet lämnas tomt om det passar projektet.

### Referenser

Hjälptext:

> Ange de handlingar eller krav som kontrollen ska jämföras mot, till exempel ritning, kundkrav, teknisk beskrivning eller kontrollplan.

### Anpassa Kontrollpunkter

Hjälptext:

> Kontrollera att punkterna stämmer för projektet. Lägg till, ta bort eller ändra punkter innan kontrollen startar.

### Godkänd

Hjälptext:

> Välj Godkänd när momentet är kontrollerat och uppfyller kravet.

### Ej Godkänd

Hjälptext:

> Välj Ej godkänd när momentet är kontrollerat men ett fel eller en brist har upptäckts. Beskriv vad som behöver följas upp.

### Ej Kontrollerad

Hjälptext:

> Välj Ej kontrollerad när momentet inte kunde eller skulle kontrolleras. Beskriv varför.

### Ej Bedömd

Hjälptext:

> Punkten är ännu inte behandlad.

### Övriga Anteckningar

Hjälptext:

> Lägg till övergripande kommentarer som gäller hela egenkontrollen. Fel och ej kontrollerade moment bör beskrivas på respektive kontrollpunkt.

### Slutför

Hjälptext:

> Kontrollera sammanställningen innan du signerar. Punkter som är ej godkända, ej kontrollerade eller ej bedömda kan behöva följas upp.

### Signera

Hjälptext:

> Signera med namn och datum för att bekräfta att uppgifterna är genomgångna.

### Granska

Hjälptext:

> Granska egenkontrollen och kontrollera särskilt avvikelser, ej kontrollerade punkter och eventuella saknade bedömningar.

## Språkprinciper

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[Härledning]`

Språket ska vara:

- enkelt
- konkret
- svenskt
- praktiskt
- lugnt
- utan onödig juridisk tyngd
- tydligt med ansvar och begränsningar

Skriv hellre:

- `Kontrollera momentet`
- `Beskriv vad som avviker`
- `Ange vad kontrollen jämförs mot`
- `Signera med namn`

Skriv inte:

- `Verifiera regulatorisk efterlevnad`
- `Exekvera kontrollprocedur`
- `Legal e-signering`
- `Systemet säkerställer PBL-uppfyllelse`

Terminologi som ska användas konsekvent tills separat terminologidokument härleds:

- egenkontroll
- kontrollpunkt
- kontrollmoment
- referens
- beställare/byggherre
- entreprenör
- kontrollant
- utfört av
- kontrollansvarig
- godkänd
- ej godkänd
- ej kontrollerad
- ej bedömd
- övriga anteckningar
- export

## Bästa Praxis För Innehåll Och Produkt

Källmarkering: `[K1]`, `[K2]`, `[K3]`, `[K5]`, `[K6]`, `[Härledning]`

### Före Kontroll

- Välj en relevant mall.
- Anpassa punkter till projektet.
- Ange tydliga referenser.
- Ta bort uppenbart irrelevanta punkter.
- Lägg till projektkritiska punkter.

### Under Kontroll

- Kontrollera ett moment i taget.
- Markera resultat direkt.
- Ange kontrollant och datum.
- Kommentera avvikelser direkt på punkten.
- Vänta inte med felbeskrivningar till slutet.

### Vid Avvikelse

- Beskriv felet konkret.
- Ange om kontrollen inte kunde utföras och varför.
- Tillkalla ansvarig för beslut om åtgärd när fel upptäcks.
- Låt sammanställningen visa avvikelser tydligt.

### Vid Granskning

- Granska alla ej godkända punkter.
- Granska alla ej kontrollerade punkter.
- Kontrollera om punkter är ej bedömda.
- Säkerställ att referenser och parter finns med.
- Signera granskning separat från utförarsignering.

### Vid Export

- Exporten ska kunna förstås fristående.
- Statusförklaringen ska finnas med.
- Datum, kontrollant och kommentarer ska följa med.
- Enkel utskrift ska prioriteras framför avancerad dokumentredigering.

## Intern Kvalitetsgranskning

Källmarkering: `[Granskningsnotering]`

### Sammanfattande Bedömning

Kunskapsbasen är konsekvent med `APP_BLUEPRINT.md` och håller sig till Egenkontroll App som fristående MVP-produkt. Den skiljer tydligt mellan originalkunskap, godkänd produktanalys, Boverket-stöd och härledda UX-/produktinsikter.

Dokumentet är tillräckligt komplett för att fungera som sakunderlag för kommande `DOMAIN_MODEL.md`, `TERMINOLOGY.md`, `LANGUAGE_GUIDE.md`, `CONTENT_GUIDE.md` och `UX_GUIDELINES.md`, men det är inte komplett som fullständig branschdatabas eftersom den separata masterlistan med alla kontrollpunkter saknas som originalfil.

### Konsekvenskontroll

Konsekvent:

- Egenkontroll beskrivs som arbetsverktyg, kvalitetssäkring och dokumentationsunderlag.
- Word-originalet behandlas som kunskapskälla, inte layoutspecifikation.
- `Ej bedömd` beskrivs konsekvent som digital arbetsstatus, inte som ett fjärde originalresultat.
- Kommentar krävs konsekvent vid `Ej godkänd` och `Ej kontrollerad`.
- Enkel signering beskrivs konsekvent som namn, bekräftelse och tidsstämpel, inte avancerad e-signering.
- Kontrollansvarig skiljs från kontrollant.
- Appen avgränsas konsekvent från stor plattform, kundportal, organisationshantering och automatisk juridisk kontroll.

Behöver bevakas:

- Begreppen `kontrollmoment` och `kontrollpunkt` används nära varandra. Det är sakligt rimligt eftersom originalmallen använder kontrollmoment och appen behöver kontrollpunkt, men `TERMINOLOGY.md` bör senare fastställa huvudterm i UI.
- `Beställare/byggherre` är medvetet dubbelt eftersom originalmallen öppnar för båda. Senare UI behöver välja om detta visas som kombinerad etikett eller valbar etikett.
- `Kontrollansvarig` kan vara både PBL-roll och praktisk granskningsetikett. Appen måste undvika att ge juridisk rolltolkning när projektet bara har en intern ansvarig granskare.

### Kompletthetskontroll

Täckt:

- syfte med egenkontroll
- praktiskt arbetsflöde
- grundinformation: beställare/byggherre, entreprenör, referenser
- kontrollresultat
- kommentarer vid avvikelse
- signering och granskning
- roller och ansvar
- PBL-relaterad gränsdragning
- användarbehov
- vanliga misstag
- UX-insikter
- hjälptexter
- språkprinciper
- bästa praxis
- avgränsningar och öppna källluckor

Saknas eller är ofullständigt:

- komplett masterlista med 123 kontrollpunkter som separat verifierbar originalkälla
- detaljerade kontrollpunkter per huvudmall
- branschspecifika krav för el, VVS, badrum, betong, rivning, tak, målning, slutbesiktning och daglig säkerhet
- sakkunniggranskade formuleringar om PBL om appen senare ska visa mer juridisk vägledning
- exempel på exportstruktur baserad på faktisk slutrapportlayout
- konkreta tomlägen och feltexter per skärm, vilket bör härledas i `CONTENT_GUIDE.md`
- detaljerade mobilflöden, vilket bör härledas i `UX_GUIDELINES.md`

### Spårbarhetskontroll

Stark spårbarhet:

- Originalflöde, blankettfält, resultat och signering spåras till `[K1]` och `[K2]`.
- MVP-scope, mallbibliotek, statusmodell och avgränsningar spåras till `[K3]`.
- PBL, kontrollplan, byggherre, kontrollansvarig och sakkunnigkontroll spåras till `[K4]` till `[K7]`.

Svagare spårbarhet:

- De 11 mallarna och 123 kontrollpunkterna spåras just nu till `[K3]`, inte till separat masterlisteoriginal.
- UX-insikter och hjälptexter är härledda från källorna och markerade som `[Härledning]`; de behöver senare produktgranskas i respektive styrdokument.

### Dubbletter

Medveten överlappning:

- Arbetsflödet återkommer i `Standardflöde`, `Vanliga Användarbehov`, `UX-Insikter` och `Bästa Praxis`. Detta är acceptabelt eftersom avsnitten har olika syfte: process, behov, upplevelse och praktisk regel.
- Kommentar vid avvikelse återkommer i kontrollresultat, misstag, hjälptexter och bästa praxis. Detta är acceptabelt eftersom det är ett centralt produktbeslut.
- Signering återkommer i arbetsflöde, roller, hjälptexter och bästa praxis. Detta är acceptabelt eftersom signering både är roll-, flödes- och innehållsfråga.

Risk för framtida dubblett:

- När `CONTENT_GUIDE.md` och `UX_GUIDELINES.md` fylls bör detaljerade hjälptexter och UX-regler flyttas eller härledas dit, men kunskapsbasen ska behålla sakunderlaget.

### Motsägelser

Inga direkta motsägelser identifierade mot `APP_BLUEPRINT.md`.

Potentiella tolkningsrisker:

- Boverket-källor beskriver kontrollplan enligt PBL, medan appens kärnflöde främst är arbetsnära egenkontroll. Dokumentet hanterar detta genom tydlig gränsdragning.
- Originalmallen säger att egenkontrollen ska lämnas till kontrollansvarig, medan Boverket anger att kontrollansvarig normalt inte utför kontrollerna. Dokumentet hanterar detta genom att skilja på `kontrollerad av` och `granskad av kontrollansvarig`.
- Blueprinten nämner masterlista som granskad källa, men filen finns inte i `docs/source-material/`. Dokumentet hanterar detta genom att märka masterlistans innehåll som `[K3]` och lägga separat masterlista som källlucka.

### Förbättringsförslag

Nästa förbättringar bör göras i denna ordning:

1. Lägg in eller länka separat masterlista med samtliga 123 kontrollpunkter.
2. Källmärk varje kontrollpunkt när masterlistan finns.
3. Härled `DOMAIN_MODEL.md` från avsnitten om kontrollpunkt, roller, status och signering.
4. Härled `TERMINOLOGY.md` och lås huvudtermerna `kontrollpunkt`, `kontrollmoment`, `beställare/byggherre`, `kontrollant` och `kontrollansvarig`.
5. Härled `CONTENT_GUIDE.md` från hjälptexter och mikrocopy.
6. Härled `UX_GUIDELINES.md` från UX-insikter, arbetsflöde och misstag appen ska förebygga.

## Spårbarhetsmatris

Källmarkering: `[Granskningsnotering]`

| Kunskapsområde | Primär källa | Kompletterande källa | Status |
|---|---|---|---|
| Syfte med egenkontroll | `[K1]`, `[K2]` | `[Härledning]` | Täckt |
| Anpassa egenkontroll | `[K1]`, `[K2]` | `[K3]` | Täckt |
| Fylla i egenkontroll | `[K1]`, `[K2]` | `[K3]` | Täckt |
| Beställare/byggherre | `[K1]`, `[K2]` | `[K4]`, `[K7]` | Täckt |
| Entreprenör och underentreprenör | `[K1]`, `[K2]` | `[Härledning]` | Täckt |
| Referenser till krav och handlingar | `[K1]`, `[K2]` | `[K6]` | Täckt |
| Kontrollresultat | `[K1]`, `[K2]` | `[K3]` | Täckt |
| Ej bedömd digital status | `[K3]` | `[Härledning]` | Täckt |
| Kommentar vid negativt resultat | `[K3]` | `[Härledning]` | Täckt |
| Signering | `[K1]`, `[K2]` | `[K3]` | Täckt |
| Kontrollansvarig | `[K1]`, `[K2]` | `[K4]`, `[K5]`, `[K7]` | Täckt med gränsdragning |
| Kontrollplan enligt PBL | `[K4]`, `[K5]`, `[K6]`, `[K7]` | `[Härledning]` | Täckt på övergripande nivå |
| Mallbibliotek | `[K3]` | Separat masterlista saknas | Delvis täckt |
| 123 kontrollpunkter | `[K3]` | Separat masterlista saknas | Källlucka |
| UX-insikter | `[K1]`, `[K2]`, `[K3]` | `[Härledning]` | Täckt som kunskapsunderlag |
| Hjälptexter | `[K1]`, `[K2]`, `[K3]` | `[Härledning]` | Täckt som utkastunderlag |
| Språkprinciper | `[K1]`, `[K2]`, `[K3]` | `[Härledning]` | Täckt som grund |
| Avgränsningar | `[K3]` | `[Härledning]` | Täckt |

## Krav På Framtida Härledda Dokument

När andra styrdokument senare fylls ska de härleda från denna kunskapsbas:

- `DOMAIN_MODEL.md` ska strukturera begrepp som egenkontroll, kontrollpunkt, mall, referens, signering och granskning.
- `TERMINOLOGY.md` ska fastställa ordval och undvika otydliga synonymer.
- `DEFINITIONS.md` ska ge korta definitioner för appens centrala begrepp.
- `LANGUAGE_GUIDE.md` ska omvandla språkprinciperna till skrivregler.
- `CONTENT_GUIDE.md` ska göra hjälptexterna produktionsklara.
- `UX_GUIDELINES.md` ska förädla arbetsflöden och UX-insikter.
- `DECISIONS.md` ska bara innehålla faktiska produktbeslut, inte rå kunskap.

## Öppna Källluckor

Följande bör kompletteras när materialet finns tillgängligt:

- separat masterlista med alla 123 kontrollpunkter
- detaljerade kontrollpunkter per huvudmall
- eventuella senare original från KvalitetsDokument.se för el, VVS, badrum, kök, betong, rivning, tak, målning, slutbesiktning och daglig säkerhet
- sakkunniggranskade texter om PBL om appen ska visa mer juridisk vägledning än originalmallen gör

Tills dessa källor finns ska appen inte hitta på detaljerade branschkrav eller juridiska instruktioner.

