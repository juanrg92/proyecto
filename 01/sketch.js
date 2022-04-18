let gui;

// Create a variable for your Slider
var s;
var s0;
var s1;
var t;
var t0;
var volumen;

var cancion;

var fuente;

function preload() {
  cancion = loadSound("super.mp3");
  fuente = loadFont("Shoutyperson.otf");
}

function setup() {
  createCanvas(400, 400);
  gui = createGui();

  s = createSlider("Slider", 0, 10, 200, 25, 0, width);
  s0 = createSlider("Slider0", 0, 50, 200, 25, 0, 255);
  t = createToggle("background", 0, 80, 50, 50);
  t0 = createToggle("musica", 80, 80, 50, 50);
  s1 = createSlider2d("Slider2d", 0, 150, 75, 75, 0, width, height,0);
   volumen = createSlider("Slider", width-175, 10, 150, 25, 0, 1);
  
  gui.setRounding(0);
  gui.setTextSize(12);
  gui.setFont(fuente);
}

function draw() {
  if (t.val) {
    background(255, 0, 0);
  } else {
    background(220);
  }

  drawGui();
  
  
   cancion.setVolume(volumen.val);
  
  
  if (t0.val) {
    if (cancion.isPlaying()) {
    } else {
      cancion.play();
   
    }
  } else {
    if (cancion.isPlaying()) {
      cancion.stop();
    } else {
    }
  }

  fill(s0.val);
  ellipse(s1.valX,s1.valY, s.val, s.val);
}
