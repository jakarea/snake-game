
ctx.fillStyle = 'red';
for(var i =0;i<balls.length;i++){ 
	ball = balls[i];
	ctx.fillRect(ball.x, ball.y, snakeSize, snakeSize);
}

ctx.fillStyle = '#0c0c0c';
ctx.fillRect(500, 250, snakeSize, snakeSize);

var food = function(){
	ctx.fillStyle = '#0c0c0c';
	ctx.fillRect(500, 250, snakeSize, snakeSize);
}
