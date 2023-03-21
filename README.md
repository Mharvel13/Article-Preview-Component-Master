# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the component depending on their device's screen size
-   See the social media share links when they click the share icon

### Screenshot

-   Desktop Screenshot Solutiom
    ![Desktop Screenshot](<./screenshot-solution(Desktop).png>)

-   Mobile Screenshot Solutiom
    ![Mobile Screenshot](<./screenshot-solution(Mobile).png>)

### Links

-   Frontend Mentor Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/article-preview-component-solution-r9asf4xvsx)
-   Live Site URL: [Live Hosted Website](https://mharvel13.github.io/Article-Preview-Component-Master/)
-   Github Solution URL: [Github Hosted Codes](https://github.com/Mharvel13/Article-Preview-Component-Master)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow

### What I learned


#### HOW TO TOGGLE ELEMENTS BASED ON SCREEN-SIZES

The challange involved displaying the share popup box/area differently, depending on the screen sizes and mobile or desktop oreintation of the device. i was able to aachieve this through the use of the ``` windows.innerWidth ``` property on the windows object.

Below is a code snippet of how i was able to achieve this


```js

button.addEventListener("click", () => {
    displayShare();
});

function displayShare() {
    if (window.innerWidth < 1000) {
        profileBox.style.display = "none";
        shareBoxMobile.classList.toggle("share-mobile-off");
    } else {
        shareBoxDesktop.classList.toggle("share-desktop-off");
    }
}

```


## Author

-   GitHub Profile - [Mharvel13](https://github.com/Mharvel13)
-   Frontend Mentor - [Marvel Victor](https://www.frontendmentor.io/profile/Mharvel13)
-   Twitter - [Marvel](https://twitter.com/Mharvel_O)
