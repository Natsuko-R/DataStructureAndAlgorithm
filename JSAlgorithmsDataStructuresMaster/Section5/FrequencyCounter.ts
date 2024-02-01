// ----------------- QUESTION ----------------- //

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the secondarray.
// The frequency of values must be the same.



// ----------------- SOLUTION ----------------- //

function same(arr1: any[], arr2: any[]): boolean {

    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1: { [key: string]: number } = {};
    let frequencyCounter2: { [key: string]: number } = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    };
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    };

    for (let key in frequencyCounter1) {
        // check key
        if (!(Number(key) ** 2 in frequencyCounter2)) return false;

        // check value: in this case, check count
        if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) return false;
    };
    return true;
}


// ----------------- A NAIVE SOLUTION ----------------- //

// O(n*2)

// function same(arr1: any[], arr2: any[]): boolean {

//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         let currentIndex = arr2.indexOf(arr1[i] ** 2);
//         if (currentIndex === -1) return false;
//         arr2.slice(currentIndex, 1);
//     }

//     return true;

// }

// ----------------- EXAMPLES ----------------- //

console.log(same([1, 2, 3, 2, 7], [9, 1, 4, 4, 49]));
// console.log(same([1, 2, 2], [9, 1, 4, 4]));


