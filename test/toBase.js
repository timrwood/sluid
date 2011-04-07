$(function() {

    module("toBase");
    
    var base62symbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    function toBase(number, base) {
        var output = '';
        while (number > 0) {
            output = base62symbols[(number - (base * Math.floor(number / base)))] + output;
            number = Math.floor(number / base);
        }
        return output || '0';
    }
    
    
    test("toBase", 12, function() {
        equal(toBase(0, 62), '0');
        equal(toBase(1, 62), '1');
        equal(toBase(10, 62), 'a');
        equal(toBase(61, 62), 'Z');
        equal(toBase(62, 62), '10');
        equal(toBase(63, 62), '11');
        equal(toBase(62 * 62 - 2, 62), 'ZY');
        equal(toBase(2584, 62), 'FG');
        equal(toBase(555555, 62), '2kwz');
        equal(toBase(1959485, 62), '8dKB');
        equal(toBase(195948557, 62), 'dgbaB');
        equal(toBase(1302190251190, 62), 'mVoJArA');
    });
    
});