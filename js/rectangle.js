//Rectangle shape for cars and obstacles

function Rectangle(x, y, w, h) {
  //x and y is left side x position and top side y position respectively 
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Rectangle.prototype.intersects = function(r) {
  return !(this.x + this.w <= r.x	||
			this.x >= r.x + r.w ||
			this.y + this.h <= r.y  ||
			this.y >= r.y + r.h);
}
