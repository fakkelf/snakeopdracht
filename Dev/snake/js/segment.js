/***************************************************************************
**                 Hulpfuncties                                           **
***************************************************************************/

/**
*  @function newX
*  @desc berekent de nieuwe x waarde van een segment na een horizontale beweging 
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
* @desc berekent de nieuwe y waarde van een segement na een verticale beweging 
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
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.ELEMENT
*/
function createSegment(x, y) {
	 return new Element(R, x, y, SNAKE.COLORS.ELEMENT);
}

/**
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.HEAD
*/
function createHead(x, y) {
	 return new Element(R, x, y, SNAKE.COLORS.HEAD);
}