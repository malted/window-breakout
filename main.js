var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

requestAnimationFrame(moved);

let x = 0;
let y = 0;
function moved() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball(screen.width / 2 - 25 - screenX, screen.height / 2 - 25 - screenY);
  paddle();
  boxes();

  requestAnimationFrame(moved);
}

function ball(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function paddle() {
  const width = 80;
  const height = 20;

  ctx.fillStyle = "black";
  ctx.fillRect(
    canvas.width / 2 - width / 2,
    (screen.height / 10) * 8 - screenY,
    width,
    height,
  );
}

function boxes() {
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 20; x++) {
      const red = x * 12.75;
      const green = y * 51;
      const blue = 0;

      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 1)`;

      // Draw something, for example, a rectangle
      ctx.fillRect((screen.width / 20) * x - screenX, y * 90 - screenY, 75, 75);
    }
  }
}
