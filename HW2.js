//1
//1-1 => NaN
//1-2 => 122
//1-3 => 23
//1-4 => 4
//1-5 => true-false-false-false

//2
const triangle = (a,b,c) => {
    a < b + c && b < a + c && c < a + b ? console.log('yes') : console.log('no');;
}

triangle(3,4,5)

//3
const howManyNumber = (number) => {
    let i = 0
    while(number >= 1){
        number = number / 10
        i++
    }
    console.log(i);
}

howManyNumber(123)

//4
const commonBetweenTwoNumber = (num1,num2) => {
    let result = []
    for(let i = 0 ; i<Math.max(num1,num2)/2 ; i++){
        if(num1 % i === 0 && num2 %i === 0){
                result.push(i)
            }
    }
    console.log(result);
}

commonBetweenTwoNumber(18,54)