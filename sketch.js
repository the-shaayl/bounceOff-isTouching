var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(800, 200, 50, 80);
  fixedRect.shapeColor = "Red";
  movingRect.shapeColor = "Red";
  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  if (isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "Red";
  }
  else {
    fixedRect.shapeColor = "Green";
    movingRect.shapeColor = "Green";
  }
bounceOff(fixedRect, movingRect);
 
  drawSprites();

}

