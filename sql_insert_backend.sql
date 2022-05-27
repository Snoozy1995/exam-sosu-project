INSERT INTO `school` (`name`) VALUES
('EASV');

INSERT INTO `user` (`id`, `username`, `password`, `salt`, `role`, `created_at`, `updated_at`, `schoolName`) VALUES
	(1, 'teacher', '$2b$10$2q2xo.QO1jd7Z4CK06Of.eJCh7mJwgPBrjoW0Vxx..XXtD263b9Mq', '$2b$10$2q2xo.QO1jd7Z4CK06Of.e', 'teacher', '2022-05-04 08:46:54.856549', '2022-05-04 08:46:54.856549', "EASV"),
	(2, 'student', '$2b$10$8UxRNKLo0InaZVXRYOpuz.ANxQs7BUEj/ojM25fhCDq2eOyk1Nmve', '$2b$10$8UxRNKLo0InaZVXRYOpuz.', 'student', '2022-05-24 10:47:35.081671', '2022-05-24 10:47:35.081671', "EASV"),
	(3, 'admin', '$2b$10$bsz8dalC6/k8M3g4.XAb5.J8Ov1GN7w7Bz8f.qo41rbVXOgJmGgfO', '$2b$10$bsz8dalC6/k8M3g4.XAb5.', 'superuser', '2022-05-26 17:30:29.013382', '2022-05-26 17:30:29.013382', "EASV");

INSERT INTO `fs3_term` (`id`, `term`) VALUES
(1, 'Funktionsevnetilstande'),
(2, 'Helbredstilstande'),
(3, 'Generelle oplysninger');

INSERT INTO `fs3` (`id`, `definition`, `active`, `enableFunctionalAbility`, `termId`) VALUES
(1, 'Egenomsorg', 1, 0, '1'),
(2, 'Praktiske opgaver', 1, 0, '1'),
(3, 'Mobilitet', 1, 0, '1'),
(4, 'Mentale funktioner', 1, 0, 1),
(5, 'Samfundsliv', 1, 0, 1),
(6,'Funktionsniveau', 1, 0, 2),
(7,'Bevægeapparat', 1, 0, 2),
(8,'Ernæring', 1, 0, 2),
(9,'Hud og slimhinder', 1, 0, 2),
(10,'Kommunikation', 1, 0, 2),
(11,'Psykosociale forhold', 1, 0, 2),
(12,'Respiration og cirkulation', 1, 0, 2),
(13,'Seksualitet', 1, 0, 2),
(14,'Smerter og sanseindtryk', 1, 0, 2),
(15,'Søvn og hvile', 1, 0, 2),
(16,'Viden og udvikling', 1, 0, 2),
(17,'Udskillelse af affaldsstoffer', 1, 0, 2),
(18,'Mestring', 1, 0, 3),
(19,'Motivation', 1, 0, 3),
(20,'Ressourcer', 1, 0, 3),
(21,'Roller', 1, 0, 3),
(22,'Vaner', 1, 0, 3),
(23,'Uddannelse og job', 1, 0, 3),
(24,'Livshistorie', 1, 0, 3),
(25,'Netværk', 1, 0, 3),
(26,'Helbredsoplysninger', 1, 0, 3),
(27,'Hjælpemidler', 1, 0, 3),
(28,'Boligens indretning', 1, 0, 3);


INSERT INTO `fs3_option` (`option`, `definition`, `description`, `imageName`) VALUES
(0, '0. Ingen eller ubetydelige begrænsninger', 'Borgeren klarer selv aktiviteten.', 'ingenEllerUbetydelige'),
(1, '1. Lette begrænsninger.', 'Borgeren er aktiv, kun behov for lidt hjælp.', 'lette') ,
(2, '2. Moderate begrænsninger.', 'Borgeren er aktiv, kun behov for lidt hjælpBorgeren er aktiv, men behov for moderat hjælp.', 'moderate'),
(3, '3. Svære begrænsninger.', 'Borgeren deltager underforudsætning af omfattende hjælp.', 'svaere'),
(4, '4. Totale begrænsninger.', 'Borgeren kan ikke selv, får hjælp til alt.', 'totale'),
(9, '9. Ikke relevant.', '9-tallet anvendes der, hvor man vurderer, at det ikke er relevant at registrere en vurdering for borgerens funktionsevne. Det viser andre kollegaer og samarbejdspartnere, at der er taget aktivt stilling til området, og at den manglende vurdering ikke skyldes en forglemmelse.', 'ikkeRelevant');



INSERT INTO `fs3_example` (`fs3Example`, `fs3Id`) VALUES
('"N.N. beskriver sig selv som en person, der altid klarer udfordringer og godt kan lide at lære nyt og engagere sig."', 18),
('"N.N. er nogle dage negativ over sin situation. Med opmuntring genfinder N.N. gejsten til at kæmpe videre."', 18),

('"N.N. har det bedst, når der er rent og pænt i lejligheden: "Hvis hjemmehjælpen tager det grove, så kan jeg sagtens selv klare resten.""', 19),
('"N.N. spiser mere, når han sidder foran sit tv med et par stykker smørrebrød.', 19),
('"N.N.''s mål er, at han til august igen kan arbejde frivilligt 2 gange om ugen".', 19),

('"N.N. kan godt lide udfordringer og er god til at lære nyt".', 20),
('"N.N. har levet et aktivt liv og er derfor i udmærket fysisk form".', 20),

('"N.N. har tidligere været formand i idrætsforeningen".', 21),
('"N.N. var indtil fornyelig frivillig leder af den lokale genbrugsbutik".', 21),

('”N.N. vil gerne have smykker på hver morgen”.', 22),
('”N.N vil gerne ryge efter at have spist”', 22),

('"N.N. fortæller, at han har arbejdet i det samme firma i hele sit liv. Han ser stadig sine gamle kolleger – fx til jubilæer i firmaet og til arrangementer i seniorklubben".', 23),
('"N.N. fortæller at han var uddannet lærer, hvilket han sætter en ære i"', 23),

('"N.N. fortæller at han blev gift i 1960 og har to børn".', 24),
('”N.N. ønsker at være hjemme i den sidste tid. Han ønsker ikke indlæggelse og har aftalt alt det praktiske med børnene".', 24),

('"N.N. har en barndomsven fra Fyn, som han ringer sammen med 1 gang om ugen”.', 25),
('"N.N. fortæller, at hans nærmeste venner er fra hans skakklub – der kommer han hver tirsdag, og de ringer altid efter ham, hvis han ikke dukker op”.', 25),
('"N.N. fortæller, at han får besøg af Mia fra besøgstjenesten hver onsdag".', 25),

('Sygdomme:
KOL
Diabetes type 2
Forhøjet blodtryk
Grøn stær
Leddegigt.', 26),
('Handicap:
Crusamputeret højre side.', 26),
('"N.N. fortæller, at han blev opereret for prostatacancer for 3 år siden".', 26),
('"N.N. fortæller, at han ofte får blærebetændelse".', 26),

('"N.N. har indkøbt badebænk, rollator og gribetang".', 27),
('"N.N. har et høreapparat"', 27),

('"N.N. har svært ved at bevæge sig udenfor sin lejlighed, da der ikke er elevator i bygningen".', 28),
('"N.N. har en ældrevenlig bolig med handicapvenligt badeværelse".', 28);


INSERT INTO `help_question` (`question`, `fs3Id`) VALUES
('Hvordan klarer du med- og modgang?', 18),
('Hvordan reagerer du, når der sker noget, der er svært eller uventet?', 18),
('Hvordan kunne du godt tænke dig, at vi samarbejder om udfordringer?', 18),


('Hvad gør dig glad?', 19),
('Er der udfordringer, der er spændende at løse?', 19),
('Er der noget, du gerne vil opnå indenfor den nærmeste fremtid?', 19),

('Hvordan klarer du opgaver i dagligdagen?', 20),
('Hvilke hverdagsopgaver/udfordringer er lette at løse for dig? Hvorfor?', 20),
('Hvilke hverdagsopgaver/udfordringer er svære at løse for dig? Hvorfor?', 20),

('Hvilke roller har du, eller har du haft, som har haft betydning for dig?', 21),
('Har du været aktiv i lokalsamfund, bestyrelser/foreninger eller lign.?', 21),

('Har du nogle vaner, som det er vigtigt, vi kender?', 22),
('Hvad er dine rutiner, når du står op?', 22),
('Hvad husker dig på dine vaner?', 22),

('Hvad har du tidligere arbejdetmed?', 23),
('Hvilke job har du haft, og hvilken rolle spiller dit arbejdsliv for dig i dag?', 23),

('Hvor er du født? ', 24),
('Hvor er du opvokset?', 24),
('Hvilke interesser og begivenheder har været væsentlige for dig?', 24),

('Hvad betyder dit netværk for dig?', 25),
('Er der nogen, som har større betydning end andre?', 25),
('Hvordan er din kontakt til dine børn?', 25),


('Lad evt. medicinlisten danne baggrund for spørgsmål om borgerens helbred. ', 26),
('Jeg kan se, at du får smertestillende medicin. Hvad skyldes smerterne?', 26),
('Fejler du noget, der har betydning for din hverdag/måde at leve dit liv på? ', 26),
('Har du kontakt til andre læger end din praktiserende læge?', 26),
('Går du til fodterapeut?', 26),
('Hvem er din tandlæge?', 26),

('Bruger du nogen redskaber eller hjælpemidler i det daglige for at kunne klare dig?', 27),

('Er der noget i dine omgivelser, der besværliggør din hverdag?', 28),
('Er der noget i dine omgivelser, der letter din hverdag?', 28);


INSERT INTO `documentation_practice` (`practice`, `fs3Id`) VALUES

('Her dokumenteres, hvordan borgeren positivt eller negativt mestrer den modgang vedkommende møder.', 18),
('Her dokumenteres borgerens ønsker for sit liv (overordnet mål), og hvad der motiverer borgeren.', 19),
('Her dokumenteres de ressourcer, borgeren har i forhold til at løse dagligdagens opgaver. Det kan være både fysiske og mentale funktioner.', 20),
('Her dokumenteres de roller, borgeren angiver at have. Det kan fx være rolle som ægtefælle, bedsteforælder eller aktiv i beboerforening.', 21),
('Her dokumenteres borgerens vaner, som er en naturlig del af hverdagen, og som borgeren plejer at gøre. Det kan både være vaner, som borgeren gør af fysiske og psykiske årsager.', 22),
('Her dokumenteres borgerens oplysninger om uddannelse og erhverv. Fx hvilke job borgeren har haft, hvilken betydning arbejdslivet har haft for borgeren, og har borgeren evt. stadig tilknytning til arbejdspladsen og kolleger', 23),
('Her dokumenteres borgerens fortælling om sit liv.', 24),
('Her dokumenteres borgerens ønsker for den sidste tid.', 24),
('Her dokumenteres borgerens netværk i bredere forstand.', 25),
('Her kan borgerens sygdomme og handicap dokumenteres for at give et samlet overblik.', 26),
('Hvis oplysningen kommer fra borgeren eller pårørende, skal dette fremgå.', 26),
('Her kan behandlingsansvarlig læge/ambulatorie ift. en konkret sygdom dokumenteres, hvis dette ikke er angivet andre steder.', 26),
('Her dokumenteres de hjælpemidler borger selv har anskaffet.', 27),
('Bevilligede hjælpemidler kan også dokumenteres eller vises her. ', 27),
('Her dokumenteres både det der hæmmer og fremmer borgerens funktionsevne i hverdagen. Kan suppleres med praktiske oplysninger fx om der er elevator, dørtrin eller trapper.', 28);

INSERT INTO `fs3_sub_category` (`category`, `fs3Id`, `id`) VALUES
('Problemer med personlig pleje', 6, 1),
('Problemer med daglige aktiviteter', 6, 2),
('Problemer med mobilitet og bevægelse', 7, 3),
('Problemer med væskeindtag', 8, 4),
('Problemer med fødeindtag', 8, 5),
('Uhensigtsmæssig vægtændring', 8, 6),
('Problemer med overvægt', 8 , 7),
('Problemer med undervægt', 8, 8),
('Problemer med kirurgisk sår', 9, 9),
('Problemer med diabetisk sår', 9, 10),
('Problemer med cancersår', 9, 11),
('Problemer med tryksår', 9, 12),
('Problemer med arterielt sår', 9, 13),
('Problemer med venøst sår', 9, 14),
('Problemer med blandingssår', 9, 15),
('Problemer med traumesår', 9, 16),
('Andre problemer med hud og slimhinder', 9, 17),
('Problemer med kommunikation', 10, 18),
('Problemer med socialt samvær', 11, 19),
('Emotionelle problemer', 11, 20),
('Problemer med misbrug', 11, 21),
('Mentale problemer', 11, 22),
('Respirationsproblemer', 12, 23),
('Cirkulationsproblemer', 12, 24),
('Problemer med seksualitet', 13, 25),
('Akutte smerter', 14, 26),
('Periodevise smerter', 14, 27),
('Kroniske smerter', 14, 28),
('Problemer med synssans', 14, 29),
('Problemer med lugtesans', 14, 30),
('Problemer med hørelse', 14, 31),
('Problemer med smagssans', 14, 32),
('Problemer med følesans', 14, 33),


('Døgnrytmeproblemer', 15, 34),
('Søvnproblemer', 15, 35),
('Problemer med hukommelse', 16, 36),
('Problemer med sygdomsindsigt', 16, 37),
('Problemer med indsigt i behandlingsformål', 16, 38),
('Kognitive problemer', 16, 39),
('Problemer med vandladning', 17, 40),
('Problemer med urininkontinens', 17, 41),
('Problemer med afføringsinkontinens', 17, 42),
('Problemer med mave og tarm', 17, 43),

('Vaske sig**', 1, 44),
('Gå på toilet**', 1, 45),
('Kropspleje', 1, 46),
('Af- og påklædning**', 1, 47),
('Spise**', 1, 48),
('Drikke**', 1, 49),
('Varetage egen sundhed', 1, 50),
('Fødeindtagelse', 1, 51),

('Udføre daglige rutiner', 2, 52),
('Skaffe sig varer og tjenesteydelser', 2, 53),
('Lave mad', 2, 54),
('Lave husligt arbejde', 2, 55),

('Ændre kropsstilling', 3, 56),
('Forflytte sig**', 3, 57),
('Løfte og bære', 3, 58),
('Gå', 3, 59),
('Bevæge sig omkring', 3, 60),
('Færden i forskellige omgivelser**', 3, 61),
('Bruge transportmidler', 3, 62),
('Udholdenhed', 3, 63),
('Muskelstyrke', 3, 64),

('Tilegne sig færdigheder', 4, 65),
('Problemløsning', 4, 66),
('Anvende kommunikationsudstyr og-teknikker', 4, 67),
('Orienteringsevne', 4, 68),
('Energi og handlekraft', 4, 69),
('Hukommelse', 4, 70),
('Følelsesfunktioner', 4, 71),
('Overordnede kognitive funktioner', 4, 72),

('Have lønnet beskæftigelse', 5, 73);


INSERT INTO `fs3_sub_cat_doc_prac` (`id`, `practice`, `categoryId`) VALUES
(1, 'Vælges når borger har problemer med at varetage personlig pleje som følge af sygdom, skade eller handicap, og hvor kompleksiteten eller en kritisk situation kræver et særligt kompetenceniveau hos personalet, eller ved brug for støtte til kropspleje, af- og påklædning og/eller toiletbesøg', 1),
(2, 'Vælges når borgeren har problemer med at varetage daglige aktiviteter, og hvor kompleksiteten eller en kritisk situation kræver et særligt kompetenceniveau hos personalet.', 2),
(3, 'Fx behov for hjælp til koordinering og planlægning af daglige aktiviteter ved tab af fysisk-, mental- og social funktionsevne, eller ved brug for anden støtte til planlægning og koordinering af dagligdagen.', 2),

(4, 'Vælges når borgeren har problemer med bevægelses-forstyrrelser og problemer med at bevæge sig, forflytte sig, ændre kropsstilling eller ved inaktivitet som følge af sygdom, skade eller behandling, fx bivirkning af medicin, eller ved brug for anden støtte til at ændre kropsstilling, forflytning og/eller at bevæge sig omkring. Fx borgere med Parkinsons sygdom og essentiel tremor.', 3),
(5, 'Vælges når borgeren har problemer med at indtage en korrekt mængde væske som følge af sygdom eller behandling, fx bivirkning af medicin, hvor der er risiko for dehydrering eller overhydrering, eller ved brug for anden støtte til væskeindtag.' ,4),
(6, 'Vælges når borgeren har problemer med at indtage eller optage ernæring og vitaminer/mineraler eller ved ernæringsbetingede stofskifteproblematikker som følge af sygdom eller behandling, fx bivirkning af medicin.', 5),
(7, 'Fx borgere med dysfagi eller korttarmssyndrom, eller andre der modtager ernæring enten parenteral eller via sonde, eller ved brug for anden støtte til fødeindtag.' , 5),
(8, 'Tilstanden vælges også ved borgere med diabetes.', 5),


(9, 'Vælges når borgeren har problemer med pludselig vægtændring som følge af sygdom eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at håndtere uplanlagt vægtændring.', 6),
(10, 'Vælges når borgeren har problemer med overvægt som følge af sygdom eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at håndtere overvægt.', 7),
(11, 'Vælges når borgeren har problemer med vægttab og undervægt som følge af sygdom eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at håndtere undervægt.', 8),
(12, 'Vælges når borgeren har problemer med sår, der er opstået som følge af et kirurgisk indgreb efter en operation, eller brug for anden støtte til behandling af kirurgisk sår.', 9),
(13, 'Vælges når borgeren har problemer med sår, der er opstået som en senkomplikation til diabetes, eller brug for anden støtte til behandling af diabetisk sår.', 10),
(14, 'Vælges når borgeren har problemer med sår, der er opstået som følge af cancer og metastaser, eller brug for anden støtte til behandling af cancersår.', 11),
(15, 'Vælges når borgeren har problemer med sår, der er opstået som følge af tryk og/eller shear, eller brug for anden støtte til behandling af tryksår', 12),
(16, 'Vælges når borgeren har problemer med sår, der er opstået som følge af nedsat arteriel blodtilførsel, eller brug for anden støtte til behandling af arterielt sår', 13),
(17, 'Vælges når borgeren har problemer med sår, der er opstået som følge af venøs insufficiens, typisk manglende funktion af veneklapperne, eller brug for anden støtte til behandling af venøst sår.', 14),
(18, 'Vælges når borgeren har problemer med sår, der er opstået som følge af arteriel og venøs insufficiens, typisk en forværring af et venøst sår, eller brug for anden støtte til behandling af blandingssår.', 15),
(19, 'Vælges når borgeren har problemer med sår, der er opstået som følge af traumer på hårdt væv og/eller bløddele. Fx efter fald eller anden ulykke, snitsår, hudafskrabninger, brandsår, ætsninger eller forfrysninger, eller brug for anden støtte til behandling af traumesår', 16),
(20, 'Vælges når borgeren har problemer med hud og slimhinder som ikke er sår.', 17),
(21, 'Fx borgere der har svampeinfektion, fnat eller MRSA, eller brug for anden støtte til behandling af hud- og slimhindeproblemer som ikke er sår', 17),

(22, 'Vælges når borgeren har problemer med at tale, forstå, skrive, stave og læse som følge af sygdom, skade eller behandling, fx bivirkning af medicin.', 18),
(23, 'Fx borgere med en svær hjerneskade og/eller nedsat bevidsthedsniveau, eller brug for anden støtte til kommunikation.', 18),


 
(24, 'Vælges når borgeren har problemer med at håndtere socialt samvær, overholde sociale normer, interagere med andre eller etablere og opretholde relationer, eller brug for anden støtte til at fungere socialt', 19),
(25, 'Vælges når borgeren har problemer med at håndtere følelser i forbindelse med kronisk sygdom, skade eller i forbindelse med livsbegivenheder, eller brug for anden støtte til at håndtere følelser', 20),
(26, 'Vælges når borgeren har problemer med vedvarende og skadelig brug af medicin, alkohol eller stoffer, der medfører legemlige, psykiske eller sociale problemer, eller brug for anden støtte til at håndtere misbrugsproblemer.', 21),
(27, 'Vælges når borgeren har problemer med psykiske eller psykiatriske symptomer som følge af sygdom, skade eller behandling, fx bivirkning af medicin', 22),
(28, 'Fx borgere med depression, bipolar lidelse, psykose, spiseforstyrrelse eller skizofreni, eller brug for anden støtte til at håndtere psykiske og psykiatriske symptomer.', 22),



(29, 'Vælges når borgeren har respirationsproblemer som følge af sygdom eller skade.', 23),
(30, 'Fx borgere med KOL, astma, lungebetændelse, trakeostomi, eller brug for anden støtte til håndtering af vejrtrækningsproblemer.', 23),
(31, 'Vælges når borgeren har cirkulationsproblemer som følge af sygdom, skade eller behandling, fx bivirkning af medicin', 24),
(32, 'Fx borgere med hjerte-kar-problemer, pacemaker, i AK-behandling, eller brug for støtte til håndtering af cardio-vaskulære problemer.', 24),


(33, 'Vælges når borgeren har problemer ift. seksualitet som følge af sygdom, skade eller behandling, fx bivirkning af medicin, brug for anden støtte til seksuel aktivitet.', 25),
(34, 'Vælges når borgeren har problemer med smerter karakteriseret ved, at de er pludseligt indsættende og af kort varighed som følge af sygdom eller skade, eller brug for anden støtte til at håndtere akutte smerter.', 26),
(35, 'Vælges når borgeren har problemer med smerter som forekommer af og til som følge af sygdom eller skade, eller brug for anden støtte til at håndtere periodevise smerter.', 27),
(36, 'Vælges når borgeren har problemer med smerter som har varet i mere end 6 måneder som følge af sygdom eller skade, eller brug for anden støtte til at håndtere kroniske smerter.', 28),
(37, 'Vælges når borgeren har problemer med synssans som følge af sygdom eller skade. Fx borgere med grøn stær, grå stær eller øjeninfektion, eller brug for anden støtte til at kompensere for ændret synssans', 29),
(38, 'Vælges når borgeren har problemer med lugtesans som følge af sygdom, skade eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at kompensere for ændret lugtesans.', 30),
(39, 'Vælges når borgeren har problemer med hørelse som følge af sygdom eller skade, eller brug for anden støtte til at kompensere for ændret høresans.', 31),
(40, 'Vælges når borgeren har problemer med smagssans som følge af sygdom, skade eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at kompensere for ændret smagssans.', 32),
(41, 'Vælges når borgeren har problemer med følesans som følge af sygdom, skade eller behandling, fx bivirkning af medicin.', 33),


(42, 'Vælges når borgeren har problemer med forstyrrelse af søvn og hvile som følge af sygdom, skade eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at håndtere for manglende evne til at adskille dag og nat.', 34),
(43, 'Vælges når borgeren har søvnproblemer som følge af sygdom, skade eller behandling, fx bivirkning af medicin. Fx borgere med narkolepsi, eller brug for anden støtte til at kompensere for dårlig søvnkvalitet.', 35),
(44, 'Vælges når borgeren har problemer med hukommelsen som følge af sygdom, skade eller behandling, fx bivirkning af medicin. Fx borgere med demenssygdomme, eller brug for anden støtte til at huske, genkende og anvende tidligere erfaringer.', 36),
(45, 'Vælges når borgeren har problemer med egenomsorg og håndtering af egen sundhed, sygdom eller symptomer.', 37),
(46, 'Fx borgere der har tydelig føling ved diabetes, men ikke reagerer, eller borgere med demenssygdomme, der nægter at have problemer i dagligdagen, eller brug for anden støtte til at indse manglende evne til egenomsorg.', 37),


(47, 'Vælges når borgeren har problemer med at forstå formålet med behandlingen.', 38),
(48, 'Fx borgere med kroniske eller tilbagevendende sygdom, hvor behandling eller forebyggende behandling afsluttes uhensigtsmæssigt. Borgere med manglende evne til at give informeret samtykke til en behandling, eller brug for anden støtte til at forstå hensigt med behandling (compliance).', 38),

(49, 'Vælges når borgeren har kognitive problemer som følge af sygdom, skade eller behandling, fx bivirkning af medicin.', 39),
(50, 'Fx borgere med neglect eller delir, eller brug for anden støtte til logisk tænkning, tilegnelse af viden, overblik, planlægning og organisering.', 39),

(51, 'Vælges når borgeren har problemer med vandladning som følge af sygdom, skade eller behandling, fx bivirkning af medicin.', 40),
(52, 'Fx borgere der er i dialysebehandling eller borgere med nefrostomi, urostomi, topkateter eller kateter à demeure, eller brug for anden støtte til at håndtere vandladningsproblemer, der ikke er inkontinens.', 40),

(53, 'Vælges når borgeren har problemer med stressinkontinens, tranginkontinens, blandingsinkontinens eller falsk inkontinens som følge af sygdom, skade eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at håndtere urininkontinens.', 41),
(54, 'Vælges når borgeren har problemer med afføringsinkontinens som følge af sygdom, skade eller behandling, fx bivirkning af medicin, eller brug for anden støtte til at håndtere afføringsproblemer/ styre afføring.', 42),
(55, 'Vælges når borgeren har problemer med mave og tarm som følge af sygdom, skade eller behandling, fx bivirkning af medicin.', 43),
(56, 'Fx borgere med ileostomi, colostomi og sygdomme i lever, galdeveje eller hæmorider, eller brug for anden støtte til at håndtere fordøjelsesproblemer.', 43),



(57, 'Vaske og tørre sig på kroppen og kropsdele med anvendelse af vand og passende rensemidler f.eks. tage bad, brusebad, vaske hænder og fødder, ansigt og hår og tørre sig med håndklæde.', 44),
(58, 'Inkl.: vaske kropsdele, vaske hele kroppen og tørre sig.', 44),
(59, 'Ekskl.: kropspleje; gå på toilet.', 44),
(60, 'Planlægge og udføre toiletbesøg til udskillelse af affaldsprodukter (menstruation, urin og afføring) og efterfølgende rengøring.', 45),
(61, 'Inkl.: styre vandladning, afføring og menstruation', 45),
(62, 'Ekskl.: vaske sig; kropspleje.', 45),
(63, 'Pleje af de dele af kroppen, som behøver anden pleje end vask og tørring f.eks. hud, ansigt, tænder, hår, negle og kønsdele.', 46),
(64, 'Inkl.: hudpleje, tandpleje, hårpleje, neglepleje.', 46),
(65, 'Ekskl.: vaske sig; gå på toilet.', 46),
(66, 'Udføre sammensatte handlinger i forbindelse med på- og afklædning, at tage fodbeklædning på og af i rækkefølge og i overensstemmelse med den sociale sammenhæng og de klimatiske forhold som f.eks. iføre sig, rette på og afføre sig skjorter, bluser, bukser, undertøj, […], handsker, frakker, sko, støvler, sandaler og hjemmesko', 47),
(67, 'Inkl.: tage tøj på og af inkl. sko og strømper og vælge passende påklædning.', 47),
(68, 'Udføre sammensatte handlinger i forbindelse med indtagelse af føde, som er serveret for én, få maden op til munden og spise på en kulturelt accepteret måde, skære eller bryde maden i stykker, åbne flasker og dåser, anvende spiseredskaber, deltage i måltider og i festligheder.', 48),
(69, 'Ekskl.: drikke.', 48),
(70, 'Holde fast om en drik, tage drikken op til munden og drikke på en kulturelt accepteret måde, blande, omrøre og skænke drikke op, åbne flasker og dåser, bruge sugerør eller drikke af rindende vand fra en hane eller en kilde; amning.', 49),
(71, 'Ekskl.: spise.', 49),
(72, 'Sikre sit velvære, helbred og fysiske og psykiske velbefindende ved f.eks. at indtage varieret kost, have passende niveau af fysisk aktivitet, holde sig varm eller afkølet, undgå skader på helbredet, dyrke sikker sex inkl. anvendelse af kondomer, lade sig vaccinere og følge regelmæssige helbredsundersøgelser.', 50),
(73, 'Inkl.: sikre sit fysiske velvære, have hensigtsmæssige kost- og motionsvaner; tage vare på egen sundhed.', 50),
(74, 'Indtagelse og bearbejdning af fødemidler og væsker gennem munden. Inkl.: at suge, tygge, bide og behandle maden i mundhulen, spytflåd, at synke, gylpe, spytte og kaste op; tilstande som dysfagi, aspiration af føde, […], utilstrækkelig spytproduktion.', 51),
(75, 'Ekskl.: fornemmelser relaterede til fordøjelsessystemet.', 51),
(76, 'Udføre simple, komplekse og sammensatte handlinger til planlægning, styring og gennemførelse af dagligt tilbagevendende rutiner eller pligter som f.eks. at overholde tider og lægge planer for særlige aktiviteter i løbet af dagen.', 52),
(77, 'Inkl.: styre og gennemføre daglige rutiner; styre ens eget aktivitetsniveau.', 52),
(78, 'Ekskl.: påtage sig flere opgave.', 52),
(79, 'Vælge, tilvejebringe og transportere varer, som er nødvendige i dagliglivet som f.eks. at vælge, købe, transportere og opbevare mad, drikke, tøj, rengøringsmidler, brændsel, husholdningsgenstande og værktøj; tilvejebringe brugsgenstande og service.', 53),
(80, 'Inkl.: indkøbe og anskaffe daglige fornødenheder.', 53),
(81, 'Ekskl.: skaffe sig bolig.', 53),
(82, 'Planlægge, tilberede og servere enkle eller sammensatte måltider til sig selv og andre som f.eks. at sammensætte et måltid, udvælge appetitlig mad og drikke, fremskaffe ingredienser til tilberedning af måltider; forberede mad og drikke til tilberedning, lave varm og kold mad og drikke, servere maden.', 54),
(83, 'Inkl.: tilberede enkle og sammensatte måltider.', 54),
(84, 'Ekskl.: spise; drikke; skaffe sig varer og tjenesteydelser […].', 54),
(85, 'Holde hus ved at gøre rent, vaske tøj, bruge husholdningsmaskiner, opbevare mad og smide affald ud, f.eks. ved at feje, moppe, tørre borde, […] holde orden i værelser og stuer, i skabe og skuffer; samle, vaske, tørre og stryge tøj; gøre fodtøj rent; bruge kost, børster og støvsuger; bruge vaskemaskine, tørretumbler og strygejern.', 55),
(86, 'Inkl.: tøjvask og tørring af tøj; rengøre kogested og køkkenredskaber; rengøring af opholdsrum; […] og bortskaffe affald.', 55),
(87, 'Ekskl.: skaffe sig bolig; skaffe sig varer og tjenesteydelser; lave mad; passe ejendele; hjælpe andre.', 55),
(88, 'Skifte kropsstilling og bevæge sig fra et sted til et andet som f.eks. at flytte sig fra en stol til liggende stilling og skifte til og fra knælende eller hugsiddende stilling.', 56),
(89, 'Inkl.: ændring af stilling fra liggende til stående, knælende til stående, stående til siddende, hugsiddende eller knælende, bøje sig og ændre kroppens vægtfordeling.', 56),
(90, 'Ekskl.: forflytte sig', 56),
(91, 'Flytte sig fra en overflade til en anden som f.eks. at glide hen ad en bænk eller bevæge sig fra seng til stol uden at ændre kroppens stilling.', 57),
(92, 'Inkl.: flytte sig mens man sidder eller ligger.', 57),
(93, 'Løfte en genstand op og flytte noget fra et sted til et andet som f.eks. at løfte en kop eller bære et barn fra et rum til et andet.', 58),
(94, 'Inkl.: løfte, bære i hænderne eller på armene, på skuldrene, på hovedet, på ryggen og på hoften; sætte ting fra sig.', 58),
(95, 'Bevæge sig til fods skridt for skridt på et underlag, således at den ene fod hele tiden hviler på underlaget, som når man slentrer, går forlæns, baglæns eller sidelæns.', 59),
(96, 'Inkl.: gå over korte og lange afstande; gå på forskelligt underlag; gå uden om forhindringer.', 59),
(97, 'Ekskl.: forflytte sig; bevæge sig omkring.', 59),
(98, 'Bevæge sig fra et sted til et andet på andre måder end ved at gå […].', 60),
(99, 'Inkl.: kravle, klatre, løbe, jogge, hoppe, springe og svømme, gå på trin/trappe/stige.', 60),
(100, 'Ekskl.: forflytte sig; gå.', 60),
(101, 'Gang og færden i forskellige omgivelser som f.eks. at gå mellem rum i huset, inden for en bygning eller ned ad gaden.', 61),
(102, 'Inkl.: færdes i hjemmet, gå, kravle eller klatre i hjemmet, gå eller færdes i andre bygninger end hjemmet og uden for hjemmet og andre bygninger.', 61),
(103, 'Bruge transportmidler som passager til at færdes omkring som f.eks. at blive kørt i en bil eller køre med […] taxi, bus, tog, sporvogn, undergrundsbane, skib eller fly.', 62),
(104, 'Inkl.: bruge transportmiddel, der trækkes af en person; anvendelse af private motoriserede eller offentlige transportmidler.', 62),
(105, 'Ekskl.: færden med brug af udstyr; køre.', 62),

(106, 'Funktioner bestemmende for respiratorisk og kardiovaskulær kapacitet, som er nødvendig ved fysisk anstrengelse.', 63),
(107, 'Inkl.: fysisk udholdenhed, aerob kapacitet, udtrætning.', 63),
(108, 'Ekskl.: kardiovaskulære funktioner; hæmatologiske funktioner; respiration; respirationsmuskulaturens funktioner; andre respiratoriske funktioner.', 63),

(109, 'Kraften som opstår ved kontraktion af en muskel eller en muskelgruppe.', 64),
(110, 'Inkl.: styrken i specifikke muskler og muskelgrupper, muskler i én ekstremitet, i den ene halvdel af kroppen, i underkrop, i alle ekstremiteter, i trunkus og i alle muskler i kroppen; tilstande som nedsat kraft i små muskler i fødder og hænder, parese, paralyse, monoplegi, hemiplegi, paraplegi, tetraplegi, akinetisk mutisme.', 64),
(111, 'Ekskl.: muskeltonus; muskulær udholdenhed; funktioner af strukturer i og omkring øjet.', 64),


(112, 'Udvikle basale og komplekse kompetencer i sammensatte handlinger eller opgaver med det formål at påbegynde og gennemføre erhvervelsen af en færdighed, som f.eks. håndtering af værktøj eller spil som skak.', 65),
(113, 'Inkl.: tilegnelse af basale og komplekse færdigheder.', 65),

(114, 'Løsning af spørgsmål eller situationer ved at identificere og analysere emner, udvikle muligheder og løsninger, evaluere mulige virkninger af løsninger og gennemføre en valgt løsning som f.eks. ved løsning af en uoverensstemmelse mellem to personer.', 66),
(116, 'Inkl.: løse enkle og komplekse problemer.', 66),
(117, 'Ekskl.: tænke; tage beslutninger', 66),
(118, 'Anvende udstyr, teknikker og andre midler med kommunikationsformål som f.eks. at ringe til en ven.', 67),
(119, 'Inkl.: brug af telekommunikationsudstyr, skriveudstyr og kommunikationsteknologi.', 67),
(120, 'Overordnede mentale funktioner bestemmende for kendskab til og konstatering af relationerne til en selv, til andre, til tid, sted og andre omgivelser.', 68),
(121, 'Inkl.: orientering i tid, sted og egne data, orientering om sig selv og andre, desorientering i tid, sted og egne data.', 68),
(122, 'Ekskl.: bevidsthedstilstand, opmærksomhed, hukommelse.', 68),
(123, 'Overordnede mentale funktioner af fysiologisk og psykologisk art, som får personen til at opnå tilfredsstillelse af specifikke behov og overordnede mål på en vedholdende måde.', 69),
(124, 'Inkl.: energiniveau, motivation, appetit, trang (inkl. til stoffer, som kan misbruges) og impulskontrol.', 69),
(125, 'Ekskl.: bevidsthedstilstand, temperament og personlighed, søvn, psykomotoriske funktioner; følelsesfunktioner.', 69),
(126, 'Specifikke mentale funktioner bestemmende for registrering, lagring genkaldelse af information efter behov', 70),
(127, 'Inkl.: korttids- og langtidshukommelse, umiddelbar erindring, […]; amnesi.', 70),
(128, 'Ekskl.: bevidsthedstilstand, orientering, intellektuelle funktioner, opmærksomhed; opfattelse; tænkning, overordnede kognitive funktioner, særlige sprogfunktioner; regnefunktioner.', 70),
(129, 'Specifikke mentale funktioner forbundet med følelser og affektive komponenter i sindet.', 71),
(130, 'Inkl.: funktioner bestemmende for fyldestgørende følelser, regulering og spændvidde af følelserne; affekt; tristhed, lykkefølelse, kærlighed, frygt, vrede, had, anspændthed, angst, glæde, sorg; emotionel labilitet; følelsesaffladning.', 71),
(131, 'Ekskl.: temperament og personlighed, energi og handlekraft.', 71),
(132, 'Specifikke mentale funktioner først og fremmest knyttet til hjernens pandelapper omfattende kompleks målrettet adfærd som beslutningstagning, abstrakt tænkning, planlægning og gennemførelse af planer, mental fleksibilitet og tilpasning af adfærden efter omstændighederne, såkaldte eksekutive funktioner.', 72),
(133, 'Inkl.: abstraktion og organisering af ideer; administration af tid, indsigt og dømmekraft, begrebsdannelse, kategorisering, kognitiv fleksibilitet.', 72),
(134, 'Ekskl.: hukommelse, tænkning, sprogfunktioner, regnefunktioner.', 72),
(135, 'Relaterer sig til helbredsområdet "Psykosociale forhold" Deltage i alle aspekter af et arbejde, erhverv eller anden form for beskæftigelse […].', 73),
(136, 'Inkl.: deltids- og fuldtidsbeskæftigelse.', 73);