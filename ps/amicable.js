function amicable(num1,num2){
    let ami1 =[]
    let ami2 =[]
    let sum1 =0
    let sum2 =0
    for(let i=1;i<=num1;i++){
        if(num1%i == 0){
            ami1.push(i)
        }

    }
    for(let i=1;i<=num2;i++){
        if(num2%i == 0){
            ami2.push(i)
        }
    }

   sum1 = ami1.reduce((acc,curr)=> acc+curr,0)
   sum2 = ami2.reduce((acc,curr)=> acc+curr,0)
 if(sum1 == sum2){
    return "amicable"
 }
 else{
    return "non amicable"
 }
    
    
}


let num1 = 220
let num2 = 284

let answer = amicable(num1,num2)
console.log(answer)