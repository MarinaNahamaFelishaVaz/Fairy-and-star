var starImg,bgImg;
var star, starBody;
var fairy, fairyimg;
var bb, bbi;
var ffai, ffaimg;
var st, stimg;
var fsound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyimg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	bbi = loadImage("images/starryNight.jpg");
	ffaimg = loadImage ("images/fairy.png")
	stimg = loadImage("images/starImage.png");
	fsound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fsound.play();
	//create fairy sprite and add animation for fairy
fairy= createSprite(130, 520);
fairy.addAnimation("flyingfairy",fairyimg);
fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

bb = createSprite(400, 375, 800, 750);
bb.addImage(bbi);
bb.scale = 0.5;
bb.visible = false;

ffai = createSprite(400, 375);
ffai.addImage("fairy",ffaimg);
ffai.scale = 0.4;
ffai.visible = false;

st = createSprite(550, 250);
st.addImage("star",stimg);
st.scale = 0.1;
st.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y> 470 && starBody.position.y>470){
Matter.Body.setStatic(starBody, true);
bb.visible = true;
ffai.visible = true;
st.visible = true;
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
fairy.x= fairy.x+20;
	}

if(keyCode === LEFT_ARROW){
fairy.x = fairy.x-20;
}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right

	
}
