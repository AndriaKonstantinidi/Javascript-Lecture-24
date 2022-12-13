// let array = [17,3,19,45,89,55];
// let randNum = Math.round(Math.random()* 5)
// for(let i = 0; i < array.length; i++){
//     console.log(array[randNum])
// }

let evenNum = [];
let oddNum = [];

for(let i = 0; i < 20; i++){
    let userInput = Number(prompt("Enter a number 20 times"));
    if(userInput % 2 == 0){
        evenNum.push(userInput)
    }
    else{
        oddNum.push(userInput)
    }
}

for(let i = 0; 1 < evenNum.length; i++){
    for(let j = i + 1; j < evenNum.length; j++){
        if(evenNum[i] < evenNum[j]){
            tmp = evenNum[i]
            evenNum[i] = evenNum[j]
            evenNum[j] = tmp
        }
    }
}
console.log(evenNum)

for(let i = 0; 1 < oddNum.length; i++){
    for(let j = i + 1; j < oddNum.length; j++){
        if(oddNum[i] < oddNum[j]){
            tmp = oddNum[i]
            oddNum[i] = oddNum[j]
            oddNum[j] = tmp
        }
    }
}
console.log(oddNum)

