
//font
let font;

/*Defines room structure
0 - floor
1 - left wall
2 - right wall*/
let gameBase;

//room structure game obj
let gameStruct;

setup = () => {
	createCanvas(1000, 600);
	background(0);
	offsetX = width/2;
	offsetY = height/4;
	gameBase = 
	[
		[0, 2, 2, 2, 2, 2, 2, 2],
		[1, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0]
	];
	gameStruct = gameBaseInitialize(gameBase, gameStruct);
	gameBaseDisplay(gameBase, gameStruct);

};

draw = () => {
	background(0);
	gameBaseDisplay(gameBase, gameStruct);
};