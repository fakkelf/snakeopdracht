
 /***************************************************************************
 **                 Constanten                                            **
 ***************************************************************************/
 const elemA = new Element(10, 40, 50, "Blue");
 const elemB = new Element(10, 80, 60, "Red");
 const elemC = new Element(10, 100, 200, "Green");
 const elems = [];
 elems.push(elemA);
 elems.push(elemB);
 elems.push(elemC);

 /***************************************************************************
 **                 Chai                                                   **
 ***************************************************************************/
var assert = chai.assert;

describe("Tests voor element.js", function () {
    describe("Element construction", function() {
    
        it("When Element created check properties ", function () {
          assert.strictEqual(10, elemA.radius, "radius property not correct");
          assert.strictEqual(40, elemA.x, "x property not correct");
          assert.strictEqual(50, elemA.y, "y property not correct");
          assert.strictEqual("Blue", elemA.color, "color property not correct");
        });
    });
    
    
    describe("Functie getIndexNumber", function() {       
        const elemToCheck1 = new Element(10, 40, 50, "Blue")
        
        it("When in index return indexnumber", function () {
          assert.isAbove(10, elemToCheck1.getIndexNumber(elems), "An indexnumber should be returned");
        });
        
        const elemToCheck2 = new Element(10, 30, 50, "Blue")
        it("When not in index return -1", function () {
          assert.isAbove(10, elemToCheck2.getIndexNumber(elems), "A value of -1 should be returned");
        });
    });
    
    describe("Functie collidesWithOneOf", function() {       
        const elemToCheck1 = new Element(10, 40, 50, "Blue")
        
        it("When collides return true", function () {
          assert.isAbove(10, elemToCheck1.getIndexNumber(elems), "A value of true should be returned");
        });
        
        const elemToCheck2 = new Element(10, 30, 50, "Blue")
        it("When collides return false", function () {
          assert.isAbove(10, elemToCheck2.getIndexNumber(elems), "A value of false should be returned");
        });
    });
});  
