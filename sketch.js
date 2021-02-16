var a, b

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(400,200,40,40);
  a.shapeColor = "red";
  b.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

b.x = World.mouseX;
b.y = World.mouseY;

if(b.x-a.x < a.width/2+b.width/2 && a.x-b.x < b.width/2+a.width/2 && b.y-a.y < a.height/2+b.height/2 && a.y-b.y < a.height/2+b.height/2){
a.shapeColor = "blue";
b.shapeColor = "blue";
}
else{
  a.shapeColor = "red";
b.shapeColor = "red";
}

  drawSprites();
}