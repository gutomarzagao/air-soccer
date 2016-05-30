//= require pixi

const FIELD_COLOR = 0x718C5A;

$(function() {
	var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	renderer.backgroundColor = FIELD_COLOR;
	renderer.autoResize = true;

	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();

	renderer.render(stage);

	var player = new Player(100, 100);
	stage.addChild(player.circle);

	renderer.render(stage);
});