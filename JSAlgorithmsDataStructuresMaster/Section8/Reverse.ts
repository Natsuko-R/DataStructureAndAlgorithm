// Write a recursive function which accepts a string and returns a new string in reverse.

function reverse(str: string): string {
    if (str.length <= 1) return str;
    // reverse(str.slice(1) + str[0]); // RangeError: Maximum call stack size exceeded
    return reverse(str.slice(1)) + str[0];
}

// reverse('one') // 'eno'
// ne + o 
// e + n 
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('awesome'));