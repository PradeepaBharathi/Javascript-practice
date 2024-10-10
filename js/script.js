// const mypromise = new Promise((res,rej)=>{
//     document.getElementById("resolve").addEventListener("click",()=>{
//         res("Button Clicked")
//     })
//     document.getElementById("reject").addEventListener("click",()=>{
//         res("Reject Button Clicked")
//     })
// })

// mypromise.then((message) => {
//     console.log(mypromise)
//     console.log(message);  // This will log "ButtonClicked" to the console
// }).catch((err)=>{
//     console.log(err)
// })

// async function myfunction(){
//     //rejection
//     // throw new error
//     // return 'pradee'
//     const val= await mypromise
//     return'pradee'
// }

// let res =  await myfunction()
// console.log(res);

// console.log("server1")

// setTimeout(()=>{
//     console.log("server2")
//     setInterval(()=>{
//         console.log("server2")
//     },1000)
    
//     console.log("server3")
// },1000)

// for(let i=0 ; i<3;i++){
//     setTimeout(()=>{
       
//         console.log(i)
       
//     },1000)
// }

// const obj={
//     prop:47,
//     Fun:function(){
//         setTimeout(()=>{
//             console.log(this.prop)
//         })
//     }
// }

// obj.Fun()


// let arr= ['pradee','sri','vedha']
// let currentIndex = 0;
// // let mname = document.getElementById("mname")
// // mname.addEventListener("click",()=>{
// //    for(let i=0;i<arr.length;i++){
// //     mname.textContent = arr[i]
// //    }
// // })
// for (let i = 0; i < arr.length; i++) {
//     let mname = document.getElementById("mname");
//     mname.addEventListener("click", (event) => {
//        mname.textContent = arr[currentIndex]
//        currentIndex = (currentIndex+1)%arr.length
//     });
// }

const data = ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
}

data()