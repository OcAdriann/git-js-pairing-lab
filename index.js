//Answer to Q1
const fiveToOneHundred = () => {
    let i = 5
    for (i; i < 101; i++) {
        console.log(i);
    }
    return;
}

//fiveToOneHundred();

//Answer to Q2
const multiplesOfThree = () => {

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
    return;
}

//multiplesOfThree();

//answer to Q3
const multiplesOfThreeOrFive = () => {

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
    return;
}

//multiplesOfThreeOrFive();

//Answer to Q4
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
    return;
}

// untilNum(5)    //prints out numbers 1 through 5
// untilNum(9)    //prints out numbers 1 through 9
//untilNum(42)   //prints out numbers 1 through 42

//Answer to Q5
const multiply = (num1, num2) => {
    return num1 * num2
}

//console.log(multiply(2, 4))

//Answer to Q6
const add = (num1, num2) => {
    let sum = num1 + num2;

    if (num1 === num2) {
        sum *= 3;
    }

    return sum;
}

/*console.log(add(2, 4))     //returns 6
add(10, -5)   //returns 5
add(3, 7.5)   //returns 10.5
console.log(add(5, 5))     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
console.log(add(6, 6))     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that
*/

//Answer to Q7

const isNegative = (num) => {
    if (num > 0) {
        return false
    } else if (num < 0) {
        return true
    } else {
        return "Error"
    }
}

// console.log(isNegative(3))
// console.log(isNegative(-5))

//Answer to Q8

const triangleArea = (base, height) => {
    return (base * height) / 2
}

/*console.log(triangleArea(5, 7))    //returns 17.5
console.log(triangleArea(6, 8))    //returns 24
*/

//Answer to question 9

const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    } else {
        return false
    }
}

console.log(betweenTwentyAndFourty(20))
console.log(betweenTwentyAndFourty(21))








