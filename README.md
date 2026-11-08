# Urban Waxing

Jednostránkový web pre [@urbanwaxing](https://www.instagram.com/urbanwaxing/), servis lyží a snowboardov v Sokolovciach: voskovanie, brúsenie hrán, opravy sklznice.

Živá adresa: https://matuslenicky.github.io/urbanwaxing/

## Obsah

Texty, fotky a logo sú prevzaté z Instagramu @urbanwaxing (príspevky z roku 2026). Nič vymyslené: ceny, telefón ani presná adresa na webe nie sú, lebo nie sú zverejnené ani na Instagrame. Objednávky idú cez správu na Instagrame; formulár na webe len pripraví text správy, nič neodosiela.

Písmo [Archivo](https://fonts.google.com/specimen/Archivo) (SIL Open Font License), súbory z balíka `@fontsource-variable/archivo`.

## Úpravy

- Celá stránka je v `index.html` (HTML, CSS aj JS), obrázky v `img/`, písmo vo `fonts/`.
- `node scripts/offline.mjs` vytvorí `urbanwaxing.html`, jeden súbor s vloženými obrázkami na poslanie (nie je v repozitári).
- Web je zatiaľ označený `noindex`; keď ho majiteľ schváli, riadok `<meta name="robots" content="noindex">` stačí zmazať.
