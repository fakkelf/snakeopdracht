
 /***************************************************************************
 **                 Variabelen                                             **
 ***************************************************************************/
  
 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/


/**
*  @function newX
*  @desc berekent de nieuwe waarde x na een horizontale beweging 
*  @param {Number} x - waarde
*  @param {Move} direction - waarde
* @returns {Number} x - waarde
*/
function newX(x, direction) {
    if (direction === MOVE.LEFT) {
        return x - MOVE.STEP;
    } else if (direction === MOVE.RIGHT) {
        return x + MOVE.STEP;
    }
    return x;
}
/**
* @function newY
* @desc berekent de nieuwe waarde x na een horizontale beweging 
* @param {Number} y - waarde
* @param {Move} direction - waarde
* @returns {Number} y - waarde
*/
function newY(y, direction) {
    if (direction === MOVE.DOWN) {
        return y + MOVE.STEP;
    } else if (direction === MOVE.UP) {
        return y - MOVE.STEP;
    }
    return y;
}
/**
 * @function moveSegment
 * @desc geeft een nieuwe positie (x,y) aan een segment na een beweging.
 * @param {Element} segment 
 * @param {Move} direction 
 */
function moveSegment(segment , direction) {
    segment.x = newX(segment.x, direction);
    segment.y = newY(segment.y, direction);
}

/**
 * @function isValidMove
 * @descr bekijk of de Move geldig is.
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Boolean} false wanneer de Move buiten het canvas valt, 
 *                    true wanneer de Move binnen het canvas is.
 */
function isValidMove(x, y) {
    if (x >= FIELD.XMIN && x <= FIELD.XMAX && y >= FIELD.YMIN && y <= FIELD.YMAX) {
        return true;
    } else {
        return false;
    }
}

/**
 * @function newHead
 * @descr maak een nieuwe kop van de snake, en geef deze een nieuwe positie (x,y)
 * @param {Element} head 
 * @param {Move} direction 
 * @returns {Element} headnew 
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
 * @function getHead
 * @descr het ophalen van de kop van de snake
 * @returns {Element} het element van het hoofd van de snake
 */
Snake.prototype.getHead = function() {
    return this.segments[this.segments.length - 1];
}

/**
 * @function Snake.protopy.canMove
 * @descr controleert of de MOVE valide is.
 * @returns {Boolean} true als de beweging binnen de afmeting van het canvas blijft.
 *                    false als deze buiten de canvas beweegt. 
*/
Snake.prototype.canMove = function(direction) {
    head = this.getHead();
    
    return isValidMove(newX(head.x, direction), newY(head.y, direction));
}

/**
 * @funtcion Snake.prototype.doMove
 * @descr creeert een nieuwe kop van de slang en beweegt deze, waarna
 *        er gecontrolleerd wordt of deze in aanraking komt met voedsel
 * @param {Move} direction - waarde
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
    

