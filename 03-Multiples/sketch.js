// Initialise variables 
let row = 7;     // Number of shapes in a row
let col = 7;     // Number of shapes in a col
let pad = 5;      // Padding between shapes 
let sWidth, sHeight;  
 let rgba = [
  [245, 225, 170], // Early morning
  [245, 190, 120], // Morning
  [240, 145, 100], // Noon
  [215, 120, 120], // Afternoon
  [150, 115, 165], // Evening
  [80, 90, 140],   // Night
  [35, 45, 75]     // Midnight
];    

let days = [
  ["Wake", "Awaken", "Rise", "Stir", "Rouse", "Arise", "Get up"], // Early morning
  ["Wash", "Shower", "Bathe", "Cleanse", "Freshen", "Rinse", "Scrub"], // Morning
  ["Morsel", "Treat", "Appetiser", "Lunch", "Snack", "Nibble", "Refuel"], // Noon
  ["Work", "Labour", "Study", "Create", "Build", "Practise", "Focus"], // Afternoon
  ["Consume", "Devour", "Dine", "Banquet", "Eat", "Feast", "Dinner"], // Evening
  ["Relax", "Unwind", "Rest", "Chill", "Recover", "Pause", "Loosen"], // Night
  ["Sleep", "Slumber", "Doze", "Snooze", "Drift", "Drowse", "Dream"] // Midnight
];

function setup() {
    createCanvas(windowWidth, windowHeight); // canvas width/height
    sWidth = (width/col)-(pad+(pad/col));
    sHeight = (height/row)-(pad+(pad/row));
    rectMode(CENTER); // Rectangle coords from the center
    noStroke();
}

function draw(){
  background(200); 
  
  for(let i=0; i<row; i++){
    
    for(let ii=0; ii<col; ii++){
      let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
      let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);
      fill(rgba[i]); 
      rect(x, y, sWidth, sHeight); 
      fill(0);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(days[i][ii], x, y);
    }
  }
}
