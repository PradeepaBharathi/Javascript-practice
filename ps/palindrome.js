function checkPalindrome(n){
    let str = n.toString().split("")
    let reverse =''
   for(let i=str.length-1;i>=0;i--){
        reverse+= str[i]
   }
   if(n==reverse){
    return 'yes'
   }
   else{
    return 'no'
   }
}

const num = 122
const palindrome = checkPalindrome(num)
console.log(palindrome)