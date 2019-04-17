
/***************************************************************************
**                 Hulpfuncties                                           **
***************************************************************************/

/***************************************************************************
**                 Prototypefuncties                                      **

***************************************************************************/
/**
 * @function equalPos
 * @desc Controleert of de posities van twee element aan elkaar gelijk zijn.
 * De vergelijking gebeurt op basis van de x en y waarden van het element.
 *
 * @param {Element} elem
 *
 * @returns {boolean} True indien gelijk anders false.
*/
Element.prototype.equalPos = function (elem) {
    var x = this.x;
    var y = this.y;
    return elem.x === x && elem.y === y;
}
/**
 * @function getIndexNumber
 * @desc Controleert of een element onderdeel is van een lijst (array) van Elementen.
 *
 * @param {array} elems - Een lijst (array) van het objecttype Element.
 *
 * @returns {number} Indien onderdeel van lijst dan de positie in de lijst anders de waarde -1.
*/
Element.prototype.getIndexNumber = function (elems) {    
    var el1 = this;
    var index = -1;
    
    elems.forEach(function(elem, i) {
        if (elem.equalPos(el1)) {
            index = i;
        }
    });
    return index; 
};

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
    
    var el1 = this;
    return elems.some(function(elem){
        return elem.equalPos(el1);
    });
};

var equalPosa = function(el1, el2) {
    return el1.x === el2.x && el1.y === el2.y;
}

/***************************************************************************
 **                 Constructor                                            **
 ***************************************************************************/

/**
   @constructor Element
   @param radius straal
   @param {number} x - x-coordinaat middelpunt
   @param {number} y - y-coordinaat middelpunt
   @param {string} color kleur van het element
*/
function Element(radius, x, y, color) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = color;
}

