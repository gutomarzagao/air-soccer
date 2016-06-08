const RED_COLOR = 0xE56E56;
const BLUE_COLOR = 0x5689E5;
const BORDER_COLOR = 0x000000;

const SIZE = 32;
const BORDER_SIZE = 2;

const SPEED = 2;

function Player(posX, posY) {
	this.circle = new PIXI.Graphics();
	this.circle.beginFill(RED_COLOR);
	this.circle.lineStyle(BORDER_SIZE, BORDER_SIZE, 1);
	this.circle.drawCircle(posX, posY, SIZE / 2);
	this.circle.endFill();

	this.position = new Vector(posX, posX);
	this.velocity = new Vector(0, 0);
	this.acceleration = new Vector(0, 0);

	this.direction = new Vector(0, 0);
}

Player.prototype.update = function() {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);

	this.circle.x = this.position.x;
    this.circle.y = this.position.y;
};

Player.prototype.up = function() {
	this.direction.y = -SPEED;
	this.velocity = this.direction.copy();
	this.velocity.normalize(SPEED);
};

Player.prototype.right = function() {
	this.direction.x = SPEED;
	this.velocity = this.direction.copy();
	this.velocity.normalize(SPEED);
};

Player.prototype.down = function() {
	this.direction.y = SPEED;
	this.velocity = this.direction.copy();
	this.velocity.normalize(SPEED);
};

Player.prototype.left = function() {
	this.direction.x = -SPEED;
	this.velocity = this.direction.copy();
	this.velocity.normalize(SPEED);
};

Player.prototype.stopX = function() {
	this.direction.x = 0;
	this.velocity = this.direction.copy();
	this.velocity.normalize(SPEED);
};

Player.prototype.stopY = function() {
	this.direction.y = 0;
	this.velocity = this.direction.copy();
	this.velocity.normalize(SPEED);
};
