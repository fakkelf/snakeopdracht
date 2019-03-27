
 /***************************************************************************
 **                 Basale waarden                                         **
 ***************************************************************************/
/** 
    @constant
    @type {number}
    @desc Straal van een element
*/
const R             = 10;                              // straal van een element
/** 
    @constant
    @type {number}
    @desc Kant grootte van het veld
*/
const SIDELENGTH    = 360;                             // Kant grootte van het veld

// ** Definieer Object templates
 /***************************************************************************
 **                 Object templates                                       **
 ***************************************************************************/
const MOVE_TEMPLATE = {
    STEP: 2 * R,                                    // stapgrootte
    LEFT: "left",                                   // beweeg naar links
    RIGHT: "right",                                 // beweeg naar rechts
    UP: "up",                                       // beweeg naar boven
    DOWN: "down"                                    // beweeg naar beneden
};

const SNAKE_TEMPLATE = {
    COLORS: {
        HEAD: "DarkOrange",                         // kleur van de kop van de slang
        ELEMENT: "DarkRed"                          // kleur van een slangsegment
    },
    SIZE: 2                                         // Start grootte van de slang
};

const FOOD_TEMPLATE = {
    COLOR: "Olive",                                 // kleur van voedsel
    NUMBER: 15                                      // Aantal voedsel elementen
}

const FIELD_TEMPLATE = {
    WIDTH: SIDELENGTH,
    HEIGHT: SIDELENGTH,                             // hoogte veld, er moet gelden: WIDTH = HEIGHT
    MAX: SIDELENGTH / MOVE_TEMPLATE.STEP - 1,       // netto veldbreedte 
    XMIN: R,                                        // minimale x waarde 
    YMIN: R,                                        // minimale y waarde 
    XMAX: SIDELENGTH - R,                           // maximale x waarde 
    YMAX: SIDELENGTH - R                            // maximale y waarde
};

// ** Defineer immutabele objecten.

 
 /** 
    @constant
    @desc Mogelijkheden om te kunnen bewegen over het veld.
    @type MOVE
    @property {number} STEP - Stap grootte (2 * R).
    @property {string} LEFT - Beweeg een stap naar links.
    @property {string} RIGHT - Beweeg een stap naar rechts.
    @property {string} UP   - Beweeg een stap naar boven.
    @property {string} DOWN - Beweeg een stap naar onder.
*/
const MOVE = Object.freeze(MOVE_TEMPLATE);
 /** 
    @constant
    @type SNAKE

*/
const SNAKE = Object.freeze(SNAKE_TEMPLATE);
 /** 
    @constant
    @type FOOD
*/
const FOOD = Object.freeze(FOOD_TEMPLATE);
 /** 
    @constant
    @type FIELD
    @property {string} COLOR    - Kleur van een voedsel element.
    @property {number} NUMBER   - Aantal voedsel elementen op het veld.
*/
const FIELD = Object.freeze(FIELD_TEMPLATE);


