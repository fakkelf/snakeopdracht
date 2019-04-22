 /***************************************************************************
 **     functies voor het tekenen van de elementen van het canvas      **
 ***************************************************************************/



var draw = (function() {
    
    var drawElement = function(element, canvas) {
        canvas.drawArc({
            draggable: false,
            fillStyle: element.color,
            x: element.x,
            y: element.y,
            radius: element.radius
        });
    };
    
    return {        
        drawCanvas: function() {
            canvascontrol.resetCanvas();
            var snakecanvas = $("#mySnakeCanvas");
            //teken de elementen van de snake (lengte 2)
            canvascontrol.getSnake().segments.forEach(function(snakeElement) {
                drawElement(snakeElement, snakecanvas);
            });
            //teken de food elementen die op random positie gecreeerd worden
            canvascontrol.getFood().forEach(function(foodElement) {
                drawElement(foodElement, snakecanvas);
            });
        }
    };
}());

jQuery(document).on("drawCanvas", draw.drawCanvas);

/**
  @function drawElement(element, canvas) -> void
  @desc Een element tekenen
  @param {Element} element - een Element object
  @param  {dom object} canvas - het tekenveld
*/
function drawElementX(element, canvas) {
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
function drawX() {
    canvascontrol.resetCanvas();
    var snakecanvas = $("#mySnakeCanvas");
    //teken de elementen van de snake (lengte 2)
    canvascontrol.getSnake().segments.forEach(function(snakeElement) {
        drawElement(snakeElement, snakecanvas);
    });
    //teken de food elementen die op random positie gecreeerd worden
    canvascontrol.getFood().forEach(function(foodElement) {
        drawElement(foodElement, snakecanvas);
    });
}