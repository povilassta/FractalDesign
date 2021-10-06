"use strict";

const canvas = document.getElementById("canvas");
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
}

const stepNumberSlider = document.getElementById("stepNumber");
stepNumberSlider.addEventListener("input", init);

let color = "black";

function init() {
  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

  drawF(stepNumberSlider.value, color);
}

// Recursive draw
function drawF(step, color) {
  if (step > 0) {
    step = step - 1;
    ctx.save();
    ctx.save();
    ctx.save();

    ctx.transform(0, 0.5, 0.5, 0, 0, 0); //1
    // ( 0   0.5   0)
    // (0.5   0    0)
    // ( 0    0    1)
    color !== "black" ? drawF(step, color) : drawF(step, "red");

    ctx.restore();
    ctx.transform(-0.25, 0, 0, 0.25, 600, 200); //2
    // (-0.25   0    600)
    // (  0    0.25  200)
    // (  0     0     1 )
    color !== "black" ? drawF(step, color) : drawF(step, "green");

    ctx.restore();
    ctx.transform(0, 0.5, -0.5, 0, 800, 400); //3
    // ( 0  -0.5  800)
    // (0.5   0   400)
    // ( 0    0    1 )
    color !== "black" ? drawF(step, color) : drawF(step, "blue");

    ctx.restore();
    ctx.transform(0.5, 0, 0, 0.5, 0, 400); //4
    // (0.5   0    0 )
    // ( 0   0.5  400)
    // ( 0    0    1 )
    color !== "black" ? drawF(step, color) : drawF(step, "purple");
  } else drawL(color);
}

// draw the shape
function drawL(color) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 0);
  ctx.lineTo(150, 500);
  ctx.lineTo(800, 500);
  ctx.lineTo(800, 800);
  ctx.lineTo(0, 800);
  ctx.fillStyle = color;
  ctx.fill();
}
