"use strict";

// function strBuilder(str) {
//     return function nextStr(v) {
//         if (typeof v == "string") {  
//             str += v;
//             return nextStr; // Return the function for further chaining
//         }
//         return str;
//     };
// };

function strBuilder(str) {
    return function nextStr(v) {
        if (typeof v == "string") {
            return strBuilder(str + v);
        }
        return str;
    };
};

var hello = strBuilder("Hello, ");
// var kyle = hello("Kyle");
// var susan = hello("Susan");
// var question = kyle("?")();
// var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");


