 /***************************************************************************
 **     Score object                                                     **
 ***************************************************************************/


var score = (function() {
    const URL = "http://naar.nergens.com";
    const SUCCESS = "Success";
    const FAILURE = "Failure, sumilating response";
    
    var score = {
        gewonnen : 0,
        verloren : 0
    };
    
    var setScore = function(responseresult) {
        var result = JSON.parse(responseresult);
        score.gewonnen = result.gewonnen;
        score.verloren = result.verloren;
    };
        
    var stand = function() {
        return "Stand: " + score.gewonnen + " (Gewonnen) " + score.verloren + " (Verloren)";
    };
    
    var simulateUpdateScore = function(code) {
        simscore = {
            gewonnen : 0,
            verloren : 0
        }
        if (code !== 0) {
            simscore.verloren = score.verloren + 1;
        } else {
            simscore.gewonnen = score.gewonnen + 1;
        }
        return JSON.stringify(simscore);
    }
    
    return {
        updateScore : function(code) {
            $.ajax(URL, {
                type: "POST",
                username: "ouname",
                password: "clientid",
                data: JSON.stringify(code)
            })
            .done(function(result) {
                console.log(SUCCESS);
            })
            .fail(function() {
                // By failure simulate response from server
                console.log(FAILURE);
                setScore(simulateUpdateScore(code));                
                console.log(stand());
            });
        },
        printResult(code) {
            switch (code) {
                case -1:    // Verloren, gestopt tijdens het spelen
                    console.log("Jammer maar geef het niet op, probeer het nog eens.");
                    break;
                case 0:     // Gewonnen 
                    console.log("Gewonnen!!");
                    break;
                case 10:    // Verloren snake eet zichzelf
                    console.log("Jammer maar verloren!!, probeer het nog eens.");
                    break;
                case 20:    // Verloren buiten het canvas
                    console.log("Jammer maar de slang kan niet verder in de huidige richting, probeer het nog eens.");
                    break;
            };
        }
    };
}());

