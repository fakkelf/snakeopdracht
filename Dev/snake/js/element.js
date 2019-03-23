 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/
 
 /***************************************************************************
 **                 Prototypefuncties                                      **
 ***************************************************************************/
 
 /**
 * @function getIndexNumber
 * @desc Controleert of een element onderdeel is van een lijst (array) van Elementen. 
 * De vergelijking gebeurt op basis van de x en y waarden van het element.
 *
 * @param {array} elems - Een lijst (array) van het objecttype Element.
 *
 * @returns {number} Indien onderdeel van lijst dan de positie in de lijst anders de waarde -1.
 */
Element.prototype.getIndexNumber = function(elems) {
   for (i = 0; i < elems.length; i++){
        if (elems[i].x === this.x && elems[i].y === this.y) {            
            return i;
        }
    } 
    return -1;
}

 /**
 * @function collidesWithOneOf
 * @desc Controleert of een element onderdeel is van een lijst (array) van Elementen. 
 * Voor de vergelijking wordt gebruikt gemaakt van de prototype functie getIndexNumber.
 *
 * @param {array} elems - Een lijst (array) van het objecttype Element.
 *
 * @returns {boolean} Indien onderdeel van lijst true anders false.
 */
Element.prototype.collidesWithOneOf = function (elems) {
    if (elems.length === 0) {
        return false;
    }
    
    if (this.getIndexNumber(elems) > -1) {
        return true;
    }
    return false;
} 
 
 /***************************************************************************
 **                 Constructor                                            **
 ***************************************************************************/
    
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
}
