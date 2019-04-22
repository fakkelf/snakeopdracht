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
function newXZ(x, direction) {
    if (direction === canvascontrol.getMove().LEFT) {
        return x - canvas.getStep();
    }
    else if (direction === canvascontrol.getMove().RIGHT) {
        return x + canvas.getStep();
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
function newYZ(y, direction) {
    if (direction === canvascontrol.getMove().DOWN) {
        return y + canvas.getStep();
    } else if (direction === canvascontrol.getMove().UP) {
        return y - canvas.getStep();
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
function createSegmentX(x, y) {
    const COLOR = "DarkRed";
    return new Element(canvas.getElRadius(), x, y, COLOR);
}

/**
  @function createHead(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x - x-coordinaat middelpunt
  @param {number} y - y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.HEAD
*/
function createHeadX(x, y) {
    const COLOR = "DarkOrange";
    return new Element(canvas.getElRadius(), x, y, COLOR);
}