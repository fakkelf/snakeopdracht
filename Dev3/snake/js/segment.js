/***************************************************************************
**                 Hulpfuncties                                           **
***************************************************************************/

/**
   @function newX
   @desc berekent de nieuwe x waarde van een segment na een horizontale beweging
   @param {Number} x - waarde
   @param {Move} direction - waarde
   @returns {Number} x waarde
*/
function newX(x, direction) {
    if (direction === properties.getMove().LEFT) {
        return x - properties.getMove().STEP;
    }
    else if (direction === properties.getMove().RIGHT) {
        return x + properties.getMove().STEP;
    }
    return x;
}

/**
  @function newY
  @desc berekent de nieuwe y waarde van een segement na een verticale beweging
  @param {Number} y - waarde
  @param {Move} direction - waarde
  @returns {Number} y waarde
*/
function newY(y, direction) {
    if (direction === properties.getMove().DOWN) {
        return y + properties.getMove().STEP;
    } else if (direction === properties.getMove().UP) {
        return y - properties.getMove().STEP;
    }
    return y;
}

 /***************************************************************************
 **     functies voor het creeeren van de segmenten van de slang           **
 ***************************************************************************/

/**
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x - x-coordinaat middelpunt
  @param {number} y - y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.ELEMENT
*/
function createSegment(x, y) {
    return new Element(properties.getRadius(), x, y, properties.getSnake().COLORS.ELEMENT);
}

/**
  @function createHead(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x - x-coordinaat middelpunt
  @param {number} y - y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.HEAD
*/
function createHead(x, y) {
    return new Element(properties.getRadius(), x, y, properties.getSnake().COLORS.HEAD);
}