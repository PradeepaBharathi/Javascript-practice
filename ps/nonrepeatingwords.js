let str ="pradeepabharathi"

let strArr = str.split("")
let count = {}
let nonrepeatingStr =''
strArr.forEach((e)=>{
    count[e] ? count[e]++ :count[e]=1
})

for (const e in count) {
    if(count[e]==1){
        nonrepeatingStr += e
    }
}
console.log(nonrepeatingStr)