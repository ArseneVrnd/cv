# CV — Arsène Vuarand

Site CV personnel (SPA React + Vite + Tailwind), bilingue FR/EN, déployé sur
GitHub Pages : https://arsenevrnd.github.io/cv/

## Structure du dépôt

```
app/                 ← code source (à éditer ici)
  src/
    components/      ← composants React (Hero, Experience, FounderTrack, …)
    data/            ← contenu du CV en objets { fr, en }
    i18n/            ← contexte de langue + libellés d'interface
  vite.config.js     ← build émis à la racine du dépôt (base: '/cv/')
  scripts/clean.mjs  ← purge les assets hashés obsolètes après build

index.html           ← build de production (généré — ne pas éditer à la main)
assets/              ← JS/CSS buildés (générés)
CV_Arsene_Vuarand.pdf
```

> Le contenu vit dans `app/src/data/*` et `app/src/i18n/ui.js`. Chaque chaîne
> traduisible est un objet `{ fr: "…", en: "…" }`.

## Développement

```bash
cd app
npm install
npm run dev       # serveur local
npm run build     # build vers la racine du dépôt + nettoyage des assets
npm run preview   # prévisualise le build
```

## Déploiement

GitHub Pages sert la branche `gh-pages` depuis sa racine. Le build de Vite est
émis directement à la racine du dépôt (`index.html` + `assets/`), donc il suffit
de `npm run build`, committer et pousser sur `gh-pages`.
