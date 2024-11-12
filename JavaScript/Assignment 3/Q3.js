let squareAndSum=(array)=>{
    let sum=0;
    array.map((element)=>{
      sum+=(parseInt(element)*parseInt(element));
    });
    return sum;
}
var prompt=require(`prompt-sync`)();
let array;
let userInput=prompt("Enter the element of an array--> ");
array=userInput.split(" ");
console.log("Sum of all elements after square: "+squareAndSum(array));