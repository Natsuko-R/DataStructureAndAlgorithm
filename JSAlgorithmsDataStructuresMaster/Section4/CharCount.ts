// ----------------- QUESTION ----------------- //

// Write a function which takes in a string and returns counts of each character in the string.  

// ----------------- QUESTION ----------------- //



// ----------------- SOLUTION ----------------- //

function isAlphaNumeric(char: string) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z
        return false;
    }
    return true;
}

function charCount(str: string) {

    var obj: { [key: string]: number } = {};

    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj; // right place ! not inside the for loop
}

console.log(charCount("gkkgggghjkgkk"));

// ----------------- SOLUTION ----------------- //







// ----------------- NOTE ----------------- //

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 4;
// console.log(
//   `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
//     index,
//   )}`,
// );
// Expected output: "Character code 113 is equal to q"

// ----------------- NOTE ----------------- //
