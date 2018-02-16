var s;
var scl = 20;
var food;
var sonScore;
var updateScore, updateMort;


function setup(){

	// Parent: MySnake ==> Son: Canvas
  	var myCanvas = createCanvas(600, 600);
  	myCanvas.parent('MySnake');

  	// Score balise
	updateScore = document.getElementById('Score');
	// Mort balise
	updateMort = document.getElementById('Mort');

  	s = new Snake();
  	frameRate(20);
  	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}


function draw(){
	background(120);
	s.death();
	s.update();
	s.show();

	updateScore.innerHTML = "Score: " + s.total;
	updateMort.innerHTML = "Mort: " + s.morts;

	if(s.eat(food)){pickLocation();}

	fill(255,0,120);
	rect(food.x,food.y,scl,scl);

	isWin();
}

function mousePressed(){
	s.total++;
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		s.dir(0,-1);
	}else if(keyCode === DOWN_ARROW){
		s.dir(0,1);
	}else if(keyCode === LEFT_ARROW){
		s.dir(-1,0);
	}else if(keyCode === RIGHT_ARROW){
		s.dir(1,0);
	}
}

function isWin(){
	if(s.total == 10){
			textSize(20);
			text("Victoire",height/2-40,scl+10);
			noLoop();
	}
}
