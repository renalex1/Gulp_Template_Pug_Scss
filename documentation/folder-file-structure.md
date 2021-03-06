# Folder and file structure

```text
codetime-template
├── documentation
├── img \ icon
├── src
│   ├── css
│   │   └── style.css
│   ├── fonts
│   │   └── .keep
│   ├── img
│   │   ├── favicon
│   │   │   └── .keep
│   │   └── sprites
│   │       ├── png
│   │       │   └── .keep
│   │       └── svg
│   │           └── .keep
│   ├── sass
│   │   ├── mixins
│   │   │   └── _mixin.scss
│   │   ├── vendor
│   │   │   ├─── base
│   │   │   │    ├── _body.scss
│   │   │   │    └── _html.scss
│   │   │   ├─── embed
│   │   │   │    ├── _img.scss
│   │   │   │    └── _svg.scss
│   │   │   ├─── forms
│   │   │   │    ├── _button.scss
│   │   │   │    ├── _checkbox-and-radio.scss
│   │   │   │    ├── _cursor.scss
│   │   │   │    ├── _fieldset.scss
│   │   │   │    ├── _fix-focus-inner.scss
│   │   │   │    ├── _fix-fonts.scss
│   │   │   │    ├── _fix-overflow.scss
│   │   │   │    ├── _fix-text-transform.scss
│   │   │   │    ├── _legend.scss
│   │   │   │    ├── _margin.scss
│   │   │   │    ├── _number.scss
│   │   │   │    ├── _optgroup.scss
│   │   │   │    ├── _search.scss
│   │   │   │    └── _textarea.scss
│   │   │   ├─── grouping
│   │   │   │    ├── _.scss
│   │   │   │    └── _.scss
│   │   │   ├─── html5
│   │   │   │    ├── _.scss
│   │   │   │    └── _.scss
│   │   │   ├─── links
│   │   │   │    ├── _.scss
│   │   │   │    └── _.scss
│   │   │   ├─── text-level
│   │   │   │    ├── _.scss
│   │   │   │    └── _.scss
│   │   │   └ _normalize.scss
│   ├── js
│   │   ├── main.js
│   │   └── vendor.js
│   └── index.pug
├── gitignore
├── gulpfile.js
├── package.json
├── package-lock.json
└── README.md

```

## `src`

In folder `src` the source files of the project are stored.

## `src/img`

Folder `img` is intended to store images.
When assembling, files from this folder go to `build/img`.

## `src/img/sprites`

Folder `src/img/sprites` is intended for storing vector (SVG) and raster (PNG) icons.

## `src/img/sprites/png`

Folder `src/img/sprites/png` is intended for storing raster icons.
When assembling, files from this folder are combined into two sprites: `build/img/sprites.png` и `build/img/sprites@2x.png`.

## `src/img/sprites/svg`

Folder `src/img/sprites/svg` is intended for store vector icons.
When assembling, files from this folder are combined into one sprite: `build/img/sprites.svg`.

## `src/js`

Folder `src/js` is intended for storing scripts.

## `src/js/vendor`

Folder `src/js/vendor` is intended for storing scripts of third-party libraries that are not in the npm repository.

## `src/js/main.js`

File `src/js/main.js` is intended to store the main site logic.
When building, this file goes to `build/js`.

## `src/js/vendor.js`

File `src/js/vendor.js` is intended for connecting third-party libraries.

When building, this file will go to `build/js`.

## `src/pug`

Folder `src/pug` is intended for storing templates.

## `src/pug/mixin`

Folder `src/pug/mixins` is intended for storing Pug mixins.

## `src/pug/base.pug`

In file `src/pug/base.pug` the basic template of the site pages is stored.

## `src/pug/mixins.pug`

File `src/pug/mixins.pug` is intended for connecting Pug mixins from a folder `src/pug/mixins`.

## `src/resources`

Folder `src/resources` is intended for store various project files.
When assembling, files from this folder go to `build`.

## `src/resources/fonts`

Folder `src/resources/fonts` is intended for storing fonts.
When assembling, files from this folder go to `build/fonts`.

## `src/scss`

Folder `src/scss` is intended for storing styles.

## `src/scss/mixins`

Folder `src/scss/mixins` is intended for storing SCSS mixins.

## `src/scss/vendor`

Folder `src/scss/vendor` is intended for storing styles of third-party libraries that are not in the npm repository.

## `src/scss/_base.scss`

File `src/scss/_base.scss` is intended for store basic styles.

## `src/scss/_fonts.scss`

File `src/scss/_fonts.scss` is intended for store basic styles.

## `src/scss/_mixins.scss`

File `src/scss/_mixins.scss` is intended for connect mixins from a folder `src/scss/mixins`.

## `src/scss/_sprites.scss`

File `src/scss/_sprites.scss`  is intended for work with PNG sprites.
The content of this file is automatically generated based on the template `src/scss/_sprites.hbs` and icons from the folder `src/img/sprites/png`.

## `src/scss/_variables.scss`

File `src/scss/_variables.scss` is intended for storing SCSS variables.

## `src/scss/_vendor.scss`

File `src/scss/_vendor.scss` is intended for include styles from third-party libraries.

## `src/scss/style.scss`

File `src/scss/style.scss` is intended for store the main styles of the site.
When assembled, this file is converted to CSS and saved in`build/css` вместе с файлом `style.css.map`.

## `src/index.pug`

`src/index.pug` - home page template.
When building, all Pug files from the folder `src` converted to HTML and saved to `build`.

## `.gitignore`

`.gitignore` — git settings file to ignore files.

## `gulpfile.js`

`gulpfile.js` — main build file containing Gulp tasks.

## `package.json`

`package.json` — a file containing basic information about the project and a list of required libraries.

## `README.md`

`README.md` - project description.

