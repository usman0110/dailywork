let loadtext = document.querySelector("#lt");
let background = document.querySelector("#bgg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  document.querySelector("#lt").innerText = `${load}%`;
  document.querySelector("#lt").style.opacity = scale(load, 0, 100, 1, 0);
  document.querySelector("#bgg").style.filter = `blur(${scale(
    load,
    0,
    100,
    30,
    0
  )}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
