let input = 5
function printTriangle(n){
    for(let i=1;i<=n;i++){
        let number=""
        for(let j=1;j<=i;j++){
            number+=j
        }
        console.log(number)
    }
}

printTriangle(input)