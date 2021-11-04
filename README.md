# Objectiv Website

## Editing website pages

The root folder can be found under `/src/pages`. Edit or add Markdown or React (.js) files. 

Since Docusaurus uses MDX as the parsing engine, it can also render React components inside a Markdown 
document. See all [Markdown features](https://docusaurus.io/docs/markdown-features) in the Docusaurus 
documentation.

## Editing documentation pages

The documentation pages are a standalone Docusaurus application, under `/docs/`. To run the docs:

```console
cd docs
yarn install
yarn start
```

To edit the documentation pages, edit or add the Markdown files under `/docs`. 

To update the sidebar menu, edit `/docs/sidebars.js`.

## Editing the blog

Edit or add the Markdown files under `/blog`. Prepend the filename with a date, in the YYYY-MM-DD format.

Add front matter between `---` lines to control properties such as the title of the blog post, and the author.
See all [Header options](https://docusaurus.io/docs/blog#header-options) in the Docusaurus documentation.

## Local Development

```console
yarn install
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live 
without having to restart the server.

## Build the website

First ensure you set the right OBJECTIV_ENVIRONMENT in the environment variables: either `dev`, `staging`, 
or `prod`.

* `dev`: tracker endpoint is set to `http://localhost:5000`.
* `staging`: `url` and `baseUrl` are set to the staging environment.

By default, the tracker endpoint is set to `https://collector.objectiv.io`.

Then to build:

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents 
hosting service.

## Acknowledgements
This documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/).