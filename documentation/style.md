# Working with styles functions mixinsvendor

> When working with styles, **it is important** to adhere to the established [code formatting rules] (**_style-scss.md). ( ** - your branch name )

The assembly uses the [SCSS] preprocessor (http://sass-lang.com/) and the PostCSS plugin [Autoprefixer] (https://autoprefixer.github.io/ru/).

Styles are located in a folder `src/scss`:

```text
codetime-template
└── src
    └── scss
      
```

The task is responsible for assembling and converting SASS to CSS `scss`:

```bash
gulp sass
```

After executing the command in the folder `build/css` appear file `style.css` and `style.css.map`:

```text
codetime-template
└── build
    └── css
        ├── style.css
        └── style.css.map
```

## Coding rules

### BEM

It is recommended to use [BEM notation] for class naming (https://ru.bem.info/methodology/naming-convention/).

```scss
.block {
    &__element {
        &--modificator {
            // ...
        }
    }
}
```

### State classes

State classes are recommended to be written briefly:

```scss

```

### CSS property order

CSS properties should be written in a specific order. The order is set in the file `.stylelintrc` (key `order/properties-order`).
You can check the correct order of properties using a linter:

```bash
gulp lint:scss
```

### Variables

In file `src/scss/_variables.scss` only the main variables should be taken out:

* `font-family` for fonts. Example:

  ```scss
  $font-family-roboto: Roboto, sans-serif;
  $font-family-pt-serif: PT Serif, serif;
  ```

* Colors. Example:

  ```scss
  $color-aqua-deep: #005741;
  $color-black: #000;
  $color-white: #fff;
  ```

  For naming colors, you can use [this service](http://chir.ag/projects/name-that-color/).

Variables used in only one block or component should be written in the same file where they are used.

### `@mixin` и `@extend`

Duplicate sections of code (20-30 lines or more), differing only in values, should be placed in separate mixins.

It is not recommended to use the directive `@extend`. Instead, you should use `@mixin`.

### Vendor prefixes

There should be no vendor prefixes in SCSS code. They are automatically arranged during assembly. However, there are exceptions and some prefixes must be added manually.

**Wrong:**

```scss
input {
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;

    &::-webkit-input-placeholder {
        color: #000;
    }

    &:-moz-placeholder {
        color: #000;
    }

    &::-moz-placeholder {
        color: #000;
    }

    &:-ms-input-placeholder {
        color: #000;
    }

    &::placeholder {
        color: #000;
    }
}
```

**Right:**

```scss
input {
    transition: border-color 0.3s;

    &::placeholder {
        color: #000;
    }
}
```

## Using a linter

Linter is integrated into the assembly [stylelint](https://stylelint.io/).
Settings file — `.stylelintrc`.
This linter allows you to maintain the SCSS code in accordance with the specified regulations.

Verification is carried out using the task `lint:sass`:

```bash
gulp lint:sass
```

Usage example:

```scss
.block {
  &__element {
    display: inline-block
  }
  border-radius: 0px;
  height: 30px;
  width:30px;
}
```

Test results:

```text
2:3     ⚠  Expected indentation of 1 tab (indentation) [stylelint]
3:5     ⚠  Expected indentation of 2 tabs (indentation) [stylelint]
3:25    ⚠  Expected a trailing semicolon (declaration-block-trailing-semicolon) [stylelint]
4:3     ⚠  Expected indentation of 1 tab (indentation) [stylelint]
5:3     ⚠  Expected indentation of 1 tab (indentation) [stylelint]
5:3     ⚠  Expected declaration to come before rule (order/order) [stylelint]
5:3     ⚠  Expected empty line before declaration (declaration-empty-line-before) [stylelint]
5:19    ⚠  Unexpected unit (length-zero-no-unit) [stylelint]
6:3     ⚠  Expected indentation of 1 tab (indentation) [stylelint]
7:3     ⚠  Expected indentation of 1 tab (indentation) [stylelint]
7:3     ⚠  Expected "width" to come before "height" (order/properties-order) [stylelint]
7:9     ⚠  Expected single space after ":" with a single-line declaration (declaration-colon-space-after) [stylelint]
```

Corrected code:

```sass
.block {
    border-radius: 0;
    width:30px;
    height: 30px;

    &__element {
        display: inline-block
    }
}
```