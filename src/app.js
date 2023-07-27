import anime from 'animejs/lib/anime.es.js';

"use strict";

const logo = document.getElementById('name');
const startAnimation = document.getElementById('startAnimation');

startAnimation.onclick = function () {
    let timeline = anime.timeline({
        targets: '.st0',
        direction: 'normal',
        loop: false
    })
    timeline.add({
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        fill: ['transparent', 'transparent'],
        duration: 400,
        delay: function (el, i) { 
		return i * 250; 
	}
    });

    timeline.add({
        easing: 'easeInOutSine',
        fill: ['transparent', '#1D2A75'],
        duration: 800
    },
    "-=200"
    );
};