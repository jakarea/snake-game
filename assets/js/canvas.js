var snakeBoard = document.getElementById('snakeBoard');
var ctx = snakeBoard.getContext('2d');
var snake;
var food;
var score = 0;
var snakeSize = 10; 
var w = 1000;
var h = 600;
var speed = 200;


ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, 1000, 600);

ctx.fillStyle = '#0c0c0c';
ctx.fillRect(500, 250, snakeSize, snakeSize);

ctx.fillStyle = '#c53715';
ctx.fillRect(50, 300, snakeSize, snakeSize);
ctx.fillRect(40, 300, snakeSize, snakeSize); 
ctx.fillRect(30, 300, snakeSize, snakeSize); 
ctx.fillRect(20, 300, snakeSize, snakeSize); 
ctx.fillRect(10, 300, snakeSize, snakeSize); 


