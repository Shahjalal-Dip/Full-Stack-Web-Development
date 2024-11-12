let anyNegative = array => {
   let comment=array.some(element => parseInt(element)<0);
   return comment;
}
var prompt=require(`prompt-sync`)();
let array;
let userInput=prompt("Enter the element of an array--> ");
array=userInput.split(" ");
console.log("Negative Number inside: "+anyNegative(array));