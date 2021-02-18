# Progressive single page application

Template based on [react](https://reactjs.org/), [redux](https://redux.js.org/),
[redux-saga](https://redux-saga.js.org/), [router5](https://router5.js.org/),
[stylus](https://stylus-lang.com/), [webpack](https://webpack.js.org/),
[workbox](https://developers.google.com/web/tools/workbox), [handlebars](https://handlebarsjs.com/).

Code quality: [stylint](https://github.com/SimenB/stylint), [eslint](https://eslint.org/)
([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
[eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)),
[duplicate-package-checker-webpack-plugin](https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin),
[unused-files-webpack-plugin](https://github.com/tomchentw/unused-files-webpack-plugin),
[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

Tests: [webdriverio](https://webdriver.io/) + [mocha](https://mochajs.org/), [jest](https://jestjs.io/) + [testing library](https://testing-library.com/).

## Table of Contents

1. [install](#install)
2. [font loading](#font-loading)
3. [features](#features)

<h2 align="center">Install</h2>

**Step 1.** Clone via git CLI:

```bash
git clone https://github.com/DenRedsky/SPA.git
```

**Step 2.** Install with npm:

```bash
npm i
```

**Step 3.** Start development :rocket::

```bash
npm run start
```

### Other scripts

| Command | Description |
| :-----: | :---------: |
|```npm run build```| production build |
|```npm run analyze```| production bundle analyze |
|```npm run server```| run server for local testing, need to build production static (```npm run build```) before start |
|```npm run lint```| run lint of js, jsx, stylus files |
|```npm run test:unit```| run unit tests |
|```npm run test:e2e```| run e2e tests on http://localhost:3000 |

<h2 align="center">Font loading</h2>

**Step 1.** Add link tags to html:

```html
<link
    rel="preload"
    href="https://linkToFont.com/YourFontNameHere-medium.woff2"
    as="font"
    type="font/woff2"
    crossorigin
>
<link
    rel="preload"
    href="https://linkToFont.com/YourFontNameHere-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
>
```

**Step 2.** Add ```@font-face``` to **globalStyles.styl** and set ```font-family```:
```stylus
@font-face
  font-family 'YourFontNameHere'
  src url('https://linkToFont.com/YourFontNameHere-medium.woff2') format('woff2')
  font-weight 500
  font-style normal
  font-display swap // @stylint ignore

@font-face
  font-family 'YourFontNameHere'
  src url('https://linkToFont.com/YourFontNameHere-regular.woff2') format('woff2')
  font-weight 400
  font-style normal
  font-display swap // @stylint ignore

body
  font-family 'YourFontNameHere', sans-serif
```

<h2 align="center">Features</h2>

**Workbox.** Precache static bundled via webpack. API has cache with revalidation. Fallback as ```offline.html```.

**Webpack.** Lazy loading of js and css, depending on routes and dynamic chunks.

**Polyfills.** Used [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll), [intersection-observer](https://github.com/w3c/IntersectionObserver).

### for questions use telegram: @jquery_dlya_slabih
