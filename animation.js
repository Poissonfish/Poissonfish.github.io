// Select the element you want to animate
// var element = document.querySelector('h1');

anime({
    targets: '.line-drawing-demo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});


// // Create the animation
// anime({
//     targets: element,
//     translateX: 250,
//     duration: 800,
//     easing: 'easeOutExpo'
// });
