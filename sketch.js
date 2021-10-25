var bgImage;
var cat;
var catFirst, catMove, catLast;
var mouse;
var mouseFirst, mouseMove, mouseLast;
var snowImage, snow, snow1, snow2, snow3, snow1Image, snow2Image, snow3Image;

function setup() {
  createCanvas(1200,800);
  cat = createSprite(800, 700, 30, 30);
  cat.addAnimation("catFirst", catFirst);
  cat.changeAnimation("catFirst");
  cat.scale = 0.15;

  mouse = createSprite(150, 700, 15, 15);
  mouse.addAnimation("mouseFirst", mouseFirst);
  mouse.changeAnimation("mouseFirst");
  mouse.scale = 0.1;

  snow = createSprite(400, 200, 20, 20);
  snow.addImage(snowImage);
  snow.scale = 0.1;

  snow1 = createSprite(600, 250, 20, 20);
  snow1.addImage(snow1Image);
  snow1.scale = 0.1;

  snow2 = createSprite(532, 300, 20, 20);
  snow2.addImage(snow2Image);
  snow2.scale = 0.1;

  snow3 = createSprite(480, 350, 20, 20);
  snow3.addImage(snow3Image);
  snow3.scale = 0.1;
}

function draw() {
  background(bgImage);

  if (cat.x - mouse.x < (cat.width - mouse.width)/2) {

    cat.velocityX = 0;
    cat.addAnimation("catLast", catLast);
    cat.changeAnimation("catLast");

    mouse.addAnimation("mouseLast", mouseLast);
    mouse.changeAnimation("mouseLast");
  }

  drawSprites();
}

function preload() {
  bgImage = loadImage("snow2.jpg");
  catFirst = loadAnimation("images/cat1.png");
  catLast  = loadAnimation("images/cat4.png");
  catMove  = loadAnimation("images/cat2.png", "images/cat3.png");
  mouseFirst = loadAnimation("images/mouse1.png");
  mouseMove = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseLast = loadAnimation("images/mouse4.png");
  snowImage = loadImage("snow4.webp");
  snow1Image = loadImage("snow5.webp");
  snow2Image = loadImage("snow4.webp");
  snow3Image = loadImage("snow5.webp");
}

function keyPressed() {

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      
      mouse.addAnimation("mouseTeasing", mouseMove);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      cat.addAnimation("catChasing", catMove);
      cat.changeAnimation("catChasing");
      cat.frameDelay = 25;
      cat.velocityX = -2;

      snow.velocityY = 1;
      snow1.velocityY = 1;
      snow2.velocityY = 1;
      snow3.velocityY = 1;
  }
}