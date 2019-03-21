
 /***************************************************************************
 **                 Constanten                                            **
 ***************************************************************************/
// ** Definieer basale waarden
const R        = 10,                                // straal van een element
      SIDELENGTH = 360;                             // Kant grootte van het veld


 const MOVE_TEMPLATE = {
    STEP: 2 * R,                                    // stapgrootte
    LEFT: "left",                                   // beweeg naar links
    RIGHT: "right",                                 // beweeg naar rechts
    UP: "up",                                       // beweeg naar boven
    DOWN: "down"                                    // beweeg naar beneden
};

const FIELD_TEMPLATE = {
    WIDTH: SIDELENGTH,
    HEIGHT: SIDELENGTH,                             // hoogte veld, er moet gelden: WIDTH = HEIGHT
    MAX: SIDELENGTH / MOVE_TEMPLATE.STEP - 1,       // netto veldbreedte 
    XMIN: R,                                        // minimale x waarde 
    YMIN: R,                                        // minimale y waarde 
    XMAX: SIDELENGTH - R,                           // maximale x waarde 
    YMAX: SIDELENGTH - R                            // maximale y waarde
};
const SNAKE_TEMPLATE = {
    COLORS: {
        HEAD: "DarkOrange",                         // kleur van de kop van de slang
        ELEMENT: "DarkRed"                          // kleur van een slangsegment
    },
    SIZE: 2                                         // Start grootte van de slang
};

const SNAKE = Object.freeze(SNAKE_TEMPLATE);

const FIELD = Object.freeze(FIELD_TEMPLATE);

// ** Defineer immutabele objecten.
const MOVE = Object.freeze(MOVE_TEMPLATE);

 /***************************************************************************
 **                 Chai                                                   **
 ***************************************************************************/
var assert = chai.assert;

describe("Tests voor snake.js", function () {
    describe("Functie newX, x direction", function() {
    
        it("When new horizontal direction, check if move is as expected", function () {
          assert.strictEqual(0, newX(20,MOVE.LEFT), "the step left is of incorrect size");
          assert.strictEqual(40, newX(20,MOVE.RIGHT), "the step right is of incorrect size");
        });
    });

    describe("Functie newY, y direction", function() {
    
        it("When new vertical direction, check if move is as expected", function () {
          assert.strictEqual(0, newY(20,MOVE.UP), "the step up is of incorrect size");
          assert.strictEqual(40, newY(20,MOVE.DOWN), "the step down is of incorrect size");
        });
    });

    describe("isValidMove", function() {
    
        it("False when x > 350 of x <10", function () {
          assert.isTrue(isValidMove(350,30), 'x = 350, y = 30');
          assert.isFalse(isValidMove(351,30), 'x = 351, y = 30');
          assert.isFalse(isValidMove(9,30), 'x = 9, y = 30');
          assert.isTrue(isValidMove(10,30), 'x = 11, y = 30');
        });
        it("False when y > 350 of y <10", function () {
            assert.isTrue(isValidMove(30,350), 'x = 350, y = 30');
            assert.isFalse(isValidMove(30,351), 'x = 351, y = 30');
            assert.isFalse(isValidMove(30,9), 'x = 9, y = 30');
            assert.isTrue(isValidMove(30,10), 'x = 11, y = 30');
          });
    });

    // hier wil ik kijken of ik het nieuwe Head object kan vergelijken met wat er verwacht wordt.
    // als de oude Head het Element (40,40,SNAKE.COLORS.HEAD) is, dan verwacht ik na een MOVE.LEFT
    // een nieuwe head te zien met (20,40,SNAKE.COLORS.HEAD)
    // 
    // describe("Functie newHead", function() {       
        
    //     it("Check if returned headObject is as expected", function () {
    //       assert.isTrue(newHead(Element(20,20, SNAKE.COLORS.HEAD), MOVE.LEFT), "A value of true should be returned");
    //     });
        
    //     const elemToCheck2 = new Element(10, 30, 50, "Blue")
    //     it("When it doesn't collide return false", function () {
    //       assert.isFalse(elemToCheck2.getIndexNumber(elems), "A value, of false should be returned");
    //     });
    // });

    // functie getHead spreekt volgens mij voor zich, dit hoeft verder niet getest te worden lijkt mij?
    // functie canmove maakte gebruik van de newX en de newY functies die we al getest hebben.
    // en tevens van de isValidMove die al getest is en  de newHead functie die hierboven staat waar ik vastloop
    // hoe deze effectief te testen. Kan dit alleen door hulpfuncties toe te voegen in de testcode?
    // de functie doMove bevat ook andere functies zoals collidesWithOneOf die we apart testen
    // er zou hier getest kunnen worden of een segment die collides ook daadwerkelijk het voedsel verwijdert
    // en tevens de array vergroot met 1 waarbij de oude HEAD SNAKE.COLORS.ELEMENT kleur moet krijgen.
    // en de nieuwe SNAKE.COLORS.HEAD. 
    // Ik denk dat we hier een keus moeten maken of dit te doen is
    // Ik vroeg me ook even af hoe je het gehele project opnieuw dmv JSDOC in de OUT directory zet.
    // Is dat alleen te doen door elk bestand specifiek via het commando: jsdoc bestandsnaam?


});  