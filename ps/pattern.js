let input = 5

function printInvertedTriangle(n){
    for(let i=n;i>=1;i--){
        let string =''
        for(let j=1;j<=i;j++){
            string +="*"
        }
        console.log(string)
    }

   
}

printInvertedTriangle(input)