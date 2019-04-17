 /***************************************************************************
 **                 Variabelen                                             **
 ***************************************************************************/
var snake,
    foods = [];                                // voedsel voor de slang

$(document).ready(function () {
    $("#startSnake").click(init);
    $("#stopSnake").click(stop);
});

/***************************************************************************
 **                 Commando's voor de gebruiker                          **
 ***************************************************************************/
/**
  @function init() -> void
  @desc Haal eventueel bestaand voedsel en een bestaande slang weg, cre\"eer een slang, genereer voedsel, en teken alles
*/
function init() {
    snake = [];
    foods = [];

    setupCanvas();
}

/**
  @function stop() -> void
  @desc Laat slang en voedsel verdwijnen, en teken leeg veld
*/
function stop() {
    snake = [];
    foods = [];

    resetCanvas();
}


/**
  @function move(direction) -> void
  @desc Beweeg slang in aangegeven richting
        tenzij slang uit canvas zou verdwijnen
  @param   {string} direction - de richting (een van de constanten MOVE.UP, MOVE.DOWN, MOVE.LEFT of MOVE.RIGHT)
*/
function move(direction) {
    if (snake.canMove(direction)) {
        snake.doMove(direction);
        draw();
    } else {
        console.log("snake cannot move " + direction);
    }
}