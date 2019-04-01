jQuery(document).keydown(function (e) {
    switch (e.which) {
       case 37: // left
		 direction = "LEFT";
		 break;
	   case 38: // up
		  direction = "UP";
		  break;
	   case 39: // right
		  direction = "RIGHT";
		  break;
	   case 40: // down
		  direction = "DOWN";
		  break;
    };
});

		  