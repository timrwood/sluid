// Sluid
//
// (c) 2011 Tim Wood
// Sluid is freely distributable under the terms of the MIT license.
//
// Version 0.1.0


(function(window, undefined){
    var uid = 0,
        base62symbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        lastTimeStamp = 0;
    
    function toBase(number, base) {
        var output = "";
        while (number > 0) {
            output = base62symbols[(number - (base * number / base | 0))] + output;
            number = number / base | 0;
        }
        return output;
    }
    
    function Sluid(){
        var currentTimeSta
        if (lastTimeStamp != (lastTimeStamp = new Date().getTime())) {
            uid++;
        }
    }
    
    
}(window));
