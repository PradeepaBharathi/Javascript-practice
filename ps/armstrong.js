function checkArmstrong(n){
    let str = n.toString()
    let power = str.length
    let sum =0
    for(let i=0;i<str.length;i++){
        sum = sum + parseInt(str[i]**power)
    }
    if(sum == n){
        return "armStrong"
    }
    else{
        return "not armStrong"
    }
}


let num = 9474
let armStrong = checkArmstrong(num)
console.log(armStrong)