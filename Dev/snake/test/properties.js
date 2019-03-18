// ** Definieer basale waarden
const R        = 10,                                // straal van een element
      SIDELENGTH = 360;                             // Kant grootte van het veld

// ** Definieer Object templates
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
const MOVE = Object.freeze(MOVE_TEMPLATE);
const SNAKE = Object.freeze(SNAKE_TEMPLATE);
const FOOD = Object.freeze(FOOD_TEMPLATE);
const FIELD = Object.freeze(FIELD_TEMPLATE);


