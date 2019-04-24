
 /***************************************************************************
 **                 Variabelen                                             **
 ***************************************************************************/

 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/
 /**
   @function isValidMove -> Boolean
   @param {Number} x
   @param {Number} y
   @returns {Boolean} false wanneer de Move buiten het canvas valt,
 *                    true wanneer de Move binnen het canvas is.
 */

/**
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x - x-coordinaat middelpunt
  @param {number} y - y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.ELEMENT
*/
function createSegment(x, y) {
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
function createHead(x, y) {
    const COLOR = "DarkOrange";
    return new Element(canvas.getElRadius(), x, y, COLOR);
}

/**
   @function moveSegment -> void
   @desc geeft een nieuwe positie (x,y) aan een segment na een beweging.
   @param {Element} segment
   @param {Move} direction
*/
function moveSegment(segment , direction) {
    segment.x = canvascontrol.newXPos(segment.x, direction);
    segment.y = canvascontrol.newYPos(segment.y, direction);
}

/**
 * @function newHead
 * @desc geeft een segment terug welke de nieuwe kop van slang vertegenwoordigt na een beweging.
 * @param {Element} segment
 * @param {Move} direction
 * @return {segment}
 */
function newHead(head, direction) {
    headnew = createHead(head.x, head.y);	
    moveSegment(headnew, direction);
  
    return headnew;
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
        return canvas.isValidMove(canvascontrol.newXPos(head.x, direction), canvascontrol.newYPos(head.y, direction));
};

/**
 @function Snake.prototype.doMove
 @desc Beweegt de slang in de aangegeven richting
 @param {string} direction de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/

Snake.prototype.doMove = function (direction) {
    var bodyColor = this.segments[0].color;
    nexthead = newHead(this.getHead(), direction); 

    // Controleer of de snake niet zichzelf opeet
    if (nexthead.collidesWithOneOf(this.segments)) {        
       throw new Error("Slang eet zich zelf op");
    }    
    
    this.getHead().color = bodyColor; // de oude kop verandert van kleur
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