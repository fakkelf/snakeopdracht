 /***************************************************************************
 **     Score object                                                     **
 ***************************************************************************/


var score = (function() {
    var score = {
        aantalgewonnen : 0,
        aantalverloren : 0
    }
    var aantalgewonnen = 0;
    var aantalverloren = 0;
    
    return {
        gewonnen : function() {
            score.aantalgewonnen++;
        },
        verloren : function() {
            score.aantalverloren++;
        },
        getStand : function() {
            return (score);
        }
    };
}());

