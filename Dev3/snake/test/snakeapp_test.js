
 /***************************************************************************
 **                 Constanten                                            **
 ***************************************************************************/


 /***************************************************************************
 **                 Chai                                                   **
 ***************************************************************************/
var assert = chai.assert;

/*****************************************************************************
**     SnakeUtil                                                            **
**         - function: getRandomInt                                         **
*****************************************************************************/
describe("Tests voor snakeutil.js", function () {
    const minValue = 0;
    const maxValue = 100;

    describe("Function getRandomInt", function() {
        //in deze test controleren we of the functie getRandomInt de waarde van type
        //Number terugkeerd
        it("When Function called return a value of type number", function () {
          assert.isNumber(getRandomInt(minValue, maxValue), "Returned value is not a number");
        });
        //in deze test controleren we of the functie getRandomInt een waarde
        //terugkeerd tussen de grenzen minValue en maxValue
        it("Returned value between boundaries", function () {
            var returnedValue = getRandomInt(minValue, maxValue);
            assert.isAbove(returnedValue, minValue, 'minValue = 0');
            assert.isBelow(returnedValue, maxValue, 'maxValue = 100');
        });
    });
});

/****************************************************************************
**     Element                                                             **
**         - constructor: Element                                          **
           - prototype function: equalPos                                                                  
**         - prototype function: getIndexNumber                            **
**         - prototpe function: collidesWithOneOf                          **
****************************************************************************/


describe("Tests voor element.js", function () {
    const elemA = new Element(10, 40, 50, "Blue");
    const elemB = new Element(10, 80, 60, "Red");
    const elemC = new Element(10, 100, 200, "Green");
    const elems = [];
    elems.push(elemA);
    elems.push(elemB);
    elems.push(elemC);

    describe("Element construction", function() {
        //deze test controleert of het gecreerde Element de verwachte properties en waarden heeft
        it("When Element created check properties", function () {
          assert.strictEqual(10, elemA.radius, "radius property not correct");
          assert.strictEqual(40, elemA.x, "x property not correct");
          assert.strictEqual(50, elemA.y, "y property not correct");
          assert.strictEqual("Blue", elemA.color, "color property not correct");
        });
    });
    
        describe("Functie equalPos", function() {
        const elemBase = new Element(10, 100, 80, "Blue");
        const elemToCheck1 = new Element(10, 100, 80, "Blue");
        //hier controleren we of de methode true teruggeeft indien de posities gelijk zijn        
        it("When equal pos return true", function () {
          assert.isTrue(elemToCheck1.equalPos(elemBase), "A value of true should be returned");
        });
        //hier controleren we of de methode true teruggeeft indien de posities niet gelijk zijn 
        const elemToCheck2 = new Element(10, 30, 50, "Blue");
        it("When not equal return false", function () {
          assert.isFalse(elemToCheck2.equalPos(elemBase), "A value of false should be returned");
        });
    });

    describe("Functie getIndexNumber", function() {
        const elemToCheck1 = new Element(10, 40, 50, "Blue");
        //hier controleren we of de methode getIndexNumber van het nieuw gecreeerde Element, een index nummer
        //terugkeerd als het een collision heeft met de eerder gecreerde array: elems
        it("When in index return indexnumber", function () {
          assert.isAbove(10, elemToCheck1.getIndexNumber(elems), "An indexnumber should be returned");
        });
        //hier controleren we of de methode getIndexNumber van het nieuwe gecreeerde Element, -1 terugkeerd
        //als het geen collision heeft met de eerder gecreerde array: elems
        const elemToCheck2 = new Element(10, 30, 50, "Blue");
        it("When not in index return -1", function () {
          assert.isAbove(10, elemToCheck2.getIndexNumber(elems), "A value of -1 should be returned");
        });
    });

    describe("Functie collidesWithOneOf", function() {

        const elemToCheck1 = new Element(10, 40, 50, "Blue");

        it("When collides return true", function () {
          assert.isTrue(elemToCheck1.collidesWithOneOf(elems), "A value of true should be returned");
        });

        const elemToCheck2 = new Element(10, 30, 50, "Blue");
        it("When collides return false", function () {
          assert.isFalse(elemToCheck2.collidesWithOneOf(elems), "A value of false should be returned");
        });
    });
});


/*****************************************************************************
**     Food                                                                 **
**         - function: createFood                                           **
*****************************************************************************/
describe("Tests voor food.js", function () {
    const xPos = 50;
    const yPos = 50;

    describe("Function createFood", function() {
        //deze test controleert of de fucntie createFood het verwachte nieuwe
        //Element terugkeerd met de juiste properties en waarden
        it("When food object created check properties", function () {
            var food = createFood(xPos, yPos);

            assert.strictEqual(food.radius, properties.getRadius(), "radius of food not correct");
            assert.strictEqual(food.x, xPos, "X pos of food object not correct");
            assert.strictEqual(food.y, yPos, "Y pos of food object not correct");
            assert.strictEqual(food.color, properties.getFood().COLOR, "color of food object not correct");
        });
    });
});

/*****************************************************************************
**     Segment                                                              **
**         - function: newX                                                 **
**         - function: newY                                                 **
**         - function: createSegment                                        **
**         - function: createHead                                           **
*****************************************************************************/
describe("Tests voor segment.js", function () {
    const xPos = 70;
    const yPos = 80;

    describe("Functie newX", function() {
        //we controleren hier of the functie newX een nieuwe verwachte positie x creert op basis van
        //de MOVE
        it("When new horizontal direction, check if move is as expected", function () {
            assert.strictEqual(0, newX(20, properties.getMove().LEFT), "the step left is of incorrect size");
            assert.strictEqual(40, newX(20, properties.getMove().RIGHT), "the step right is of incorrect size");
        });
    });

    describe("Functie newY", function() {
        //we controleren hier of the functie newY een nieuwe verwachte positie y creert op basis van
        //de MOVE
        it("When new vertical direction, check if move is as expected", function () {
            assert.strictEqual(0, newY(20, properties.getMove().UP), "the step up is of incorrect size");
            assert.strictEqual(40, newY(20, properties.getMove().DOWN), "the step down is of incorrect size");
        });
    });

    describe("Function createSegment", function() {
        //deze test controleert of de functie createSegment het juiste Object met
        //de verwachte properties en waarden creeert
        it("When segment object created check properties", function () {
            var segment = createSegment(xPos, yPos);

            assert.strictEqual(segment.radius, properties.getRadius(), "radius of segment not correct");
            assert.strictEqual(segment.x, xPos, "X pos of segment object not correct");
            assert.strictEqual(segment.y, yPos, "Y pos of segment object not correct");
            assert.strictEqual(segment.color, properties.getSnake().COLORS.ELEMENT, "color of segment object not correct");
        });
    });

    describe("Function createHead", function() {
        //deze test controleert of de functie createHead het juiste Object met
        //de verwachte properties en waarden creeert
        it("When head object created check properties", function () {
            var head = createHead(xPos, yPos);

            assert.strictEqual(head.radius, properties.getRadius(), "radius of head not correct");
            assert.strictEqual(head.x, xPos, "X pos of head object not correct");
            assert.strictEqual(head.y, yPos, "Y pos of head object not correct");
            assert.strictEqual(head.color, properties.getSnake().COLORS.HEAD, "color of head object not correct");
        });
    });
});

/*****************************************************************************
**     Draw                                                                 **
**          - function:                                                     **
*****************************************************************************/

/*****************************************************************************
**     CanvasUtil                                                          **
**          - function: moveSegment                                         **
**          - function: isValidMove                                         **
**          - function: createStartSnake                                    **
**          - function: createStartSnake_Alt                                **
**          - function: createFoods                                         **
**          - function: setupCanvas                                         **
**          - function: resetCanvas                                         **
*****************************************************************************/
describe("Tests voor canvasutil.js", function () {

    describe("Functie moveSegment", function() {
        const xPos = 40;
        const yPos = 60;
        var segmentLeft = createSegment(xPos, yPos);
        var segmentRight = createSegment(xPos, yPos);
        var segmentUp = createSegment(xPos, yPos);
        var segmentDown = createSegment(xPos, yPos);

        it("Correct move for LEFT", function () {
            moveSegment(segmentLeft, properties.getMove().LEFT);
            assert.strictEqual(segmentLeft.x, xPos - properties.getMove().STEP, "Move to left not successful");
        });

        it("Correct move for RIGHT", function () {
            moveSegment(segmentRight, properties.getMove().RIGHT);
            assert.strictEqual(segmentRight.x, xPos + properties.getMove().STEP, "Move to right not successful");
        });

        it("Correct move for UP", function () {
            moveSegment(segmentUp, properties.getMove().UP);
            assert.strictEqual(segmentUp.y, yPos - properties.getMove().STEP, "Move to up not successful");
        });

        it("Correct move for DOWN", function () {
            moveSegment(segmentDown, properties.getMove().DOWN);
            assert.strictEqual(segmentDown.y, yPos + properties.getMove().STEP, "Move to down not successful");
        });
    });

    describe("Functie isValidMove", function() {
        // Voor deze tests initialiseren we het canvas met kant lengte 360
        properties.setField(360);
        
        //in deze test controleren we of de functie isValidMove een horizontale beweging dat de snake buiten het canvas
        //plaatst ongeldig is en binnen het canvas geldig.
        it("False when x > 350 of x <10", function () {
            assert.isTrue(isValidMove(350,30), 'x = 350, y = 30');
            assert.isTrue(isValidMove(10,30), 'x = 11, y = 30');
            assert.isFalse(isValidMove(351,30), 'x = 351, y = 30');
            assert.isFalse(isValidMove(9,30), 'x = 9, y = 30');
        });
        //in deze test controleren we of de functie isValidMove een verticale beweging dat de snake buiten het canvas
        //plaatst ongeldig is en binnen het canvas geldig.
        it("False when y > 350 of y <10", function () {
            assert.isTrue(isValidMove(30,350), 'x = 350, y = 30');
            assert.isTrue(isValidMove(30,10), 'x = 11, y = 30');
            assert.isFalse(isValidMove(30,351), 'x = 351, y = 30');
            assert.isFalse(isValidMove(30,9), 'x = 9, y = 30');
        });
    });

    describe("Functie createStartSnake", function() {

        it("When snake object created check properties", function () {
            createStartSnake();
            //heeft snake de property segments na het starten van functie createStartSnake
            assert.property(snake, 'segments', "no segments found");
            //de snake bestaat uit 2 segmenten
            var snakeSegments = snake.segments;
            assert.strictEqual(snakeSegments.length, 2, "Snake has wrong number of segments");
        });
    });

    describe("Functie createStartSnake_Alt", function() {

        it("When snake object created check properties", function () {
            createStartSnake_Alt();
            //heeft snake de property segments na het starten van functie createStartSnake
            assert.property(snake, 'segments', "no segments found");
            //de snake bestaat uit 2 segmenten
            var headColor = snake.segments[1].color;
            assert.strictEqual(headColor, properties.getSnake().COLORS.HEAD, "Snake head has wrong color");
        });
    });
});

 /***************************************************************************
 **                 Snake                                                  **
 ***************************************************************************/
describe("Tests voor snake.js", function () {
   
    describe("Functie newHead", function() {
        const startHead = createHead(80, 80);
        const nextHead = createHead(60, 80);

        it("Check if returned headObject is as expected", function () {
          assert.deepEqual(newHead(startHead, properties.getMove().LEFT), nextHead, "New headObject has unexpected values");
         });
    });
	
    describe("Functie newHead", function() {
		  var headnew = createSegment(180, 180);     // kop overlapt niet met lichaam van de slang
		  var headnew2 = createSegment (200,220);   //kop overlapt met lichaam van de slang
		  var bodysnake = []
		  bodysegment1 = createSegment (180,200);
		  bodysnake.push(bodysegment1);
		  bodysegment2 = createSegment (180,220);
		  bodysnake.push(bodysegment2);
		  bodysegment3 = createSegment (200,220);
		  bodysnake.push(bodysegment3);
		  bodysegment4 = createSegment (200,200);
		  bodysnake.push(bodysegment4);
		
	    it("Controleer of de kop van de slang met het lichaam botst", function () {
          assert.isFalse(headnew.collidesWithOneOf(bodysnake), "A value of false should be returned");
        });
        it("Controleer of de kop van de slang met het lichaam botst", function () {
          assert.isTrue(headnew2.collidesWithOneOf(bodysnake), "A value of true hould be returned");
        });
    });
	
    describe("Functie snake.protype.getHead", function () {
        createStartSnake();

        const startHead = createHead(190, 170);
        it("Check if the created head, returns an object that ties in with the position it has been given", function () {
        assert.deepEqual(startHead, snake.getHead(), "The head of the snake is not as expected" );
        });
    });

    //bij deze test creeren we een nieuwe snake met een positie dicht bij de rand van het canvas om de
    //functie canMove te testen.
    describe("Functie snake.protype.canMove", function () {

        //per test wordt er een nieuwe slang aangemaakt met nieuwe posities dicht bij de grenzen van het canvas
        snake1 = [];
        snake2 = [];
        snake3 = [];
        snake4 = [];

        // definieer head
        var headsegment1 = createSegment(345,190);
        var headsegment2 = createSegment(5,190);
        var headsegment3 = createSegment(190,5);
        var headsegment4 = createSegment(190,355);

        // defineer tail
        var tailsegment1 = createSegment(345,60);
        var tailsegment2 = createSegment(5, 60);
        var tailsegment3 = createSegment(190, 25);
        var tailsegment4 = createSegment(190, 335);

        var segments1 = [];
        var segments2 = [];
        var segments3 = [];
        var segments4 = [];

        segments1.push(tailsegment1);
        segments1.push(headsegment1);             // Kop van de slang is het laatste element.
        segments2.push(tailsegment2);
        segments2.push(headsegment2);             // Kop van de slang is het laatste element.
        segments3.push(tailsegment3);
        segments3.push(headsegment3);             // Kop van de slang is het laatste element.
        segments4.push(tailsegment4);
        segments4.push(headsegment4);             // Kop van de slang is het laatste element.

        snake1 = new Snake(segments1);
        snake2 = new Snake(segments2);
        snake3 = new Snake(segments3);
        snake4 = new Snake(segments4);

        it("Check if de move is valid", function () {
        assert.isFalse(snake1.canMove(properties.getMove().RIGHT), "MOVE.RIGHT at x = 345 is invalid" );
        assert.isFalse(snake2.canMove(properties.getMove().LEFT),  "MOVE.LEFT at x 5 is invalid");
        assert.isFalse(snake3.canMove(properties.getMove().UP),    "MOVE.UP at y = 5 is invalid" );
        assert.isFalse(snake4.canMove(properties.getMove().DOWN),  "MOVE.DOWN at y 355 is invalid");
        });
    });

    describe("Functie snake.protype.doMove", function () {

        snake5 = [];
        foods = [];

        //Definieer kop voor de verplaatsing
        var headsegmentStart = createSegment(190,170);
        headsegmentStart.color = properties.getMove().COLORS.HEAD;  // voeg kleur toe om tevens te vergelijken met deepEqual
        //Defineer tail voor de verplaatsing
        var tailsegmentStart = createSegment(190,150);
        //Definieer het segment van de kop na de verplaatsing
        var headsegmentFinish = createSegment(210,170);
        headsegmentFinish.color = properties.getMove().COLORS.HEAD; // voeg kleur toe om tevens te vergelijken met deepEqual
        //Definieer het segment van de tail na de verplaatsing
        var tailsegmentFinish = createSegment(190,170);
        tailsegmentFinish.color = properties.getMove().COLORS.ELEMENT; // voeg kleur toe om tevens te vergelijken met deepEqual

        var segments = [];//array van de initiele begin segmenten en posities van de slang
        var segmentsFinish = [];// de array van de verwachte segmenten en daarbijbehorende posities na de beweging

        segments.push(tailsegmentStart);
        segments.push(headsegmentStart);

        segmentsFinish.push(tailsegmentFinish);
        segmentsFinish.push(headsegmentFinish);
        snake5 = new Snake(segments);

        //createFoods();
        //in this test we assume there is no food so there will be no collisions.
        snake5.doMove(properties.getMove().RIGHT);

        it("Check if the move is as expected and that the segments have moved to the right locations, with the right colors", function () {
        assert.deepEqual(segmentsFinish, snake5.segments, "The segments of the snake have not moved to the expected position or the colors are different" );
        });
        it("we test the expected length assuming no food", function () {
        assert.strictEqual(snake5.segments.length, 2, "The length of the food is not as expected" );
        });

        //Nu voeren we dezelfde test uit maar in dit geval simuleren we dat de slang een voedselsegment tegenkomt

        snake6 = [];
        foods = [];

        //Definieer kop voor de verplaatsing
        var headsegmentStart2 = createSegment(190,170);
        headsegmentStart2.color = properties.getMove().COLORS.HEAD; // voeg kleur toe om tevens te vergelijken met deepEqual
        //Defineer tail voor de verplaatsing
        var tailsegmentStart2 = createSegment(190,150);
        //Definieer het segment van de kop na de verplaatsing
        var headsegmentFinish2 = createSegment(210,170);
        headsegmentFinish2.color = properties.getMove().COLORS.HEAD; // voeg kleur toe om tevens te vergelijken met deepEqual
        //Definieer het segment van het middelste segment na de verplaatsing
        var midsegmentFinish2 = createSegment(190,170);
        midsegmentFinish2.color = properties.getMove().COLORS.ELEMENT; // voeg kleur toe om tevens te vergelijken met deepEqual
        //Definieer het segment van de tail na de verplaatsing
        var tailsegmentFinish2 = createSegment(190,150);
        tailsegmentFinish2.color = properties.getMove().COLORS.ELEMENT; // voeg kleur toe om tevens te vergelijken met deepEqual

        //creeer het voedselsegment waar de slang naartoe beweegt
        var foodsegment = createSegment(210,170);

        var segments2 = [];// segmenten van de slang in de initiele positie
        var segmentsFinish2 = [];// verwachte segmenten van de slang na de beweging en de collission met voedsel
        segments2.push(tailsegmentStart2);
        segments2.push(headsegmentStart2);

        foods.push(foodsegment);

        segmentsFinish2.push(tailsegmentFinish2);
        segmentsFinish2.push(midsegmentFinish2);
        segmentsFinish2.push(headsegmentFinish2);

        snake6 = new Snake(segments2);

        //hieronder is de rest van doMove() gekopieerd waarbij er getest wordt of de segmenten overeenkomen
        //na de beweging. We simuleren de functie doMove en dat de snake collide met een voedselsegment
        //en verwachten dat de lengte van de snake hierdoor 3 wordt
        //we controleren tevens de verwachte posities en kleuren van alle segmenten
        if (nexthead.collidesWithOneOf(foods)) {
             foods.splice(nexthead.getIndexNumber(foods), 1);
        } else  {
             this.segments.shift();
        }
        snake6.getHead().color = properties.getMove().COLORS.ELEMENT;
        snake6.segments.push(nexthead);

        it("Check if the move is as expected and that the segments have moved to the right locations, with the right colors", function () {
        assert.deepEqual(segmentsFinish2, snake6.segments, "The segments of the snake did not move to the expected position or the colors are different" );
        });
        it("we test the expected length assuming food", function () {
        assert.strictEqual(snake6.segments.length, 3, "The length of the food is not as expected" );
        });
    });
});
