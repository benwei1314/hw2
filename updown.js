function setup() {
  createCanvas(400, 400);
  frameRate(2000)
}

var ballY = 100;
var ballspeed = 3;

var ballY2 = 300;
var ballspeed2 = 10;

function draw() {
  background(220);

  fill(255, 0, 0)
  ellipse(30, ballY, 80);
  
  fill(255, 128, 255)
  ellipse(30, ballY2, 30);

  ballY = ballY + ballspeed;
  ballY2 = ballY2 + ballspeed2;

  if (ballY >= 400) {
    ballspeed = -3;
  }

  if (ballY2 >= 400) {
    ballspeed2 = -5;
  }

  if (ballY <= 0) {
    ballspeed = 3;
  }

  if (ballY2 <= 0) {
    ballspeed2 = 5;
  }
  
  
}
