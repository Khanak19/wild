
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;


function preload(){
  bgImg = loadImage("bg.gif")
  Bgmusic = loadSound("bg.mp3");
 obstacle1 = createImg("gorillia.gif")
 obstacle2 = createImg("leopard.gif")
 obstacle3 =createImg("lion.gif");
 obstacle4 =createImg("panther.gif");
 obstacle5 =createImg("wolf.gif")
 

}

function setup() {
  createCanvas(1500,800);

  engine = Engine.create();
  world = engine.world;
  boy = new Boy(70,650,90,120)
  stick = createSprite(70,630,50,50)
  obstaclesGroup = new Group();
  

}


function draw() 
{
  background(51);
  image(bgImg, 0, 0, width, height);
  if(!Bgmusic.isPlaying()){
    Bgmusic.play();
    Bgmusic.setVolume(0.3);
  }

  Engine.update(engine);
  fill("green");
  textAlign("center");
  textSize(40);
  text("WILD RUNNER", width / 2, 100);
  boy.display();
 spawnObstalces();
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*100);
    
    //generate random obstacles
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: obstacle.createImg(obstacle1);
      obstacle.scale=0.5;
      obstacle.position(100,600)
              break;
      case 2: obstacle.createImg(obstacle2);
      obstacle.scale=0.4
      obstacle.position(100,600)
              break;
      case 3: obstacle.createImg(obstacle3);
      obstacle.scale=0.4
      obstacle.position(100,600)
              break;
      case 4: obstacle.createImg(obstacle4);
      obstacle.scale=0.5;
      obstacle.position(100,600)
              break;
      case 5: obstacle.createImg(obstacle5);
      obstacle.scale=0.5;
      obstacle.position(100,600)
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 200;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

