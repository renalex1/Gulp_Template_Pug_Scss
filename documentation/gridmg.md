# **Grid**
Grid must be used in a ***display: flex;*** mode. Grid system uses a series of containers, rows, and columns to layout and align content. 

```
exemple

<div class="container">
  <div class="row">
    <div class="col-sm-3">
      One of three columns
    </div>
    <div class="col-sm-3">
      One of three columns
    </div>
    <div class="col-sm-3">
      One of three columns
    </div>
  </div>
</div>
```

Grid | Variables |
---|---|
.container-fluid <br>.container <br>  .row <br> .col <br> .col-sm <br> .col-sm <br> .col-md <br> .col-lg <br> .col-xl <br> .offset-... | $col: 376 px; <br> $sm: 576 px; <br>  $md: 768 px; <br> $lg: 992 px; <br> $xl: 1200 px; <br> $gutter: 30 px; <br> $col_quantity: 12; | 

The number of grid columns can be modified via Sass variables. $col_quantity is used to generate the widths 

## Description

@media | Description |
---|---|
.col  <br> .col-sm <br> .col-md <br> .col-lg <br> .col-xl | for small mobile <br> for mobile <br> for tabs <br> for laptop <br> for desktop FullHD


```
.container-fluid - width: 100% across all viewport and device sizes
.container       - use for a responsive pixel width 
.row             - rows are wrappers for columns
.offset          - used to push columns over for more spacing
```

```
$gutter          - controlling the space between columns
$col_quantity    - how many columns must be in a project (1-12)
```

