
function generateFibonacci(n){
    let f1 =0
    let f2 =1
    let series =[]
    series[0] = f1
    series[1] = f2
    let found = false

for(let i=2;series[i-1] < n;i++){
    let fn = series[i-2]+series[i-1]
    series.push(fn)
    if(series[i] == n){
       found = true
       break
    }
}
if(found){
    return "yes"
}
else{
    return "no"
}



}

let num =5
let fibonacciseries = generateFibonacci(num)
console.log(fibonacciseries)

