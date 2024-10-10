let str ="pradeepabharathi"
let strArr = str.split("")
let vowels =['a','e','i','o','u']
    let vowelCount =0
    let consonent =0
for(let i=0;i<strArr.length;i++){
let found = false
for(let j=0;j<vowels.length;j++){
    if(strArr[i] == vowels[j]){
        found = true
        vowelCount += 1
        break
    }
}   

if(!found){
    consonent+=1
}

}

console.log(vowelCount)
console.log(consonent)