var backGround,backGroundImg;
var player;
var pinkOpponent,pinkOpponentImg,yellowOpponent,yellowOpponentImg,redOpponent,redOpponentImg;
var pinkOpponent2Img,yellowOpponent2Img,redOpponent2Img;
var pinkCG,yellowCG,RedCG;


function preload(){
  backGroundImg = loadImage("images/Road.png");
  playerImg = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  pinkOpponentImg = loadAnimation("images/opponent1.png","images/opponent2.png");
  yellowOpponentImg = loadAnimation("images/opponent4.png","images/opponent5.png");
  redOpponentImg = loadAnimation("images/opponent7.png","images/opponent8.png");
  pinkOpponent2Img = loadAnimation("images/opponent3.png");
  yellowOpponent2Img = loadAnimation("images/opponent6.png");
  redOpponent2Img = loadAnimation("images/opponent9.png");
}

function setup(){
  createCanvas(1200,600);
  backGround = createSprite(100,300);
  backGround.addImage(backGroundImg)
  backGround.velocityX = -6;
  player = createSprite(600,300,30,50);
  player.addAnimation("playerBike",playerImg);
  player.scale = 0.1;
  player.setCollider("rectangle",0,0,100,100);
 pinkCG = new Group();
 yellowCG = new Group();
 redCG = new Group();
}

function draw(){
  background(0);
  drawSprites();
  //reset background;
   if(backGround.x < 0){
       backGround.x = backGround.width/2;
   }
   player.y = World.mouseY;
   var selectPlayer =   Math.round(random(1,3));
   console.log(selectPlayer);
  //  if(World.frameCount % 150 == 0){
  //   spawnPinkOpponent();
  //  }
   var selectPlayer =   Math.round(random(1,3));
   console.log(selectPlayer);
  //  if(World.frameCount % 150 == 0){
  //   spawnYellowOpponent();
  //  }
  
  var selectPlayer =   Math.round(random(1,3));
  console.log(selectPlayer);
  if(World.frameCount % 100 == 0){
    if(selectPlayer == 1){
      spawnPinkOpponent();
    }
    else if(selectPlayer == 2){
      spawnYellowOpponent();
    }
    else {
      spawnRedOpponent();
    }

    

  }
   if(pinkCG.isTouching(player)){
      pinkOpponent.addAnimation("pinkOpponent2fall",pinkOpponent2Img);
      pinkOpponent.velocityY = 0;
 }
}

 if(yellowCG.isTouching(player)){
  yellowOpponent.addAnimation("yellowOpponent2fall",yellowOpponent2Img);
  yellowOpponent.velocityY = 0;
}
if(redCG.isTouching(player)){
  redOpponent.addAnimation("redOpponent2fall",redOpponent2Img);
  redOpponent.velocityY = 0;
}
  
}
function spawnPinkOpponent(){
  pinkOpponent = createSprite(500,(random(100,600)));
  pinkOpponent.scale = 0.1;
  pinkOpponent.addAnimation("pinkOpponentbike",pinkOpponentImg);
  pinkOpponent.velocityX = 2;
  pinkCG.add(pinkOpponent);
}
function spawnYellowOpponent(){
  yellowOpponent = createSprite(500,(random(100,600)));
  yellowOpponent.scale = 0.1;
  yellowOpponent.addAnimation("yellowOpponentbike",yellowOpponentImg);
  yellowOpponent.velocityX = 2;
  yellowCG.add(yellowOpponent);
}
function spawnRedOpponent(){
  redOpponent = createSprite(500,(random(0,600)));
  redOpponent.scale = 0.1;
  redOpponent.addAnimation("redOpponentbike",redOpponentImg);
  redOpponent.velocityX = 2;
  redCG.add(redOpponent);
}