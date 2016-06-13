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

Vector.prototype.subtract = function(vector) {
	this.x -= vector.x;
	this.y -= vector.y;
};

Vector.prototype.multiply = function(value) {
	this.x *= value;
	this.y *= value;
};

Vector.prototype.divide = function(value) {
	if (value != 0) {
		this.x /= value;
		this.y /= value;
	}
};

Vector.prototype.min = function(vector) {
	if (vector.magnitude() < this.magnitude()) {
		this.x = vector.x;
		this.y = vector.y;
	}
};

Vector.prototype.top = function(limit) {
	var magnitude = this.magnitude();

	if (magnitude > limit) {
		this.scale(limit);
	}
};

Vector.prototype.dotProduct = function(vector) {
	return this.x * vector.x + this.y * vector.y;
};

Vector.prototype.invert = function() {
	this.multiply(-1);
};

Vector.prototype.scale = function(magnitude) {
	this.normalize();
	this.multiply(magnitude);
};

Vector.prototype.normalize = function() {
	var magnitude = this.magnitude();

	if (magnitude != 0) {
		this.x /= magnitude;
		this.y /= magnitude;
	}
};

Vector.prototype.magnitude = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};
