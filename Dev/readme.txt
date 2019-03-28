De verdeling van de functionaliteit bestaat uit de volgende onderdelen:
Volgende functies.
canvasutil.js bestaat uit de volgende functies:
moveSegment(segment , direction)
isValidMove(x,y)
createStartSnake()
createStartSnake_Alt()
createFoods()
setupCanvas()


draw.js:
drawElement()
draw()

element.js:
Element.prototype.getIndexNumber(elems)
Element.prototype.collidesWithOneOf(elems)
Element(radius, x, y, color)     constructor 

food.js:
createFood(x,y)

properties.js:
Alle global variabelen

segment.js:
newY(y, direction)
newX(x, direction)
createSegment(x, y)
createHead(x, y)

snake.js:
newHead(head, direction)
prototype.getHead()
prototype.canMove()
prototype.doMove()
move(direction)
Snake(segments)     constructor

snakeapp.js:
init()
stop()
move(direction)

snakeutil.js:
getRandomInt(min, max)


In de directory /dev/snake/test/snakeapp_test.js test, staat aan all Mochai tests.


