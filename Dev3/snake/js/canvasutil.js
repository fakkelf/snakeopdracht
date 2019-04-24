 /***************************************************************************
 **     Canvas controller                                                   **
 ***************************************************************************/
/**
  @function convascontrol.setupCanvas -> void
  @desc Maakt een slang en een voedselementen aan, de voedelselementen
        worden op random posities op het canvas geplaatst.
*/
/**
  @function canvascontrol.resetCanvas -> void
  @desc Maakt het canvas schoon.
*/
var canvascontrol = (function() {
    const MOVE = {
        LEFT: "left",                                   // beweeg naar links
        RIGHT: "right",                                 // beweeg naar rechts
        UP: "up",                                       // beweeg naar boven
        DOWN: "down"                                    // beweeg naar beneden
    };
    const NUMFOODS = 5;                             // Aantal voedsel elementen
    var foods;                                     // voedsel voor de slang
    var hasFood;                                    // indicator of er nog voedsel is.
    var snake;
      
    var init = function() {
        foods = []; 
        snake = {};
        canvas.init(Math.round($("#mySnakeCanvas").width()));
    }
    
    var createStartSnake = function() {
        // Defineer head
        var headsegment = createHead(canvas.getElRadius() + canvas.getField().WIDTH/2, canvas.getField().WIDTH/2 - canvas.getElRadius());
        // Defineer tail
        var tailsegment = createSegment(canvas.getElRadius() + canvas.getField().WIDTH/2, canvas.getElRadius() + canvas.getField().WIDTH/2);
        var segments = [];
        segments.push(tailsegment);
        segments.push(headsegment);             // Kop van de slang is het laatste element.
        snake = new Snake(segments);
    };
        
    var createFoodElements = function() {
        var  i,
        foodEl,
        i = 0;
        //we gebruiken een while omdat we, om een arraymethode te gebruiken, eerst een nieuw array zouden moeten creëren (met NUMFOODS elementen)
        while (i < NUMFOODS ) {
            foodEl = food.createFood(canvas.getField().XMIN + getRandomInt(0, canvas.getField().MAX) * canvas.getStep(), 
                              canvas.getField().YMIN + getRandomInt(0, canvas.getField().MAX) * canvas.getStep());
            if (!foodEl.collidesWithOneOf(snake.segments) && !foodEl.collidesWithOneOf(foods) ) {
                foods.push(foodEl);
                i++;
            }
        }
        hasFood = true;
    };
    
    var eatFood = function() {
        // Verwijder het voedsel element
        foods.splice(snake.getHead().getIndexNumber(foods), 1);
        // Controleer of er nog voedsel over is
        if (foods.length === 0) {
            hasFood = false;
        }
    }
        
    return {
        setupCanvas : function() {
            init();
            createStartSnake();
            createFoodElements();
            // draw();
            jQuery(document).trigger(new jQuery.Event("drawCanvas"));
        },
        loadGame : function(segments, foodelements) {
            snake.segments = segments;
            foods = foodelements;
            jQuery(document).trigger(new jQuery.Event("drawCanvas"));
        },
        hasFood : function() {
            return hasFood;
        },
        getMove : function() {
            return MOVE;
        },
        newXPos : function(x, direction) {
            if (direction === MOVE.LEFT) {
                return x - canvas.getStep();
            }
            else if (direction === MOVE.RIGHT) {
                return x + canvas.getStep();
            }
            return x;            
        },
        newYPos : function(y, direction) {
            if (direction === MOVE.DOWN) {
                return y + canvas.getStep();
            } else if (direction === MOVE.UP) {
                return y - canvas.getStep();
            }
            return y;           
        },
        moveSnake : function(direction) {
            if (snake.canMove(direction)) {
                try {
                    snake.doMove(direction);
                } catch {
                    return {result: false, code: 10};                 
                }                
                if (snake.getHead().collidesWithOneOf(foods)) {
                    // Eat food
                    eatFood();
                    // Controleer of er nog voedsel is, als al het voedsel op is heeft de speler gewonnen
                    // redraw het canvas en toon de melding dat de speler gewonnen heeft
                    if (!hasFood) {
                        jQuery(document).trigger(new jQuery.Event("drawCanvas"));
                        return {result: false, code: 0}; 
                    }                    
                } else {
                    // Shrink snake
                    snake.segments.shift();
                }      
                return {result: true, code: -1};
            }
          
            return {result: false, code: 20}; 
        },
        getFood : function() {
            return foods;
        },
        getSnake : function() {
            return snake;
        },     
        resetCanvas : function() {
            $("#mySnakeCanvas").clearCanvas();
        }
    };
}());
 
 /***************************************************************************
 **     functies voor het opbouwen elementen voor het canvas               **
 ***************************************************************************/

/**
  @function createStartSnake() -> Snake
  @desc Slang creëren, bestaande uit  twee segmenten,
        in het midden van het veld
  @return: slang volgens specificaties
*/


 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/
 
/**
  @function getRandomInt(min: number, max: number) -> number
  @desc Creeren van random geheel getal in het interval [min, max] 
  @param {number} min - een geheel getal als onderste grenswaarde
  @param {number} max - een geheel getal als bovenste grenswaarde (max > min)
  @return {number} een random geheel getal x waarvoor geldt: min <= x <= max
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


