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
		var preventDefault = true;

		if (evt.which == 37) {
			player.left(true);
		} else if (evt.which == 38) {
			player.up(true);
		} else if (evt.which == 39) {
			player.right(true);
		} else if (evt.which == 40) {
			player.down(true);
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
			player.left(false);
		} else if (evt.which == 38) {
			player.up(false);
		} else if (evt.which == 39) {
			player.right(false);
		} else if (evt.which == 40) {
			player.down(false);
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

		player.update();

		renderer.render(stage);
	}
});