let arr = [1,2,3,4,6,7]
let n = arr.length

let missingNumber =0

for(let i=0;i<n;i++){
    if(arr[i] !== i+1){
        missingNumber += i+1
        break;
    }
   
}

if(missingNumber==0){
    console.log("no")
}
console.log(missingNumber)

