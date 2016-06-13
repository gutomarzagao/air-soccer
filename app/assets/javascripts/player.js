const RED_COLOR = 0xE56E56;
const BLUE_COLOR = 0x5689E5;
const BORDER_COLOR = 0x000000;

const SIZE = 32;
const BORDER_SIZE = 2;

const ACCELERATION = 0.08;
const SPEED = 3;
const FRICTION = 0.05;

function Player(posX, posY, color) {
	this.circle = new PIXI.Graphics();
	this.circle.beginFill(color);
	this.circle.lineStyle(BORDER_SIZE, BORDER_COLOR, 1);
	this.circle.drawCircle(0, 0, (SIZE - BORDER_SIZE) / 2);
	this.circle.endFill();
	this.circle.x = posX;
	this.circle.y = posY;

	this.lastPosition = new Vector(posX, posY);
	this.position = new Vector(posX, posY);
	this.velocity = new Vector(0, 0);
	this.acceleration = new Vector(0, 0);

	this.upButton = false;
	this.rightButton = false;
	this.downButton = false;
	this.leftButton = false;
	this.inputAcceleration = new Vector(0, 0);

	this.collisionVector = new Vector(0,0);
}

Player.prototype.update = function() {
	this.acceleration = this.totalAcceleration();

	this.velocity.add(this.acceleration);
	this.velocity.top(SPEED);
	this.velocity.subtract(this.collisionVector);

	this.lastPosition = this.position.copy();
	this.position.add(this.velocity);

	this.circle.x = this.position.x;
    this.circle.y = this.position.y;

    this.collisionVector = new Vector(0, 0);
};

Player.prototype.collision = function(player) {
	var positionDiff = this.position.copy();
	positionDiff.subtract(player.position);

	var velocityDiff = this.velocity.copy();
	velocityDiff.subtract(player.velocity);

	var collisionFactor = velocityDiff.dotProduct(positionDiff) / Math.pow(positionDiff.magnitude(), 2);

	this.collisionVector = positionDiff.copy();
	this.collisionVector.multiply(collisionFactor);

	this.position = this.lastPosition.copy();
};

Player.prototype.totalAcceleration = function() {
	var friction = this.velocity.copy();
	friction.scale(FRICTION);
	friction.min(this.velocity);
	friction.invert();

	var acceleration = new Vector(0, 0);
	acceleration.add(friction);
	acceleration.add(this.inputAcceleration);

	return acceleration;
};

Player.prototype.up = function(pressed) {
	this.upButton = pressed;
	this.setInputAcceleration();
};

Player.prototype.right = function(pressed) {
	this.rightButton = pressed;
	this.setInputAcceleration();
};

Player.prototype.down = function(pressed) {
	this.downButton = pressed;
	this.setInputAcceleration();
};

Player.prototype.left = function(pressed) {
	this.leftButton = pressed;
	this.setInputAcceleration();
};

Player.prototype.setInputAcceleration = function() {
	this.inputAcceleration = new Vector(0, 0);

	if (this.upButton) {
		this.inputAcceleration.y -= 1;
	}
	if (this.rightButton) {
		this.inputAcceleration.x += 1;
	}
	if (this.downButton) {
		this.inputAcceleration.y += 1;
	}
	if (this.leftButton) {
		this.inputAcceleration.x -= 1;
	}
	
	this.inputAcceleration.scale(ACCELERATION);
}