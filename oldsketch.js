var rect,rect2;
function setup() {
  createCanvas(800,400);
  rect =  createSprite(400, 200, 100, 50);
  rect2 = createSprite(700,200,100,50);
  rect.debug = true;
  rect2.debug = true;
}

function draw() {
  background(255,255,255);  
  rect2.y = World.mouseY;
  rect2.x = World.mouseX;
  if (rect.x-rect2.x<rect.width/2+rect2.width/2 && rect.y-rect2.y<rect.height/2+rect2.height/2
    &&rect2.x-rect.x<rect.width/2+rect2.width/2 && rect2.y-rect.y<rect.height/2+rect2.height/2){
    rect.shapeColor = "red";
    rect2.shapeColor = "red";
  } else {
    rect.shapeColor = "green";
    rect2.shapeColor ="green";
  }  
  drawSprites();
  
}