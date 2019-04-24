 /***************************************************************************
 **     Score object                                                     **
 ***************************************************************************/


var spelstand = (function() {
    const URL = "http://naar.nergens.com";
    const SUCCESS = "Success";
    const SUCCESS_BEWAAR = "Sumilating success";
    const FAILURE = "Failure, sumilating success";
    
    var stand = {
        segments : [],
        foods : [],
        direction : ""
    };
    
    return {
        getSpelStand : function() {
            return stand;
        },
        bewaarStand : function(segments, foods, direction) {
            stand.segments = segments;
            stand.foods = foods;
            stand.direction = direction;
            $.ajax(URL + "/Bewaar", {
                type: "POST",
                username: "ouname",
                password: "clientid",
                data: JSON.stringify(stand)
            })
            .done(function(result) {
                console.log(SUCCESS);
            })
            .fail(function() {                
                console.log(SUCCESS_BEWAAR);
            });
        },
        laadStand : function() {
            $.ajax(URL + "/Laad", {
                type: "GET",
                username: "ouname",
                password: "clientid"
            })
            .done(function(responseresult) {
                var result = JSON.parse(responseresult);
                if (result.segments.size > 0) {                    
                    stand.segments = result.segments;
                    stand.foods = result.foods;
                    stand.direction = result.direction;
                }
            })
            .fail(function() {                
                console.log(FAILURE);
                jQuery(document).trigger(new jQuery.Event("loadGame"));
            });
        },
    };
}());

