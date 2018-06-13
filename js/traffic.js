function Traffic(x, y, w, h, s, c) {

  Rectangle.call(this, x, y, w, h);
  this.speed = s;
  this.colour = c;
}

// Extends Rectangle for traffic obstacles
Traffic.prototype = Object.create(Rectangle.prototype);

Traffic.prototype.show = function() {
	
	fill(this.colour);
	rect(this.x, this.y, this.w, this.h);
}


Traffic.prototype.update = function() {
	
	this.x += this.speed;
	//Makes traffic come back around once it leaves screen 
	if(this.speed > 0 && this.x > width+grid) {
		this.x = -this.w - grid;
	};
	
	if(this.x < - this.w - grid) {
		this.x = width + grid;
	}
	
	
}

