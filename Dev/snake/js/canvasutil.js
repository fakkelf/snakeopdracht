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
    if (x >= FIELD.XMIN && x <= FIELD.XMAX && y >= FIELD.YMIN && y <= FIELD.YMAX) {
        return true;
    } else {
        return false;
    }
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
    var headsegment = createSegment(R + FIELD.WIDTH/2, FIELD.WIDTH/2 - R);
    headsegment.color = SNAKE.COLORS.HEAD;
    // Defineer tail
    var tailsegment = createSegment(R + FIELD.WIDTH/2, R + FIELD.WIDTH/2);
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
    var headsegment = createHead(R + FIELD.WIDTH/2, FIELD.WIDTH/2 - R);
    // Defineer eerste element van het lichaam van de slang
    var tailsegment = createSegment(R + FIELD.WIDTH/2, R + FIELD.WIDTH/2);
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
    while (i < FOOD.NUMBER ) {
        food = createFood(FIELD.XMIN + getRandomInt(0, FIELD.MAX) * MOVE.STEP, FIELD.YMIN + getRandomInt(0, FIELD.MAX) * MOVE.STEP);
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
    createStartSnake();
    // createStartSnake_Alt();
    createFoods();
    draw();
}

/**
  @function resetCanvas -> void
  @desc Maakt het canvas schoon.
*/
function resetCanvas() {
    $("#mySnakeCanvas").clearCanvas();
}

