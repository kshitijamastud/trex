var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimg;
var ob1, ob2, ob3, ob4, ob5, ob6;
var plants;
var PLAY=1;
var END=0;
var gamestate=PLAY
var groupplants, groupclouds;
function spawnplants(){
  if(World.frameCount%60===0){
    var plant=createSprite(600, 160, 50, 50)
    plant.velocityX=-5
   var r1=Math.round(random(1,6))
                     switch(r1){
                       case 1:plant.addImage("o1", ob1)
                         break
                         case 2:plant.addImage("o1", ob2)
                         break
                         case 3:plant.addImage("o1", ob3)
                         break
                         case 4:plant.addImage("o1", ob4)
                         break
                         case 5:plant.addImage("o1", ob5)
                         break
                         case 6:plant.addImage("o1", ob6)
                         
                         break
                         default:break
                     }
                         plant.scale=0.6
                         groupplants.add(plant)
                         
                     }
    
  }
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg= loadImage("cloud.png");
  ob1=loadImage("obstacle1.png")
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")
  
  
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  groupplants= createGroup();
  groupclouds= createGroup();
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  if (gamestate===PLAY){
    
  spawnClouds();
  spawnplants();
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
    if (groupplants.isTouching(trex)){
      gamestate= END
  }
  }
    if (gamestate===END){
      ground.velocityX=0;
      groupplants.setVelocityXEach(0)
      groupclouds.setVelocityXEach(0)
    }
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds() {
  // write code here to spawn the clouds
  if (World.frameCount % 60===0) {
    var cloud = createSprite(600, 100, 50, 50)
    cloud.velocityX= -10
    cloud.addImage("cloud", cloudimg)
    groupclouds.add(cloud);
    }
}
    