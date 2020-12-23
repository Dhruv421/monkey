
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
 foodGroup = createGroup();
  obstacleGroup = createGroup();
  
}



function setup() {
 createCanvas(600,600);
  monkey = createSprite(190,200,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
ground = createSprite(300,260,600,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
}


function draw() {
 background("white")
  drawSprites();

  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -4;
  }
  
  food();
  obstacles();
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  score=Math.ceil(frameCount/frameRate())
  
  text("Survival time: "+score,300,300)
  
  
  
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,200,10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -2;
    banana.y = Math.round(random(120,200));
    banana.scale = 0.2;
    
    banana.lifetime = 200;
    
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,200,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.y = Math.round(random(120,200));
    obstacle.scale = 0.2;
    
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}



