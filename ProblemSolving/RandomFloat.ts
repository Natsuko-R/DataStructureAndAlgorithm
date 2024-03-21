// 生成-100到10000之间的随机的两位小数

function generateRandomNumber(min: number, max: number) {

    var randomNumber = Math.random();

    // 将随机小数乘以范围内的值
    var scaledNumber = randomNumber * (max - min) + min;

    // 使用toFixed(2)来限制小数点后两位
    return parseFloat(scaledNumber.toFixed(2));
}

var randomNum = generateRandomNumber(-100, 10000);
console.log(randomNum);
