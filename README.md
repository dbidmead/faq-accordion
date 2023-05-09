# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

## Links

- Solution URL: [https://dbidmead.github.io/faq-accordion](https://dbidmead.github.io/faq-accordion)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS transitions
- Vanilla JS

## What I learned

### prevent clicking on child element from affecting onclick function of parent element
```css
.child-el {
  pointer-events: none;
}
```
Thus, clicking on the child element will have no bearing on the onclick functionality of its parent.

### manipulate a background-image
```css
div {
    background-image: url('./path');
    background-origin: border-box;
    background-position: x% y%;
    background-repeat: no-repeat;
    background-size: 250%;
}
```

### to animate height or width transitions, leave height or width set to auto and change the max-height or max-width properties with the transition
```css
.dropdown {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.4s ease;
}
```
This initially hides the contents of the dropdown.

```js
const dropdown = document.querySelector('.dropdown');
dropdown.setAttribute('style', 'max-height:99999px; opacity:1;')
```
This alters the CSS of the dropdown in manner compatible with CSS animation.

## Author

- GitHub - [@dbidmead](https://github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)