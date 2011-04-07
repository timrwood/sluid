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
    
    function toBase(number) {
        var output = '', 
            nextNumber;
        while (number > 0) {
            nextNumber = Math.floor(number / 62);
            output = base62symbols[(number - (62 * nextNumber))] + output;
            number = nextNumber;
        }
        return output || '0';
    }
    
    function leftZeroFill(input, targetLength) {
        while (input.length < targetLength) {
            input = '0' + input;
        }
        return input;
    }
    
    function sluid(zeroFill){
        var currentTimeStamp = new Date().getTime(),
            maxTimeStamp = zeroFill === 3 ? 230000 :
                zeroFill === 4 ? 14000000 :
                zeroFill === 5 ? 910000000 :
                zeroFill === 6 ? 56000000000 :
                3500000000000;
            zeroFill > 2 && zeroFill < 8 || (zeroFill = 7);
        
        if (lastTimeStamp === currentTimeStamp) {
            uid++;
        } else {
            uid = 0;
            lastTimeStamp = currentTimeStamp;
        }
        return leftZeroFill(toBase(currentTimeStamp % maxTimeStamp), zeroFill) + toBase(uid);
    }
    
    window.sluid = sluid;
    
}(window));
