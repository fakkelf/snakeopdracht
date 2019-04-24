
$(document).ready(function () {
    $("#startSnake").click(snakeapp.init);
    $("#laadStand").click(snakeapp.laad);    
    $("#bewaarStand").click(snakeapp.bewaar);
    $("#stopSnake").click(snakeapp.stop);
});

jQuery(document).keydown(function (e) {    
    switch (e.which) {
        case 37: // left
            snakeapp.setDirection(canvascontrol.getMove().LEFT);
            break;
        case 38: // up
            snakeapp.setDirection(canvascontrol.getMove().UP);
            break;
        case 39: // right
            snakeapp.setDirection(canvascontrol.getMove().RIGHT);
            break;
        case 40: // down
            snakeapp.setDirection(canvascontrol.getMove().DOWN);
            break;
    };
});

		  