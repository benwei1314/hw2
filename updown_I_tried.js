function setup() {
  createCanvas(400, 400);
  frameRate(2000)
}

var ballX = 30;
var ballspeed = 3;

var ballX2 = 30;
var ballspeed2 = 10;

function draw() {
  background(220);

  fill(255, 0, 0)
  ellipse(ballX, 100, 80);
  
  fill(255, 128, 255)
  ellipse(ballX2, 300, 30);

  ballX = ballX + ballspeed;
  ballX2 = ballX2 + ballspeed2;
  
  fill(0, 255, 0)
  rectMode(CENTER);
  translate(width / 3, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 300, 20);

  if (ballX >= 400) {
    ballspeed = -3;
  }

  if (ballX2 >= 400) {
    ballspeed2 = -5;
  }

  if (ballX <= 0) {
    ballspeed = 3;
  }

  if (ballX2 <= 0) {
    ballspeed2 = 5;
  }
  
  
}
