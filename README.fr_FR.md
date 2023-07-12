# vite-copyright-insérer
**Français** | [中文](./README.zh_CN.md) | [English](./README.md)

## Description

vite-copyright-insérer est un plugin spécialement créé pour Vite.js. Sa principale fonction est d'insérer automatiquement des avis de droit d'auteur en haut de vos fichiers source.

## Fonctionnalités principales

- Insertion automatique des avis de droit d'auteur
- Configurable avec des options pour le texte de copyright personnalisé
- Supporte une variété de types de fichiers, y compris .js, .ts, .vue, etc.
- Rapide, léger, non intrusif

## Installation

Installez en utilisant npm ou yarn :

```bash
npm install vite-insert-copyright --save-dev
# ou
yarn add vite-insert-copyright -D
```

## Utilisation

Importez et utilisez le plugin dans votre fichier `vite.config.js` ou `vite.config.ts` :

```javascript
import { defineConfig } from 'vite'
import copyright from 'vite-insert-copyright'

export default defineConfig({
  plugins: [
    copyright({
      // La configuration optionnelle va ici
    }),
  ],
})
```

## Configuration

Le plugin accepte un objet de configuration, voici toutes les options de configuration disponibles :

```javascript
{
  // Plus de détails ici
}
```

## Licence

MIT
