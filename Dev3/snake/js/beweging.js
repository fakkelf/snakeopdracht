 /***************************************************************************
 **                 Aansturing functies                                    **
 ***************************************************************************/

//met deze jQuery sturen we de slang aan
jQuery(document).keydown(function (e) {
  switch(e.which) {
  case 37: // left
    console.log ("left");
    direction = MOVE.LEFT;
	break;
  case 38: // up
    direction = MOVE.UP;
	break;
  case 39: //right
    direction = MOVE.RIGHT;
	break;
  case 40: //down
    direction = MOVE.DOWN;
	break;
  };
});