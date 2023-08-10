import anime from 'animejs/lib/anime.es.js';

"use strict";

const logo = document.getElementById('name');
const startAnimation = document.getElementById('startAnimation');

startAnimation.onclick = function () {
  anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  });
};
