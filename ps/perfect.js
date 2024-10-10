 function findPerfect(n){
    let divisors =[]
    let sumPerfect =0
    for(let i=1;i<n;i++){
        if(n%i == 0){
            divisors.push(i)
        }
    }
    sumPerfect = divisors.reduce((acc,curr)=>acc+curr,0)
    if(num == sumPerfect){
        return "perfect"
    }
    else{
        return "not perfect"
    }


 }


let num = 28
let perfect = findPerfect(num)
console.log(perfect)