const frame = document.querySelector(".clock-frame");

const innerFace = document.querySelector(".clock-innerface");
const pointHour = document.querySelector(".pointer-box__h");
const pointMin = document.querySelector(".pointer-box__m");
const pointSec = document.querySelector(".pointer-box__s");

/*
const hourDeg = ;
*/

function rotatePointer() {
  const date = Date.now();
  const hour = (date / (1000 * 60 * 60)) % 24 - 3;
  const min = (date / (1000 * 60)) % 60;
  const sec = (date / 1000) % 60;
  const hourDeg = hour * 30;
  const minDeg = min * 6;
  const secDeg = sec * 6;
  pointHour.style.transform = `rotate(${hourDeg}deg)`;
  pointMin.style.transform = `rotate(${minDeg}deg)`;
  pointSec.style.transform = `rotate(${secDeg}deg)`;
  console.log((Date.now() / (1000 * 60 * 60)) % 24 - 3);
}
setInterval(rotatePointer, 0.00001);

