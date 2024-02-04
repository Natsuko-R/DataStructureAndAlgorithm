// ----------------- QUESTION ----------------- //

// Write a function called averagePair. 
// Given a [sorted] array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// ----------------- SOLUTION ----------------- //

function averagePair(arr: number[], num: number): boolean {
    let start: number = 0;
    let end: number = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) return true;
        else if (avg < num) start++;
        else end--; // (avg > num)
    }
    return false;
}

// 指针 多退少补...

// ----------------- EXAMPLES ----------------- //

// const result1 = averagePair([1, 2, 3], 2.5) // true
// const result2 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// const result3 = averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// const result4 = averagePair([], 4) // false

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
