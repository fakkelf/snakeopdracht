 /***************************************************************************
 **     functies voor het manipuleren van de elementen van het canvas      **
 ***************************************************************************/

/**
   @function moveSegment -> void
   @desc geeft een nieuwe positie (x,y) aan een segment na een beweging.
   @param {Element} segment
   @param {Move} direction
*/
function moveSegment(segment , direction) {
    segment.x = newX(segment.x, direction);
    segment.y = newY(segment.y, direction);
}

/**
   @function isValidMove -> Boolean
   @param {Number} x
   @param {Number} y
   @returns {Boolean} false wanneer de Move buiten het canvas valt,
 *                    true wanneer de Move binnen het canvas is.
 */
 function isValidMove(x, y) {
  
    return (x >= properties.getField().XMIN && x <= properties.getField().XMAX && y >= properties.getField().YMIN && y <= properties.getField().YMAX);
    
}
function isValidMoveOld(x, y) {
    var xMaxCanvasDom = (parseInt(Math.floor(jQuery("#mySnakeCanvas").innerWidth())))- properties.getRadius()
	if (349 < xMaxCanvasDom) {
		console.log ("Yes it is");
	}
	if (350 <= xMaxCanvasDom) {
	console.log ("it is equeal")}
	
	console.log (xMaxCanvasDom);
	yMaxCanvasDom = Math.floor(jQuery("#mySnakeCanvas").innerHeight());
	
/**
    Aanpassing commentaar
    if (x >= R && x <= xMaxCanvasDom && y >= R && y <= 350) {
        return true;
    } else {
        return false;
    }
    */
    // return (x >= FIELD.XMIN && x <= FIELD.XMAX && y >= FIELD.YMIN && y <= FIELD.YMAX);
    return (x >= properties.getRadius() && x <= xMaxCanvasDom && y >= properties.getRadius() && y <= 350);
    
}

 /***************************************************************************
 **     functies voor het opbouwen elementen voor het canvas               **
 ***************************************************************************/

/**
  @function createStartSnake() -> Snake
  @desc Slang creëren, bestaande uit  twee segmenten,
        in het midden van het veld
  @return: slang volgens specificaties
*/
function createStartSnake() {
    // Defineer head
    var headsegment = createSegment(properties.getRadius() + properties.getField().WIDTH/2, properties.getField().WIDTH/2 - properties.getRadius());
    headsegment.color = properties.getSnake().COLORS.HEAD;
    // Defineer tail
    var tailsegment = createSegment(properties.getRadius() + properties.getField().WIDTH/2, properties.getRadius() + properties.getField().WIDTH/2);
    var segments = [];
    segments.push(tailsegment);
    segments.push(headsegment);             // Kop van de slang is het laatste element.
    snake = new Snake(segments);
}

/**
  @function createStartSnake() -> Snake
  @desc Slang creëren, bestaande uit  twee segmenten,
        in het midden van het veld
  @return: slang volgens specificaties
*/
function createStartSnake_Alt() {
    // Alternatieve implementatie waarbij de kleur van het segment vooraf wordt bepaald.
    // Defineer kop van de slang
    var headsegment = createHead(properties.getRadius() + properties.getField().WIDTH/2, properties.getField().WIDTH/2 - properties.getRadius());
    // Defineer eerste element van het lichaam van de slang
    var tailsegment = createSegment(properties.getRadius() + properties.getField().WIDTH/2, properties.getRadius() + properties.getField().WIDTH/2);
    var segments = [];
    segments.push(tailsegment);
    segments.push(headsegment);             // Kop van de slang is het laatste element.
    snake = new Snake(segments);
}

/**
  @function createFoods() -> array met food
  @desc [Element] array van random verdeelde voedselpartikelen
  @return [Element] array met food
*/
function createFoods() {
    var  i,
    food,
    i = 0;
    //we gebruiken een while omdat we, om een arraymethode te gebruiken, eerst een nieuw array zouden moeten creëren (met NUMFOODS elementen)
    while (i < properties.getFood().NUMBER ) {
        food = createFood(properties.getField().XMIN + getRandomInt(0, properties.getField().MAX) * properties.getMove().STEP, 
                          properties.getField().YMIN + getRandomInt(0, properties.getField().MAX) * properties.getMove().STEP);
        if (!food.collidesWithOneOf(snake.segments) && !food.collidesWithOneOf(foods) ) {
            foods.push(food);
            i++;
        }
    }
}

/***************************************************************************
 **     functies voor het opbouwen het canvas                              **
 ***************************************************************************/
 
/**
  @function setupCanvas -> void
  @desc Maakt een slang en een voedselementen aan, de voedelselementen
        worden op random posities op het canvas geplaatst.
*/
function setupCanvas() {
    initCanvas();
    createStartSnake();
    // createStartSnake_Alt();
    createFoods();
    draw();
}

/**
  @function initCanvas -> void
  @desc Definieert de veldwaarden die gebruikt worden op het canvas.
        De basiswaarde wordt uit het mySnakeCanvas object gehaald en afgerond meegegeven.
*/
function initCanvas() {
    properties.setField(Math.round($("#mySnakeCanvas").width()));
}

/**
  @function resetCanvas -> void
  @desc Maakt het canvas schoon.
*/
function resetCanvas() {
    $("#mySnakeCanvas").clearCanvas();
}

