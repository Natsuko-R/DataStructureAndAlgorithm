// ----------------- QUESTION ----------------- //

// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)


// ----------------- SOLUTION ----------------- //

export interface Counter { [key: string]: number }

function sameFrequency(num1: number, num2: number): boolean {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1: Counter = {};
    let countNum2: Counter = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for (let i = 0; i < strNum1.length; i++) {
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}


// ----------------- EXAMPLES ----------------- //

// const result1 = sameFrequency(182, 281) // true
// const result2 = sameFrequency(34, 14) // false
// const result3 = sameFrequency(3589578, 5879385) // true
// const result4 = sameFrequency(22, 222) // false

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
