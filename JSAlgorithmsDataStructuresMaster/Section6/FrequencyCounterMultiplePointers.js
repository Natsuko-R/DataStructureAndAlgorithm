// ----------------- QUESTION ----------------- //

// Implement a function called, areThereDuplicatesJS which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)


// ----------------- SOLUTION - 1 : Frequency Counter ----------------- //

// function areThereDuplicatesJS() {
//     let collection = {};
//     for (let arg in arguments) {
//         collection[arguments[arg]] = (collection[arguments[arg]] || 0) + 1;
//     }
//     for (let key in collection) {
//         if (collection[key] > 1) return true;
//     }
//     return false;
// }


// ----------------- SOLUTION - 2 ----------------- //

function areThereDuplicatesJS() {
    return new Set(arguments).size !== arguments.length;
}

// ----------------- EXAMPLES ----------------- //

console.log(areThereDuplicatesJS(1, 2, 3));// false
console.log(areThereDuplicatesJS('a', 'b', 'c', 'a')); // true

// ----------------- MEMO ----------------- //
// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments


// new Set(arguments)：通过将 arguments 对象传递给 Set 构造函数，创建一个包含所有参数的 Set 对象。
// 由于 Set 只允许唯一的值，重复的参数会被自动去重。
// Set(arguments).size：获取 Set 对象的大小，即不重复参数的数量。
