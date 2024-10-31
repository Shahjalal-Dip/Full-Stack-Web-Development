var prompt=require('prompt-sync')();
let num=prompt("Enter a Number: ")
if(num>0){
    console.log("Positive Number")
}else if(num<0){
    console.log("Negative Number") 
}else
   console.log("Number is Zero")