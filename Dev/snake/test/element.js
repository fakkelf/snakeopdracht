
 
 /***************************************************************************
 **                 Hulpfuncties                                           **
 ***************************************************************************/
 
 /***************************************************************************
 **                 Prototype                                              **
 ***************************************************************************/
Element.prototype.getIndexNumber = function(elems) {
   for (i = 0; i < elems.length; i++){
        if (elems[i].x === this.x && elems[i].y === this.y) {            
            return i;
        }
    } 
    return -1;
}

Element.prototype.collidesWithOneOf = function (elems) {
    if (elems.length === 0) {
        return false;
    }
    
    if (this.getIndexNumber(elems) > -1) {
        return true;
    }
    return false;
} 

Element.prototype.collidesWithOneOf_oud = function (elems) {
    if (elems.length === 0) {
        return false;
    }
            
    for (i = 0; i < elems.length; i++){
        if (elems[i].x === this.x && elems[i].y === this.y) {            
            return true;
        }
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
    
// ** constructor of Element object
function Element(radius, x, y, color) {
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.color = color;
}
