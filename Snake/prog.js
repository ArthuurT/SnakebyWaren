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
<<<<<<< HEAD
  	frameRate(17);
=======
  	frameRate(15);
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
  	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}


function draw(){
<<<<<<< HEAD
	background('#232222');
=======
	background('#172EE1');
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
	s.death();
	s.update();
	s.show();

	updateScore.innerHTML = s.total;
	updateMort.innerHTML =  s.morts;

	isWin();

	if(s.eat(food)){pickLocation();}

<<<<<<< HEAD
	fill('#0ac3e8');
	rect(food.x,food.y,scl,scl);
=======
	fill('#071057');
	rect(food.x,food.y,scl,scl);

	isWin();
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
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
<<<<<<< HEAD
	if(s.total == 5){
			chronoStop();
			updateScore.innerHTML = "Score: " + s.total
			updateWin.innerHTML = "Level succeeded Well Play! <br> (Press enter)"
=======
	if(s.total == 10){
			chronoStop();
			textSize(20);
			text("Victoire",height/2-40,scl+10);
			updateScore.innerHTML = "Score: " + s.total
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
			noLoop();
	}
}
