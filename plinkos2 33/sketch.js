const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;



var pos;
var rowsHeight=300;
var particles=[];
var particle;
var plinkos=[];
var rows=[];
var score=0;

var gameState="PLAY";
var divisionHeight="300";
var turn=0;



function setup() { 
  createCanvas(700,600);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground (200,600,1700,10);

  for( var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinkos(j,75))
  }

  for( var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,125))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,175))
  }

  for( var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,225))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,275))
  }

  for( var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,325))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,375))
  }

  for( var j = 40; j<= width-10; j=j+50){
    plinkos.push(new Plinkos(j,425))
  }

  

  for( var k = 0; k<= width; k=k+80){
    rows.push(new Rows(k,525,10,150));
  }
 
}

function draw() {
  background("black");
  Engine.update(engine,25);
  textSize(35);
  text("SCORE :"+score,20,50);
  fill("white");

  textSize(35);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",320,550);
  text("100",400,550);
  text("100",480,550);
  text("200",560,550);
  text("200",640,550);

  if (gameState==="END"){
    background("black");
    fill("red");
    textSize(100);
    text("GAME OVER",200,400);

  }

  for (var k = 0; k<particles.length;k++){
    particles[k].display();
  }

  for(var k = 0; k<rows.length;k++){
    rows[k].display();
  }

  for (var k=0; k<plinkos.length;k++){
    plinkos[k].display();
  }

  if(particle!=null){
    console.log(particle.body.position.x);
     particle.display();
     if (particle.body.position.y>430){
       console.log("hi");
        if (particle.body.position.x>7 && particle.body.position.x<305){
           score=score+500; particle=null; 
           if (turn>=5){ gameState="END"} 
          }
          else if(particle.body.position.x>375 && particle.body.position.x<541 ){ 
            score=score+100; particle=null;
             if (turn>=5){ gameState="END"} 
            }
            else if(particle.body.position.x>561 ){
               score=score+200; particle=null; 
               if (turn>=5){ gameState="END"}
               }
               } 
              }
  
  
  text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY);

ground.display();
}

function mousePressed(){
  if (gameState!=="END"){
    turn++
    particle=new Particles(mouseX,50,10,10);
  }
}