// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

function flatten<T>(arr: (T | T[])[]): T[] {
    let newArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i] as T[]));
        } else {
            newArr.push(arr[i] as T)
        }
    }
    return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

console.log(flatten([1, [2, [3, 4], [[5]]]]));





// second solution :

function flatten_reduce(arr: any[]): any[] {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(flatten(val));
        } else {
            return acc.concat(val);
        }
    }, []);
}
