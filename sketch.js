
function preload(){
  //pre-load images
  bombImage = loadImage("bomb.png")
  coinImage = loadImage("coin.png")
  energyDrinkImage = loadImage("energyDrink.png")
  pathImage = loadImage("path.png")
  powerImage = loadImage("power.png")
  runnerRunning = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,400,400)
  path.addImage("path", pathImage)
 
  runner = createSprite(200,300,20,60)
  runner.addAnimation("runnerRunning", runnerRunning)
  runner.scale=0.1
  
 
}

function draw() {
  background("black");
 
 
 
 
  drawSprites();
}
