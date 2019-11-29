<div align="center"  style="margin-bottom:30px">
    <img src="src/images/NXTBC.png" alt="Logo" width='500px' height='auto'/>
</div>

<div align="center">
    
[![Netlify Status](https://api.netlify.com/api/v1/badges/41ea43c2-911b-4892-a6ad-002a35ee76c2/deploy-status)](https://app.netlify.com/sites/osca-festival/deploys) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

</div>

## Getting Started

- [Fork this repository](https://help.github.com/articles/fork-a-repo/)

- Clone the forked repository like so:

```sh
git clone https://github.com/<your username>/osf-website.git && cd osf-website
```
- Read the [Contributors Guide](https://github.com/oscommunityafrica/osf-website/blob/master/CONTRIBUTING.md)

## Installation Guide

- Install the Gatsby CLI

```sh
npm install -g gatsby-cli
```
- Change directories into site folder

```sh
cd osf-website
```
- Create and checkout to a new branch for your feature

```sh
git checkout -b speakers-component
```

- Start development server

```sh
npm run develop
```

*Gatsby will start a hot-reloading development environment accessible by default at localhost:8000*

- Create a production build

```sh
npm run build
```

*Gatsby will perform an optimized production build, generating static HTML and per-route JavaScript code bundles.*

- Serve the production build locally

```sh
npm run serve
```

*Gatsby starts a local HTML server for testing the built site. Remember to build the site using gatsby build before using this command.*

- Make Git commits

```sh
npm run commit
```

*We use the [commitizen command line utility](https://github.com/commitizen/cz-cli), you'll be prompted to fill out any required commit fields at commit time. You would not need to run `git commit` again.*

## Format and lint

- See what ESLint and Prettier can fix

```sh
npm run analyze
```

- Run Prettier and ESLint with the --fix option

```sh
npm run fix
```
