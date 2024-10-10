function generateSeries(n){
    let start = 800
    let series =[]
    let increment =2

    while(start<=n){
        series.push(start)
        start += increment
        increment +=2
    }
    
  
   let values = series.map((val)=>{
     let digits =   val.toString().split("").map(Number)
        return digits.reduce((acc,curr) => parseInt(curr)+ acc,0)
   })
   console.log(values)

   let count =0
   for(let n of values){
    if(String(n).charAt(0)=='1'){
        count++
    }
   }
   console.log(count)
  
}

generateSeries(900)