function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();

  //red square
  fill(225, 0, 0);
  rect(0, 0, 160, 50);
  rect(200, 300, 70, 40);
  

  //blue square
  fill(0, 0, 225);
  rect(0, 120, 160, 180);
  rect(270, 50, 130, 70);

  //yellow square
  fill(255, 255, 0)
  rect(160, 50, 40, 70);
  rect(270, 340, 130, 60);

  //hor 1
  stroke(0)
  strokeWeight(5)
  line(0, 50, 400, 50);
  
  //hor 2
  stroke(0)
  line(0, 120, 400, 120);
  
  //hor 3
  stroke(0)
  line(0, 300, 400, 300);
  
  //hor 4
  stroke(0)
  line(0, 340, 400, 340);
  
  //ver 1
  stroke(0)
  line(160, 0, 160, 400);
  
  //ver 2
  stroke(0)
  line(200, 0, 200, 400);
  
  //ver 3
  stroke(0)
  line(270, 0, 270, 400);

}
