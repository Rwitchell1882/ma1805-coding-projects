let i = 0;

// WW2 Paragraph 
const WW2 = "Across six years approximately 75 million people died during World War II. Every 2 seconds As each word appears on the screen another life was lost. Behind every number was a person someone's child parent sibling or friend. Millions of lives dreams and futures disappeared leaving families and entire generations forever changed.";
const textArray = WW2.split(" "); 


function setup(){
	createCanvas(800, 800); 
  background (0);
  frameRate(.8); // speed of the sketch 
}

function draw(){
stroke(255, 255, 0, 200); //Generative lines
strokeWeight(2);
line(random(width), random(height), random(width), random(height));
noStroke();
  
let x = 100;
let y = 30;

for (let j = 0; j < i; j++) {
  x = x + 200;

  if (x > 700) {
    x = 100;
    y = y + 50;
  }
}

  if (i < textArray.length) { 
    fill(255);
    stroke(100);
    console.log(i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
    background(0); // clear the background 
  }

}