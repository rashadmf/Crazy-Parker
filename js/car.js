function Car(x, y, w, h) {

  Rectangle.call(this, x, y, w, h);
}

// Extends Rectangle for player's vehicle 
Car.prototype = Object.create(Rectangle.prototype);


Car.prototype.show = function() {
	fill(255, 206, 30);
	rect(this.x, this.y, this.w, this.h);
}

Car.prototype.move = function(xD, yD){
	
	this.x += xD;
	this.y += yD;
	//Stops the car from going above or below the screen
	this.y = constrain(this.y, 0, height - this.h);
	
	
}

Car.prototype.update = function(){
	
}
