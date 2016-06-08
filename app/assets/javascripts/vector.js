function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.copy = function() {
	return new Vector(this.x, this.y);
};

Vector.prototype.add = function(vector) {
	this.x += vector.x;
	this.y += vector.y;
};

Vector.prototype.normalize = function(length) {
	var magnitude = this.magnitude();

	if (magnitude != 0) {
		this.x *= length / magnitude;
		this.y *= length / magnitude;
	}
};

Vector.prototype.magnitude = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};
