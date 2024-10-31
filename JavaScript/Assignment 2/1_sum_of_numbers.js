var prompt=require('prompt-sync')();
function sum(n){
    let s=0;
  for(let i=1;i<=n;i++){
    s+=i;
  }
  return s;
}
let n=prompt("Enter a number of range for sum--> ")
console.log("Sum of the range--> "+sum(n));