//= require pixi

const FIELD_COLOR = 0x718C5A;

$(function() {
	var width = window.innerWidth;
	var height = window.innerHeight;

	var renderer = PIXI.autoDetectRenderer(width, height);
	renderer.backgroundColor = FIELD_COLOR;

	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();

	var playerRed = new Player(width / 4, height / 2, RED_COLOR);
	stage.addChild(playerRed.circle);

	var playerBlue = new Player(3 * width / 4, height / 2, BLUE_COLOR);
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

	window.onresize = function (evt) {
		var width = window.innerWidth;
		var height = window.innerHeight;

		renderer.view.style.width = width + "px";
		renderer.view.style.height = height + "px";

		renderer.resize(width, height);
	}
});