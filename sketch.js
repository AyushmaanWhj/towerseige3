

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
  createCanvas(1500,700);
  getTime()

  engine=Engine.create()
  world=engine.world

  lightBgImage=loadImage("lightBg.jpg")
  darkBgImage=loadImage("darkBg.jpg")

  ground=new Ground(650,600,440,15)


  b1=new Box(520,580,30,30)
  b2=new Box(550,580,30,30)
  b3=new Box(580,580,30,30)
  b4=new Box(610,580,30,30)
  b5=new Box(640,580,30,30)
  b6=new Box(670,580,30,30)
  b7=new Box(700,580,30,30)
  b8=new Box(730,580,30,30)
  b9=new Box(760,580,30,30)
  b10=new Box(550,550,30,30)
  b11=new Box(580,550,30,30)
  b12=new Box(610,550,30,30)
  b13=new Box(640,550,30,30)
  b14=new Box(670,550,30,30)
  b15=new Box(700,550,30,30)
  b16=new Box(730,550,30,30)
  b17=new Box(580,550,30,30)
  b18=new Box(610,550,30,30)
  b19=new Box(640,550,30,30)
  b20=new Box(670,550,30,30)
  b21=new Box(700,550,30,30)
  b22=new Box(610,490,30,30)
  b23=new Box(640,490,30,30)
  b24=new Box(670,490,30,30)
  b25=new Box(640,460,30,30)

  polygon=new Polygon(200,200,40,40,80)

  launcher=new Launcher(polygon.body,{x:200,y:200})







  Engine.run(engine)
}

function draw() {
  backgroundImage=lightBgImage
  drawSprites();
  ground.display()
  strokeWeight(2)
  fill("blue")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  fill("cyan")
  
  b11.display() 
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  
  fill("pink")
  b10.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()
  b20.display()
  b21.display()
  fill("skin")
  b22.display()
  b23.display()
  b24.display()
  fill("green")
  b25.display()

  polygon.display()

  launcher.display()
  

 
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
    launcher.attach(polygon.body)
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=19){
      bg = darkBgImage
  }
  else{
      bg =lightBgImage
      
  }

}


