 /***************************************************************************
 **                 Module properties                                      **
 ***************************************************************************/
/**
    @constant
    @type {number}
    @desc Straal van een element
*/
/**
    @constant
    @type {number}
    @desc Snelheid van de beweging van de snake in ms
*/
/**
    @constant
    @desc Mogelijkheden om te kunnen bewegen over het veld.
    @type MOVE
    @property {number} STEP - Stap grootte (2 * R).
    @property {string} LEFT - Beweeg een stap naar links.
    @property {string} RIGHT - Beweeg een stap naar rechts.
    @property {string} UP - Beweeg een stap naar boven.
    @property {string} DOWN - Beweeg een stap naar onder.
*/
/**
    @constant
    @desc Defineert een snake
    @type SNAKE
    @property {object} COLORS - Kleuren van de snake.
    @property {string} HEAD - Kleur van de kop.
    @property {string} ELEMENT - Kleur van de lichaams segmenten.
    @property {number} SIZE - Start aantal lichaams segmenten.
*/
/**
    @constant
    @desc Defineert een voedsel element
    @type FOOD
    @property {string} COLOR - Kleur van een voedsel element.
    @property {number} SIZE - Maximaal aantal voedsel elementen.
*/
/**
    @constant
    @desc Defieert veld constanten.
    @type FIELD
    @property {number} WIDTH - Breedte van het veld.
    @property {number} HEIGHT - Hoogte van het veld, waarbij HEIGHT = WIDTH.
    @property {number} MAX - Netto breedte van het veld.
    @property {number} XMIN - Minimale x waarde.
    @property {number} YMIN - Minimale y waarde.
    @property {number} XMAX - Maximale x waarde.
    @property {number} YMAX - Maximale y waarde.
*/
var properties = (function() {
    const R             = 10;                           // straal van een element
    const SLEEPTIME    = 500;                           // Pauze in ms
    const MOVE = {
        STEP: 2 * R,                                    // stapgrootte
        LEFT: "left",                                   // beweeg naar links
        RIGHT: "right",                                 // beweeg naar rechts
        UP: "up",                                       // beweeg naar boven
        DOWN: "down"                                    // beweeg naar beneden
    };
    const SNAKE = {
        COLORS: {
            HEAD: "DarkOrange",                         // kleur van de kop van de slang
            ELEMENT: "DarkRed"                          // kleur van een slangsegment
        },
        SIZE: 2                                         // Start grootte van de slang
    };
    const FOOD = {
        COLOR: "Olive",                                 // kleur van voedsel
        NUMBER: 5                                       // Aantal voedsel elementen
    };
    var SIDELENGTH    = 100;                            // Bepaald dimensies van het veld, default waarde 20
    const FIELD = {
        WIDTH: SIDELENGTH,
        HEIGHT: SIDELENGTH,                             // hoogte veld, er moet gelden: WIDTH = HEIGHT
        MAX: SIDELENGTH / MOVE.STEP - 1,                // netto veldbreedte
        XMIN: R,                                        // minimale x waarde
        YMIN: R,                                        // minimale y waarde
        XMAX: SIDELENGTH - R,                           // maximale x waarde
        YMAX: SIDELENGTH - R                            // maximale y waarde
    };
    
    return {
        getRadius : function() {
            return R;
        },
        getSleepTime : function() {
            return SLEEPTIME;
        },
        getMove : function() {
            return MOVE;
        },
        getSnake : function() {
            return SNAKE;
        },
        getFood : function() {
            return FOOD;
        },
        setField : function(sideLength) {
            SIDELENGTH = sideLength;
            FIELD.WIDTH = SIDELENGTH;            
            FIELD.HEIGHT = SIDELENGTH;
            FIELD.MAX = SIDELENGTH / MOVE.STEP - 1;
            FIELD.XMIN = R;
            FIELD.YMIN = R;
            FIELD.XMAX = SIDELENGTH - R;
            FIELD.YMAX = SIDELENGTH - R;
        },   
        getField : function() {
            return FIELD;
        }
    };
}());






