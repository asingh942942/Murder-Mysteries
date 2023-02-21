/* Zafar, Z (2022) Satisfying Black Fire Cursor Trail Animation
[Source Code]. https://www.youtube.com/watch?v=7eE8xPyXSR4 */

"use strict";

// mouse trail functionality

const circles = document.querySelectorAll(".circle");
const coords = { x: 0, y: 0 };

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];

    x += (nextCircle.x - x) * 0.25;
    y += (nextCircle.y - y) * 0.25;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
