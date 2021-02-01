# Progressive single page application

Template based on [react](https://github.com/facebook/react), [redux](https://github.com/reduxjs/redux), [redux-saga](https://github.com/redux-saga/redux-saga), [router5](https://github.com/router5/router5), [stylus](https://github.com/stylus/stylus), [webpack](https://github.com/webpack/webpack).

##Table of Contents

1. [install](#install)
2. [font loading](#font)

<h2 align="center">Install</h2>

Step 1. Clone via git CLI:

```bash
git clone https://github.com/DenRedsky/SPA.git
```

Step 2. Install with npm:

```bash
npm i
```

Step 3. Start development :rocket::

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

<h2 align="center">Font loading</h2>

Step 1.

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
**2) stylus**
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

### for questions use telegram: @jquery_dlya_slabih
