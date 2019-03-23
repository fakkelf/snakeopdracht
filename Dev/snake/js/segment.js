

/**
  @function createSegment(x,y) -> Element
  @desc Slangsegment creeren op een bepaalde plaats
  @param {number} x x-coordinaat middelpunt
  @param {number} y y-coordinaart middelpunt
  @return: {Element} met straal R en color SNAKE.COLORS.ELEMENT
*/
function createSegment(x, y) {
	 return new Element(R, x, y, SNAKE.COLORS.ELEMENT);
}