// ----------------- QUESTION ----------------- //

// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)


// ----------------- SOLUTION - 1 : Multiple Pointers ----------------- //

// function areThereDuplicates(...args: any): boolean {

//     args.sort((a: any, b: any) => {
//         if (a > b) return -1;
//         if (a < b) return 1;
//         return 0;
//     });

//     let start: number = 0;
//     let next: number = 1;

//     while (next < args.length) {
//         if (args[start] === args[next]) return true;
//         start++;
//         next++;
//     }
//     return false;
// }

// ----------------- SOLUTION - 2 ----------------- //

function areThereDuplicates(...args: any[]): boolean {
    let seen: { [key: string]: boolean } = {};

    for (let value of args) {
        if (seen[value]) {
            return true;
        }
        seen[value] = true;
    }

    return false;
}


// ----------------- EXAMPLES ----------------- //

console.log(areThereDuplicates(1, 2, 2));// true
console.log(areThereDuplicates(1, 2, 3));// false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true



// ----------------- MEMO ----------------- //
// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments