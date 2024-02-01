// 1~100までの数字を順番に出力します。しかし、数字が3の倍数のときは「Fizz」、5の倍数のときは「Buzz」、3かつ5の倍数のときは「FizzBuzz」を数字の代わりに出力してください。
// output
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz  …..


// answer 1 
for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    // 空字符串 "" 的布尔值是 false
    console.log(output || i);
}



// answer 2 
function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let output = "";

        if (i % 3 === 0) {
            output += "Fizz";
        }

        if (i % 5 === 0) {
            output += "Buzz";
        }

        result.push(output || i);
    }

    return result;
}

const fizzBuzzResult = fizzBuzz(100);
console.log(fizzBuzzResult.join(" ")); // 通过 join 方法将数组转换为字符串并输出
