# Struktúraváltás 2.0 - Frontendes záróvizsga feladatai

## Kezdő lépések
- Fogadd el a feladatot a GitHub Classroom-on (linket fogsz kapni levélben)!
- Klónozd le a feladatod repóját a gépedre!
- Lépj be a mappába: `cd <repo neve>`
- Állítsd be a workspace-t: `code . -r`
- Telepítsd a függőségeket: `npm i`

----
## 1. feladat (20 pont)
### 1. rész 
Az 1-JS mappában a main.js fájlban találsz egy függvényt `animalFilter` néven.
A következőképpen kell működnie a függvénynek:
- Három paramétert vár: állatok listája, állatkerti populációjuk (azaz számuk) és azon állatkertek száma, ahol élnek.
- Azoknak az állatoknak az általános, köznapi nevét kell ábécérendben visszaadni egy tömbben, 
amelyek száma a megadott populációnál nagyobb, és éppen annyi vagy kevesebb állatkertben élnek, mint a kapott állatkertek száma.
- Az automata tesztet az `npm run test:11` paranccsal indíthatod el.

### 2. rész
Az 1-DOM mappában a dom.js fájlban találsz egy függvényt `manipulateDom` néven.
A következőképpen kell működnie a függvénynek:
- Megkeres az oldalon minden quote osztályhoz tartozó elemet, és három stílust állít be rájuk JavaScript segítségével: 
  - a körvonaluk legyen kék, 
  - a hátterük világoskék 
  - és az általuk használt betűtípus dőlt.
- A munkádat manuálisan is tesztelheted, ha indítasz egy Live Server-t 
az index.html fájlra.
- Az automata tesztet az `npm run test:12` paranccsal indíthatod el.

----
## 2. feladat (20 pont)
### 1. rész
- Készen van egy Angular-alkalmazás a angular-2 nevű mappában drugstore néven.
- Lépj be, és telepítsd a függőségeket: `npm i`
- Egy gyógyszereket nyilvántartó alkalmazás alapjait fogod elkészíteni. 
- Ehhez alkosd meg a drug modelljét azonos néven a model mappában az alábbi JSON alapján:
```
const drugs = [{
  "id": 1,
  "name": "Escitalopram Oxalate",
  "brand": "Escitalopram",
  "company": "Major Pharmaceuticals",
  "barcode": "23-537-0123",
  "stock": 26
}]; 
```
- A company ne legyen kötelező.
- Alapértelmezett értékként add meg az itt látható adatokat.
- Az automata tesztet az `npm run test:21` paranccsal indíthatod el.
- Készítsd el az `src/app/service/drug.service.ts` service-t, 
amely lekéri egy élő szerverről a gyógyszerek adatait.
- A szerver elérhetősége: `https://nettuts.hu/jms/<githubname>/drugs` 
(a `<githubname>` helyére kerüljön a Te GitHub-felhasználóneved)
- A munkád manuális ellenőrzéséhez az `app.component.ts`-be injektáld be a 
szervizedet, és írasd ki a konzolra a gyógyszerek listáját.
- Az automata tesztet az `npm run test:22` paranccsal indíthatod el.

### 2. rész
- A gyógyszertár kabalaállatát bemutató oldalt fogod egy kicsit feldobni.
- Az app komponens SCSS-fájljában és a kapcsolódó fájlokban dolgozz!
- 5 rövid kis feladatot kell elvégezned.
- Indítsd el az alkalmazást, hogy ellenőrizd a munkádat!
- Ha mindent jól csináltál, az animált tacskó mögötti háttér alapesetben világoskék, ha fölévisszük az egeret, sárga színű, mobilnézetben pedig pink.   
- FIGYELEM! Az `app.component.scss` fájlban a kommentek közül minden esetben 
vedd ki a megoldáshoz szükséges kódrészletet, hogy leforduljon az alkalmazás.
- Az automata tesztet az `npm run test:23` paranccsal indíthatod el (ez csak részben teszteli a munkádat).

----
## 3. feladat (20 pont)
- Létrehoztunk egy üres Angular alkalmazást az `angular-3` mappában, itt dolgozz.
(Ne feledd: cd angular-3 && code . -r)
- Egy építési anyagokat nyilvántartó alkalmazás listázó oldalát fogod elkészíteni.   
! Állítsd be a Bootstrap- és Font Awesome-csomagokat a tanultak szerint. 
- Legyen benne három réteg: class -> service -> component
- Ehhez alkosd meg a construction modelljét a következő URL-en található JSON alapján: `https://nettuts.hu/jms/<githubname>/constructions` 
(a `<githubname>` helyére kerüljön a Te GitHub-felhasználóneved).
- A modell elérési útja legyen: `src/app/model/construction.ts`.
- Készítsd el hozzá az `src/app/service/construction.service.ts`  
service-t, amely egy teljes értékű CRUD-ot valósít meg (a metódusok elnevezései: getAll, get, create, update, delete).
- Az adatokat táblázatos formában jelenítsd meg a főoldalon (az app.component-ben).   
(Routing-ra nincs szükség, minden a főoldalon jelenjen meg.)
- Az adatok a táblázat `tbody` elemén belül jelenjenek meg.
- Minden sorhoz tartozzon egy törlés gomb.
- A törlés gombra kattintva törlődjön az adatbázisból az adott entitás és frissüljön a táblázat. 
- A törlő metódus neve `onDelete` legyen, és a teljes construction-példányt kapja meg.
- Az automata tesztet az `npm run test:03` paranccsal indíthatod el  
a repository gyökeréből (nem az alkalmazásod almappájából).

----
## 4. feladat (20 pont)
- Létrehoztunk egy üres Angular alkalmazást az `angular-4` mappában, itt dolgozz.
(Ne feledd: cd angular-4 && code . -r)
- Egy autókat nyilvántartó alkalmazás szerkesztő oldalát fogod elkészíteni. 
- Legyen benne három réteg: class -> service -> component
- Ehhez alkosd meg a car modelljét a következő URL-en található JSON alapján: `https://nettuts.hu/jms/<githubname>/cars` 
(a `<githubname>` helyére kerüljön a Te GitHub-felhasználóneved), az útvonala legyen: `src/app/model/car.ts`
- Készíts hozzá egy car elnevezésű service-t, amely egy teljes értékű CRUD-ot valósít meg 
(a metódusok elnevezései: getAll, get, create, update, delete), az útvonala legyen: `src/app/service/car.service.ts`
- Az alkalmazás az adatokat a fenti URL-ről kérje le.
- Hozz létre egy car elnevezésű komponenst, és a navigációs sávba vedd fel 
a `/car` útvonalon, majd a tanultak szerint állítsd be az útválasztót is.
(Az útvonala legyen: `src/app/page/car/car.component.ts`)
- Ez a komponens csak egy primary gombot tartalmazzon, amely kattintásra 
a `/car/edit/44` oldalra visz.
- Hozz létre egy új komponenst car-editor néven, ahol szerkesztheted a kiválasztott autó adatait.
(Az útvonala legyen: `src/app/page/car-editor.component.ts`)
- Ezt az űrlapot a car oldalon lévő gombbal lehet megnyitni.
- Fontos: minden adat szerepeljen az űrlapon, és az legyen az inputok  
name tulajdonsága, ami az adat kulcsa a car objektumban.
- Az adatokat a következőképpen validáld:
  - csak angol karakterekre validálj,
  - minden adat legyen kötelező,
  - a modell legyen nagy kezdőbetűs, minimum 2, maximum 15 karakter, 
  tartalmazhat betűket, számokat és szóközöket is,
  - a make legyen nagy kezdőbetűs, minimum 3, maximum 20 karakter, és csak betűket tartalmazzon,
  - a gyártási év csak számokat tartalmazzon,
  - a price csak három-, négy- és ötjegyű egész szám lehet,
  - a stock csak 1 és 50 közé eső egész szám lehet.
- Sikertelen validálás esetén tiltsd le a mentés gombot.
- Sikeres validálás esetén a mentés gomb a komponens `onUpdate`  
metódusát hívja meg a teljes módosított objektummal.
- Az adatok sikeres bevitele után mentsd el őket, majd navigálj vissza az előző 
oldalra.
- A munkádat az `npm run test:04` paranccsal tesztelheted (a gyökérből indítva).

----
## 5. feladat (20 pont)
- Hozz létre egy teljesen új, üres Angular-alkalmazást a vizsga mappájában, 
`firebase-5` néven. 
- Publikáld az alkalmazást a következő címen a Firebase hosting segítségével:  
`<githubname>-firebase-5.web.app`
