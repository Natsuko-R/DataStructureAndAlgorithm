// ----------------- QUESTION ----------------- //

// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.



// ----------------- SOLUTION - 1 ----------------- //

function countUniqueValues(arr: number[]): number {
    if (arr.length === 0) return 0;
    let j = 0;
    for (let i = 1; i < arr.length; i++) { // better than  let i = 0
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i]; // comment out ? NO, avoid duplicated comparison
        }
    };
    return j + 1;
}


// ----------------- SOLUTION - 2 ----------------- //

// function countUniqueValues(arr: number[]): number {
//     if (arr.length === 0) return 0;
//     let uniqueCount = 1;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i - 1]) {
//             uniqueCount++;
//         }
//     };
//     return uniqueCount;
// }

// ----------------- EXAMPLES ----------------- //

// const result = countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// const result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
// const result = countUniqueValues([]) // 0
// const result = countUniqueValues([-2, -1, -1, 0, 1]) // 4

// console.log(result);




