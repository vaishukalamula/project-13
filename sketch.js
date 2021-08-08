var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var orangeImg, leaf
var select


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
rabbit.x = World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);
  select = Math.round(random(1,2));
  if (frameCount % 80 == 0) {
    if (select==1) {
      createApples()
    } else {
      createLeaves()
    }
  }



  drawSprites();

  
}

function createApples() {
apple = createSprite(random(50, 350), 40, 10, 10)
apple.addImage("apple", appleImg)
apple.velocityY = 3
apple.scale = 0.1
apple.lifetime = 200

}

function createLeaves() {
  
  leaf = createSprite(random(50, 350), 40, 10, 10)
  leaf.addImage("leaf", orangeImg)
  leaf.velocityY = 3
  leaf.scale = 0.1
  leaf.lifetime = 200
  }
  
  