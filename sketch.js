var fixedObject, movingObject,leftRect,rightRect;

function setup() {
  createCanvas(1200,800);
  fixedObject = createSprite(400, 100, 50, 80);
  fixedObject.shapeColor = "green";
  fixedObject.debug = true;
  movingObject = createSprite(400, 800,80,30);
  movingObject.shapeColor = "red";
  movingObject.debug = true;
  leftObject=createSprite(0,400,30,30);
  leftObject.shapeColor="blue";
  leftObject.debug=true;
  rightObject=createSprite(1200,400,50,50);
  rightObject.shapeColor="yellow";
  rightObject.debug=true;

  movingObject.velocityY = -5;
  fixedObject.velocityY = +5;
  leftObject.velocityX = +5;
  rightObject.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingObject,fixedObject);
  bounceOff(rightObject,leftObject);
  drawSprites();
}

