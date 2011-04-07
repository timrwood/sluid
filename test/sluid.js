$(function() {

    module("Date");
    
    var now = new Date().getTime(),
        def = [],
        minute = [],
        hour = [],
        day = [],
        month = [];
        
    while (now === new Date().getTime()) {
        def.push(sluid());
    }
    
    now = new Date().getTime()
    
    while (now === new Date().getTime()) {
        minute.push(sluid(3));
    }
    
    now = new Date().getTime()
    
    while (now === new Date().getTime()) {
        hour.push(sluid(4));
    }
    
    now = new Date().getTime()
    
    while (now === new Date().getTime()) {
        day.push(sluid(5));
    }
    
    now = new Date().getTime()
    
    while (now === new Date().getTime()) {
        month.push(sluid(6));
    }
    
    /*console.log(def);
    console.log(_.uniq(def));
    console.log(minute);
    console.log(hour);
    console.log(day);
    console.log(month);*/
    
    test("_.uniq()", 5, function() {
        deepEqual(minute, _.uniq(minute));
        deepEqual(hour, _.uniq(hour));
        deepEqual(day, _.uniq(day));
        deepEqual(month, _.uniq(month));
        deepEqual(def, _.uniq(def));
    });
    
    test("_.uniq()", 5, function() {
        equal(minute.length, _.uniq(minute).length);
        equal(hour.length, _.uniq(hour).length);
        equal(day.length, _.uniq(day).length);
        equal(month.length, _.uniq(month).length);
        equal(def.length, _.uniq(def).length);
    });
    /*
    var thou = [],
        tenthou = [];
    
    while (thou.length < 1000) {
        thou.push(sluid(3));
    }
    while (tenthou.length < 10000) {
        tenthou.push(sluid(3));
    }
    
    
    test("thou.length", 2, function() {
        equal(thou.length, _.uniq(thou).length);
        equal(tenthou.length, _.uniq(tenthou).length);
    });
    */
});