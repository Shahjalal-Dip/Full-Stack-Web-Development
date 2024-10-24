var prompt=require('prompt-sync')();
let num=prompt("Enter a Number: ")
if(num%2==0){
    console.log("Even Number")
}else
   console.log("Odd Number")