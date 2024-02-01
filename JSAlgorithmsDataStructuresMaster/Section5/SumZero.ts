// ----------------- QUESTION ----------------- //

// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pairwhere the sum is 0. 
// Return an array that includes bothvalues that sum to zero or undefined if a pair does not exist

// ----------------- SOLUTION ----------------- //

function sumZero(arr: number[]): number[] | undefined {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }

    }
    return undefined;
}


// ----------------- A NAIVE SOLUTION ----------------- //

// time complexity of O(n^2)

// function sumZero(arr: number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             };
//         }
//     }
// }


// ----------------- EXAMPLES ----------------- //

// const result = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
// console.log(result);




