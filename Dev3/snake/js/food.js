 /***************************************************************************
 **     functies voor het creeeren van de elementen van food               **
 ***************************************************************************/

/**
  @function createFood(x,y) -> Element
  @desc Voedselelement creeren op een bepaalde plaats
  @param {number} x - x-coordinaat middelpunt
  @param {number} y - y-coordinaart middelpunt
  @return: {Element} met straal R en color FOOD.COLOR
*/
function createFood(x, y) {
    return new Element(properties.getRadius(), x, y, properties.getFood().COLOR);
}