# CSS Grid
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Bootstrap vs. CSS Grid](#bootstrap-vs-css-grid)
- [Using CSS Grid](#using-css-grid)
- [What we learned:](#what-we-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

[CSS Grid][1] is a two-dimensional layout system that lets us create a grid with
columns and rows purely using vanilla CSS.

Unlike flexbox, which is one-dimensional and meant for individual container
elements, a grid layout gives us the ability to control and customize an entire
page layout.

Here is a diagram depicting a grid layout:

<img src="images/grid-layout.svg"/>

## Bootstrap vs. CSS Grid

Prior to CSS Grid, developers used various tools to achieve a grid layout, the
earliest of these being the HTML `<table>`. We then progressed into using CSS
libraries for a responsive grid layout, the most ubiquitous being
[Bootstrap][2], a front-end library with pre-built grid classes and also jQuery
plugins.

While many developers and dev shops still use Bootstrap for convenience, it
does come with some caveats: A Bootstrap grid is 12 columns, and this cannot be
changed. Bootstrap automatically adds padding around columns (known as “gutters”
) that you may or may not want to override. There are a number of HTML classes
to use for the container, row, and columns at responsive breakpoints -- meaning
more stuff to add to your HTML file. That said, Bootstrap is a common
out-of-the-box solution that’s worth knowing about.

In comparison, [CSS Grid][1] provides greater flexibility and control over the
grid layout. You can add as many columns and rows as you want. There are no
HTML classes to use, only CSS properties. You can customize anything in the
grid you want -- including the sizes of rows and columns, the alignment of grid
items, the position of grid items, the gutters/spacing, etc. You can also make
grid items easily span multiple rows and/or columns. No external libraries are
required, meaning no code bloat. CSS Grid is pretty powerful! That said, there
is a learning curve, and not all [browsers support][3] CSS Grid (especially
newer features).

## Using CSS Grid

CSS Grid can be used to create an entire page layout or for a specific
container element. Just like with flexbox, a grid layout consists of CSS styles
applied to:

* A grid container (parent element)
* Grid items (children elements)

In the next two readings, we'll go over all of the styles related to the
grid container and the grid items -- there's a lot of them! If you learn better
by doing than reading, you might want to check out the game below to start
learning CSS grid. You can always come back to these readings afterwards.

## What we learned:

* Comparison of flexbox and grid layout
* Comparison of CSS libraries like Bootstrap vs. CSS Grid

[1]: https://css-tricks.com/snippets/css/complete-guide-grid/
[2]: https://getbootstrap.com/
[3]: https://caniuse.com/#search=css%20grid
