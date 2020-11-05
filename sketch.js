var a, b,c , d

function setup() {
  createCanvas(800,800);

  
  a = createSprite(600, 200, 80, 80);
  b = createSprite(250, 350, 70, 50);
  
  // c = createSprite(300, 200, 80, 100);
  //d = createSprite(600, 200, 70, 50);
  b.velocityX = 4;
  b.velocityY = -3;
}

function draw() {
  background(255,255,255); 
  if(a.x - b.x <= (b.width+a.width)/2 && 
     b.x-a.x <= (b.width+a.width)/2&&
     a.y - b.y <= (b.height+a.height)/2 &&
    b.y-a.y <= (b.height+a.height)/2){
    b.velocityX = b.velocityX * -1;

  }
  





  drawSprites();
}

function isTouching(){


}
  /*
    {
    
  }
  else{
    a.shapeColor = "lightblue";
    b.shapeColor = "lightblue";
  }
}

/*var a, b

function setup() {
  createCanvas(800,800);

  
  a = createSprite(600, 200, 80, 100);
  b = createSprite(100, 200, 70, 50);
}

function draw() {
  background(255,255,255); 

  b.x= World.mouseX;
  b.y = World.mouseY;


  if(a.x - b.x <= (b.width+a.width)/2 && 
  b.x-a.x <= (b.width+a.width)/2 &&
   a.y - b.y <= (b.height+a.height)/2 &&
    b.y-a.y <= (b.height+a.height)/2 )  {
    a.shapeColor = "teal";
    b.shapeColor = "teal";
  }
  else{
    a.shapeColor = "lightblue";
    b.shapeColor = "lightblue";
  }
  



  drawSprites();
} */