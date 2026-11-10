# Urban Waxing

Jednostránkový web pre [@urbanwaxing](https://www.instagram.com/urbanwaxing/), servis lyží a snowboardov v Sokolovciach: voskovanie, brúsenie hrán, opravy sklznice.

Živá adresa: https://matuslenicky.github.io/urbanwaxing/

## Obsah

Poradie sekcií určil majiteľ 10. 11. 2026: úvod, služby, o mne, ako to prebieha, pred a po, cenník, objednávka a kontakt, recenzie, časté otázky.

Fotky a video sú len z tretieho albumu Google Fotiek, ktorý majiteľ poslal 10. 11. 2026 („fotky, ktoré chcem použiť“). Sú prekódované do webp bez EXIF a pred/po fotky sú originály bez nápisov. Texty pochádzajú z jeho cenníka 2026/27 a z Instagramu @urbanwaxing; nič nie je vymyslené. Sekcia O mne zatiaľ obsahuje len overené fakty (od roku 2023, Sokolovce, jazdí na snowboarde) a čaká na jeho vlastný text. Recenzie odkazujú na príbeh „Od vás“ na Instagrame, kým majiteľ nepošle skutočné. Adresu (Hlohovecká 347/3, Sokolovce) dodal majiteľ, mapa je vložená z Google Máp.

Ceny treba meniť na troch miestach: tabuľka v `#cennik`, odpoveď v `#faq` a `PRICES` / `ALL` v skripte (odhad vo formulári; ak sú vybraté všetky tri služby, platí riadok „Voskovanie + oprava sklznice + brúsenie hrán“). Objednávky idú cez správu na Instagrame alebo Facebooku; formulár na webe len pripraví text správy, skopíruje ho a otvorí chat na Instagrame (ig.me) alebo v Messengeri (m.me, Facebook stránka id 61587166323284), nič neodosiela.

Písmo [Archivo](https://fonts.google.com/specimen/Archivo) (SIL Open Font License), súbory z balíka `@fontsource-variable/archivo`.

## Úpravy

- Celá stránka je v `index.html` (HTML, CSS aj JS), obrázky v `img/`, písmo vo `fonts/`.
- `node scripts/offline.mjs` vytvorí `urbanwaxing.html`, jeden súbor s vloženými obrázkami na poslanie (nie je v repozitári).
- Web je zatiaľ označený `noindex`; keď ho majiteľ schváli, riadok `<meta name="robots" content="noindex">` stačí zmazať.
