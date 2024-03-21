// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str: string): boolean {
    // edge case
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    // recursive
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    // edge case and others
    return false;
}

// console.log(isPalindrome("afwfa"));


// second solution : using iteration
function isPalindrome_iteration(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome_iteration("afwfasa"));
