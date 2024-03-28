//Code your solutions in this file
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

multiplesOfThree();