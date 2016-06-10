//= require pixi

const FIELD_COLOR = 0x718C5A;

$(function() {
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	renderer.backgroundColor = FIELD_COLOR;
	renderer.autoResize = true;

	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();

	var playerRed = new Player(100, 100, RED_COLOR);
	stage.addChild(playerRed.circle);

	var playerBlue = new Player(400, 100, BLUE_COLOR);
	stage.addChild(playerBlue.circle);

	$(document).keydown(function(evt) {
		var preventDefault = true;

		if (evt.which == 37) {
			playerBlue.left(true);
		} else if (evt.which == 38) {
			playerBlue.up(true);
		} else if (evt.which == 39) {
			playerBlue.right(true);
		} else if (evt.which == 40) {
			playerBlue.down(true);
		} else if (evt.which == 65) {
			playerRed.left(true);
		} else if (evt.which == 68) {
			playerRed.right(true);
		} else if (evt.which == 83) {
			playerRed.down(true);
		} else if (evt.which == 87) {
			playerRed.up(true);
		} else {
			preventDefault = false;
		}

		if (preventDefault) {
			evt.preventDefault();
		}
	});

	$(document).keyup(function(evt) {
		var preventDefault = true;

		if (evt.which == 37) {
			playerBlue.left(false);
		} else if (evt.which == 38) {
			playerBlue.up(false);
		} else if (evt.which == 39) {
			playerBlue.right(false);
		} else if (evt.which == 40) {
			playerBlue.down(false);
		} else if (evt.which == 65) {
			playerRed.left(false);
		} else if (evt.which == 68) {
			playerRed.right(false);
		} else if (evt.which == 83) {
			playerRed.down(false);
		} else if (evt.which == 87) {
			playerRed.up(false);
		} else {
			preventDefault = false;
		}

		if (preventDefault) {
			evt.preventDefault();
		}
	});

	gameLoop();

	function gameLoop() {
		requestAnimationFrame(gameLoop);

		playerRed.update();
		playerBlue.update();

		renderer.render(stage);
	}
});