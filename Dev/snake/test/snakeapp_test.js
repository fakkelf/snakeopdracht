
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
    
    describe("Functie getIndexNumber", function() {       
        const elemToCheck1 = new Element(10, 40, 50, "Blue")
        //hier controleren we of de methode getIndexNumber van het nieuw gecreeerde Element, een index nummer
        //terugkeerd als het een collision heeft met de eerder gecreerde array: elems
        it("When in index return indexnumber", function () {
          assert.isAbove(10, elemToCheck1.getIndexNumber(elems), "An indexnumber should be returned");
        });
        //hier controleren we of de methode getIndexNumber van het nieuwe gecreeerde Element, -1 terugkeerd
        //als het geen collision heeft met de eerder gecreerde array: elems
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
        //deze test controleert of de fucntie createFood het verwachte nieuwe 
        //Element terugkeerd met de juiste properties en waarden
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
        //we controleren hier of the functie newX een nieuwe verwachte positie x creert op basis van
        //de MOVE
        it("When new horizontal direction, check if move is as expected", function () {
            assert.strictEqual(0, newX(20, MOVE.LEFT), "the step left is of incorrect size");
            assert.strictEqual(40, newX(20, MOVE.RIGHT), "the step right is of incorrect size");
        });
    });
    
    describe("Functie newY", function() {
        //we controleren hier of the functie newY een nieuwe verwachte positie y creert op basis van
        //de MOVE 
        it("When new vertical direction, check if move is as expected", function () {
            assert.strictEqual(0, newY(20, MOVE.UP), "the step up is of incorrect size");
            assert.strictEqual(40, newY(20, MOVE.DOWN), "the step down is of incorrect size");
        });
    }); 
    
    describe("Function createSegment", function() {
        //deze test controleert of de functie createSegment het juiste Object met 
        //de verwachte properties en waarden creeert
        it("When segment object created check properties", function () {
            var segment = createSegment(xPos, yPos);
            
            assert.strictEqual(segment.radius, R, "radius of segment not correct");
            assert.strictEqual(segment.x, xPos, "X pos of segment object not correct");
            assert.strictEqual(segment.y, yPos, "Y pos of segment object not correct");
            assert.strictEqual(segment.color, SNAKE.COLORS.ELEMENT, "color of segment object not correct");
        }); 
    });  

    describe("Function createHead", function() {
        //deze test controleert of de functie createHead het juiste Object met 
        //de verwachte properties en waarden creeert
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
            moveSegment(segmentLeft, MOVE.LEFT);
            assert.strictEqual(segmentLeft.x, xPos - MOVE.STEP, "Move to left not successful");
        });
        
        it("Correct move for RIGHT", function () {
            moveSegment(segmentRight, MOVE.RIGHT);
            assert.strictEqual(segmentRight.x, xPos + MOVE.STEP, "Move to right not successful");
        });
        
        it("Correct move for UP", function () {
            moveSegment(segmentUp, MOVE.UP);
            assert.strictEqual(segmentUp.y, yPos - MOVE.STEP, "Move to up not successful");
        });
        
        it("Correct move for DOWN", function () {
            moveSegment(segmentDown, MOVE.DOWN);
            assert.strictEqual(segmentDown.y, yPos + MOVE.STEP, "Move to down not successful");
        });
    });

    describe("Functie isValidMove", function() {
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
       
        it("Check if returned headObject is as expected", function () {
          assert.deepEqual(newHead(startHead, MOVE.LEFT), nextHead, "New headObject has unexpected values");
         });
    });
    
    describe("Functie snake.protype.getHead", function () {
        createStartSnake()
       
        const startHead = createHead(190, 170);
        it("Check if the created head, returns an object that ties in with the position it has been given", function () {
        assert.deepEqual(startHead, snake.getHead(), "The head of the snake is not as expected" )
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

        var headsegment1 = createSegment(345,190);    
        var headsegment2 = createSegment(5,190);
        var headsegment3 = createSegment(190,5);
        var headsegment4 = createSegment(190,355);
      
        // Defineer tail
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
        segments2.push(headsegment2);
        segments3.push(tailsegment3);
        segments3.push(headsegment3);             // Kop van de slang is het laatste element.
        segments4.push(tailsegment4);
        segments4.push(headsegment4);

        snake1 = new Snake(segments1);
        snake2 = new Snake(segments2);
        snake3 = new Snake(segments3);
        snake4 = new Snake(segments4);

        it("Check if de move is valid", function () {
        assert.isFalse(snake1.canMove(MOVE.RIGHT), "MOVE.RIGHT at x = 345 is invalid" )
        assert.isFalse(snake2.canMove(MOVE.LEFT),  "MOVE.LEFT at x 5 is invalid")
        assert.isFalse(snake3.canMove(MOVE.UP),    "MOVE.UP at y = 5 is invalid" )
        assert.isFalse(snake4.canMove(MOVE.DOWN),  "MOVE.DOWN at y 355 is invalid")
        });
    })
    

    describe("Functie snake.protype.doMove", function () {
        
        snake5 = [];
        foods = [];
        
        //Definieer kop voor de verplaatsing
        var headsegmentStart = createSegment(190,170);
        headsegmentStart.color = SNAKE.COLORS.HEAD;  
        // Defineer tail voor de verplaatsing
        var tailsegmentStart = createSegment(190,150);
        //Definieer het segment van de kop na de verplaatsing 
        var headsegmentFinish = createSegment(210,170); 
        headsegmentFinish.color = SNAKE.COLORS.HEAD;
        //Definieer het segment van de tail na de verplaatsing 
        var tailsegmentFinish = createSegment(190,170);
        tailsegmentFinish.color = SNAKE.COLORS.ELEMENT;
        
        var segments = []
        var segmentsFinish = []
        segments.push(tailsegmentStart);
        segments.push(headsegmentStart);

        segmentsFinish.push(tailsegmentFinish);
        segmentsFinish.push(headsegmentFinish);
        
        snake5 = new Snake(segments);
     
        //createFoods();
        //in this test we assume there is no food so there will be no collisions.
        snake5.doMove(MOVE.RIGHT);

        it("Check if the move is as expected and that the segments have moved to the right locations, with the right colors", function () {
        assert.deepEqual(segmentsFinish, snake5.segments, "The segments of the snake have not moved to the expected position or the colors are different" )
        }); 
        it("we test the expected length assuming no food", function () {
        assert.strictEqual(snake5.segments.length, 2, "The length of the food is not as expected" )
        }); 
        
        snake6 = [];
        foods = [];
            
        //Definieer kop voor de verplaatsing
        var headsegmentStart = createSegment(190,170);
        headsegmentStart.color = SNAKE.COLORS.HEAD;  
        // Defineer tail voor de verplaatsing
        var tailsegmentStart = createSegment(190,150);
        //Definieer het segment van de kop na de verplaatsing 
        var headsegmentFinish = createSegment(210,170); 
        headsegmentFinish.color = SNAKE.COLORS.HEAD;
        var midsegmentFinish = createSegment(190,170)
        midsegmentFinish.color = SNAKE.COLORS.ELEMENT;
        //Definieer het segment van de tail na de verplaatsing 
        var tailsegmentFinish = createSegment(190,150);
        tailsegmentFinish.color = SNAKE.COLORS.ELEMENT;
        var foodsegment = createSegment()    
        var segments2 = []
        var segmentsFinish2 = []
        segments2.push(tailsegmentStart);
        segments2.push(headsegmentStart);
        foods.push(foodsegment);
        segmentsFinish2.push(tailsegmentFinish);
        segmentsFinish2.push(midsegmentFinish);
        segmentsFinish2.push(headsegmentFinish);
            
        snake6 = new Snake(segments);
        snake6.canMove(MOVE.RIGHT);

        console.log (snake6.segments[0].x )
        console.log (snake6.segments[0].y )
        console.log (segmentsFinish2[0].x)
        console.log (segmentsFinish2[0].y)
        it("Check if the move is as expected and that the segments have moved to the right locations, with the right colors", function () {
        assert.deepEqual(segmentsFinish2, snake6.segments, "The segments of the snake have not moved to the expected position or the colors are different" )
        }); 
        it("we test the expected length assuming food", function () {
        assert.strictEqual(snake6.segments.length, 3, "The length of the food is not as expected" )
        }); 

   // if (nexthead.collidesWithOneOf(foods)) {
     //   foods.splice(nexthead.getIndexNumber(foods), 1);
    //} else {        
     //   this.segments.shift();
   // }
  //      it("Check if segments have shifted", function () {
    //        assert.deepEqual(snake.segments[0], tailsegment, "The head of the snake has not moved to the expected position" )
     //       });  
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
