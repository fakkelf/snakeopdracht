
	
var snake,
    foods = [];                                // voedsel voor de slang
	
$(document).ready(function() {
	$("#startSnake").click(init);  
	$("#stopSnake").click(stop);
});

/*************************************************************************************************
 **                                    Nieuwe code                                              **
 *************************************************************************************************/

 /***************************************************************************
 **                 Constructors                                          **
 ***************************************************************************/
 
 /***************************************************************************
 **                 Hulpfuncties                                          **
 ***************************************************************************/
 
 
 /*************************************************************************************************
 **                                    Gegeven code                                              **
 *************************************************************************************************/
/***************************************************************************
 **                 Commando's voor de gebruiker                          **
 ***************************************************************************/
/**
  @function init() -> void
  @desc Haal eventueel bestaand voedsel en een bestaande slang weg, cre\"eer een slang, genereer voedsel, en teken alles
*/
function init() {		
    //if (snake !== undefined || snake.length != 0) {
		snake = []
	//}	
    //if (foods !== undefined || foods.length != 0) {
	    foods = []
	//}
    // createStartSnake()
    createStartSnake_Alt()
	createFoods()
	draw()
	console.log("testing init")
	/* in te vullen */
}

/**
  @function stop() -> void
  @desc Laat slang en voedsel verdwijnen, en teken leeg veld
*/
function stop() {
	snake = []
	foods = []
	$("#mySnakeCanvas").clearCanvas();
}

/**
  @function move(direction) -> void
  @desc Beweeg slang in aangegeven richting
        tenzij slang uit canvas zou verdwijnen  
  @param   {string} direction de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/
function move(direction) {
	if (snake.canMove(direction)) {
		snake.doMove(direction);
		draw();
	}
	else {
		console.log("snake cannot move " + direction);
	}
}


/***************************************************************************
 **                 Constructors                                          **
 ***************************************************************************/
/**
   @constructor Snake
   @param {[Element] segments een array met aaneengesloten slangsegmenten
                   Het laatste element van segments wordt de kop van de slang 
*/ 
function Snake(segments) {
	this.segments = [];
	this.segments = segments;
	}
    

/***************************************************************************
 **                 Hulpfuncties                                          **
 ***************************************************************************/
 
/**
  @function createStartSnake() -> Snake
  @desc Slang creëren, bestaande uit  twee segmenten, 
        in het midden van het veld
  @return: slang volgens specificaties
*/
function createStartSnake() {
    var segments   = [createSegment(R + FIELD.WIDTH/2, R + FIELD.WIDTH/2), 
	                  createSegment(R + FIELD.WIDTH/2, FIELD.WIDTH/2 - R)];
    snake = new Snake(segments);

}

function createStartSnake_Alt() {
    
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
  @function getRandomInt(min: number, max: number) -> number
  @desc Creeren van random geheel getal in het interval [min, max] 
  @param {number} min een geheel getal als onderste grenswaarde
  @param {number} max een geheel getal als bovenste grenswaarde (max > min)
  @return {number} een random geheel getal x waarvoor geldt: min <= x <= max
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



