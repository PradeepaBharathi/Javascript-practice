let input = [1,6,4,56,56,56,6,4,2]

let count={}
input.forEach((e)=>{
    count[e] ? count[e]++ : count[e]=1
})

console.log(count)



let values = Object.keys(count).map(Number).sort((a,b)=> b-a)
let small =[]
for(let i =0;i<values.length-1;i++){
   
 if(count[values[i]] <count[values[i+1]]){
    console.log(count[values[i]])
     small.push(values[i])
 }
}
console.log(small)