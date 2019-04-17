
 /***************************************************************************
 **                 Variabelen                                             **
 ***************************************************************************/

 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/

/**
 * @function newHead
 * @desc geeft een segment terug welke de nieuwe kop van slang vertegenwoordigt na een beweging.
 * @param {Element} segment
 * @param {Move} direction
 * @return {segment}
 */
function newHead(head, direction) {
    headnew = createSegment(head.x, head.y);
	bodysnake = this.snake.segments.slice(0,(this.snake.segments.length -1));  // take the array without the head
    //als de kop van de slang met de body van de slang botst dan is het spel verloren
	if (headnew.collidesWithOneOf(bodysnake)) {
        console.log ("verloren!!!");
        stop();                       //stop het spel!
    } else {
	
    moveSegment(headnew, direction);

    headnew.color = properties.getSnake().COLORS.HEAD;
  
    return headnew;
	}
}

 /***************************************************************************
 **                 Prototype                                              **
 ***************************************************************************/
/**
* @function Snake.prototype.gethead
* @desc vraagt het hoofdsegment op van de slang, de kop.
* @returns {segment}
* @throws Gooit een fout indien de snake geen elementen bevat.
*/
Snake.prototype.getHead = function () {
    // Controle op de aanwezigheid van de kop, we verwachten dat deze altijd aanwezig is.
    // Indien niet aanwezig, gooi een fout.
    if (this.segments.length < 1) {
        throw new Error("Slang bestaat niet");
    }
    return this.segments[this.segments.length - 1];
};

/**
 @function Snake.prototype.canMove
 @desc Controleert of slang mag bewegen in de aangegeven richting
 @param {string} direction - de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
 @returns {boolean} false wanneer de slang over de rand van het canvas zou lopen,
*                   anders true.
*/
Snake.prototype.canMove = function (direction) {
    head = this.getHead();
    return isValidMove(newX(head.x, direction), newY(head.y, direction));
};

/**
 @function Snake.prototype.doMove
 @desc Beweegt de slang in de aangegeven richting
 @param {string} direction de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/
Snake.prototype.doMove = function (direction) {

    nexthead = newHead(this.getHead(), direction);
    //Als er een collision is met voedsel dan groeit de slang en wordt het voedsel weggehaald
    if (typeof nexthead !== 'undefined' && nexthead.collidesWithOneOf(foods)) {
		//Als er nog voedsel is dan verwijderen we dit voedsel uit de foods array
		if (foods.length !== 0){
		    foods.splice(nexthead.getIndexNumber(foods), 1);
			//Als er geen voedsel meer is heeft de speler gewonnen
		    if (foods.length === 0){
            console.log("gewonnen!");
		    stop()                 //stop het spel
			};
        };
    } else {
        //Geen collision betekent dat het eerste segment verwijdert wordt hierdoor is de lengte van de slang tijdelijk 1
        //Totdat later de nieuwe kop segment van de slang wordt toegevoegd
        this.segments.shift();
    }
    this.getHead().color = properties.getSnake().COLORS.ELEMENT; // de oude kop verandert van kleur
    this.segments.push(nexthead);   // nieuwe kop van slang wordt toegevoegd
};

 /***************************************************************************
 **                 hulpfunctie                                            **
 ***************************************************************************/

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
    } else {
        console.log("snake cannot move " + direction);
    };
}



/***************************************************************************
 **                 Constructors                                          **
 ***************************************************************************/
/**
   @constructor Snake
   @param {[Element]} segments een array met aaneengesloten slangsegmenten
                      Het laatste element van segments wordt de kop van de slang
*/
function Snake(segments) {
    this.segments = [];
    this.segments = segments;
}