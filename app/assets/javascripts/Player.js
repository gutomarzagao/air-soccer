const RED_COLOR = 0xE56E56;
const BLUE_COLOR = 0x5689E5;
const BORDER_COLOR = 0x000000;

const SIZE = 32;
const BORDER_SIZE = 2;

const ACCELERATION = 0.08;
const SPEED = 2;
const FRICTION = 0.05;

function Player(posX, posY) {
	this.circle = new PIXI.Graphics();
	this.circle.beginFill(RED_COLOR);
	this.circle.lineStyle(BORDER_SIZE, BORDER_SIZE, 1);
	this.circle.drawCircle(posX, posY, SIZE / 2);
	this.circle.endFill();

	this.position = new Vector(posX, posX);
	this.velocity = new Vector(0, 0);
	this.acceleration = new Vector(0, 0);

	this.upButton = false;
	this.rightButton = false;
	this.downButton = false;
	this.leftButton = false;
	this.inputAcceleration = new Vector(0, 0);
}

Player.prototype.update = function() {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
	this.velocity.top(SPEED);
	this.acceleration = this.totalAcceleration();

	this.circle.x = this.position.x;
    this.circle.y = this.position.y;
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