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
    var direction;                                          // bevat de richting waarin de slang beweegt.
    var snakeTimer;
    var moveresult;                                         // Resultaat van een beweging. {result: boolean, code: number}
   
        
    var stopTimer = function() {
        clearInterval(snakeTimer);   // stopt de interval en daarmee de beweging van de slang
        snakeTimer = null;
    }
    
    var startTimer = function() {
        if (!snakeTimer) {                              // Voorkom meerdere malen starten van timer functionaliteit.
            snakeTimer = setInterval (function() {            //start het interval en daarmee de beweging van de slang
                moveresult = canvascontrol.moveSnake(direction);
                if (moveresult.result) {
                    jQuery(document).trigger(new jQuery.Event("drawCanvas"));
                } else {
                    stopTimer();
                    // Bepaal nu of de speler deze ronde gewonnen of verloren heeft
                    score.updateScore(moveresult.code);
                    score.printResult(moveresult.code);
                }
            }, SLEEPTIME);
        }
    }
    
    return {
        init : function() {
            canvascontrol.setupCanvas();
            direction = UP;                             // richting van de slang begint omhoog
            startTimer();                               // start beweging van slang 
        },
        laad : function() {
            spelstand.laadStand();
        },
        laadspelstand : function() {
            var spel = spelstand.getSpelStand();
            console.log(spel);
            direction = spel.direction;
            canvascontrol.loadGame(spel.segments, spel.foods);            
            startTimer();                               // herstart beweging van slang in de juiste richting
        },
        bewaar : function() {
            spelstand.bewaarStand(canvascontrol.getSnake().segments, canvascontrol.getFood(), direction);
            stopTimer();
            moveresult.result = false;
        },
        stop : function() {
            stopTimer();
            
            // Verhoog het aantal verloren spellen indien er tijdens de uitvoer van het spel op stop wordt gedrukt
            if (moveresult.result) {
                score.updateScore(moveresult.code);
                score.printResult(moveresult.code);
                moveresult.result = false;
            }
            canvascontrol.resetCanvas();
        },
        setDirection : function(directionNew) {
            direction = directionNew;
        }, 
    };
}());


jQuery(document).on("loadGame", snakeapp.laadspelstand);

/***************************************************************************
 **                 Commando's voor de gebruiker                          **
 ***************************************************************************/
/**
  @function init() -> void
  @desc Haal eventueel bestaand voedsel en een bestaande slang weg, cre\"eer een slang, genereer voedsel, en teken alles
*/

/**
  @function stop() -> void
  @desc Laat slang en voedsel verdwijnen, en teken leeg veld
*/


/**
  @function move(direction) -> void
  @desc Beweeg slang in aangegeven richting
        tenzij slang uit canvas zou verdwijnen
  @param   {string} direction - de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/


