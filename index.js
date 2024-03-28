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

console.log(multiply(2, 4))