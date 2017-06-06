function Snake(){
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 0;
	this.yspeed = 0;


	this.dir = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.eat = function(pos){
		var d = dist(this.x,this.y,pos.x,pos.y);
		if(d < 1){
			return true;
		}else{
			return false;
		}
	}

	this.update = function(){
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x,0,width-scl);
		this.y = constrain(this.y,0,height-scl);
	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,scl,scl);
	}
}