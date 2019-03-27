
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
    
        it("When Function called return a value of type number", function () {
          assert.isNumber(getRandomInt(minValue, maxValue), "Returned value is not a number");
        });
        
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
    
        it("When Element created check properties", function () {
          assert.strictEqual(10, elemA.radius, "radius property not correct");
          assert.strictEqual(40, elemA.x, "x property not correct");
          assert.strictEqual(50, elemA.y, "y property not correct");
          assert.strictEqual("Blue", elemA.color, "color property not correct");
        });
    });    
    
    describe("Functie getIndexNumber", function() {       
        const elemToCheck1 = new Element(10, 40, 50, "Blue")
        
        it("When in index return indexnumber", function () {
          assert.isAbove(10, elemToCheck1.getIndexNumber(elems), "An indexnumber should be returned");
        });
        
        const elemToCheck2 = new Element(10, 30, 50, "Blue")
        it("When not in index return -1", function () {
          assert.isAbove(10, elemToCheck2.getIndexNumber(elems), "A value of -1 should be returned");
        });
    });
    
    describe("Functie collidesWithOneOf", function() {       
        const elemToCheck1 = new Element(10, 40, 50, "Blue")
        
        it("When collides return true", function () {
          assert.isTrue(elemToCheck1.collidesWithOneOf(elems), "A value of true should be returned");
        });
        
        const elemToCheck2 = new Element(10, 30, 50, "Blue")
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
    
        it("When food object created check properties", function () {
            var food = createFood(xPos, yPos);
            
            assert.strictEqual(food.radius, R, "radius of food not correct");
            assert.strictEqual(food.x, xPos, "X pos of food object not correct");
            assert.strictEqual(food.y, yPos, "Y pos of food object not correct");
            assert.strictEqual(food.color, FOOD.COLOR, "color of food object not correct");
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

        it("When new horizontal direction, check if move is as expected", function () {
            assert.strictEqual(0, newX(20, MOVE.LEFT), "the step left is of incorrect size");
            assert.strictEqual(40, newX(20, MOVE.RIGHT), "the step right is of incorrect size");
        });
    });
    
    describe("Functie newY", function() {

        it("When new vertical direction, check if move is as expected", function () {
            assert.strictEqual(0, newY(20, MOVE.UP), "the step up is of incorrect size");
            assert.strictEqual(40, newY(20, MOVE.DOWN), "the step down is of incorrect size");
        });
    }); 
    
    describe("Function createSegment", function() {
    
        it("When segment object created check properties", function () {
            var segment = createSegment(xPos, yPos);
            
            assert.strictEqual(segment.radius, R, "radius of segment not correct");
            assert.strictEqual(segment.x, xPos, "X pos of segment object not correct");
            assert.strictEqual(segment.y, yPos, "Y pos of segment object not correct");
            assert.strictEqual(segment.color, SNAKE.COLORS.ELEMENT, "color of segment object not correct");
        }); 
    });  

    describe("Function createHead", function() {
    
        it("When head object created check properties", function () {
            var head = createHead(xPos, yPos);
            
            assert.strictEqual(head.radius, R, "radius of head not correct");
            assert.strictEqual(head.x, xPos, "X pos of head object not correct");
            assert.strictEqual(head.y, yPos, "Y pos of head object not correct");
            assert.strictEqual(head.color, SNAKE.COLORS.HEAD, "color of head object not correct");
        }); 
    });    
});
    
/*****************************************************************************
**     Draw                                                                 **  
**         - function:                                                      **
*****************************************************************************/

/*****************************************************************************
**      CanvasUtil                                                          **
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
            moveSegment(segmentLeft, MOVE.LEFT);
            assert.strictEqual(segmentLeft.x, xPos - MOVE.STEP, "Move to left not successfull");
        });
        
        it("Correct move for RIGHT", function () {
            moveSegment(segmentRight, MOVE.RIGHT);
            assert.strictEqual(segmentRight.x, xPos + MOVE.STEP, "Move to right not successfull");
        });
        
        it("Correct move for UP", function () {
            moveSegment(segmentUp, MOVE.UP);
            assert.strictEqual(segmentUp.y, yPos - MOVE.STEP, "Move to up not successfull");
        });
        
        it("Correct move for DOWN", function () {
            moveSegment(segmentDown, MOVE.DOWN);
            assert.strictEqual(segmentDown.y, yPos + MOVE.STEP, "Move to down not successfull");
        });
    });

    describe("Functie isValidMove", function() {

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
    
    describe("Functie createStartSnake", function() {
        
        it("When snake object created check properties", function () {
            createStartSnake();
            
            assert.property(snake, 'segments', "no segments found");
            
            var snakeSegments = snake.segments;
            assert.strictEqual(snakeSegments.length, 2, "Snake has wrong number of segments");                
        }); 
    });
    
    describe("Functie createStartSnake_Alt", function() {
        
        it("When snake object created check properties", function () {
            createStartSnake_Alt();
            
            assert.property(snake, 'segments', "no segments found");
            
            var headColor = snake.segments[1].color;
            assert.strictEqual(headColor, SNAKE.COLORS.HEAD, "Snake head has wrong color");                
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
        
        assertRunOrder(1)

        it("Check if returned headObject is as expected", function () {
          assert.deepEqual(newHead(startHead, MOVE.LEFT), nextHead, "New headObject has unexpected values");
         });
        
     });
    
    describe("Functie snake.protype.getHead", function () {
        
      assertRunOrder(2)

        createStartSnake()
        const startHead = createHead(190, 170);
        it("Check if the created head, returns an object that ties in with the position it has been given", function () {
        assert.deepEqual(startHead, snake.getHead(), "The head of the snake is not as expected" )
        });
     });
    
    
    describe("Functie snake.protype.canMove", function () {
        
        assertRunOrder(3)

        var headsegment = createSegment(345,80);    
        headsegment.color = SNAKE.COLORS.HEAD;  
        // Defineer tail
        var tailsegment = createSegment(345,60);    
        var segments = [];
        segments.push(tailsegment);
        segments.push(headsegment);             // Kop van de slang is het laatste element.
        snake = new Snake(segments);
        console.log(snake.segments[0].x + "x van snake segment 0")
        it("Check if the move can is valid", function () {
        assert.isFalse(snake.canMove(MOVE.RIGHT), "MOVE.RIGHT at x = 345 is invalid" )
        });

    })

    //1 verplaatsen binnen speelveld
    //

    // de functie doMove bevat ook andere functies zoals collidesWithOneOf die we apart testen
    // er zou hier getest kunnen worden of een segment die collides ook daadwerkelijk het voedsel verwijdert
    // en tevens de array vergroot met 1 waarbij de oude HEAD SNAKE.COLORS.ELEMENT kleur moet krijgen.
    // en de nieuwe SNAKE.COLORS.HEAD. 
    // Ik denk dat we hier een keus moeten maken of dit te doen is
    // Ik vroeg me ook even af hoe je het gehele project opnieuw dmv JSDOC in de OUT directory zet.
    // Is dat alleen te doen door elk bestand specifiek via het commando: jsdoc bestandsnaam?


});
