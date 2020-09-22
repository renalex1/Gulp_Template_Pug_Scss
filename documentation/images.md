# Working with images and Sprites PNG or SVG

Images should be stored in the ` src / img `folder. When the `gulp` task is run, files from the `src / img `folder are copied to `build / img`

```
codetime-template
├── build
│   └── img
└── src
    └── img
```
# Working with `PNG` sprites

Working with PNG sprites is built as follows:

1.  We take icons files - . Save in `src / img / sprite /` png:
Icon file name must be example `facebook.png` important not `icon-facebook.png`

```
codetime-template
└── src
    └── img
        └── sprite
            └── png
                └── facebook.png
```
2. Run the `imgSprite` task (if `gulp watch` or `gulp` is already running, you can skip this step):

3. The generator optimizes and combines icons into sprites:
```
codetime-template
└── src
    └── img
        └── sprites.png
```
- Based on the predefined template, the `src / scss / mixins /_sprites.scss` file is generated containing auxiliary information about the resulting sprites:
```
codetime-template
└── src
    └── scss
        └── mixins
            └── _sprites.scss
```
For each icon, a CSS class is created in the `.icon- `[name] format. In our case, we get the `.icon-facebook `class.
Also in `src / scss / _base.scss` added for class `icon { display: inline-block;}` and icon must use with two classes `.icon + your icon [name]`

- The assembly contains a `Pug mixin` for connecting SVG sprites.
`src / pug / mixins / svg.pug:`
```pug
mixin png(className)
	i(class=`icon icon-${className}`)
```
4. The resulting sprites can be used in `Pug` or `Html` (using classes):

```pug
footer
	i.icon.icon-facebook
		| +374 91 46-78-90

```
- Also pug have mixin and you can use it this way
```pug
footer
	+png('facebook')
		| +374 91 46-78-90
```

```html
<footer>
	<i class="icon icon-facebook">+374 91 46-78-90</i>
</footer>

```
# Working with SVG sprites

How SVG sprites work:

1. We get vector icons in .svg format (either prepared in advance, or exported using the editor). Save it to the `src / img / sprite / svg `folder:
```
codetime-template
└── src
    └── img
        └── sprite
            └── svg
                └── facebook.svg
```
2. Run the `svgSprite` task (if `gulp watch` or `gulp` is already running, you can skip this step):

3. The generator optimizes and combines icons into one sprite:
```
codetime-template
└── src
    └── img
        └── sprites.svg
```
- The assembly contains a `Pug mixin` for connecting SVG sprites.
`src / pug / mixins / svg.pug:`
```pug 
 mixin svg(name)
    svg&attributes(attributes)
        use(xlink:href=`${baseDir}images/sprites.svg#${name}`)
```
4. We connect the icon to  `Pug` or `Html`:

```pug
footer
	svg
		<use xlink:href="./img/sprites.svg#facebook">
	| +374 91 46-78-90
```
- Also pug have mixin and you can use it this way
```pug
footer
	+svg('facebook')
		| +374 91 46-78-90
```

```html
<footer>
	<svg>
		<use xlink:href="./img/sprites.svg#facebook"></use>
	</svg>+374 91 46-78-90
</footer>
```

- If necessary, the icon can be styled:
```scss
footer {
	svg {
			display: inline-block;
			vertical-align: middle;
			width: 30px;
			height: 30px;
			fill: $color-black;
	}
}
```
- If the fill or stroke color cannot be changed using CSS, then you need to open the SVG file of the icon in an editor and remove the corresponding attributes (fill, stroke) from the code.