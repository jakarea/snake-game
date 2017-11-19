var snakeBoard = document.getElementById('snakeBoard');
var ctx = snakeBoard.getContext('2d');
var snake;
var food;
var score = 0;
var snakeSize = 19; 
var w = 1000;
var h = 600;

var balls = [
	{ x: 200, y: 200},
	{ x: 220, y: 200},
	{ x: 240, y: 200}
];

