 /***************************************************************************
 **     Canvas object                                                     **
 ***************************************************************************/

/**
    @function canvas.getRadius()
    @desc De waarde van de straal van een element op het canvas.
    @returns {Number} 
*/
/**
    @function canvas.getStep()
    @desc De grootte van een stap over het canvas. Is 2 maal de straal.
    @returns {Number} 
*/
/**
    @function canvas.init(Number) -> void
    @desc Initialiseert het canvas veld, lengte is gelijk aan breedte.
*/
/**
    @function canvas.getField
    @desc Geeft het canvas veld object terug. 
        Het veld bevat waarden voor WIDTH, HEIGHT, MAX, XMIN, YMIN, XMAX en YMAX
    @returns FIELD
*/
var canvas = (function() {
    const R             = 10;                           // straal van een element
    const STEP          = 2 * R;                        // Stapgrootte
    var SIDELENGTH    = 100;                            // Bepaald dimensies van het veld, default waarde 20
    const FIELD = {
        WIDTH: SIDELENGTH,
        HEIGHT: SIDELENGTH,                             // hoogte veld, er moet gelden: WIDTH = HEIGHT
        MAX: SIDELENGTH / STEP - 1,                     // netto veldbreedte
        XMIN: R,                                        // minimale x waarde
        YMIN: R,                                        // minimale y waarde
        XMAX: SIDELENGTH - R,                           // maximale x waarde
        YMAX: SIDELENGTH - R                            // maximale y waarde
    };
    
    return {
        getElRadius : function() {
            return R;
        },
        getStep : function() {
            return STEP;
        },
        init : function(sideLength) {
            SIDELENGTH = sideLength;
            FIELD.WIDTH = SIDELENGTH;            
            FIELD.HEIGHT = SIDELENGTH;
            FIELD.MAX = SIDELENGTH / STEP - 1;
            FIELD.XMIN = R;
            FIELD.YMIN = R;
            FIELD.XMAX = SIDELENGTH - R;
            FIELD.YMAX = SIDELENGTH - R;
        },
        isValidMove : function (x, y) {
          return (x >= FIELD.XMIN && x <= FIELD.XMAX && y >= FIELD.YMIN && y <= FIELD.YMAX);  
        },
        getField : function() {
            return FIELD;
        }
    };
}());

