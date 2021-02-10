var fixedRect, movingRect,gameObject,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  gameObject = createSprite(300,300,80,50);
  gameObject2=createSprite(500,300,50,50);
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  // isTouching(gameObject,movingRect);
   isTouching(gameObject2,movingRect)
    

  drawSprites();
}
function isTouching(object1,object2) { //passing arguments
  if(object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.x - object2.x < object1.width/2 + object2.width/2  &&
    object2.y-object1.y<object1.height/2+object2.height/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2){
      
      object2.shapeColor = "red";
      object1.shapeColor = "red";
  }
  else{
    object2.shapeColor = "green";
    object1.shapeColor = "green";
  }
}