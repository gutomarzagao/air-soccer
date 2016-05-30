const RED_PLAYER_COLOR = 0xE56E56;
const BLUE_PLAYER_COLOR = 0x5689E5;
const PLAYER_BORDER_COLOR = 0x000000;

const PLAYER_SIZE = 32;
const PLAYER_BORDER = 2;

function Player(posX, posY) {
	this.circle = new PIXI.Graphics();
	this.circle.beginFill(RED_PLAYER_COLOR);
	this.circle.lineStyle(PLAYER_BORDER, PLAYER_BORDER_COLOR, 1);
	this.circle.drawCircle(posX, posY, PLAYER_SIZE / 2);
	this.circle.endFill();

	this.velX = 0;
	this.velY = 0;
}

Player.prototype.update = function() {
	this.circle.x += this.velX;
    this.circle.y += this.velY;
};
