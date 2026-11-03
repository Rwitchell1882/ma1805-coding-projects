let EW; 
let images = [];
let i = 0;

function preload(){
  EW = loadSound("EW.wav");

  images[0] = loadImage('Richmond_before.jpg');
  images[1] = loadImage('Richmond_after.jpg');

  images[2] = loadImage('Belgium_before.jpg');
  images[3] = loadImage('Belgium_after.jpg');

  images[4] = loadImage('Warsaw_before.jpg');
  images[5] = loadImage('Warsaw_after.jpg');

  images[6] = loadImage('Hue_before.jpg');
  images[7] = loadImage('Hue_after.jpg');

  images[8] = loadImage('Aleppo_before.jpg');
  images[9] = loadImage('Aleppo_after.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(images[i], 0, 0, windowWidth, windowHeight);
}

function mouseClicked(){
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }

  i = i + 1;

  if (i == images.length) {
    i = 0;
  }

  if (!EW.isPlaying()) {
    EW.amp(0.2);
    EW.loop();
  }
}