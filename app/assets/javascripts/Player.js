const RED_PLAYER_COLOR = 0xE56E56;
const BLUE_PLAYER_COLOR = 0x5689E5;
const PLAYER_BORDER_COLOR = 0x000000;

const PLAYER_SIZE = 32;
const PLAYER_BORDER = 2;

class Player {
	constructor(posX, posY) {
		this.circle = new PIXI.Graphics();
		this.circle.beginFill(RED_PLAYER_COLOR);
		this.circle.lineStyle(PLAYER_BORDER, PLAYER_BORDER_COLOR, 1);
		this.circle.drawCircle(posX, posY, PLAYER_SIZE / 2);
		this.circle.endFill();
	}
}
