
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png"  ,"sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
bananaGroup = new Group();
 
monkey = createSprite(80,315,20,20)  
monkey.addAnimation("Mohit",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX = -7;
console.log(ground.x);
}


function draw() {
 background(0, 600, 600)
if(keyDown("space")){
   monkey.velocityY = -12
  }  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(ground.x < 0) {
  ground.x = ground.width/2
    
  }  
  fruit();
  obstacles();
  // obstacle.collide(monkey)
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100, 50)
  drawSprites();
}


function fruit(){
 if(frameCount % 80 === 0){
     var rand = Math.round(random(120,200))
     banana = createSprite(590, 150, 5, 5)
     banana.addImage(bananaImage)
     banana.velocityX = -3;
     banana.scale = 0.09;
     banana.lifetime = 200;
    
     } 
    
 }

 function obstacles(){
   if(frameCount % 300 === 0){
     //var rand = Math.round(random(120,200))
    obstacle = createSprite(300, 310, 3, 5)
     obstacle.addImage(obstacleImage)
     obstacle.velocityX = -3;
     obstacle.scale = 0.2;
     obstacle.lifetime = 200;  
     
     } 
}