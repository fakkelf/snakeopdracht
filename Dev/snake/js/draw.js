


/**
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE
*/
function createSegment(x, y) {
	 return new Element(R, x, y, SNAKE.COLORS.ELEMENT);
}
/**
  @function createFood(x,y) -> Element
  @desc Voedselelement creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color FOOD.COLOR
*/
function createFood(x, y) {
	return new Element(R, x, y, FOOD.COLOR);
}

/**
  @function createFoods() -> array met food
  @desc [Element] array van random verdeelde voedselpartikelen
  @return [Element] array met food
*/
function createFoods() {   
   var  i,    
        food;
   i = 0; 
   //we gebruiken een while omdat we, om een arraymethode te gebruiken, eerst een nieuw array zouden moeten creëren (met NUMFOODS elementen)
    while (i < FOOD.NUMBER ) {
        food = createFood(FIELD.XMIN + getRandomInt(0, FIELD.MAX) * MOVE.STEP, FIELD.YMIN + getRandomInt(0, FIELD.MAX) * MOVE.STEP);
        if (!food.collidesWithOneOf(snake.segments) && !food.collidesWithOneOf(foods) ) {
            foods.push(food);
            i++
        }  
    }  
}

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