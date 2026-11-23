# Emshey Family website

The site uses [Docusaurus](https://docusaurus.io/) and is published at [emshey.ca](https://emshey.ca/).

## Work on the site locally

Use Node.js 24, the same version used in GitHub Actions.

```sh
npm ci
npm start
```

Add family pages under `docs/family/`. Docusaurus builds the family sidebar from that directory. Run `npm run build` to check the production build, including links, and `npm run serve` to preview it.

## Deploy

The Website workflow builds pull requests and publishes pushes to `main` through GitHub Pages. For the initial migration, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** and confirm the custom domain is still `emshey.ca`. If the first deploy runs before the source changes, rerun the Website workflow on `main`.
