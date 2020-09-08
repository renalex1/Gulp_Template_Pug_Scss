# Mixins

- [btn](#btn)
- [icon](#icon)






#### **btn**

Mixin | Defaults | Description
---- | ---- | ----
`btn(background-color, border-radius,`<br> `color, padding , line-height)` | `background-color`: #fff <br>`$border-radius`: `0`<br>`color`: `#000`<br>`font-size`: `16px`<br>`padding`: `0`<br>`line-height`: `18`<br> `display`: `inline-block;` | Create button  <br> <br>Also if font-size: write other property<br> and line-height leave defaults then line-height<br> will be +2px of font-size: size


```scss
// scss
.my-element {
   @include btn();
}

```
```css
/* css */
.my-element {
   background-color: #fff;
   border-radius: 0;
   font-size: 16px;
   color: #000;
   text-decoration: none;
   padding: 0;
   display: inline-block;
   line-height: 18px;
}

```
```scss
// scss
.my-element {
   @include btn(red,15,black,32px,16px 22px 14px 32px ));
}

```
```css
/* css */
.my-element {
  background-color: red;
  border-radius: 15;
  font-size: 32px;
  color: black;
  text-decoration: none;
  padding: 16px 22px 14px 32px;
  display: inline-block;
  line-height: 34px;
}

```



#### **icon**


Mixin | Defaults | Description
---|---|---
`icon($width-icon, $height-icon, )` | width: $width-icon;<br>height: $height-icon; <br>background: url("../../img/sprite/png/");<br>display: inline-block; | Create icon


```scss
// scss
.my-element {
   @include icon();
}

```



```css
/* css */

.our__element {
   width: 100%;
   height: 100%;
   background: url("../img/sprite/png/");
   display: inline-block;
}

```

```scss
// sass
.our__element {
    @include icon (25px, 26px)
}
```

```css
// css 
.our__element {
   width: 25px;
   height: 26px;
   background: url("../img/sprite/png/");
   display: inline-block;
}

```
