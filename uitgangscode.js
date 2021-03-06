const R        = 10,          // straal van een element
      STEP     = 2*R,         // stapgrootte
      WIDTH    = 360,         // breedte veld 
      HEIGHT   = 360,         // hoogte veld 
                              // er moet gelden: WIDTH = HEIGHT
      MAX      = WIDTH/STEP-1,// netto veldbreedte   
      LEFT     = "left",      // bewegingsrichtingen 
      RIGHT    = "right",
      UP       = "up",
      DOWN     = "down",

      NUMFOODS = 15,          // aantal voedselelementen       

      XMIN     = R,           // minimale x waarde 
      YMIN     = R,           // minimale y waarde 
      XMAX     = WIDTH - R,   // maximale x waarde 
      YMAX     = HEIGHT - R,  // maximale y waarde 

      SNAKE   = "DarkRed" ,   // kleur van een slangsegment
      FOOD    = "Olive",       // kleur van voedsel
	  HEAD    = "DarkOrange"   // kleur van de kop van de slang
	
var snake,
    foods = [];                                // voedsel voor de slang
	
$(document).ready(function() {
	$("#startSnake").click(init);  
	$("#stopSnake").click(stop);
});

/*************************************************************************************************
 **                                    Nieuwe code                                              **
 *************************************************************************************************/

 /***************************************************************************
 **                 Constructors                                          **
 ***************************************************************************/
 
 /***************************************************************************
 **                 Hulpfuncties                                          **
 ***************************************************************************/
 
 
 /*************************************************************************************************
 **                                    Gegeven code                                              **
 *************************************************************************************************/
/***************************************************************************
 **                 Commando's voor de gebruiker                          **
 ***************************************************************************/
/**
  @function init() -> void
  @desc Haal eventueel bestaand voedsel en een bestaande slang weg, cre\"eer een slang, genereer voedsel, en teken alles
*/
function init() {		
    //if (snake !== undefined || snake.length != 0) {
		snake = []
	//}	
    //if (foods !== undefined || foods.length != 0) {
	    foods = []
	//}
    createStartSnake()
	createFoods()
	draw()
	console.log("testing init")
	/* in te vullen */
}

/**
  @function stop() -> void
  @desc Laat slang en voedsel verdwijnen, en teken leeg veld
*/
function stop() {
	snake = []
	foods = []
	$("#mySnakeCanvas").clearCanvas();
}

/**
  @function move(direction) -> void
  @desc Beweeg slang in aangegeven richting
        tenzij slang uit canvas zou verdwijnen  
  @param   {string} direction de richting (een van de constanten UP, DOWN, LEFT of RIGHT)
*/
function move(direction) {
	if (snake.canMove(direction)) {
		snake.doMove(direction);
		draw();
	}
	else {
		console.log("snake cannot move " + direction);
	}
}

/**
  @function draw() -> void
  @desc Teken de slang en het voedsel
*/
function draw() {
	var canvas = $("#mySnakeCanvas").clearCanvas();
	for (i = 0; i < snake.segments.length; i++) {
	   drawElement (snake.segments[i], canvas);
    };
    for (i = 0; i < foods.length; i++) {
	   drawElement (foods[i], canvas);
		
	}
}
/***************************************************************************
 **                 Constructors                                          **
 ***************************************************************************/
/**
   @constructor Snake
   @param {[Element] segments een array met aaneengesloten slangsegmenten
                   Het laatste element van segments wordt de kop van de slang 
*/ 
function Snake(segments) {
	this.segments = [];
	this.segments = segments;
	}
/**
   @constructor Element
   @param radius straal
   @param {number} x x-coordinaat middelpunt
   @param {number} y y-coordinaat middelpunt
   @param {string} color kleur van het element
*/ 
function Element(radius, x, y, color) {
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.color = color;
  /**
   @function collidesWithOneOf() -> 
   @returns boolean 
*/
   this.collidesWithOneOf = function (elems) {
	found = false;
    var xx = this.x;
	var yy = this.y;
	//console.log (elems[0].x);
		
	  for (i = 0; i < elems.length; i++){
		if (elems[i].x === xx && elems[i].y === yy) {
	    
		console.log ("true");
		console.log (this.x);
		console.log (elems[i].x);
		console.log (this.y);
		console.log (elems[i].y);
		return true;
	    }
	
	
	
    return false;
   }
 
}
  
}
/***************************************************************************
 **                 Hulpfuncties                                          **
 ***************************************************************************/
 
/**
  @function createStartSnake() -> Snake
  @desc Slang creëren, bestaande uit  twee segmenten, 
        in het midden van het veld
  @return: slang volgens specificaties
*/
function createStartSnake() {
	var segments   = [createSegment(R + WIDTH/2, R + WIDTH/2), 
	                  createSegment(R + WIDTH/2, WIDTH/2 - R)];
    snake = new Snake(segments);

	}
/**
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE
*/
function createSegment(x, y) {
	return new Element(R, x, y, SNAKE);
}
/**
  @function createFood(x,y) -> Element
  @desc Voedselelement creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color FOOD
*/
function createFood(x, y) {
	return new Element(R, x, y, FOOD);
}
/**
  @function drawElement(element, canvas) -> void
  @desc Een element tekenen 
  @param {Element} element een Element object
  @param  {dom object} canvas het tekenveld
*/
 function drawElement(element, canvas) {

	canvas.drawArc({
		draggable : false,
		fillStyle : element.color,
		x : element.x,
		y : element.y,
		radius : element.radius
	});
}

/**
  @function getRandomInt(min: number, max: number) -> number
  @desc Creeren van random geheel getal in het interval [min, max] 
  @param {number} min een geheel getal als onderste grenswaarde
  @param {number} max een geheel getal als bovenste grenswaarde (max > min)
  @return {number} een random geheel getal x waarvoor geldt: min <= x <= max
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
  @function createFoods() -> array met food
  @desc [Element] array van random verdeelde voedselpartikelen
  @return [Element] array met food
*/
function createFoods() {   
   var  i,    
        food;
   i = 0; 
   //we gebruiken een while omdat we, om een arraymethode te gebruiken, eerst een nieuw array zouden moeten creëren (met NUMFOODS elementen)
   while (i < NUMFOODS ) {
     food = createFood(XMIN + getRandomInt(0, MAX)*STEP, YMIN + getRandomInt(0, MAX)*STEP);
     if (!food.collidesWithOneOf(snake.segments) && !food.collidesWithOneOf(foods) ) {
       foods.push(food);
       i++
     }
   }  
}

