import anime from 'animejs';

export function translate(element) {
  anime({
    targets: element,
    // targets: '.line-drawing-demo .lines path',
    translateX: 100,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}

anime({
  targets: ".path",
  strokeDashoffset: [2000, 0],
  easing: "easeInOutSine",
  duration: 5000
});
