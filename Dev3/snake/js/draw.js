 /***************************************************************************
 **     functies voor het tekenen van de elementen van het canvas      **
 ***************************************************************************/

/**
  @function drawElement(element, canvas) -> void
  @desc Een element tekenen
  @param {Element} element - een Element object
  @param  {dom object} canvas - het tekenveld
*/
function drawElement(element, canvas) {
    canvas.drawArc({
        draggable: false,
        fillStyle: element.color,
        x: element.x,
        y: element.y,
        radius: element.radius
    });
}

/**
  @function draw() -> void
  @desc Teken de slang en het voedsel
*/
function draw() {
    resetCanvas();
    var canvas = $("#mySnakeCanvas");
    //teken de elementen van de snake (lengte 2)
    for (i = 0; i < snake.segments.length; i++) {
        drawElement(snake.segments[i], canvas);
    };
    //teken de food elementen die op random positie gecreeerd worden
    for (i = 0; i < foods.length; i++) {
        drawElement(foods[i], canvas);
    }
}