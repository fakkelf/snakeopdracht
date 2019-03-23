
 /***************************************************************************
 **                 Variabelen                                             **
 ***************************************************************************/
  
 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/

/**
 * @function newHead
 * @desc geeft een segment terug welke de nieuwe kop van slang vertegenwoordig na een beweging.
 * @param {Element} segment 
 * @param {Move} direction
 * @return {segment}
 */
function newHead(head, direction) {
    headnew = createSegment(head.x, head.y);
    
    moveSegment(headnew, direction);
    
    headnew.color = SNAKE.COLORS.HEAD;
    
    return headnew;
}

 /***************************************************************************
 **                 Prototype                                              **
 ***************************************************************************/
/**
* @function Snake.prototype.gethead
* @desc vraagt het hoofdsegment op van de slang, de kop.
* @returns {array} false wanneer de slang over de rand van het canvas zou lopen,
*                   anders true.
* @throws Gooit een fout indien de snake geen elementen bevat.
*/
Snake.prototype.getHead = function() {
    // Controle op de aanwezigheid van de kop, we verwachten dat deze altijd aanwezig is.
    // Indien niet aanwezig, gooi een fout.
    if (this.segments.length === 2) {
        throw new Error("Slang bestaat niet");
    }
    return this.segments[this.segments.length - 1];
}

/**
 @function Snake.prototype.canMove
 @desc Controleert of slang mag bewegen in de aangegeven richting
 @param {string} direction de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
 @returns {boolean} false wanneer de slang over de rand van het canvas zou lopen,
*                   anders true.
*/
Snake.prototype.canMove = function(direction) {
    head = this.getHead();
    
    return isValidMove(newX(head.x, direction), newY(head.y, direction));
}

/**
 @function Snake.prototype.doMove
 @desc Beweegt de slang in de aangegeven richting
 @param {string} direction de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/
Snake.prototype.doMove = function(direction) {
    
    nexthead = newHead(this.getHead(), direction);
    
    if (nexthead.collidesWithOneOf(foods)) {
        foods.splice(nexthead.getIndexNumber(foods), 1);
    } else {        
        this.segments.shift();
    }
    
    this.getHead().color = SNAKE.COLORS.ELEMENT;
    this.segments.push(nexthead);
}

 /***************************************************************************
 **                 Constructor                                            **
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
   @param {[Element]} segments een array met aaneengesloten slangsegmenten
                   Het laatste element van segments wordt de kop van de slang 
*/ 
function Snake(segments) {
	this.segments = [];
	this.segments = segments;
}
    

