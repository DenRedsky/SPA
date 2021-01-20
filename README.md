# Webpack 4, react, redux, saga, router, stylus template

Example of font loading (not google fonts):

**1) html**

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
