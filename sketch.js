var level, backgroundImage, grass, grassI, tower, towerI, rocket, atlas,fire,fireI,capsule,StarLiner,launch,Button,rand;
var b1,b2,b3,b4,success,s,fail,t;
var num=0;
var gameState = 0;
var table1,t1;
var thrust;
var thrustTime = 100;
var Payload = 15000;
function preload(){
  backgroundImage = loadImage("Back.png");
  grassI = loadImage("Grass.webp");
  towerI = loadImage("Tower.png");
  atlas = loadImage("Atlas.png");
  StarLiner = loadImage("Starliner.png");
  fireI = loadAnimation("f1.png","f2.png","f3.png","f4.png","f5.png","f6.png");
  launch = loadImage("Launch.png");
  t1 = loadImage("Table1.png");
  success = loadImage("SUCCESS!.png");
  fail = loadImage("Fail.png");
}
function setup() {
  
  createCanvas(displayWidth-20,displayHeight-20);
  grass = createSprite(300,500,1000,40);
  grass.addImage(grassI);
  grass.scale = 2;
  tower = createSprite(500,480,100,500);
  tower.addImage(towerI);
  tower.scale = 2;
  rocket = createSprite(500,480,100,500);
  rocket.addImage(atlas);
  rocket.scale = 0.5;
  fire = createSprite(500,590,100,100);
  fire.addAnimation("fire",fireI);
  fire.scale = 1.5;
  fire.rotate;
  fire.visible = false;
  capsule = createSprite(500,300,200,200);
  capsule.addImage(StarLiner);
  capsule.scale = 0.25;
  capsule.visible = false;
  Button = createSprite(900,500,50,50);
  Button.addImage(launch);
  Button.scale = 0.5;
  Button.visible = false;
  rand = Math.round(random(1,5));
  table1 = createSprite(1000,300,50,50);
  table1.addImage(t1);
  table1.scale = 0.5;
  table1.visible = false;
  thrust = createInput("");
  thrust.position(940,250);
  thrust.hide();
  b1 = createButton();
  b1.position(200,400);
  b2 = createButton();
  b2.position(200,600);
  b3 = createButton();
  b3.position(600,400);
  b4 = createButton();
  b4.position(600,600);
  s = createSprite(700,300,100,100);
  s.visible = false;
}

function draw() {
  background(backgroundImage);  
  drawSprites();
  if(gameState === 0){
    textSize(30);
    switch(rand){
      case 1: text("What is the most powerful rocket operating today?",300,100);
      //b1 = createButton('Atlas V');
      //b1.position(200,400);
      b1.html('Atlas V')
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Delta IV')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Falcon 9');
      //b4.position(600,600);
      b4.html('Falcon 9')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      case 2: text("What is the most powerful rocket Engine 1st stage ever created",200,100);
      //b1 = createButton('Saturn V');
      //b1.position(200,400);
      b1.html('Saturn V');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('Falcon Heavy');
      //b2.position(200,600);
      b2.html('Falcon Heavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('Delta IV');
      //b3.position(600,400);
      b3.html('Delta IV')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('N1');
      //b4.position(600,600);
      b4.html('N1')
      b4.mousePressed(()=>{
        gameState = 1;
      });
      break;
      case 3: text("What is the first commercial partnership with NASA?",300,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      case 4: text("Who is creating Starship?",400,100);
      //b1 = createButton('Boeing');
      //b1.position(200,400);
      b1.html('Boeing');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SpaceX');
      //b2.position(200,600);
      b2.html('SpaceX')
      b2.mousePressed(()=>{
        gameState = 1;
      });
      //b3 = createButton('Virgin Galactic');
      //b3.position(600,400);
      b3.html('Virgin Galactic')
      b3.mousePressed(()=>{
        gameState = 4;
      });
      //b4 = createButton('Blue Origin');
      //b4.position(600,600);
      b4.html('Blue Origin')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      case 5: text("What is NASA's moon rocket called as?",300,100);
      //b1 = createButton('Starship');
      //b1.position(200,400);
      b1.html('Starship');
      b1.mousePressed(()=>{
        gameState = 4;
      });
      //b2 = createButton('SuperHeavy');
      //b2.position(200,600);
      b2.html('SuperHeavy')
      b2.mousePressed(()=>{
        gameState = 4;
      });
      //b3 = createButton('SLS');
      //b3.position(600,400);
      b3.html('SLS')
      b3.mousePressed(()=>{
        gameState = 1;
      });
      //b4 = createButton('New Glenn');
      //b4.position(600,600);
      b4.html('New Glenn')
      b4.mousePressed(()=>{
        gameState = 4;
      });
      break;
      default:
        break;
    }
  }
  if(gameState===1){
    table1.visible = true;
    thrust.show();
    Button.visible = true;
    var thr = thrust.value();
    var total = thr*thrustTime/Payload;
    t = total;
    if(total < 200){
      s.addImage(fail);
    } else if(total > 200){
      s.addImage(success);
    }
    console.log(total);
    if(mousePressedOver(Button)&&thr<=51000){

      gameState = 2;
      //noLoop();
      thrust.hide();
      b1.hide();
      b2.hide();
      b3.hide();
      b4.hide();
      //loop();
      Button.visible = false;
      table1.visible = false;
    }
  }
  if(gameState === 2){
    rocket.y = 250;
    fire.visible = true;
    tower.velocityY = 3;
    grass.velocityY = 3;
    gameState = 3;
  }
  if(gameState === 3){
    for(var i = 0;i<=100;i++){
      num = num+1;
    }
    console.log(num);
    if(num === 50500){
      fire.visible = false;
      rocket.velocityY = 8;
      capsule.visible = true;
      capsule.velocityX = 3;
      capsule.velocityY = -1;
      if(t > 200){
        s.depth = capsule.depth;
        s.depth = s.depth-1;
        s.visible = true;
      }
      if(t < 200){
        //s.depth = capsule.depth;
        //s.depth = s.depth-1;
        //s.visible = true;
      }
      level = level+1;
    }
  } 
  if(gameState === 4){
    textSize(60);
    text("Game Over",500,300);
    b1.hide();
    b2.hide();
    b3.hide();
    b4.hide();
    rocket.visible = false;
    grass.visible = false;
    tower.visible = false;
  } 
}