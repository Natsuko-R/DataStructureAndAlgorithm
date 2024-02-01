// ----------------- QUESTION ----------------- //

// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)


// ----------------- SOLUTION ----------------- //

function validAnagram(str1: string, str2: string): boolean {

    if (str1.length !== str2.length) return false;

    let frequencyCounter: { [key: string]: number } = {};

    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    };

    for (let char of str2) {
        if (!frequencyCounter[char]) {
            return false;
        }
        frequencyCounter[char] -= 1; // Udemy <JavaScript Algorithms and Data Structures Master class> : 30. Anagram Challenge Solution [5:10]  
    };

    return true;
}



// ----------------- EXAMPLES ----------------- //

const result1 = validAnagram('aaz', 'zza') // false
const result2 = validAnagram('', '') // true
const result3 = validAnagram('anagram', 'nagaram') // true
const result4 = validAnagram("rat", "car") // false) // false
const result5 = validAnagram('awesome', 'awesom') // false
const result6 = validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
const result7 = validAnagram('qwerty', 'qeywrt') // true
const result8 = validAnagram('texttwisttime', 'timetwisttext') // true

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);

