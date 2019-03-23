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

function setupCanvas() {
    createStartSnake();
    createFoods();
    draw();
}