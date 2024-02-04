// ----------------- QUESTION ----------------- //

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string 
// and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

// ----------------- SOLUTION ----------------- //

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

// 使用了滑动窗口的思想，通过维护一个起始索引（start）、当前字符索引（i）、以及一个哈希表（seen）来追踪已经出现过的字符的最新索引。

// 在遍历字符串的过程中，如果遇到已经在哈希表中存在的字符，就更新起始索引start为该字符的下一个位置，以确保子串中没有重复字符。
// 然后，计算当前子串的长度（i - start + 1）并与之前记录的最长子串长度比较，保留较大值。

// 整个过程中，哈希表用于存储字符及其最新出现的索引，以便在后续遍历中能够快速定位已经出现的字符。


// ----------------- EXAMPLES ----------------- //

const result1 = findLongestSubstring('') // 0
const result2 = findLongestSubstring('rithmschool') // 7
const result3 = findLongestSubstring('thisisawesome') // 6
const result4 = findLongestSubstring('thecatinthehat') // 7
const result5 = findLongestSubstring('bbbbbb') // 1
const result6 = findLongestSubstring('longestsubstring') // 8
const result7 = findLongestSubstring('thisishowwedoit') // 6

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
