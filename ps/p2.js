

function factors(N){
    let factorCount = 0
    for(let i=2;i<N;i++){
        if(N%i==0){
            factorCount++
        }
        
    }
    return factorCount
}
let num = 19

let numberofFactors = factors(num)

if(numberofFactors == 0){
    console.log("prime")
}
else{
    console.log("not a prime")
}