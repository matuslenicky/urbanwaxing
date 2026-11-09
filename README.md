# Urban Waxing

Jednostránkový web pre [@urbanwaxing](https://www.instagram.com/urbanwaxing/), servis lyží a snowboardov v Sokolovciach: voskovanie, brúsenie hrán, opravy sklznice.

Živá adresa: https://matuslenicky.github.io/urbanwaxing/

## Obsah

Texty, fotky a logo sú prevzaté z Instagramu @urbanwaxing (príspevky z roku 2026). Adresu (Hlohovecká 347/3, Sokolovce) dodal majiteľ 9. 11. 2026, mapa je vložená z Google Máp. Nič vymyslené: ceny a recenzie pribudnú, keď ich majiteľ pošle. Objednávky idú cez správu na Instagrame alebo Facebooku; formulár na webe len pripraví text správy, skopíruje ho a otvorí chat na Instagrame (ig.me) alebo v Messengeri (m.me, Facebook stránka id 61587166323284), nič neodosiela.

Písmo [Archivo](https://fonts.google.com/specimen/Archivo) (SIL Open Font License), súbory z balíka `@fontsource-variable/archivo`.

## Úpravy

- Celá stránka je v `index.html` (HTML, CSS aj JS), obrázky v `img/`, písmo vo `fonts/`.
- `node scripts/offline.mjs` vytvorí `urbanwaxing.html`, jeden súbor s vloženými obrázkami na poslanie (nie je v repozitári).
- Web je zatiaľ označený `noindex`; keď ho majiteľ schváli, riadok `<meta name="robots" content="noindex">` stačí zmazať.
