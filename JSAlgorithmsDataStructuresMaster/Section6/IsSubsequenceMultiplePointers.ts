// ----------------- QUESTION ----------------- //

// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// ----------------- SOLUTION - 1 : Iterative ----------------- //

// function isSubsequence(str1: string, str2: string): boolean {
//     // Edge case: If the first string is empty, it is always a subsequence.
//     if (!str1) return true;

//     let i: number = 0; // Pointer for str1
//     let j: number = 0; // Pointer for str2

//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;

//         // Check if all characters in str1 have been matched, indicating it is a subsequence.
//         if (i === str1.length) return true;

//         // Move to the next character in str2.
//         j++;
//     }

//     // If the loop completes without finding a full match, str1 is not a subsequence of str2.
//     return false;
// }

// ----------------- SOLUTION - 2 : Recursive but not O(1) Space ----------------- //

function isSubsequence(str1: string, str2: string): boolean {

    if (str1.length === 0) return true;
    if (str2.length === 0) return false;

    if (str1[0] === str2[0]) {
        return isSubsequence(str1.slice(1), str2.slice(1))
    } else {
        return isSubsequence(str1, str2.slice(1))
    }

}

// 首先，它检查如果 str1 的长度为 0，那么 str1 必定是 str2 的子序列，返回 true。
// 接着，如果 str2 的长度为 0，但 str1 的长度不为 0，那么 str1 无法成为 str2 的子序列，返回 false。

// 然后，它检查 str2 的第一个字符是否等于 str1 的第一个字符，如果相等，则递归调用 isSubsequence 函数去比较剩余的部分。
// 如果不相等，则递归调用 isSubsequence 函数去比较 str1 和去掉 str2 的第一个字符的部分。

// 这个函数虽然简洁，但并非最优解，因为它的空间复杂度不是 O(1)，而是取决于递归调用的深度，即为 O(n)，其中 n 为 str2 的长度。

// ----------------- EXAMPLES ----------------- //

// const result1 = isSubsequence('hello', 'hello world'); // true
// const result2 = isSubsequence('sing', 'sting'); // true
// const result3 = isSubsequence('abc', 'abracadabra'); // true
// const result4 = isSubsequence('abc', 'acb'); // false (order matters)
// const result5 = isSubsequence('', 'acb'); // false (order matters)

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);



