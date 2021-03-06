# Portfolio Website

## A tutorial in Dev-Ed course.

- Started on 12th Jan 2021
- Finished ?
- Built with Vanilla HTML, CSS and SCSS.

## What I've learned through out this projects:

1.  You can group your SVG components and give names to them. And then paste the SVG code in the HTML, and use each id to animate the SVG components.
2.  SCSS is easy to use if one is overwhelmed with making their own CSS.

    a. Nest their child in the class or tag itself.

    b. Build a helper function with inputs that can be changed throughout it used. For instance:

            @mixin flex($justify, $align, $direction) {

            display: flex;
            justify-content: $justify;
            align-items: $align;
            flex-direction: $direction;
            }

    c. We can have our specific scss file apart from our style.scss by naming it starting with underscore(\_) such as `_globals.scss` and import it in using `@import "globals"`.

3.  Manipulate the grouped svg as #Id name.

    a. `transform-box: fill-box` is used to animate it based on itself.

    b. `tranform-origin: bottom` is used to animate something based on its origin at the bottom such as the long hand clock rotation animation.

    ![](https://raw.githubusercontent.com/farahanasuhaimi/WebDev-Projects/main/Portfolio%20Website/img/portfolio.gif)

4.  Screenshot:

    a. Desktop views:
    <p>
    <img src="https://raw.githubusercontent.com/farahanasuhaimi/WebDev-Projects/main/Portfolio%20Website/img/desktop-view.png" />

    <img src="https://raw.githubusercontent.com/farahanasuhaimi/WebDev-Projects/main/Portfolio%20Website/img/desktop-view-small.png" />
    </p>

    b. Mobile views:
    <p>
    <img src="https://raw.githubusercontent.com/farahanasuhaimi/WebDev-Projects/main/Portfolio%20Website/img/tablet-view.png" />

    </p>
