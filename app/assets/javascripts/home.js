//= require pixi

const FIELD_COLOR = 0x718C5A;

$(function() {
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	renderer.backgroundColor = FIELD_COLOR;
	renderer.autoResize = true;

	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();

	var player = new Player(100, 100);
	stage.addChild(player.circle);

	$(document).keydown(function(evt) {
		evt.preventDefault();

		if (evt.which == 37) {
			player.velX = -2;
		} else if (evt.which == 38) {
			player.velY = -2;
		} else if (evt.which == 39) {
			player.velX = 2;
		} else if (evt.which == 40) {
			player.velY = 2;
		}
	});

	$(document).keyup(function(evt) {
		evt.preventDefault();

		if (evt.which == 37 || evt.which == 39) {
			player.velX = 0;
		} else if (evt.which == 38 || evt.which == 40) {
			player.velY = 0;
		}
	});

	gameLoop();

	function gameLoop() {
		requestAnimationFrame(gameLoop);

		player.update();

		renderer.render(stage);
	}
});