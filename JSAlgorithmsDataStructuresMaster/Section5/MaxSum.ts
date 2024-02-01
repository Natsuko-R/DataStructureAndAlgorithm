// ----------------- QUESTION ----------------- //

// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array

// ----------------- SOLUTION ----------------- //

function maxSubarraySum(arr: number[], num: number): number | null {
    if (arr.length < num) return null; // edge case
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    };
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    };
    return maxSum;
}

// ----------------- A NAIVE SOLUTION ----------------- //

// function maxSubarraySum(arr: number[], num: number): number | null {
//     if (arr.length < num) return null;
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         };
//         max = Math.max(temp, max); // don't put it in the for loop
//     };
//     return max;
// }

// ----------------- EXAMPLES ----------------- //

const resultt = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(resultt);

