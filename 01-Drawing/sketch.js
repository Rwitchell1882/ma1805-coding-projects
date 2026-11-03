function setup() {
  createCanvas(925, 700); 
  background(255);    
  // noStroke();              
}

function draw(){

  // Head
  fill(0, 100, 0); 
  circle (462.5, 350, 500);
  
  // Eye
  fill (230, 220, 100);
  circle (370, 290, 100);

  // Pupil
  fill (65, 20, 25);
  circle (370, 290, 25); 

  // Eyebag
  fill (75, 85, 40);
  arc (370, 325, 85, 30, 0, PI);

  // Light Socket
  fill (45, 55, 25);
  ellipse (555, 290, 85, 100);

  // Dark Socket
  fill (25, 30, 15);
  ellipse (555,290,55,70);

  // Left cheek
  noStroke();
  fill(255, 255, 255);
  ellipse(225, 480, 100, 200);

  // Right cheek
  ellipse(700, 480, 100, 200);

  // Mouth
  fill (0);
  arc (462.5, 500, 150, 65, PI, TWO_PI);

  // Blood
  fill(110, 15, 15);
  ellipse(440, 510, 12, 35);
  ellipse(470, 520, 14, 50);
  ellipse(495, 508, 10, 25);

  // Nose
  fill (100, 10, 10);
  triangle (462, 350, 425, 420, 500, 420);

  // Nose shading
  fill (65,5,5);
  triangle (462, 365, 440, 410, 485, 410);
}