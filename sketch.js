var mainHero,heroImage,soleAlien,aliensPic
var backGround,groundImg;
var invGround;
var treasure,treasurePic
var alienGroup;
var gameState = "play"
var score = 0;  

function preload(){
 heroImage = loadImage("MainCharecter1lol.png")
 groundImg = loadImage("Saturn1.png")
 aliensPic = loadImage("Alien.png")
 treasurePic = loadImage("Treasure.png") 
}
function setup(){
 createCanvas(500,500)
  backGround = createSprite(250,250,500,500)
  backGround.addImage("hacks",groundImg);
  backGround.scale = 7
  backGround.velocityX = -5
  mainHero = createSprite(10,250,10,10)
  mainHero.addImage("hero",heroImage)
  mainHero.scale = 0.2
  soleAlien = createSprite(480,250,10,10)
  soleAlien.addImage("lol",aliensPic)
  soleAlien.scale = 0.2 
  treasure = createSprite(480,280,10,10)
  treasure.addImage("hall",treasurePic)
  treasure.scale = 0.05
  invGround = createSprite(250,300,500,10);
  invGround.visible = false
  alienGroup = new Group()          
  mainHero.setCollider("circle",0,0,150)
}
function draw(){
  background("white")
  if(gameState === "play"){
    if(keyDown("w")||keyDown(UP_ARROW)){
      mainHero.velocityY=-8
    }
    if(backGround.x<0){
      backGround.x = 250
    }
    score = score + Math.round(getFrameRate()/60);
    mainHero.velocityY = mainHero.velocityY + 0.5
    mainHero.collide(invGround)
    spawnAliens()
    if(mainHero.isTouching(alienGroup)){
    gameState = "end"
    }
  }
  else if(gameState === "end"){
    backGround.visible = false
    mainHero.visible = false
    alienGroup.setVisibleEach(false);
    soleAlien.visible = false
    treasure.visible = false
    text("You Lose,loser",240,250)
  }
  text("Score: "+ score, 50,10);
 drawSprites()
}
function spawnAliens(){
  if (frameCount % 60 === 0)
  {var aliens = createSprite(410,250,10,10);
   aliens.x = Math.round(random(30,410));
   aliens.addImage("jk",aliensPic)
   aliens.scale = 0.18
   aliens.velocityX=-5
   alienGroup.add(aliens)
   aliens.setCollider("circle",0,0,150)
  }
  }