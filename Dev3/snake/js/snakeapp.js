 /***************************************************************************
 **                 Variabelen                                             **
 ***************************************************************************/


$("#logout").click(function(e) { 
    clearInterval(interval); 
    interval = null;
});


var snakeapp = (function() {
    const LEFT =  "left";                                   // beweeg naar links
    const RIGHT = "right";                                  // beweeg naar rechts
    const UP = "up";                                        // beweeg naar boven
    const DOWN = "down";                                    // beweeg naar beneden
    const SLEEPTIME    = 500
    var direction;
    var snakeTimer;
    
    var setScore = function() {               
        if (canvascontrol.hasFood) {
            score.verloren();
        } else {
            score.gewonnen();
        }
        console.log(score.getStand())
    }
    
    var move = function() {
        if (canvascontrol.moveSnake(direction)) {
            jQuery(document).trigger(new jQuery.Event("drawCanvas"));
        } else {
            stopTimer();
            // Bepaal nu of de speler deze ronde gewonnen of verloren heeft
            setScore();
        }
    };
    
    var stopTimer = function() {
        clearInterval(snakeTimer);   // stopt de interval en daarmee de beweging van de slang
        snakeTimer = null;
    }
    
    return {
        init : function() {
            canvascontrol.setupCanvas();
            direction = UP;                             // richting van de slang begint omhoog
                        
            if (!snakeTimer) {                              // Voorkom meerdere malen starten van timer functionaliteit.
                snakeTimer = setInterval (function() {            //start het interval en daarmee de beweging van de slang
                    if (canvascontrol.hasFood()) {
                        move();
                    }
                }, SLEEPTIME);
            }
        },
        setDirection(directionNew) {
            direction = directionNew;
        },
        stop : function() {
            stopTimer();

            canvascontrol.resetCanvas();
        }
    };
}());

/***************************************************************************
 **                 Commando's voor de gebruiker                          **
 ***************************************************************************/
/**
  @function init() -> void
  @desc Haal eventueel bestaand voedsel en een bestaande slang weg, cre\"eer een slang, genereer voedsel, en teken alles
*/
function initX() {
    // snake = [];

    canvascontrol.setupCanvas();
	
    snakeTimer = setInterval (function() {            //start het interval en daarmee de beweging van de slang
//        if (foods.length !==0) {
//            move (direction);
//        }
        if (canvascontrol.hasFood()) {
            move (direction);
        }
    }, properties.getSleepTime());
}

/**
  @function stop() -> void
  @desc Laat slang en voedsel verdwijnen, en teken leeg veld
*/
function stopX() {
    clearInterval(snakeTimer);   // stopt de interval en daarmee de beweging van de slang
    // snake = [];

    canvascontrol.resetCanvas();
}


/**
  @function move(direction) -> void
  @desc Beweeg slang in aangegeven richting
        tenzij slang uit canvas zou verdwijnen
  @param   {string} direction - de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/
function moveX(direction) {
    if (canvascontrol.getSnake().canMove(direction)) {
        // var nextHead = newHead(canvascontrol.getSnake().getHead(), direction);
        //if canvascontrol.collidesWithFood(nextHead)) {
            // 
        //    canvascontrol.getSnake().grow(nextHead));
        //}
        //var grow = nextHead.collidesWithOneOf(canvascontrol.getFood());
        // Verplaats de snake
        // canvascontrol.getSnake().doMove(direction);
        
        
        //canvascontrol.getSnake().doMove(direction, grow);
//        if (foods.length !== 0) {
//        draw();
//		}
        draw();
    } else {
        console.log("snake cannot move " + direction);
		stopTimer()
    }
}

function moveX(direction) {
    if (canvascontrol.moveSnake(direction)) {
        draw();
    } else {
        console.log("snake cannot move " + direction);
		stopTimer()
    }
}

function stopTimerX() {
    clearInterval(snakeTimer);   // stopt de interval en daarmee de beweging van de slang
}



