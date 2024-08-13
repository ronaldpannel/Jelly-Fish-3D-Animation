let angle = 0;
let play = false;

// GUI Variables
let rotX;
let rotY;
let num;
let rez;
let amp;
let speed;
let button;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
  loadFont("RobotoMono.ttf", drawText);
  rotX = new Slider("rotX", 0, 360, 15, 10, 20);
  rotY = new Slider("rotY", 0, 360, 45, 10, 40);
  num = new Slider("num", 1, 400, 300, 10, 60);
  rez = new Slider("rez", 1, 15, 10, 10, 80);
  speed = new Slider("speed", 1, 10, 1, 10, 100);
  amp = new Slider("amp", 10, 200, 100, 10, 120);

  button = createButton(" Play");
  button.position(40, 160);
  button.mouseClicked(playButton);
}

function drawText(font) {
  textFont(font, 14);
  fill(255);
}
function draw() {
  background(0, 0, 80);

  rotX.display();
  rotY.display();
  num.display();
  rez.display();
  speed.display();
  amp.display();

  rotateX(rotX.value);
  rotateY(rotY.value);
  for (let i = 0; i < num.value; i += rez.value) {
    push();
    noFill();
    stroke(255, (i / num) * 255);
    let depth = amp.value * sin(angle + i);
    translate(0, 0, depth);
    ellipse(0, 0, i, i);
    pop();
  }
  if (play == true) {
    angle += speed.value;
  }
}

function playButton() {
  play = !play;
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
