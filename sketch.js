var issImg
var spaceImg1
var spaceImg2
var spaceImg3
var spaceImg4
var bgImg
var hasDocked=false  
var iss, spaceCraft 

function preload(){
bgImg=loadImage("spacebg.jpg")
spaceImg1=loadImage("spacecraft1.png")
spaceImg2=loadImage("spacecraft2.png")
spaceImg3=loadImage("spacecraft3.png")
spaceImg4=loadImage("spacecraft4.png")
issImg=loadImage("iss.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  spaceCraft=createSprite(285,240)
  spaceCraft.addImage(spaceImg1)
  spaceCraft.scale=0.15
  iss=createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=0.25
}

function draw() {
  background(bgImg);
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x + random(-1,1)

  if(keyDown("UP_ARROW")){
    spaceCraft.y=spaceCraft.y -2
  }
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(spaceImg3)
    spaceCraft.x=spaceCraft.x -1
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x=spaceCraft.x +1
    spaceCraft.addImage(spaceImg2)
  }
  if(keyDown("DOWN_ARROW")){
    spaceCraft.y=spaceCraft.y +1
    spaceCraft.addImage(spaceImg1)
  }
  }  
  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){ 
    hasDocked = true;
     textSize(25);
    fill("white") 
    text("Docking Successful!", 200, 300);
   }
  drawSprites();
}