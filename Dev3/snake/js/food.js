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
var food =  (function() {
    const COLOR = "Olive";                                 // kleur van voedsel 
    
    return {
        createFood : function(x, y) {
            return new Element(canvas.getElRadius(), x, y, COLOR);
        }
    };
}());
