let arr =[34,198,66,198,90,372,22]



function largest(arr){

    let maxNum = -Infinity

for(let i=0;i<arr.length;i++){
    if(arr[i]>maxNum){
        maxNum = arr[i]
    }
}

return maxNum
}


console.log(largest(arr))