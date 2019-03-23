

/**
  @function drawElement(element, canvas) -> void
  @desc Een element tekenen 
  @param {Element} element een Element object
  @param  {dom object} canvas het tekenveld
*/
 function drawElement(element, canvas) {

	canvas.drawArc({
		draggable : false,
		fillStyle : element.color,
		x : element.x,
		y : element.y,
		radius : element.radius
	});
}

/**
  @function draw() -> void
  @desc Teken de slang en het voedsel
*/
function draw() {
	var canvas = $("#mySnakeCanvas").clearCanvas();
	for (i = 0; i < snake.segments.length; i++) {
	   drawElement (snake.segments[i], canvas);
    };
    for (i = 0; i < foods.length; i++) {
	   drawElement (foods[i], canvas);
		
	}
}