var s;
var scl = 20;
var food;
var sonScore;
var updateScore, updateMort, updateWin;


function setup(){

	// Parent: MySnake ==> Son: Canvas
  	var myCanvas = createCanvas(800, 640);
  	myCanvas.parent('MySnake');

  	// Score balise
	updateScore = document.getElementById('Score');
	updateMort = document.getElementById('Mort');
	updateWin = document.getElementById('isWin');

  	s = new Snake();

  	frameRate(17);

  	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}


function draw(){

	background('#232222');

	s.death();
	s.update();
	s.show();

	updateScore.innerHTML = s.total;
	updateMort.innerHTML =  s.morts;

	isWin();

	if(s.eat(food)){pickLocation();}

	fill('#0ac3e8');
	rect(food.x,food.y,scl,scl);
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
	if(s.total == 5){
			chronoStop();
			updateScore.innerHTML = "Score: " + s.total
			updateWin.innerHTML = "Level succeeded Well Play! <br> (Press enter)"
			noLoop();
	}
}
