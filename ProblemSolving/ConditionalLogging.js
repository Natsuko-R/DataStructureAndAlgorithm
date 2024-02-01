"use strict";

// function output(txt) {
//     console.log(txt);
// };
var output = console.log.bind(console);

// function printIt(shouldPrintIt) {
//     return function (msg) {
//         if (shouldPrintIt(msg)) {
//             output(msg);
//         } else {
//             console.error('illegal msg');

//         }
//     };
// };
var printIt = when(output);

function isShortEnough(str) {
    return str.length <= 5;
};

function not(fn) {
    return function negated(...args) {
        return !fn(args);
    };
}

// function isLongEnough(str) {
//     return !isShortEnough(str);  // Brilliant
// };
var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIt(isShortEnough)(msg1);
when(output)(isShortEnough)(msg1);

// printIt(isLongEnough)(msg1);
// printIt(isShortEnough)(msg2);
// printIt(isLongEnough)(msg2);

function when(fn) {
    return function (predicate) {
        return function (...args) {
            if (predicate(...args)) return fn(...args)
        };
    };
};
