module.exports = function toReadable(number) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hun = "hundred";
    let result = "";
    let numString = "" + number; //переводим заданное число в строку,что бы проще было доставать значение единиц/десяток/сотен методом charAt()

    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        result = units[number];
        return result;
    }
    //двухзначные круглые числа(20,30,40,50,60,70,80,90)
    if (numString.length === 2 && Number(numString.charAt(1)) === 0) {
        result = `${tens[Number(numString.charAt(0))]}`;
        return result;
    }
    //для круглых трехзначных (100,200,300,400,500,600,700,800,900)
    if (
        numString.length === 3 &&
        Number(numString.charAt(1)) === 0 &&
        Number(numString.charAt(2)) === 0
    ) {
        result = `${units[Number(numString.charAt(0))]} ${hun}`;
        return result;
    }
    //для двухзначных не круглых чисел (25,37,87,92)
    if (numString.length === 2 && Number(numString.charAt(1)) != 0) {
        result = `${tens[Number(numString.charAt(0))]} ${
            units[Number(numString.charAt(1))]
        }`;
        return result;
    }
    //для трехзначных, имеющиx 1 десяток (110,513,818,915)
    if (numString.length === 3 && Number(numString.charAt(1)) === 1) {
        result = `${units[Number(numString.charAt(0))]} ${hun} ${
            units[Number(numString.slice(1))]
        }`;
        return result;
    }
    //для трехзначных не имеющиx десятков(101,305,909,508,306)
    if (numString.length === 3 && Number(numString.charAt(1)) === 0) {
        result = `${units[Number(numString.charAt(0))]} ${hun} ${
            units[Number(numString.charAt(2))]
        }`;
        return result;
    }
    //для трехзначных, имеющих от 2 десятков и единицы (123,256,489,738,999)
    if (
        numString.length === 3 &&
        Number(numString.charAt(1)) >= 2 &&
        Number(numString.charAt(2)) != 0
    ) {
        result = `${units[Number(numString.charAt(0))]} ${hun} ${
            tens[Number(numString.charAt(1))]
        } ${units[Number(numString.charAt(2))]}`;
        return result;
    }
    //для трехзначных имеющих от 2 десятков и без единиц(120,240,570,890,930)
    if (
        numString.length === 3 &&
        Number(numString.charAt(1)) >= 2 &&
        Number(numString.charAt(2)) === 0
    ) {
        result = `${units[Number(numString.charAt(0))]} ${hun} ${
            tens[Number(numString.charAt(1))]
        }`;
        return result;
    }
};
